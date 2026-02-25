import { XCircle, RefreshCw, Phone } from 'lucide-react';
import logo from '../assets/ophthall-logo.png';

const PaymentFailure = ({ name, onRetry }) => (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-lg">

            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/80 overflow-hidden">

                {/* Red top bar */}
                <div className="bg-gradient-to-r from-red-600 to-rose-500 px-8 py-7 text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <XCircle size={36} className="text-white" strokeWidth={2} />
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-1">Payment Failed</h1>
                    <p className="text-white/80 text-sm">Don't worry — no amount was deducted</p>
                </div>

                <div className="px-8 py-7 flex flex-col gap-5">
                    <p className="text-slate-600 text-sm leading-relaxed text-center">
                        {name ? `Hi ${name}, your` : 'Your'} payment could not be processed. This could be due to a network issue, bank decline, or timeout. Please try again.
                    </p>

                    {/* What to do */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 flex flex-col gap-3">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">What to do next</p>
                        {[
                            'Check your internet connection and try again',
                            'Make sure your card/UPI has sufficient balance',
                            'Try a different payment method (UPI, Net Banking, Card)',
                            'Contact your bank if the issue persists',
                        ].map((t, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                                <span className="w-5 h-5 rounded-full bg-[#0c2b4d]/10 text-[#0c2b4d] text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                                {t}
                            </div>
                        ))}
                    </div>

                    {/* CTA buttons */}
                    <div className="flex flex-col gap-3">
                        <button
                            type="button"
                            onClick={onRetry}
                            className="w-full flex items-center justify-center gap-2 bg-[#f47920] hover:bg-[#e06710] text-white font-semibold py-3.5 rounded-xl transition-all shadow-md shadow-orange-300/30"
                        >
                            <RefreshCw size={16} />
                            Try Again
                        </button>
                        <a
                            href="mailto:admissions@ophthall.in"
                            className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-600 hover:border-[#0c2b4d] hover:text-[#0c2b4d] font-medium py-3 rounded-xl transition-all text-sm"
                        >
                            <Phone size={14} />
                            Contact Support
                        </a>
                    </div>

                    {/* Footer */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <img src={logo} alt="Ophthall Academy" className="h-8 w-auto object-contain" />
                        <p className="text-xs text-slate-400">Secured by Razorpay</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default PaymentFailure;
