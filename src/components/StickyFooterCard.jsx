import { useState, useEffect } from 'react';
import { X, Calendar, Clock, ChevronRight, Users, Flame } from 'lucide-react';

const StickyFooterCard = () => {
    const [visible, setVisible] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 300 && !dismissed) setVisible(true);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [dismissed]);

    const dismiss = () => {
        setVisible(false);
        setDismissed(true);
    };

    return (
        <div
            className={`fixed bottom-0 inset-x-0 z-50 transition-transform duration-500 ease-out ${visible ? 'translate-y-0' : 'translate-y-full'}`}
            role="complementary"
            aria-label="Webinar registration banner"
        >
            {/* Gradient top line */}
            <div className="h-[3px] bg-gradient-to-r from-[#f47920] via-[#00AEEF] to-[#0c2b4d]"></div>

            <div className="bg-[#0c2b4d]/95 backdrop-blur-md shadow-[0_-12px_40px_rgba(0,0,0,0.3)]">
                <div className="max-w-[1200px] mx-auto px-5 lg:px-10">

                    {/* Main row */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 py-3.5">

                        {/* Left: badge + title */}
                        <div className="flex items-center gap-3.5 flex-1 min-w-0">
                            {/* Live badge */}
                            <div className="hidden sm:flex shrink-0 items-center gap-1.5 bg-[#f47920] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg">
                                <Flame size={11} className="fill-white" />
                                Live
                            </div>
                            {/* Info */}
                            <div className="min-w-0">
                                <p className="text-white font-semibold text-sm truncate">
                                    Beyond Refraction — <span className="text-[#00AEEF]">12-Step Blueprint</span>
                                </p>
                                <div className="flex items-center gap-3 mt-0.5">
                                    <span className="flex items-center gap-1 text-white/50 text-[11px]">
                                        <Calendar size={10} className="text-[#00AEEF]" /> Mar 14, 2024
                                    </span>
                                    <span className="flex items-center gap-1 text-white/50 text-[11px]">
                                        <Clock size={10} className="text-[#00AEEF]" /> 3–5 PM IST
                                    </span>
                                    <span className="hidden md:flex items-center gap-1 text-white/50 text-[11px]">
                                        <Users size={10} className="text-[#00AEEF]" /> Limited Seats
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right: price + CTA + dismiss */}
                        <div className="flex items-center gap-3 shrink-0">
                            <div className="hidden md:block text-right">
                                <p className="text-white/40 text-[10px] uppercase tracking-widest">One-time fee</p>
                                <p className="text-white font-bold text-base leading-tight">₹99 Only</p>
                            </div>
                            <a
                                href="#register"
                                onClick={dismiss}
                                className="inline-flex items-center gap-1.5 bg-[#f47920] hover:bg-[#e06710] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-lg shadow-orange-500/20 whitespace-nowrap"
                            >
                                Register Now
                                <ChevronRight size={14} />
                            </a>
                            <button
                                onClick={dismiss}
                                className="p-2 text-white/30 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                                aria-label="Dismiss banner"
                            >
                                <X size={16} />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default StickyFooterCard;
