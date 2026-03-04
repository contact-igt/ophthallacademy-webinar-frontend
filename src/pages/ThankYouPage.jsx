import { useEffect, useState } from 'react';
import {
    CheckCircle2, Calendar, Clock, Video, Mail,
    ChevronRight, Clipboard, ClipboardCheck,
    ArrowLeft, Sparkles, Shield
} from 'lucide-react';
import logo from '../assets/ophthall-logo.png';

/* ─── Reusable Detail Row (mirrors PaymentSuccess.jsx pattern) ─── */
const DetailRow = ({ label, value, copyable, onCopy, highlight, copied }) => (
    <div className="flex items-center justify-between gap-3 py-3 border-b border-slate-100 last:border-0">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 shrink-0">
            {label}
        </span>
        <div className="flex items-center gap-2 min-w-0">
            <span className={`text-sm font-medium truncate ${highlight ? 'text-emerald-600 font-semibold' : 'text-slate-700'}`}>
                {value}
            </span>
            {copyable && (
                <button
                    type="button"
                    onClick={onCopy}
                    className="p-1 text-slate-300 hover:text-slate-600 transition-colors shrink-0"
                    title="Copy"
                >
                    {copied
                        ? <ClipboardCheck size={13} className="text-emerald-500" />
                        : <Clipboard size={13} />
                    }
                </button>
            )}
        </div>
    </div>
);

/* ─── Next Step row card ─── */
const NextStep = ({ icon, accentClass, title, desc }) => (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:bg-slate-100/70 transition-all duration-200">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${accentClass}`}>
            {icon}
        </div>
        <div>
            <p className="text-sm font-semibold text-[#0c2b4d] mb-0.5">{title}</p>
            <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
        </div>
    </div>
);

/* ─── Event detail pill ─── */
const EventPill = ({ Icon, label, value }) => (
    <div className="flex items-center gap-2.5">
        <Icon size={13} className="text-[#00AEEF] shrink-0" />
        <div>
            <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 leading-none mb-0.5">{label}</p>
            <p className="text-xs font-semibold text-slate-700">{value}</p>
        </div>
    </div>
);

/* ─────────────────────────────────────────── */
const ThankYouPage = () => {
    const [copied, setCopied] = useState(false);
    const [visible, setVisible] = useState(false);
    const [successData, setSuccessData] = useState({ name: '', email: '', paymentId: '' });

    /* Fade-in on mount + read sessionStorage */
    useEffect(() => {
        const raw = sessionStorage.getItem('webinar_success');
        if (raw) {
            try { setSuccessData(JSON.parse(raw)); } catch (_) { }
            sessionStorage.removeItem('webinar_success');
        }
        const t = setTimeout(() => setVisible(true), 60);
        return () => clearTimeout(t);
    }, []);

    const { name, email, paymentId } = successData;

    const copyPaymentId = () => {
        if (!paymentId) return;
        navigator.clipboard.writeText(paymentId).catch(() => { });
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <div className="min-h-screen bg-[#f1f5f9] flex flex-col">

            {/* ── Thin branded top stripe ── */}
            <div className="h-1 w-full bg-gradient-to-r from-[#0c2b4d] via-[#00AEEF] to-[#f47920]" />

            {/* ── Minimal Header ── */}
            <header className="w-full bg-white border-b border-slate-100 shadow-[0_1px_8px_rgba(0,0,0,0.05)]">
                <div className="max-w-[960px] mx-auto px-6 h-14 flex items-center justify-between">
                    <a href="/" className="flex items-center">
                        <img src={logo} alt="Ophthall Academy" className="h-9 w-auto object-contain" />
                    </a>
                    <a
                        href="/"
                        className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-[#0c2b4d] transition-colors"
                    >
                        <ArrowLeft size={13} />
                        Back to Home
                    </a>
                </div>
            </header>

            {/* ── Main ── */}
            <main className="flex-1 flex items-start justify-center px-4 py-12">
                <div
                    className="w-full max-w-lg transition-all duration-700"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(24px)',
                    }}
                >

                    {/* ══════════════════════════════════════
                        CARD
                    ══════════════════════════════════════ */}
                    <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/80 overflow-hidden">

                        {/* ── ENHANCED celebration header ── */}
                        <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0c2b4d 0%, #0a3d2e 60%, #0c3d20 100%)' }}>

                            {/* Deep ambient glows */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div style={{ position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)', width: '320px', height: '220px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(52,211,153,0.22) 0%, transparent 70%)' }} />
                                <div style={{ position: 'absolute', bottom: '0', right: '-10%', width: '200px', height: '180px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(0,174,239,0.12) 0%, transparent 70%)' }} />
                                <div style={{ position: 'absolute', bottom: '0', left: '-5%', width: '160px', height: '140px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(244,121,32,0.10) 0%, transparent 70%)' }} />
                            </div>

                            {/* Scattered confetti dots */}
                            {[
                                { top: '12%', left: '8%', size: 7, color: '#34d399', delay: '0s', dur: '3.1s' },
                                { top: '22%', left: '18%', size: 5, color: '#f47920', delay: '0.4s', dur: '2.7s' },
                                { top: '8%', left: '75%', size: 8, color: '#00AEEF', delay: '0.2s', dur: '3.4s' },
                                { top: '30%', left: '85%', size: 5, color: '#34d399', delay: '0.7s', dur: '2.5s' },
                                { top: '60%', left: '6%', size: 6, color: '#fbbf24', delay: '0.5s', dur: '3.0s' },
                                { top: '65%', left: '88%', size: 5, color: '#f47920', delay: '0.3s', dur: '2.8s' },
                                { top: '78%', left: '22%', size: 4, color: '#00AEEF', delay: '0.9s', dur: '3.3s' },
                                { top: '75%', left: '70%', size: 6, color: '#34d399', delay: '0.1s', dur: '2.6s' },
                            ].map((d, i) => (
                                <div key={i} style={{
                                    position: 'absolute', top: d.top, left: d.left,
                                    width: d.size, height: d.size, borderRadius: '50%',
                                    background: d.color, opacity: 0.55,
                                    animation: `ping ${d.dur} ${d.delay} cubic-bezier(0,0,0.2,1) infinite`,
                                }} />
                            ))}

                            {/* Emoji bursts — scattered, not centred */}
                            <span style={{ position: 'absolute', top: '10%', left: '10%', fontSize: '18px', opacity: 0.7, transform: 'rotate(-15deg)', animation: 'bounce 2s 0.2s infinite' }}>🎉</span>
                            <span style={{ position: 'absolute', top: '14%', right: '11%', fontSize: '16px', opacity: 0.65, transform: 'rotate(12deg)', animation: 'bounce 2.3s 0.5s infinite' }}>✨</span>
                            <span style={{ position: 'absolute', bottom: '20%', left: '7%', fontSize: '15px', opacity: 0.55, transform: 'rotate(-8deg)', animation: 'bounce 2.6s 0.1s infinite' }}>🌟</span>
                            <span style={{ position: 'absolute', bottom: '18%', right: '8%', fontSize: '17px', opacity: 0.6, transform: 'rotate(20deg)', animation: 'bounce 2.1s 0.7s infinite' }}>🎊</span>

                            {/* Layered seal rings */}
                            <div className="relative z-10 flex flex-col items-center pt-9 pb-3 px-8 text-center">
                                <div className="relative flex items-center justify-center mb-5">
                                    {/* Outer slow-spin ring */}
                                    <div style={{
                                        position: 'absolute', width: 96, height: 96, borderRadius: '50%',
                                        border: '1.5px dashed rgba(52,211,153,0.35)',
                                        animation: 'spin 12s linear infinite',
                                    }} />
                                    {/* Mid steady ring */}
                                    <div style={{
                                        position: 'absolute', width: 78, height: 78, borderRadius: '50%',
                                        border: '1.5px solid rgba(52,211,153,0.20)',
                                    }} />
                                    {/* Pulse glow ring */}
                                    <div style={{
                                        position: 'absolute', width: 66, height: 66, borderRadius: '50%',
                                        background: 'rgba(52,211,153,0.15)',
                                        animation: 'ping 2s cubic-bezier(0,0,0.2,1) infinite',
                                    }} />
                                    {/* Solid filled circle */}
                                    <div style={{
                                        width: 58, height: 58, borderRadius: '50%', position: 'relative', zIndex: 2,
                                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                        boxShadow: '0 0 0 4px rgba(52,211,153,0.25), 0 8px 24px rgba(16,185,129,0.45)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <CheckCircle2 size={28} color="#fff" strokeWidth={2.5} />
                                    </div>
                                </div>

                                {/* Pill badge */}
                                <div style={{
                                    display: 'inline-flex', alignItems: 'center', gap: 6,
                                    background: 'rgba(52,211,153,0.18)', border: '1px solid rgba(52,211,153,0.3)',
                                    color: '#6ee7b7', fontSize: 10, fontWeight: 700,
                                    letterSpacing: '0.13em', textTransform: 'uppercase',
                                    padding: '4px 12px', borderRadius: 99, marginBottom: 10,
                                }}>
                                    <Sparkles size={10} />
                                    Payment Confirmed
                                </div>

                                {/* Headline */}
                                <h1 style={{ fontFamily: 'Sora, sans-serif', fontSize: 26, fontWeight: 800, color: '#ffffff', lineHeight: 1.2, marginBottom: 6, letterSpacing: '-0.02em' }}>
                                    {name
                                        ? <><span style={{ color: '#6ee7b7' }}>{name.split(' ')[0]},</span> you're officially in! 🎉</>
                                        : <>You're Officially In! 🎉</>
                                    }
                                </h1>
                                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13.5, lineHeight: 1.6, maxWidth: 320, marginBottom: 0 }}>
                                    Your seat for <span style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>Beyond Refraction</span> is locked in.<br />
                                    See you on <span style={{ color: '#6ee7b7', fontWeight: 600 }}>March 14, 2026</span>. 👋
                                </p>

                                {/* Amount badge strip */}
                                <div style={{
                                    display: 'flex', alignItems: 'center', gap: 16,
                                    marginTop: 18, marginBottom: 4,
                                    background: 'rgba(255,255,255,0.07)',
                                    border: '1px solid rgba(255,255,255,0.12)',
                                    borderRadius: 12, padding: '10px 20px',
                                }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 2 }}>Amount Paid</p>
                                        <p style={{ fontSize: 18, fontWeight: 800, color: '#f47920', lineHeight: 1 }}>₹99</p>
                                    </div>
                                    <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.12)' }} />
                                    <div style={{ textAlign: 'center' }}>
                                        <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 2 }}>Status</p>
                                        <p style={{ fontSize: 13, fontWeight: 700, color: '#6ee7b7', lineHeight: 1 }}>✓ Confirmed</p>
                                    </div>
                                    <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.12)' }} />
                                    <div style={{ textAlign: 'center' }}>
                                        <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 2 }}>Mode</p>
                                        <p style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.8)', lineHeight: 1 }}>🔴 Live</p>
                                    </div>
                                </div>
                            </div>

                            {/* Organic wavy bottom edge */}
                            <div style={{ lineHeight: 0 }}>
                                <svg viewBox="0 0 500 28" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 28 }}>
                                    <path d="M0,0 C80,28 170,0 250,16 C330,32 420,4 500,20 L500,28 L0,28 Z" fill="#ffffff" />
                                </svg>
                            </div>
                        </div>

                        {/* ── Card body ── */}
                        <div className="px-8 py-7 flex flex-col gap-5">

                            {/* Event info strip (mirrors PaymentSuccess `bg-[#f0f7ff]` box) */}
                            <div className="bg-[#f0f7ff] border border-blue-100 rounded-xl px-5 py-4">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                                    You're registered for
                                </p>
                                <p className="font-bold text-[#0c2b4d] text-base leading-snug mb-3">
                                    Beyond Refraction — The 12-Step Blueprint
                                </p>
                                <div className="flex flex-wrap gap-x-6 gap-y-2.5">
                                    <EventPill Icon={Calendar} label="Date" value="March 14, 2026" />
                                    <EventPill Icon={Clock} label="Time" value="3:00 – 5:00 PM IST" />
                                    <EventPill Icon={Video} label="Mode" value="Live on Zoom" />
                                </div>
                            </div>

                            {/* Registration detail rows (mirrors PaymentSuccess DetailRow pattern) */}
                            <div className="flex flex-col">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                                    Registration Summary
                                </p>
                                <DetailRow label="Name" value={name || '—'} />
                                <DetailRow label="Email" value={email || '—'} />
                                <DetailRow label="Amount Paid" value="₹99" />
                                <DetailRow label="Status" value="Confirmed ✓" highlight />
                                {paymentId && (
                                    <DetailRow
                                        label="Payment ID"
                                        value={paymentId}
                                        copyable
                                        copied={copied}
                                        onCopy={copyPaymentId}
                                    />
                                )}
                            </div>

                            {/* Email confirmation note (mirrors PaymentSuccess amber box) */}
                            <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-sm text-amber-800 flex items-start gap-2.5">
                                <span className="text-base leading-none mt-0.5">📬</span>
                                <p className="leading-relaxed">
                                    <strong>Check your email</strong> — the Zoom link and event details
                                    will be sent to{' '}
                                    <span className="font-semibold">{email || 'your email address'}</span>{' '}
                                    before March 14. Check spam if you don't see it.
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-slate-100" />

                            {/* What happens next */}
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">
                                    What Happens Next
                                </p>
                                <div className="space-y-2.5">
                                    <NextStep
                                        icon={<Mail size={16} className="text-[#00AEEF]" />}
                                        accentClass="bg-[#00AEEF]/10"
                                        title="Confirmation Email"
                                        desc={`Your Zoom link will arrive at ${email || 'your inbox'} — keep an eye out!`}
                                    />

                                    <NextStep
                                        icon={<Calendar size={16} className="text-[#f47920]" />}
                                        accentClass="bg-[#f47920]/10"
                                        title="Block Your Calendar"
                                        desc="March 14, 2026 · 3:00 PM IST — don't let anything overlap this session."
                                    />
                                </div>
                            </div>

                            {/* CTA button */}
                            <div className="pt-1">
                                <a
                                    href="/"
                                    className="w-full flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-[#0c2b4d] text-slate-600 hover:text-[#0c2b4d] font-semibold py-3.5 rounded-xl transition-colors duration-200 text-sm"
                                >
                                    Back to Home
                                    <ChevronRight size={14} />
                                </a>
                            </div>

                            {/* Footer branding (mirrors PaymentSuccess footer strip) */}
                            <div className="pt-1 border-t border-slate-100 flex items-center justify-between">
                                <img src={logo} alt="Ophthall Academy" className="h-8 w-auto object-contain" />
                                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                                    <Shield size={12} className="text-slate-300" />
                                    Secured by Razorpay
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Below-card note */}
                    <p className="text-center text-xs text-slate-400 mt-5">
                        Need help? Email us at{' '}
                        <a
                            href="mailto:admissions@ophthall.in"
                            className="text-[#0c2b4d] font-medium hover:underline"
                        >
                            admissions@ophthall.in
                        </a>
                    </p>
                </div>
            </main>

            {/* ── Footer ── */}
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

export default ThankYouPage;
