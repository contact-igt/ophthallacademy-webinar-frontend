import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0c2b4d] text-white pt-16 pb-8 border-t-4 border-[#f47920]">
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                {/* Column 1: About */}
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <svg width="40" height="20" viewBox="0 0 100 50">
                            <path d="M5,25 Q50,0 95,25 Q50,50 5,25 Z" fill="none" stroke="white" strokeWidth="4" />
                            <path
                                d="M30,25 Q60,10 90,35"
                                fill="none"
                                stroke="#38bdf8"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                        </svg>
                        <span className="text-xl font-extrabold tracking-widest text-white uppercase">
                            OPHTHALL
                        </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed font-medium">
                        Bridging the gap between academic education and real-world clinical optometry practice
                        through structured fellowships and industry-ready courses.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h4 className="text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">
                        Quick Links
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-300 font-medium">
                        {['Home', 'About Us', 'Our Programmes', 'Admissions'].map((link) => (
                            <li key={link}>
                                <a href="#" className="hover:text-[#f47920] transition-colors flex items-center gap-2">
                                    <span className="text-[#f47920]">&rsaquo;</span> {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Contact Us */}
                <div>
                    <h4 className="text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">
                        Contact Us
                    </h4>
                    <ul className="space-y-4 text-sm text-gray-300 font-medium">
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="text-[#f47920] shrink-0 mt-0.5" />
                            <span className="leading-relaxed">
                                Ophthall Academy of Vision
                                <br />
                                Chennai, Tamil Nadu, India
                            </span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={18} className="text-[#f47920] shrink-0" />
                            <span>+91 98765 43210</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} className="text-[#f47920] shrink-0" />
                            <span>admissions@ophthall.in</span>
                        </li>
                    </ul>
                </div>

                {/* Column 4: Follow Us */}
                <div>
                    <h4 className="text-lg font-bold mb-6 text-white border-b border-gray-700 pb-2 inline-block">
                        Follow Us
                    </h4>
                    <p className="text-sm text-gray-300 font-medium mb-4">
                        Stay connected with us on social media for the latest updates.
                    </p>
                    <div className="flex gap-3">
                        {[<Facebook size={18} />, <Twitter size={18} />, <Instagram size={18} />, <Linkedin size={18} />].map(
                            (icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f47920] transition-all hover:-translate-y-1"
                                >
                                    {icon}
                                </a>
                            )
                        )}
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="max-w-[1200px] mx-auto px-6 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-medium gap-4">
                <p>&copy; {new Date().getFullYear()} Ophthall Academy of Vision. All Rights Reserved.</p>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-white transition-colors">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
