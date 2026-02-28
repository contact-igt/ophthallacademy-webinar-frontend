import { useState, useEffect } from 'react';
import { Calendar, Clock, Video, Ticket, CheckCircle2, ChevronRight, Loader2 } from 'lucide-react';
import PaymentSuccess from './PaymentSuccess';
import PaymentFailure from './PaymentFailure';
import { WebinarService } from '../services/webinarService';

const details = [
    { icon: <Calendar size={18} />, label: 'Date', value: 'Mar 14, 2026' },
    { icon: <Clock size={18} />, label: 'Time', value: '3:00 PM – 5:00 PM IST' },
    { icon: <Video size={18} />, label: 'Mode', value: 'Live Zoom Session' },
    { icon: <Ticket size={18} className="text-[#f47920]" />, label: 'Fee', value: <span className="text-[#f47920] font-bold">₹99 Only</span> },
];

const INITIAL = { name: '', email: '', phone: '' };
const INITIAL_ERRORS = { name: '', email: '', phone: '' };

/* ─── Validators ─── */
const validate = (fields) => {
    const errors = { name: '', email: '', phone: '' };
    if (!fields.name.trim()) {
        errors.name = 'Full name is required.';
    } else if (fields.name.trim().length < 3) {
        errors.name = 'Name must be at least 3 characters.';
    }
    if (!fields.email.trim()) {
        errors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
        errors.email = 'Enter a valid email address.';
    }
    if (!fields.phone.trim()) {
        errors.phone = 'WhatsApp number is required.';
    } else if (!/^[6-9]\d{9}$/.test(fields.phone.replace(/\D/g, ''))) {
        errors.phone = 'Enter a valid 10-digit Indian mobile number.';
    }
    return errors;
};

const hasErrors = (errors) => Object.values(errors).some(Boolean);


/* ─────────────────────────────── */
const HeroSection = () => {
    const [fields, setFields] = useState(INITIAL);
    const [errors, setErrors] = useState(INITIAL_ERRORS);
    const [loading, setLoading] = useState(false);

    // Consolidated States
    const [payment, setPayment] = useState({ status: null, data: null }); // status: 'success' | 'failure' | null
    const [tracking, setTracking] = useState({ ip: '', utms: {} });

    // Capture Tracking Data (UTMs & IP)
    useEffect(() => {
        if (import.meta.env.SSR) return;

        const params = new URLSearchParams(window.location.search);
        const utms = {
            utm_source: params.get('utm_source') || undefined,
            utm_medium: params.get('utm_medium') || undefined,
            utm_campaign: params.get('utm_campaign') || undefined,
            utm_term: params.get('utm_term') || undefined,
            utm_content: params.get('utm_content') || undefined,
        };

        setTracking(prev => ({ ...prev, utms }));

        fetch('https://api.ipify.org?format=json')
            .then(res => res.json())
            .then(data => setTracking(prev => ({ ...prev, ip: data.ip })))
            .catch(() => { });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFields(p => ({ ...p, [name]: value }));
        if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate(fields);
        if (hasErrors(errs)) return setErrors(errs);

        setLoading(true);

        try {
            if (!window.Razorpay) throw new Error('Payment gateway is loading. Please try again.');

            const mobile = fields.phone.replace(/\D/g, '');
            const payload = {
                ...fields,
                mobile,
                programm_date: '2026-03-14',
                ip_address: tracking.ip || undefined,
                ...tracking.utms
            };

            // 1. Create Order
            const orderData = await WebinarService.createOrder(payload);
            const rzpKey = orderData.key_id || import.meta.env.VITE_RAZORPAY_KEY_ID;

            if (!orderData.order_id || !rzpKey) throw new Error('Payment initialization failed.');

            // 2. Open Razorpay
            const options = {
                key: rzpKey,
                amount: orderData.amount,
                currency: orderData.currency || 'INR',
                name: 'Ophthall Academy',
                description: 'Beyond Refraction — 12-Step Optometry Career Webinar',
                image: '/ophthall-logo.png',
                order_id: orderData.order_id,
                prefill: { name: fields.name, email: fields.email, contact: mobile },
                theme: { color: '#0c2b4d' },
                handler: async (response) => {
                    setLoading(true);
                    try {
                        const regPayload = {
                            ...payload,
                            amount: orderData.amount / 100,
                            payment_status: 'paid',
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                            captured: true
                        };

                        await WebinarService.registerUser(regPayload);

                        setPayment({
                            status: 'success',
                            data: { ...fields, paymentId: response.razorpay_payment_id }
                        });
                    } catch (err) {
                        console.error('Registration API Error (Payment was successful):', err);
                        setPayment({ status: 'success', data: { ...fields, paymentId: response.razorpay_payment_id } });
                    } finally {
                        setLoading(false);
                    }
                },
                modal: { ondismiss: () => setLoading(false) },
            };

            new window.Razorpay(options).open();

        } catch (error) {
            setPayment({ status: 'failure', data: { name: fields.name, error: error.message } });
            setLoading(false);
        }
    };

    const handleRetry = () => {
        setPayment({ status: null, data: null });
        setLoading(false);
    };

    if (payment.status === 'success') {
        return (
            <PaymentSuccess
                name={payment.data.name}
                email={payment.data.email}
                paymentId={payment.data.paymentId}
                transactionId={payment.data.paymentId}
            />
        );
    }

    if (payment.status === 'failure') {
        return <PaymentFailure name={payment.data?.name} onRetry={handleRetry} />;
    }

    /* ─── Main Hero ─── */
    return (
        <section className="relative w-full overflow-hidden bg-[#0c2b4d]">
            {/* Background gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0c2b4d] via-[#0a2540] to-[#002f42]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_0%,_rgba(0,174,239,0.12),_transparent_60%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_100%,_rgba(0,47,66,0.5),_transparent_50%)]"></div>

            <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10 py-16 lg:py-20 flex flex-col lg:flex-row items-start lg:items-center gap-14 lg:gap-16">

                {/* ── Left Content ── */}
                <div className="flex-1 min-w-0">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-medium tracking-wider uppercase px-4 py-1.5 rounded-full mb-7">
                        <span className="w-1.5 h-1.5 bg-[#00AEEF] rounded-full animate-pulse"></span>
                        Live Webinar · Mar 2026
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-white leading-[1.12] tracking-tight mb-4">
                        Beyond Refraction —
                        <br />
                        <span className="text-[#00AEEF]">The 12-Step Blueprint</span>
                    </h1>
                    <p className="text-lg text-white/70 font-medium mb-8 max-w-[480px] leading-relaxed">
                        A practical guide to a profitable optometry career for practising optometrists, faculties, students and fresh graduates.
                    </p>

                    <div className="w-10 h-0.5 bg-[#f47920] mb-8 rounded-full"></div>

                    {/* Detail pills */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                        {details.map((d, i) => (
                            <div key={i} className="flex items-center gap-3.5 bg-white/[0.06] border border-white/[0.1] rounded-xl px-4 py-3.5">
                                <span className="text-[#00AEEF] shrink-0">{d.icon}</span>
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-0.5">{d.label}</p>
                                    <p className="text-sm font-semibold text-white">{d.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-start gap-3 text-white/60">
                        <CheckCircle2 size={16} className="text-[#00AEEF] shrink-0 mt-0.5" />
                        <p className="text-sm leading-relaxed">
                            Less than the cost of a textbook — but could transform how you approach your first OPD.
                        </p>
                    </div>
                </div>

                {/* ── Right: Registration Card ── */}
                <div id="register" className="w-full lg:w-[400px] shrink-0">
                    <div className="bg-white rounded-2xl shadow-2xl shadow-black/30 overflow-hidden">

                        {/* Card header */}
                        <div className="bg-gradient-to-r from-[#0c2b4d] to-[#002f42] px-7 py-5">
                            <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-1">Limited Seats Available</p>
                            <h2 className="text-xl font-bold text-white">Reserve Your Spot</h2>
                        </div>

                        {/* Card body */}
                        <div className="px-7 py-6">
                            <form className="space-y-4" onSubmit={handleSubmit} noValidate>

                                {/* Full Name */}
                                <Field
                                    label="Full Name"
                                    name="name"
                                    type="text"
                                    placeholder="Dr. Firstname Lastname"
                                    value={fields.name}
                                    error={errors.name}
                                    onChange={handleChange}
                                />

                                {/* Email */}
                                <Field
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={fields.email}
                                    error={errors.email}
                                    onChange={handleChange}
                                />

                                {/* Phone */}
                                <Field
                                    label="WhatsApp Number"
                                    name="phone"
                                    type="tel"
                                    placeholder="9XXXXXXXXX"
                                    value={fields.phone}
                                    error={errors.phone}
                                    onChange={handleChange}
                                />

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full flex items-center justify-center gap-2 bg-[#f47920] hover:bg-[#e06710] disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-lg transition-all mt-2 shadow-md shadow-orange-300/30"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 size={16} className="animate-spin" />
                                            Opening Payment...
                                        </>
                                    ) : (
                                        <>
                                            Pay ₹99 & Confirm Seat
                                            <ChevronRight size={16} />
                                        </>
                                    )}
                                </button>
                            </form>

                            <div className="mt-5 pt-4 border-t border-slate-100 text-center">
                                <p className="text-xs text-slate-500">
                                    One-time fee: <span className="text-xl font-black text-[#f47920] ml-1 mr-1">₹99</span> · Secured by Razorpay 🔒
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

/* ─── Reusable input field ─── */
const Field = ({ label, name, type, placeholder, value, error, onChange }) => (
    <div>
        <label className="block text-xs font-semibold text-[#0c2b4d] uppercase tracking-wider mb-1.5">
            {label} <span className="text-red-400">*</span>
        </label>
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`w-full border rounded-lg px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all bg-slate-50 focus:bg-white
                ${error
                    ? 'border-red-400 focus:border-red-400 focus:ring-red-200'
                    : 'border-slate-200 focus:border-[#0c2b4d] focus:ring-[#0c2b4d]/10'
                }`}
        />
        {error && <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">{error}</p>}
    </div>
);

export default HeroSection;
