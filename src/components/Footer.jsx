import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/ophthall-logo.png';

const Footer = () => (
    <footer className="bg-[#030d1a] text-white pt-14 pb-8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">

            {/* Main grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 pb-12 border-b border-white/[0.08]">

                {/* About */}
                <div className="lg:col-span-1">
                    <div className="mb-4">
                        <img src={logo} alt="Ophthall Academy" className="h-10 w-auto object-contain brightness-0 invert" />
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed mb-5">
                        Bridging the gap between academic education and real-world clinical optometry through structured learning and industry-ready mentorship.
                    </p>
                    {/* Social icons */}
                    <div className="flex gap-2.5">
                        {[<Facebook size={15} />, <Twitter size={15} />, <Instagram size={15} />, <Linkedin size={15} />].map((icon, i) => (
                            <a key={i} href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-colors">
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Quick Links</h4>
                    <ul className="space-y-2.5">
                        {['Home', 'About Us', 'Our Programmes', 'Admissions'].map(link => (
                            <li key={link}>
                                <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Webinar Links */}
                <div>
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">This Webinar</h4>
                    <ul className="space-y-2.5">
                        {['Overview', 'Topics', 'Speakers', 'Agenda', 'FAQ'].map(link => (
                            <li key={link}>
                                <a href={`#${link.toLowerCase()}`} className="text-sm text-slate-400 hover:text-white transition-colors">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Contact Us</h4>
                    <ul className="space-y-3.5">
                        <li className="flex items-start gap-3 text-sm text-slate-400">
                            <MapPin size={15} className="text-[#00AEEF] shrink-0 mt-0.5" />
                            <span className="leading-relaxed">Ophthall Academy of Vision<br />Chennai, Tamil Nadu, India</span>
                        </li>
                        <li className="flex items-center gap-3 text-sm text-slate-400">
                            <Phone size={15} className="text-[#00AEEF] shrink-0" />
                            +91 98765 43210
                        </li>
                        <li className="flex items-center gap-3 text-sm text-slate-400">
                            <Mail size={15} className="text-[#00AEEF] shrink-0" />
                            admissions@ophthall.in
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
                <p>© {new Date().getFullYear()} Ophthall Academy of Vision. All rights reserved.</p>
                <div className="flex gap-5">
                    <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
