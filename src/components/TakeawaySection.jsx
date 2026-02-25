import { CheckCircle2 } from 'lucide-react';

const takeaways = [
    'Practical OPD decision-making strategies',
    'Real-world clinical communication skills',
    'Career guidance and growth pathway planning',
    'Skills expected by top eye hospitals today',
    'Techniques to build patient interaction confidence',
    'How to prepare effectively for placements',
];

const TakeawaySection = () => (
    <section className="section bg-[#0c2b4d] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_rgba(0,174,239,0.1),_transparent_50%)]"></div>
        <div className="container-xl relative z-10">

            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/70 text-[11px] font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-5">
                    <span className="w-1.5 h-1.5 bg-[#00AEEF] rounded-full"></span>
                    What You'll Gain
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">Key Takeaways</h2>
                <div className="h-1 w-12 bg-[#00AEEF] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {takeaways.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 bg-white/[0.06] border border-white/[0.1] rounded-xl px-5 py-4 hover:bg-white/[0.1] transition-colors">
                        <CheckCircle2 size={18} className="text-[#00AEEF] shrink-0 mt-0.5" />
                        <p className="text-[15px] font-medium text-white/85 leading-snug">{item}</p>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <a href="#register" className="btn-primary">
                    Reserve My Seat — ₹99
                </a>
            </div>

        </div>
    </section>
);

export default TakeawaySection;
