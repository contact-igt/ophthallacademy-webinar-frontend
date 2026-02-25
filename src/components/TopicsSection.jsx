import { LayoutDashboard, Users, AlertCircle, TrendingUp, Compass, ArrowRight } from 'lucide-react';

const topics = [
    {
        num: '01',
        icon: <LayoutDashboard size={22} strokeWidth={1.75} />,
        title: 'Real-World OPD Workflows',
        desc: 'Understand how daily clinical workflows operate in real hospital optometry departments.',
        color: 'from-[#0c2b4d] to-[#1a4a7a]',
        tag: 'Clinical Foundation',
    },
    {
        num: '02',
        icon: <Users size={22} strokeWidth={1.75} />,
        title: 'Patient Handling & Communication',
        desc: 'Practical strategies to manage patient interactions and build clinical rapport from day one.',
        color: 'from-[#002f42] to-[#005070]',
        tag: 'Soft Skills',
    },
    {
        num: '03',
        icon: <AlertCircle size={22} strokeWidth={1.75} />,
        title: 'Common Fresh Graduate Challenges',
        desc: 'Learn about the pitfalls fresh optometrists face and how to navigate them confidently.',
        color: 'from-[#7c2d12] to-[#c2410c]',
        tag: 'Problem Solving',
    },
    {
        num: '04',
        icon: <TrendingUp size={22} strokeWidth={1.75} />,
        title: 'Skills That Set You Apart',
        desc: 'Discover the in-demand skills employers look for in a competitive clinical job market.',
        color: 'from-[#14532d] to-[#15803d]',
        tag: 'Career Edge',
    },
    {
        num: '05',
        icon: <Compass size={22} strokeWidth={1.75} />,
        title: 'Career Pathways in Optometry',
        desc: 'Explore growth opportunities — from hospital OPDs to private practice and beyond.',
        color: 'from-[#4c1d95] to-[#7c3aed]',
        tag: 'Career Strategy',
    },
];

const TopicsSection = () => (
    <section id="topics" className="section bg-[#f8fafc] border-t border-slate-100">
        <div className="container-xl">

            {/* Section Header */}
            <div className="text-center mb-14">
                <div className="section-label mx-auto">
                    <span className="w-1.5 h-1.5 bg-[#00AEEF] rounded-full"></span>
                    What You'll Learn
                </div>
                <h2 className="heading-xl mb-3">Topics We Will Cover</h2>
                <p className="body-lead max-w-xl mx-auto">
                    Five focused sessions built around the real challenges every optometry student faces when entering clinical practice.
                </p>
                <div className="accent-bar mx-auto mt-6"></div>
            </div>

            {/* Main grid: 2 + 3 layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
                {/* Large featured cards — first 2 */}
                {topics.slice(0, 2).map((topic, idx) => (
                    <div
                        key={idx}
                        className={`group relative bg-gradient-to-br ${topic.color} rounded-2xl p-8 overflow-hidden cursor-default hover:-translate-y-1 transition-all duration-300 shadow-lg`}
                    >
                        {/* Background number */}
                        <span className="absolute top-4 right-6 text-7xl font-black text-white/[0.07] select-none leading-none">
                            {topic.num}
                        </span>

                        {/* Tag */}
                        <span className="inline-flex items-center text-[10px] font-semibold uppercase tracking-widest text-white/60 bg-white/10 border border-white/15 px-3 py-1 rounded-full mb-5">
                            {topic.tag}
                        </span>

                        {/* Icon + Title */}
                        <div className="flex items-start gap-4 mb-3">
                            <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0 group-hover:bg-white/20 transition-colors">
                                {topic.icon}
                            </div>
                            <h3 className="text-[19px] font-bold text-white leading-snug">{topic.title}</h3>
                        </div>

                        <p className="text-sm text-white/70 leading-relaxed pl-[60px]">{topic.desc}</p>
                    </div>
                ))}
            </div>

            {/* Smaller 3-column cards — last 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
                {topics.slice(2).map((topic, idx) => (
                    <div
                        key={idx}
                        className={`group relative bg-gradient-to-br ${topic.color} rounded-2xl p-7 overflow-hidden cursor-default hover:-translate-y-1 transition-all duration-300 shadow-lg`}
                    >
                        {/* Background number */}
                        <span className="absolute top-3 right-5 text-6xl font-black text-white/[0.07] select-none leading-none">
                            {topic.num}
                        </span>

                        {/* Tag */}
                        <span className="inline-flex items-center text-[10px] font-semibold uppercase tracking-widest text-white/60 bg-white/10 border border-white/15 px-3 py-1 rounded-full mb-4">
                            {topic.tag}
                        </span>

                        {/* Icon */}
                        <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-3 group-hover:bg-white/20 transition-colors">
                            {topic.icon}
                        </div>

                        <h3 className="text-[16px] font-bold text-white leading-snug mb-2">{topic.title}</h3>
                        <p className="text-sm text-white/65 leading-relaxed">{topic.desc}</p>
                    </div>
                ))}
            </div>

            {/* CTA Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#register" className="btn-primary">
                    Register for ₹99 — Limited Seats
                    <ArrowRight size={16} />
                </a>
                <p className="text-sm text-slate-500">
                    <span className="text-[#0c2b4d] font-semibold">2-Hour Live Webinar</span> · March 14, 2024
                </p>
            </div>

        </div>
    </section>
);

export default TopicsSection;
