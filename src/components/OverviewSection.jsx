import { AlertTriangle, Lightbulb, Target, Quote } from 'lucide-react';

const stats = [
    { value: '73%', label: 'feel unprepared for clinical OPD on day one' },
    { value: '2hrs', label: 'that bridge the gap between theory and practice' },
    { value: '30+', label: 'years of real-world experience delivered to you' },
];

const OverviewSection = () => (
    <section id="overview" className="section bg-white border-t border-slate-100">
        <div className="container-xl">

            {/* ── Top: Label + Heading ── */}
            <div className="text-center mb-14">
                <div className="section-label mx-auto">
                    <span className="w-1.5 h-1.5 bg-[#f47920] rounded-full"></span>
                    Why This Webinar Exists
                </div>
                <h2 className="heading-xl mb-3">
                    The Gap No Textbook Covers
                </h2>
                <p className="body-lead max-w-[600px] mx-auto">
                    Graduating with top marks doesn't always mean you're ready for your first real OPD day.
                    Here's why that happens — and what we're doing about it.
                </p>
                <div className="accent-bar mx-auto mt-6"></div>
            </div>

            {/* ── Two-column layout ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">

                {/* Left: Problem card */}
                <div className="bg-[#fff7f3] border border-[#f47920]/20 rounded-2xl p-8 flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#f47920]/10 flex items-center justify-center text-[#f47920] shrink-0">
                            <AlertTriangle size={20} strokeWidth={1.75} />
                        </div>
                        <h3 className="text-lg font-bold text-[#0c2b4d]">The Problem</h3>
                    </div>
                    <p className="body-text">
                        Most optometry students graduate with strong academic knowledge but feel
                        <strong className="text-[#0c2b4d] font-semibold"> unprepared</strong> when
                        they step into real clinical environments — facing real patients, real decisions,
                        and real pressure.
                    </p>

                    {/* Quote */}
                    <div className="relative bg-white border border-[#f47920]/15 rounded-xl p-6">
                        <Quote size={36} className="text-slate-100 absolute top-3 right-4" strokeWidth={1.5} />
                        <p className="text-[15px] text-slate-600 leading-relaxed italic relative z-10">
                            "Understanding theory is important — but applying it effectively in OPD settings,
                            handling patients confidently, and making informed decisions are what truly matter in practice today."
                        </p>
                        <div className="mt-4 h-0.5 w-8 bg-[#f47920] rounded-full"></div>
                    </div>
                </div>

                {/* Right: Solution card */}
                <div className="flex flex-col gap-5">

                    {/* Solution header */}
                    <div className="bg-[#f0f7ff] border border-[#00AEEF]/20 rounded-2xl p-8 flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#00AEEF]/10 flex items-center justify-center text-[#00AEEF] shrink-0">
                                <Lightbulb size={20} strokeWidth={1.75} />
                            </div>
                            <h3 className="text-lg font-bold text-[#0c2b4d]">The Solution</h3>
                        </div>
                        <p className="body-text">
                            This <strong className="font-semibold text-[#0c2b4d]">2-hour live webinar</strong> is
                            designed to bridge exactly that gap — helping you transition from theoretical
                            knowledge to practical patient care in real hospital environments.
                        </p>
                    </div>

                    {/* Goal card */}
                    <div className="bg-[#0c2b4d] rounded-2xl p-8 flex flex-col gap-5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#f47920]/10 rounded-full -mr-16 -mt-16"></div>
                        <div className="flex items-center gap-3 relative z-10">
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#00AEEF] shrink-0">
                                <Target size={20} strokeWidth={1.75} />
                            </div>
                            <h3 className="text-lg font-bold text-white">The Goal</h3>
                        </div>
                        <p className="text-[15px] text-white/75 leading-relaxed relative z-10">
                            You leave this session knowing <strong className="text-white font-semibold">exactly</strong> what
                            to expect in OPD, how to handle patients professionally, and which career steps to take next.
                        </p>
                    </div>
                </div>
            </div>

            {/* ── Stats strip ── */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-slate-100 rounded-2xl overflow-hidden">
                {stats.map((s, i) => (
                    <div key={i} className="bg-white px-8 py-7 text-center">
                        <p className="text-3xl font-bold text-[#0c2b4d] mb-1.5 tracking-tight">{s.value}</p>
                        <p className="text-sm text-slate-500 leading-snug">{s.label}</p>
                    </div>
                ))}
            </div>

        </div>
    </section>
);

export default OverviewSection;
