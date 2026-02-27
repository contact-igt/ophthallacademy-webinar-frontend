import { ChevronRight } from 'lucide-react';

const CtaSection = () => (
    <section className="section bg-[#f8fafc] border-t border-slate-100">
        <div className="container-xl">
            <div className="bg-[#0c2b4d] rounded-2xl px-10 lg:px-20 py-14 lg:py-20 text-center relative overflow-hidden">
                {/* Subtle ambient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,174,239,0.12),_transparent_60%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,47,66,0.4),_transparent_50%)]"></div>

                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/70 text-[11px] font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6">
                        <span className="w-1.5 h-1.5 bg-[#f47920] rounded-full"></span>
                        Don't Miss Out
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight tracking-tight">
                        Join Our Live Optometry
                    </h2>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00AEEF] mb-6 leading-tight tracking-tight">
                        Career Webinar
                    </h2>
                    <p className="text-lg text-white/65 font-normal mb-10 max-w-[560px] mx-auto leading-relaxed">
                        Designed to help optometry students and practitioners bridge the gap between academic learning and real-world clinical practice.
                    </p>
                    <a href="#register" className="btn-primary text-base px-10 py-4 shadow-xl shadow-orange-500/30">
                        Yes, I'm Joining — <span className="font-black ml-1">₹99 Only</span>
                        <ChevronRight size={17} />
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default CtaSection;
