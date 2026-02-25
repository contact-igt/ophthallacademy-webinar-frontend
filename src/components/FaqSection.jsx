import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        q: 'Is this webinar free to attend?',
        a: 'Yes, this webinar is completely free for all higher education professionals.',
    },
    {
        q: "Will I get a recording if I register but can't attend?",
        a: 'Absolutely. We will send a recording link to all registrants within 24 hours after the live session.',
    },
    {
        q: 'Who can I contact for technical issues during the webinar?',
        a: 'You can reach out to our support team at support@ophthall.in at any time.',
    },
];

const FaqSection = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    return (
        <section id="faq" className="bg-gray-50 border-t border-gray-100 py-20 scroll-mt-12">
            <div className="max-w-[800px] mx-auto px-6">
                <h3 className="text-3xl font-bold text-[#0c2b4d] text-center mb-12">
                    Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
                        >
                            <button
                                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 focus:outline-none transition-colors"
                            >
                                <span className="font-bold text-[#0c2b4d] text-sm md:text-base pr-4">{faq.q}</span>
                                <ChevronDown
                                    className={`text-[#f47920] transition-transform duration-300 flex-shrink-0 ${activeFaq === idx ? 'rotate-180' : ''
                                        }`}
                                    size={20}
                                />
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${activeFaq === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-6 pb-5 pt-2 text-sm text-gray-600 font-medium leading-relaxed">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
