import { useState } from 'react';
import { X, Menu, ArrowRight } from 'lucide-react';

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
            <header className="w-full bg-white py-4 px-6 lg:px-12 flex justify-between items-center border-b border-gray-100 z-50 sticky top-0 shadow-sm">
                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <svg width="60" height="30" viewBox="0 0 100 50" className="overflow-visible">
                        <path d="M5,25 Q50,0 95,25 Q50,50 5,25 Z" fill="none" stroke="#0c2b4d" strokeWidth="4" />
                        <path d="M30,25 Q60,10 90,35" fill="none" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    <span className="text-2xl font-extrabold tracking-widest text-[#0c2b4d] uppercase mt-1">
                        OPHTHALL
                    </span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8 text-[13px] font-bold tracking-wider text-[#0c2b4d] uppercase">
                    {navLinks.map((link) => (
                        <a key={link.label} href={link.href} className="hover:text-[#f47920] transition-colors">
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <a
                    href="#register"
                    className="hidden lg:block bg-[#f47920] hover:bg-[#e06b18] text-white font-bold py-2.5 px-8 rounded-full transition-colors shadow-md shadow-orange-200"
                >
                    Register Now
                </a>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMenuOpen(true)}
                    className="lg:hidden relative flex flex-col gap-[5px] cursor-pointer p-2 group"
                    aria-label="Open menu"
                >
                    <span className="block w-6 h-0.5 bg-[#0c2b4d] rounded-full transition-all group-hover:bg-[#f47920]"></span>
                    <span className="block w-4 h-0.5 bg-[#0c2b4d] rounded-full transition-all group-hover:bg-[#f47920] group-hover:w-6"></span>
                    <span className="block w-6 h-0.5 bg-[#0c2b4d] rounded-full transition-all group-hover:bg-[#f47920]"></span>
                </button>
            </header>

            {/* ── Full-Screen Mobile Menu Overlay ── */}
            <div
                className={`fixed inset-0 z-[100] lg:hidden flex flex-col
          transition-all duration-500 ease-in-out
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                style={{ background: 'linear-gradient(135deg, #0c2b4d 0%, #0a2240 60%, #071830 100%)' }}
            >
                {/* Top Bar inside overlay */}
                <div className="flex items-center justify-between px-6 py-5">
                    <div className="flex items-center gap-2">
                        <svg width="44" height="22" viewBox="0 0 100 50" className="overflow-visible">
                            <path d="M5,25 Q50,0 95,25 Q50,50 5,25 Z" fill="none" stroke="white" strokeWidth="4" />
                            <path d="M30,25 Q60,10 90,35" fill="none" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                        <span className="text-lg font-extrabold tracking-widest text-white uppercase">OPHTHALL</span>
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={closeMenu}
                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                        aria-label="Close menu"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Thin orange accent line */}
                <div className="mx-6 h-px bg-gradient-to-r from-[#f47920] via-orange-300 to-transparent mb-2"></div>

                {/* Nav Links */}
                <nav className="flex flex-col px-6 pt-8 gap-2 flex-1">
                    {navLinks.map((link, idx) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={closeMenu}
                            className="group flex items-center justify-between py-4 border-b border-white/10 transition-all"
                            style={{
                                transitionDelay: menuOpen ? `${idx * 60}ms` : '0ms',
                                transform: menuOpen ? 'translateX(0)' : 'translateX(40px)',
                                opacity: menuOpen ? 1 : 0,
                                transition: `transform 0.4s ease ${idx * 60}ms, opacity 0.4s ease ${idx * 60}ms, color 0.2s`,
                            }}
                        >
                            <span className="text-xl font-bold uppercase tracking-widest text-white group-hover:text-[#f47920] transition-colors">
                                {link.label}
                            </span>
                            <ArrowRight
                                size={18}
                                className="text-white/30 group-hover:text-[#f47920] group-hover:translate-x-1 transition-all"
                            />
                        </a>
                    ))}
                </nav>

                {/* Bottom CTA area */}
                <div
                    className="px-6 pb-10 pt-6"
                    style={{
                        opacity: menuOpen ? 1 : 0,
                        transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                        transition: `opacity 0.4s ease 350ms, transform 0.4s ease 350ms`,
                    }}
                >
                    <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-4">Join the webinar</p>
                    <a
                        href="#register"
                        onClick={closeMenu}
                        className="flex items-center justify-center gap-2 w-full bg-[#f47920] hover:bg-[#e06b18] text-white font-bold py-4 rounded-full transition-colors shadow-lg shadow-orange-900/40 text-base"
                    >
                        Save My Spot
                        <ArrowRight size={18} />
                    </a>
                    <p className="text-center text-white/30 text-xs mt-5 font-medium">
                        10 Aug 2026 · 2:00 pm
                    </p>
                </div>
            </div>
        </>
    );
};

export default Header;
