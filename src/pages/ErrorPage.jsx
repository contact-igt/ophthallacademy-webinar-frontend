import { useEffect, useState } from 'react';
import {
    XCircle, RefreshCw, Phone, ArrowLeft,
    Wifi, CreditCard, Clock, ShieldAlert, AlertTriangle
} from 'lucide-react';
import logo from '../assets/ophthall-logo.png';

/* ─── Numbered step row ─── */
const Step = ({ index, text }) => (
    <div className="flex items-start gap-3 text-sm text-slate-600">
        <span className="w-5 h-5 rounded-full bg-[#0c2b4d]/10 text-[#0c2b4d] text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
            {index}
        </span>
        {text}
    </div>
);

/* ─── Reason pill ─── */
const ReasonPill = ({ icon: Icon, label }) => (
    <div className="flex items-center gap-2 bg-red-50 border border-red-100 rounded-lg px-3 py-2.5 text-xs text-red-600 font-medium">
        <Icon size={13} className="shrink-0 text-red-400" />
        {label}
    </div>
);

/* ─────────────────────────── */
const ErrorPage = () => {
    const [visible, setVisible] = useState(false);
    const [errorData, setErrorData] = useState({ name: '', error: '' });

    useEffect(() => {
        const raw = sessionStorage.getItem('webinar_error');
        if (raw) {
            try { setErrorData(JSON.parse(raw)); } catch (_) { }
            sessionStorage.removeItem('webinar_error');
        }
        const t = setTimeout(() => setVisible(true), 60);
        return () => clearTimeout(t);
    }, []);

    const { name, error } = errorData;

    return (
        <div className="min-h-screen bg-[#f8fafc] flex flex-col">

            {/* Top brand stripe — red tinted */}
            <div className="h-1 w-full bg-gradient-to-r from-[#0c2b4d] via-red-500 to-rose-600" />

            {/* Minimal header */}
            <header className="w-full bg-white border-b border-slate-100 shadow-[0_1px_8px_rgba(0,0,0,0.05)]">
                <div className="max-w-[960px] mx-auto px-6 h-14 flex items-center justify-between">
                    <a href="/" className="flex items-center">
                        <img src={logo} alt="Ophthall Academy" className="h-9 w-auto object-contain" />
                    </a>
                    <a href="/" className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-[#0c2b4d] transition-colors">
                        <ArrowLeft size={13} />
                        Back to Home
                    </a>
                </div>
            </header>

            {/* Main */}
            <main className="flex-1 flex items-start justify-center px-4 py-12">
                <div
                    className="w-full max-w-lg transition-all duration-700"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(24px)',
                    }}
                >
                    {/* ══════ CARD ══════ */}
                    <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/80 overflow-hidden">

                        {/* ─── Enhanced dark-red header ─── */}
                        <div
                            className="relative overflow-hidden"
                            style={{ background: 'linear-gradient(135deg, #1a0a0a 0%, #450a0a 45%, #7f1d1d 100%)' }}
                        >
                            {/* Ambient glows */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div style={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: '300px', height: '200px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(239,68,68,0.25) 0%, transparent 70%)' }} />
                                <div style={{ position: 'absolute', bottom: '0', right: '-8%', width: '180px', height: '160px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(244,63,94,0.15) 0%, transparent 70%)' }} />
                                <div style={{ position: 'absolute', top: '20%', left: '-5%', width: '140px', height: '120px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(220,38,38,0.12) 0%, transparent 70%)' }} />
                            </div>

                            {/* Scattered static dots */}
                            {[
                                { top: '10%', left: '8%', size: 6, color: '#f87171', opacity: 0.5 },
                                { top: '20%', left: '16%', size: 4, color: '#fca5a5', opacity: 0.4 },
                                { top: '8%', left: '72%', size: 7, color: '#ef4444', opacity: 0.45 },
                                { top: '28%', left: '84%', size: 4, color: '#fca5a5', opacity: 0.35 },
                                { top: '62%', left: '5%', size: 5, color: '#f87171', opacity: 0.4 },
                                { top: '68%', left: '88%', size: 5, color: '#ef4444', opacity: 0.4 },
                                { top: '80%', left: '20%', size: 4, color: '#fca5a5', opacity: 0.35 },
                                { top: '76%', left: '68%', size: 5, color: '#f87171', opacity: 0.45 },
                            ].map((d, i) => (
                                <div key={i} style={{
                                    position: 'absolute', top: d.top, left: d.left,
                                    width: d.size, height: d.size, borderRadius: '50%',
                                    background: d.color, opacity: d.opacity,
                                    animation: `ping ${2.5 + i * 0.15}s ${i * 0.1}s cubic-bezier(0,0,0.2,1) infinite`,
                                }} />
                            ))}

                            {/* Emoji accents */}
                            <span style={{ position: 'absolute', top: '8%', left: '9%', fontSize: 16, opacity: 0.55, transform: 'rotate(-12deg)', animation: 'bounce 2.2s 0.1s infinite' }}>⚠️</span>
                            <span style={{ position: 'absolute', top: '12%', right: '10%', fontSize: 14, opacity: 0.5, transform: 'rotate(10deg)', animation: 'bounce 2.5s 0.4s infinite' }}>❌</span>
                            <span style={{ position: 'absolute', bottom: '22%', left: '7%', fontSize: 13, opacity: 0.45, transform: 'rotate(-6deg)', animation: 'bounce 2.8s 0.2s infinite' }}>🔒</span>

                            {/* Seal rings + icon */}
                            <div className="relative z-10 flex flex-col items-center pt-9 pb-3 px-8 text-center">
                                <div className="relative flex items-center justify-center mb-5">
                                    {/* Outer slow-spin dashed ring */}
                                    <div style={{
                                        position: 'absolute', width: 96, height: 96, borderRadius: '50%',
                                        border: '1.5px dashed rgba(239,68,68,0.35)',
                                        animation: 'spin 14s linear infinite',
                                    }} />
                                    {/* Mid steady ring */}
                                    <div style={{
                                        position: 'absolute', width: 78, height: 78, borderRadius: '50%',
                                        border: '1.5px solid rgba(239,68,68,0.2)',
                                    }} />
                                    {/* Pulse glow */}
                                    <div style={{
                                        position: 'absolute', width: 66, height: 66, borderRadius: '50%',
                                        background: 'rgba(239,68,68,0.15)',
                                        animation: 'ping 2.2s cubic-bezier(0,0,0.2,1) infinite',
                                    }} />
                                    {/* Filled circle */}
                                    <div style={{
                                        width: 58, height: 58, borderRadius: '50%', position: 'relative', zIndex: 2,
                                        background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                                        boxShadow: '0 0 0 4px rgba(239,68,68,0.25), 0 8px 24px rgba(220,38,38,0.5)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <XCircle size={28} color="#fff" strokeWidth={2.2} />
                                    </div>
                                </div>

                                {/* Badge */}
                                <div style={{
                                    display: 'inline-flex', alignItems: 'center', gap: 6,
                                    background: 'rgba(239,68,68,0.18)', border: '1px solid rgba(239,68,68,0.3)',
                                    color: '#fca5a5', fontSize: 10, fontWeight: 700,
                                    letterSpacing: '0.13em', textTransform: 'uppercase',
                                    padding: '4px 12px', borderRadius: 99, marginBottom: 10,
                                }}>
                                    <ShieldAlert size={10} />
                                    Payment Failed
                                </div>

                                {/* Headline */}
                                <h1 style={{ fontFamily: 'Sora, sans-serif', fontSize: 24, fontWeight: 800, color: '#ffffff', lineHeight: 1.2, marginBottom: 6, letterSpacing: '-0.02em' }}>
                                    {name
                                        ? <><span style={{ color: '#fca5a5' }}>{name.split(' ')[0]},</span> your payment didn't go through</>
                                        : <>Your payment didn't go through</>
                                    }
                                </h1>
                                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.65, maxWidth: 300 }}>
                                    Don't worry —{' '}
                                    <span style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>no amount was deducted</span>{' '}
                                    from your account. You can try again safely.
                                </p>

                                {/* Quick status strip */}
                                <div style={{
                                    display: 'flex', alignItems: 'center', gap: 16,
                                    marginTop: 18, marginBottom: 4,
                                    background: 'rgba(255,255,255,0.06)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: 12, padding: '10px 20px',
                                }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 2 }}>Status</p>
                                        <p style={{ fontSize: 13, fontWeight: 700, color: '#fca5a5', lineHeight: 1 }}>✗ Failed</p>
                                    </div>
                                    <div style={{ width: 1, height: 30, background: 'rgba(255,255,255,0.1)' }} />
                                    <div style={{ textAlign: 'center' }}>
                                        <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 2 }}>Charge</p>
                                        <p style={{ fontSize: 13, fontWeight: 700, color: '#86efac', lineHeight: 1 }}>₹0 Deducted</p>
                                    </div>
                                    <div style={{ width: 1, height: 30, background: 'rgba(255,255,255,0.1)' }} />
                                    <div style={{ textAlign: 'center' }}>
                                        <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 2 }}>Safe to</p>
                                        <p style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.8)', lineHeight: 1 }}>🔄 Retry</p>
                                    </div>
                                </div>
                            </div>

                            {/* Wavy bottom edge */}
                            <div style={{ lineHeight: 0 }}>
                                <svg viewBox="0 0 500 28" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 28 }}>
                                    <path d="M0,0 C80,28 170,0 250,16 C330,32 420,4 500,20 L500,28 L0,28 Z" fill="#ffffff" />
                                </svg>
                            </div>
                        </div>

                        {/* ─── Card body ─── */}
                        <div className="px-8 py-6 flex flex-col gap-5">

                            {/* Error message if available */}
                            {error && (
                                <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3 flex items-start gap-2.5">
                                    <AlertTriangle size={14} className="text-red-400 shrink-0 mt-0.5" />
                                    <p className="text-xs text-red-600 leading-relaxed">
                                        <span className="font-semibold">Error: </span>{error}
                                    </p>
                                </div>
                            )}

                            {/* Common reasons */}
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                                    Common Reasons
                                </p>
                                <div className="grid grid-cols-2 gap-2">
                                    <ReasonPill icon={Wifi} label="Network issue" />
                                    <ReasonPill icon={CreditCard} label="Card / UPI declined" />
                                    <ReasonPill icon={Clock} label="Session timeout" />
                                    <ReasonPill icon={ShieldAlert} label="Bank blocked" />
                                </div>
                            </div>

                            {/* What to do */}
                            <div className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 flex flex-col gap-3">
                                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                                    What to do next
                                </p>
                                {[
                                    'Check your internet connection and try again',
                                    'Make sure your card / UPI has sufficient balance',
                                    'Try a different payment method (UPI, Net Banking, Card)',
                                    'Contact your bank if the issue persists',
                                ].map((text, i) => (
                                    <Step key={i} index={i + 1} text={text} />
                                ))}
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col gap-3">
                                <a
                                    href="/"
                                    className="w-full flex items-center justify-center gap-2 bg-[#f47920] hover:bg-[#e06710] active:scale-[0.98] text-white font-semibold py-3.5 rounded-xl transition-all shadow-md shadow-orange-300/30"
                                >
                                    <RefreshCw size={16} />
                                    Try Again
                                </a>
                                <a
                                    href="mailto:admissions@ophthall.in"
                                    className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-[#0c2b4d] text-slate-600 hover:text-[#0c2b4d] font-medium py-3 rounded-xl transition-all text-sm"
                                >
                                    <Phone size={14} />
                                    Contact Support
                                </a>
                            </div>

                            {/* Footer branding */}
                            <div className="pt-1 border-t border-slate-100 flex items-center justify-between">
                                <img src={logo} alt="Ophthall Academy" className="h-8 w-auto object-contain" />
                                <p className="text-xs text-slate-400">Secured by Razorpay</p>
                            </div>
                        </div>
                    </div>

                    {/* Below-card help */}
                    <p className="text-center text-xs text-slate-400 mt-5">
                        Still facing issues? Write to us at{' '}
                        <a href="mailto:admissions@ophthall.in" className="text-[#0c2b4d] font-medium hover:underline">
                            admissions@ophthall.in
                        </a>
                    </p>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-slate-100 py-4">
                <div className="max-w-[960px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-1.5 text-xs text-slate-400">
                    <p>© {new Date().getFullYear()} Ophthall Academy of Vision. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ErrorPage;
