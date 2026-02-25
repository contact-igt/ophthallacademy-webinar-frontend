import { Linkedin } from 'lucide-react';

const speakers = [
    {
        name: 'Alistair Sergeant',
        title: 'CEO',
        company: 'Ophthall',
        img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600',
    },
    {
        name: 'Neil Hedges',
        title: 'Commercial Manager',
        company: 'Ophthall',
        img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
    },
];

const SpeakersSection = () => {
    return (
        <section id="speakers" className="max-w-[1200px] mx-auto px-6 py-20 scroll-mt-12">
            <h3 className="text-3xl font-bold text-[#0c2b4d] text-center mb-12">About The Speakers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[700px] mx-auto">
                {speakers.map((speaker, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-xl overflow-hidden shadow-custom border border-gray-100 flex flex-col items-center"
                    >
                        <div className="h-48 w-full overflow-hidden bg-gray-200">
                            <img
                                src={speaker.img}
                                alt={speaker.name}
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        <div className="p-6 relative w-full flex flex-col items-center text-center">
                            <h4 className="font-bold text-[#0c2b4d] text-lg mb-1">{speaker.name}</h4>
                            <p className="text-sm text-gray-500 font-medium mb-3">{speaker.title}</p>
                            <p className="text-sm font-bold text-[#0c2b4d] mb-4">{speaker.company}</p>
                            <a href="#" className="text-gray-400 hover:text-[#0a66c2] transition-colors">
                                <Linkedin size={22} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SpeakersSection;
