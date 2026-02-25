import { CheckCircle2 } from 'lucide-react';

const takeaways = [
    'How to align your organisation in removing fear',
    'Engaging with your students to play a role in this',
    'What quick wins can be implemented now',
];

const TakeawaySection = () => {
    return (
        <section className="bg-[#f47920] w-full py-20">
            <div className="max-w-[1200px] mx-auto px-6">
                <h3 className="text-3xl font-bold text-white text-center mb-12">You Will Take Away</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white mb-12">
                    {takeaways.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center gap-4">
                            <CheckCircle2 className="text-white" size={36} strokeWidth={2} />
                            <p className="text-sm font-semibold leading-relaxed px-4">{item}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <button className="bg-white text-[#f47920] hover:bg-gray-50 font-bold py-3 px-10 rounded-full transition-colors shadow-lg">
                        Save My Spot
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TakeawaySection;
