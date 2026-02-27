import { ArrowRight, MessageCircleQuestion } from 'lucide-react';

const questions = [
    { q: `Will I be able to handle real patients on day one?`, tag: 'Confidence' },
    { q: `What does a real hospital OPD day actually look like?`, tag: 'Awareness' },
    { q: `How do I make clinical decisions without a textbook?`, tag: 'Decision-Making' },
    { q: `What are the key differentiators for success in modern optometry practice?`, tag: 'Success Blueprint' },
    { q: `How do I build strong patient interaction confidence?`, tag: 'Communication' },
    { q: `What career pathways should I explore right now?`, tag: 'Career Planning' },
];

const PsychologySection = () => (
    <section className="section bg-[#f8fafc] border-t border-slate-100">
        <div className="container-xl">

            {/* Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
                <div>
                    <div className="section-label">
                        <span className="w-1.5 h-1.5 bg-[#f47920] rounded-full"></span>
                        Sound Familiar?
                    </div>
                    <h2 className="heading-xl mb-4">
                        Questions Every Optometry Student Quietly Asks
                    </h2>
                    <p className="body-text max-w-md">
                        These aren't trivial doubts. They're the real concerns that hold practitioners
                        back from stepping confidently into a highly profitable clinical career.
                    </p>
                </div>

                {/* Right: CTA block */}
                <div className="bg-[#0c2b4d] rounded-2xl p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-36 h-36 bg-[#f47920]/10 rounded-full -mr-12 -mt-12"></div>
                    <p className="text-sm text-white/60 font-medium mb-2 relative z-10">If these crossed your mind…</p>
                    <h3 className="text-2xl font-bold text-[#f47920] mb-3 relative z-10">You Are Not Alone.</h3>
                    <p className="text-sm text-white/70 leading-relaxed mb-6 relative z-10">
                        This webinar is built to answer each one of these — with real-world insights from
                        30+ years of clinical experience.
                    </p>
                    <a href="#register" className="btn-primary relative z-10 w-full sm:w-auto justify-center">
                        I Want To Be OPD-Ready
                        <ArrowRight size={15} />
                    </a>
                </div>
            </div>

            {/* Question grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {questions.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white border border-slate-200 rounded-xl px-5 py-4 flex items-start gap-4 hover:border-[#0c2b4d]/30 hover:shadow-sm transition-all duration-200 group"
                    >
                        <div className="w-9 h-9 rounded-lg bg-[#0c2b4d]/5 flex items-center justify-center text-[#0c2b4d] shrink-0 group-hover:bg-[#0c2b4d] group-hover:text-white transition-colors">
                            <MessageCircleQuestion size={17} strokeWidth={1.75} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[#f47920] mb-1">{item.tag}</span>
                            <p className="text-[14px] font-medium text-slate-700 leading-snug italic">"{item.q}"</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </section>
);

export default PsychologySection;
