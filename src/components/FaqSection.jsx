import { useState } from 'react';
import { ChevronDown, MessageCircle, ChevronRight } from 'lucide-react';

const faqs = [
    {
        q: `Is this webinar free to attend?`,
        a: `No. This is a paid 2-hour live webinar with an entry fee of ₹99. This small fee ensures we bring in serious learners committed to their clinical growth.`,
        tag: 'Fees',
    },
    {
        q: `Will I get a recording if I can't attend live?`,
        a: `We highly recommend attending live for the interactive Q&A. Details about recording access will be shared with all registered participants after the event.`,
        tag: 'Access',
    },
    {
        q: `Is this suitable for beginners?`,
        a: `Yes. This webinar is specifically designed for practicing optometrists, faculties, students, and fresh graduates looking to bridge the gap between academic theory and clinical success.`,
        tag: 'Eligibility',
    },
    {
        q: `Will I receive a certificate?`,
        a: `Yes. A certificate of participation from Ophthall Academy will be provided to all attendees who complete the webinar session.`,
        tag: 'Certificate',
    },
];

const tagColors = {
    'Fees': 'bg-orange-50 text-orange-600 border-orange-200',
    'Access': 'bg-blue-50 text-blue-600 border-blue-200',
    'Eligibility': 'bg-green-50 text-green-700 border-green-200',
    'Certificate': 'bg-purple-50 text-purple-600 border-purple-200',
};

const FaqSection = () => {
    const [active, setActive] = useState(null);

    return (
        <section id="faq" className="section bg-[#f8fafc] border-t border-slate-100">
            <div className="container-xl">

                {/* Two-column header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-14">

                    {/* Left: heading */}
                    <div>
                        <div className="section-label">
                            <span className="w-1.5 h-1.5 bg-[#00AEEF] rounded-full"></span>
                            Have Questions?
                        </div>
                        <h2 className="heading-xl mb-4">Common Questions Answered</h2>
                        <p className="body-text max-w-sm">
                            Everything you need to know before registering for the webinar.
                        </p>
                        <div className="accent-bar mt-6"></div>
                    </div>

                    {/* Right: still-curious card */}
                    <div className="bg-[#0c2b4d] rounded-2xl p-7 flex flex-col gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#00AEEF]">
                            <MessageCircle size={20} strokeWidth={1.75} />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-1">Still have a question?</h3>
                            <p className="text-sm text-white/60 leading-relaxed">
                                Reach out directly and we'll get back to you before the session date.
                            </p>
                        </div>
                        <a
                            href="mailto:admissions@ophthall.in"
                            className="inline-flex items-center gap-2 text-[#f47920] font-semibold text-sm hover:text-[#ff9a50] transition-colors"
                        >
                            admissions@ophthall.in
                            <ChevronRight size={14} />
                        </a>
                    </div>
                </div>

                {/* FAQ accordion */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`bg-white rounded-2xl border overflow-hidden transition-all duration-200 hover:shadow-sm
                                ${active === idx ? 'border-[#0c2b4d]/25 shadow-md' : 'border-slate-200'}`}
                        >
                            <button
                                type="button"
                                onClick={() => setActive(active === idx ? null : idx)}
                                className="w-full flex justify-between items-start gap-3 text-left px-6 py-5 hover:bg-slate-50/70 transition-colors"
                            >
                                <div className="flex-1 min-w-0">
                                    <span className={`inline-flex text-[10px] font-semibold uppercase tracking-widest border px-2.5 py-0.5 rounded-full mb-2 ${tagColors[faq.tag]}`}>
                                        {faq.tag}
                                    </span>
                                    <p className={`font-semibold text-[15px] leading-snug transition-colors ${active === idx ? 'text-[#0c2b4d]' : 'text-slate-800'}`}>
                                        {faq.q}
                                    </p>
                                </div>
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all ${active === idx ? 'bg-[#0c2b4d] text-white' : 'bg-slate-100 text-slate-400'}`}>
                                    <ChevronDown size={16} className={`transition-transform duration-200 ${active === idx ? 'rotate-180' : ''}`} />
                                </div>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${active === idx ? 'max-h-72' : 'max-h-0'}`}>
                                <div className="px-6 pb-6 border-t border-slate-100">
                                    <p className="text-[15px] text-slate-600 leading-relaxed pt-4">{faq.a}</p>
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
