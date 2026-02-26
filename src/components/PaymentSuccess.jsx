import { CheckCircle2, Clipboard, Download, Calendar, Clock } from 'lucide-react';
import logo from '../assets/ophthall-logo.png';

const PaymentSuccess = ({ name, email, transactionId, paymentId }) => {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).catch(() => { });
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4 py-16">
            <div className="w-full max-w-lg">

                {/* Card */}
                <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/80 overflow-hidden">

                    {/* Green top bar */}
                    <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 px-8 py-7 text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                            <CheckCircle2 size={36} className="text-white" strokeWidth={2} />
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-1">Payment Successful!</h1>
                        <p className="text-white/80 text-sm">Your seat has been reserved 🎉</p>
                    </div>

                    {/* Body */}
                    <div className="px-8 py-7 flex flex-col gap-5">

                        {/* Event info strip */}
                        <div className="bg-[#f0f7ff] border border-blue-100 rounded-xl px-5 py-4 flex flex-col gap-2">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">You're registered for</p>
                            <p className="font-bold text-[#0c2b4d] text-base leading-snug">
                                Beyond Refraction — The 12-Step Blueprint
                            </p>
                            <div className="flex flex-wrap gap-4 mt-1">
                                <span className="flex items-center gap-1.5 text-xs text-slate-500">
                                    <Calendar size={12} className="text-[#00AEEF]" /> May 30, 2026
                                </span>
                                <span className="flex items-center gap-1.5 text-xs text-slate-500">
                                    <Clock size={12} className="text-[#00AEEF]" /> 3:00 – 5:00 PM IST
                                </span>
                            </div>
                        </div>

                        {/* Registration details */}
                        <div className="flex flex-col gap-3">
                            <DetailRow label="Name" value={name} />
                            <DetailRow label="Email" value={email} />
                            <DetailRow
                                label="Payment ID"
                                value={paymentId || transactionId}
                                copyable
                                onCopy={() => copyToClipboard(paymentId || transactionId)}
                            />
                            <DetailRow label="Amount Paid" value="₹99" />
                            <DetailRow label="Status" value="Confirmed" highlight />
                        </div>

                        {/* Note */}
                        <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-sm text-amber-800">
                            📬 <strong>Check your email</strong> — the Zoom link and event details will be sent to <span className="font-semibold">{email}</span> before May 30.
                        </div>

                        {/* Footer logos */}
                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                            <img src={logo} alt="Ophthall Academy" className="h-8 w-auto object-contain" />
                            <p className="text-xs text-slate-400">Secured by Razorpay</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const DetailRow = ({ label, value, copyable, onCopy, highlight }) => (
    <div className="flex items-center justify-between gap-3 py-2.5 border-b border-slate-100 last:border-0">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 shrink-0">{label}</span>
        <div className="flex items-center gap-2 min-w-0">
            <span className={`text-sm font-medium truncate ${highlight ? 'text-emerald-600 font-semibold' : 'text-slate-700'}`}>
                {value}
            </span>
            {copyable && (
                <button type="button" onClick={onCopy} className="p-1 text-slate-300 hover:text-slate-600 transition-colors shrink-0" title="Copy">
                    <Clipboard size={13} />
                </button>
            )}
        </div>
    </div>
);

export default PaymentSuccess;
