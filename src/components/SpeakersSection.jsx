const SpeakersSection = () => (
    <section id="speakers" className="section bg-white border-t border-slate-100">
        <div className="container-lg">

            <div className="text-center mb-12">
                <div className="section-label mx-auto">
                    <span className="w-1.5 h-1.5 bg-[#00AEEF] rounded-full"></span>
                    Your Instructor
                </div>
                <h2 className="heading-xl mb-3">About The Speaker</h2>
                <div className="accent-bar mx-auto"></div>
            </div>

            <div className="card overflow-hidden flex flex-col md:flex-row items-stretch">

                {/* Image */}
                <div className="md:w-2/5 shrink-0 min-h-[280px] relative overflow-hidden bg-slate-100">
                    <img
                        src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600"
                        alt="Dr. Anuja R. Singh"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c2b4d]/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">

                    <p className="text-xs font-semibold uppercase tracking-widest text-[#00AEEF] mb-2">Senior Academic Advisor & Faculty</p>
                    <h3 className="heading-lg mb-1">Dr. Anuja R. Singh</h3>
                    <p className="text-sm text-[#f47920] font-semibold mb-5">30+ Years Experience · Alumna of Elite School of Optometry</p>

                    {/* Credentials badge */}
                    <div className="bg-[#f8fafc] border border-slate-200 rounded-lg px-5 py-3.5 mb-6">
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Former <strong className="text-[#0c2b4d] font-semibold">Head of Department and Principal</strong> at The Sankara Nethralaya Academy (TSNA).
                            Played a key role in developing clinical fellowships and B.Optom degree courses.
                        </p>
                    </div>

                    <p className="body-text mb-8">
                        An educator, trainer, and administrator with over 30 years in clinical optometry.
                        Dr. Singh brings decades of real-world hospital experience to help you bridge the
                        gap between academics and practice.
                    </p>

                    <a href="#register" className="btn-primary w-fit">
                        Learn From Dr. Anuja
                    </a>
                </div>
            </div>

        </div>
    </section>
);

export default SpeakersSection;
