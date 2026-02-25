import { Users, Target, Briefcase } from 'lucide-react';

const attendees = [
    {
        icon: <Users size={28} />,
        title: 'University Admins',
        desc: 'Looking to streamline student services and reduce operational overhead.',
    },
    {
        icon: <Target size={28} />,
        title: 'IT Leaders',
        desc: 'Seeking to deploy automation and AI effectively without overwhelming resources.',
    },
    {
        icon: <Briefcase size={28} />,
        title: 'Experience Officers',
        desc: 'Aiming to increase student retention and overall engagement metrics.',
    },
];

const WhoShouldAttend = () => {
    return (
        <section className="bg-gray-50 w-full py-16 border-t border-gray-100">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
                <h3 className="text-3xl font-bold text-[#0c2b4d] mb-12">Who Should Attend?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[900px] mx-auto">
                    {attendees.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-3">
                            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-[#f47920] mb-2 shadow-sm hover:scale-105 transition-transform">
                                {item.icon}
                            </div>
                            <h4 className="font-bold text-[#0c2b4d] text-lg">{item.title}</h4>
                            <p className="text-sm text-gray-600 font-medium px-4">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoShouldAttend;
