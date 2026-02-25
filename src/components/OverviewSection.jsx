const OverviewSection = () => {
    return (
        <section
            id="overview"
            className="max-w-[900px] mx-auto px-6 py-16 lg:py-24 text-center scroll-mt-20"
        >
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0c2b4d] mb-8 leading-snug">
                It Isn't a New Thing. Students Expect a 24x7 Service From Their University – but Are You
                Ready?
            </h2>
            <div className="space-y-6 text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                <p className="font-bold text-gray-800">
                    A recent study showed student retention and engagement is now the number 1 priority for
                    higher education.
                </p>
                <p>
                    The view now being that if you get this right, the traditional accolades that are aspired
                    to, such as NSS, will come naturally to those institutes focusing on student experience.
                </p>
                <p>
                    With only 5% of the UK's Universities successfully deploying technologies such as Robotic
                    Process Automation (RPA), Machine Learning (ML) and Artificial Intelligence (AI),
                    opportunities now exist to use these to deliver the unmet need of the student.
                </p>
                <p className="pt-2 text-[#0c2b4d] font-bold">
                    Join us for our webinar on how you can start building your 24x7 self-service Student
                    Experience.
                </p>
            </div>
        </section>
    );
};

export default OverviewSection;
