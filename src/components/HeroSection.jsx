const HeroSection = () => {
    return (
        <section className="relative w-full bg-[#0c2b4d] overflow-hidden pt-12 lg:pt-24 pb-16 lg:pb-24">
            {/* Background Layer */}
            <div
                className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-40"
                style={{
                    backgroundImage:
                        'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000")',
                }}
            ></div>
            <div className="absolute inset-0 bg-[#0c2b4d]/60 lg:bg-transparent mix-blend-multiply"></div>

            {/* Content Wrapper */}
            <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left: Hero Content */}
                <div className="w-full lg:w-[55%] text-white">
                    <span className="text-[#f47920] font-bold tracking-wider uppercase text-sm mb-4 block">
                        Join Our Webinar
                    </span>
                    <h1 className="text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight mb-6 drop-shadow-md">
                        How to Effectively Deliver a 24x7 Self Service Student Experience
                    </h1>
                    <p className="text-gray-200 text-lg mb-8 font-semibold drop-shadow-md">
                        10 Aug 2026 | 2:00 pm
                    </p>

                    {/* Countdown */}
                    <div className="glass-panel inline-block rounded-xl p-6 shadow-lg">
                        <p className="text-sm font-semibold mb-4 tracking-wide text-white text-center">
                            Webinar Starts In
                        </p>
                        <div className="flex gap-4">
                            {[
                                { value: '12', label: 'Days' },
                                { value: '08', label: 'Hours' },
                                { value: '45', label: 'Minutes' },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="bg-white rounded px-5 py-3 text-center text-[#0c2b4d] min-w-[80px]"
                                >
                                    <span className="block text-2xl font-bold">{item.value}</span>
                                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Registration Form Card */}
                <div
                    id="register"
                    className="w-full lg:w-[400px] bg-white rounded-2xl shadow-2xl p-8 shrink-0 relative z-20 scroll-mt-24"
                >
                    <div className="relative">
                        <div className="absolute -top-6 -left-4 text-8xl text-orange-50 font-serif font-bold opacity-50 pointer-events-none">
                            Q
                        </div>
                        <h3 className="text-2xl font-bold text-center text-[#0c2b4d] mb-8 relative z-10">
                            Register Now
                        </h3>
                    </div>

                    <form className="space-y-5 relative z-10">
                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1.5">Your Name *</label>
                            <input
                                type="text"
                                className="w-full bg-gray-100/80 border-none rounded-lg px-4 py-3.5 text-sm focus:ring-2 focus:ring-[#f47920] outline-none transition-shadow"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1.5">Your Email *</label>
                            <input
                                type="email"
                                className="w-full bg-gray-100/80 border-none rounded-lg px-4 py-3.5 text-sm focus:ring-2 focus:ring-[#f47920] outline-none transition-shadow"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1.5">Phone Number *</label>
                            <input
                                type="tel"
                                className="w-full bg-gray-100/80 border-none rounded-lg px-4 py-3.5 text-sm focus:ring-2 focus:ring-[#f47920] outline-none transition-shadow"
                            />
                        </div>

                        <button
                            type="button"
                            className="w-full bg-[#f47920] hover:bg-[#e06b18] text-white font-bold py-4 rounded-full transition-colors mt-2 shadow-lg shadow-orange-500/30"
                        >
                            Save My Spot
                        </button>

                        <div className="text-center pt-6 mt-4">
                            <span className="text-xs font-bold text-gray-500 block mb-3">I can't make it</span>
                            <button
                                type="button"
                                className="text-sm font-bold text-[#f47920] hover:text-white hover:bg-[#f47920] border-2 border-gray-100 rounded-full py-3 px-8 transition-all shadow-sm w-full"
                            >
                                Send Me A Recording
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
