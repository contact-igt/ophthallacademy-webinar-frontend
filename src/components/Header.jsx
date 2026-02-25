import { useState } from 'react';
import { X, Menu, ChevronRight } from 'lucide-react';
import logo from '../assets/ophthall-logo.png';

const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Topics', href: '#topics' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'FAQ', href: '#faq' },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <header className="w-full bg-white sticky top-0 z-50 border-b border-slate-100 shadow-[0_1px_12px_rgba(0,0,0,0.06)]">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-6">

                    {/* Logo */}
                    <a href="#" className="flex items-center shrink-0">
                        <img src={logo} alt="Ophthall Academy" className="h-10 w-auto object-contain" />
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-7 text-[13.5px] font-medium text-slate-600">
                        {navLinks.map(link => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="hover:text-[#0c2b4d] transition-colors duration-150"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <a
                        href="#register"
                        className="hidden lg:inline-flex items-center gap-2 bg-[#f47920] hover:bg-[#e06710] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-150 shadow-sm"
                    >
                        Register Now
                        <ChevronRight size={15} />
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="lg:hidden p-2 text-[#0c2b4d] hover:bg-slate-50 rounded-md transition-colors"
                        aria-label="Open navigation menu"
                    >
                        <Menu size={22} />
                    </button>
                </div>
            </header>

            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 z-[100] lg:hidden flex flex-col bg-[#0c2b4d] transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                {/* Top Bar */}
                <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                        <svg width="30" height="16" viewBox="0 0 100 50">
                            <path d="M5,25 Q50,0 95,25 Q50,50 5,25 Z" fill="none" stroke="white" strokeWidth="5" />
                            <path d="M30,25 Q60,10 90,35" fill="none" stroke="#00AEEF" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                        <span className="text-sm font-bold text-white tracking-wide">Ophthall Academy</span>
                    </div>
                    <button
                        onClick={closeMenu}
                        className="w-9 h-9 rounded-lg border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                        aria-label="Close menu"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col px-6 py-8 gap-1">
                    {navLinks.map((link, idx) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={closeMenu}
                            className="flex items-center justify-between py-4 border-b border-white/10 text-white text-lg font-medium hover:text-[#00AEEF] transition-colors"
                            style={{
                                opacity: menuOpen ? 1 : 0,
                                transform: menuOpen ? 'none' : 'translateX(16px)',
                                transition: `opacity 0.3s ease ${idx * 50}ms, transform 0.3s ease ${idx * 50}ms`,
                            }}
                        >
                            {link.label}
                            <ChevronRight size={16} className="opacity-40" />
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <div className="px-6 pb-10 mt-auto">
                    <a
                        href="#register"
                        onClick={closeMenu}
                        className="flex items-center justify-center gap-2 w-full bg-[#f47920] hover:bg-[#e06710] text-white font-semibold py-4 rounded-xl transition-colors text-base"
                    >
                        Register Now — ₹99 Only
                    </a>
                </div>
            </div>
        </>
    );
};

export default Header;
