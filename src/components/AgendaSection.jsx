import { Clock, Users, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';

const sessions = [
    {
        num: '01',
        time: '3:00 – 3:45 PM',
        duration: '45 min',
        title: 'Transitioning from Academics to Real-World Practice',
        desc: 'Understanding the mindset shift, common challenges, and what hospitals truly expect from fresh optometrists.',
        icon: <Users size={20} strokeWidth={1.75} />,
        color: 'bg-blue-600',
        tags: ['Mindset', 'OPD Basics'],
    },
    {
        num: '02',
        time: '3:45 – 4:30 PM',
        duration: '45 min',
        title: 'Practical OPD Decision-Making Tools & Techniques',
        desc: 'Hands-on approaches to patient handling, clinical decision workflows, and building professional confidence.',
        icon: <Clock size={20} strokeWidth={1.75} />,
        color: 'bg-[#0c2b4d]',
        tags: ['Clinical Skills', 'Patient Care'],
    },
    {
        num: '03',
        time: '4:30 – 5:00 PM',
        duration: '30 min',
        title: 'Career Growth Pathways & Live Q&A',
        desc: 'Exploring career options in optometry — from hospital OPDs to private practice — and answering your most pressing questions live.',
        icon: <MessageSquare size={20} strokeWidth={1.75} />,
        color: 'bg-[#f47920]',
        tags: ['Career', 'Live Q&A'],
    },
];

const AgendaSection = () => (
    <section id="agenda" className="section bg-white border-t border-slate-100">
        <div className="container-xl">

            {/* Header */}
            <div className="text-center mb-14">
                <div className="section-label mx-auto">
                    <span className="w-1.5 h-1.5 bg-[#00AEEF] rounded-full"></span>
                    Session Breakdown
                </div>
                <h2 className="heading-xl mb-3">Event Agenda</h2>
                <p className="body-lead max-w-xl mx-auto">
                    A focused 2-hour session covering everything from day-one clinical readiness to long-term career strategy.
                </p>
                <div className="accent-bar mx-auto mt-6"></div>
            </div>

            {/* Session cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                {sessions.map((s, idx) => (
                    <div key={idx} className="card overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-200">

                        {/* Colored top strip */}
                        <div className={`${s.color} px-6 py-5 flex items-center gap-4`}>
                            <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center text-white shrink-0">
                                {s.icon}
                            </div>
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-0.5">Session {s.num}</p>
                                <p className="text-xs font-semibold text-white flex items-center gap-1.5">
                                    <Clock size={11} className="opacity-70" />
                                    {s.time} · {s.duration}
                                </p>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="p-6 flex flex-col gap-4 flex-1">
                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5">
                                {s.tags.map(t => (
                                    <span key={t} className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-[16px] font-bold text-[#0c2b4d] leading-snug">{s.title}</h3>
                            <p className="body-sm flex-1">{s.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Why attend strip */}
            <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl px-8 py-7 flex flex-col md:flex-row items-center gap-6 justify-between">
                <div className="flex flex-col gap-3">
                    <h3 className="heading-md">Why Attend This Webinar?</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-slate-600">
                        {['30+ years real-world experience', 'Live interactive Q&A', 'Participation certificate'].map((p, i) => (
                            <span key={i} className="flex items-center gap-2">
                                <CheckCircle2 size={15} className="text-[#00AEEF] shrink-0" />
                                {p}
                            </span>
                        ))}
                    </div>
                </div>
                <a href="#register" className="btn-primary shrink-0">
                    Reserve My Seat — ₹99
                    <ArrowRight size={15} />
                </a>
            </div>

        </div>
    </section>
);

export default AgendaSection;
