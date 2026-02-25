import React from 'react';
import { Settings, MapPin, Laptop, GraduationCap, BookOpen } from 'lucide-react';

const topics = [
    { icon: <Settings />, text: 'An overview of the current industry challenge' },
    {
        icon: <MapPin />,
        text: 'Where you get started to understand the service your students require',
    },
    { icon: <Laptop />, text: 'Why IT are not responsible for leading this' },
    {
        icon: <GraduationCap />,
        text: 'Understanding the student experience and where this drives change',
    },
    {
        icon: <BookOpen />,
        text: 'Case studies of Higher Education Institutes achieving this',
    },
];

const TopicsSection = () => {
    return (
        <section id="topics" className="max-w-[1200px] mx-auto px-6 py-16 scroll-mt-20">
            <h3 className="text-3xl font-bold text-center text-[#0c2b4d] mb-12">We Will Cover</h3>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
                {topics.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-xl p-6 shadow-custom border border-gray-50 flex flex-col items-start text-left hover:-translate-y-1 transition-transform"
                    >
                        <div className="text-[#f47920] mb-5">
                            {React.cloneElement(item.icon, { size: 36, strokeWidth: 1.5 })}
                        </div>
                        <p className="text-xs text-[#0c2b4d] font-bold leading-relaxed">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopicsSection;
