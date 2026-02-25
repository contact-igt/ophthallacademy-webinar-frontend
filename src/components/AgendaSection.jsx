const agendaItems = [
    { time: '2:15pm - 2:45pm', title: 'How to build your 24x7 Student Experience Strategy' },
    { time: '2:45pm - 2:50pm', title: 'Case Study on Manchester Met University' },
    { time: '2:50pm - 3:00pm', title: 'Questions' },
];

const AgendaSection = () => {
    return (
        <section id="agenda" className="max-w-[1200px] mx-auto px-6 py-12 scroll-mt-12">
            <h3 className="text-3xl font-bold text-[#0c2b4d] text-center mb-16">Agenda</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 max-w-[900px] mx-auto">
                {agendaItems.map((item, idx) => (
                    <div key={idx} className="relative flex flex-col items-center text-center">
                        {/* Centered Dot */}
                        <div className="w-6 h-6 rounded-full bg-[#f47920] border-4 border-white shadow-md mb-5 z-10"></div>

                        <div className="px-2">
                            <p className="text-[#f47920] font-bold text-base mb-3">{item.time}</p>
                            <p className="text-sm text-gray-700 font-semibold leading-relaxed">{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AgendaSection;
