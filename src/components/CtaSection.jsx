const CtaSection = () => {
    return (
        <section className="max-w-[1200px] mx-auto px-6 py-24 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c2b4d] mb-4">
                Join us for our Higher Education
                <br />
                RPA Webinar
            </h2>
            <p className="text-lg text-gray-600 font-medium mb-10 max-w-md mx-auto">
                Explore how UK Universities are delivering operational efficiency
            </p>
            <a
                href="#register"
                className="inline-block bg-[#f47920] hover:bg-[#e06b18] text-white font-bold py-4 px-12 rounded-full transition-colors shadow-lg shadow-orange-500/30 text-lg"
            >
                Save My Spot
            </a>
        </section>
    );
};

export default CtaSection;
