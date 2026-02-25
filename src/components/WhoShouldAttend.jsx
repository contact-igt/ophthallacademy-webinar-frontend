import { GraduationCap, School, UserCheck, CheckCircle2, ArrowRight } from 'lucide-react';

const attendees = [
    {
        icon: <GraduationCap size={28} strokeWidth={1.75} />,
        label: '3rd Year Students',
        desc: 'Building awareness of clinical practice before graduation',
        points: ['Get a head start on OPD skills', 'Learn what to expect in internships', 'Build confidence early'],
        bg: 'bg-[#eff6ff]',
        border: 'border-[#3b82f6]/20',
        iconBg: 'bg-[#dbeafe]',
        iconColor: 'text-[#1d4ed8]',
        tag: 'Early Preparation',
        tagColor: 'bg-[#eff6ff] text-[#1d4ed8] border-[#bfdbfe]',
    },
    {
        icon: <School size={28} strokeWidth={1.75} />,
        label: 'Final Year Students',
        desc: 'Bridging academics and real clinical career readiness',
        points: ['Practical skills before entering work', 'Know how OPDs actually function', 'Prepare for placements'],
        bg: 'bg-[#f0fdf4]',
        border: 'border-[#22c55e]/20',
        iconBg: 'bg-[#dcfce7]',
        iconColor: 'text-[#15803d]',
        tag: 'Pre-Placement Ready',
        tagColor: 'bg-[#f0fdf4] text-[#15803d] border-[#bbf7d0]',
        featured: true,
    },
    {
        icon: <UserCheck size={28} strokeWidth={1.75} />,
        label: 'Fresh Graduates',
        desc: 'Upgrading skills to accelerate early clinical career',
        points: ['Navigate your first OPD confidently', 'Stand out in the job market', 'Grow faster in clinical roles'],
        bg: 'bg-[#fdf4ff]',
        border: 'border-[#a855f7]/20',
        iconBg: 'bg-[#f3e8ff]',
        iconColor: 'text-[#7e22ce]',
        tag: 'Career Acceleration',
        tagColor: 'bg-[#fdf4ff] text-[#7e22ce] border-[#e9d5ff]',
    },
];

const WhoShouldAttend = () => (
    <section className="section bg-white border-t border-slate-100">
        <div className="container-xl">

            <div className="text-center mb-14">
                <div className="section-label mx-auto">
                    <span className="w-1.5 h-1.5 bg-[#f47920] rounded-full"></span>
                    Is This For You?
                </div>
                <h2 className="heading-xl mb-3">Who Should Attend</h2>
                <p className="body-lead max-w-lg mx-auto">
                    This webinar is built for a specific group of optometry learners and practitioners.
                </p>
                <div className="accent-bar mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
                {attendees.map((a, idx) => (
                    <div
                        key={idx}
                        className={`relative rounded-2xl border ${a.bg} ${a.border} p-7 flex flex-col gap-5 hover:-translate-y-1 transition-transform duration-200 ${a.featured ? 'ring-2 ring-[#22c55e]/30 shadow-lg shadow-green-100' : ''}`}
                    >
                        {/* Featured badge */}
                        {a.featured && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#15803d] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-full whitespace-nowrap">
                                Most Common
                            </div>
                        )}

                        {/* Icon */}
                        <div className={`w-14 h-14 rounded-2xl ${a.iconBg} flex items-center justify-center ${a.iconColor}`}>
                            {a.icon}
                        </div>

                        {/* Title & desc */}
                        <div>
                            <span className={`inline-flex text-[10px] font-semibold uppercase tracking-widest border px-2.5 py-1 rounded-full mb-2 ${a.tagColor}`}>
                                {a.tag}
                            </span>
                            <h3 className="text-[18px] font-bold text-[#0c2b4d] mb-1">{a.label}</h3>
                            <p className="text-sm text-slate-500">{a.desc}</p>
                        </div>

                        {/* Bullet points */}
                        <ul className="flex flex-col gap-2 border-t border-slate-200/60 pt-4 mt-auto">
                            {a.points.map((p, i) => (
                                <li key={i} className="flex items-start gap-2.5">
                                    <CheckCircle2 size={14} className={`${a.iconColor} shrink-0 mt-0.5`} />
                                    <span className="text-[13px] text-slate-600">{p}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* CTA strip */}
            <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
                <div>
                    <p className="font-semibold text-[#0c2b4d] text-base">Does any of this sound like you?</p>
                    <p className="text-sm text-slate-500 mt-0.5">Then this webinar was made exactly for you.</p>
                </div>
                <a href="#register" className="btn-primary whitespace-nowrap shrink-0">
                    Register Now — ₹99
                    <ArrowRight size={15} />
                </a>
            </div>

        </div>
    </section>
);

export default WhoShouldAttend;
