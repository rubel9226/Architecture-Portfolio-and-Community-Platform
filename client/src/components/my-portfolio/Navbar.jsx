export const NavbarPortfolio = ({activeSection, mobileMenuOpen, setMobileMenuOpen, name}) => {
    return (
        <div> 
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1a]/85 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <a href="#home" className="text-xl font-bold tracking-tight">
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-pink-500 uppercase">{name}</span>{" "}
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
                        {[
                            { id: "home", label: "Home" },
                            { id: "about", label: "About" },
                            { id: "skills", label: "Skills" },
                            { id: "projects", label: "Projects" },
                            { id: "contact", label: "Contact" },
                        ].map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className={`transition-colors duration-200 ${
                            activeSection === link.id
                                ? "text-blue-500 font-semibold"
                                : "hover:text-accent-blue"
                            }`}
                        >
                            {link.label}
                        </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            className="hidden sm:inline-block px-6 py-2 bg-gradient-primary rounded-full text-sm font-semibold hover:opacity-90 transition-opacity text-white text-center bg-linear-to-r from-blue-500 to-pink-500"
                            href="#contact"
                        >
                            Hire Me
                        </a>
                        
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-slate-300 hover:text-white focus:outline-none p-2"
                            aria-label="Toggle menu"
                        >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {mobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                            ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            )}
                        </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Dropdown */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-[#0a0f1a] border-b border-white/10 px-6 py-4 flex flex-col space-y-4">
                        {[
                            { id: "home", label: "Home" },
                            { id: "about", label: "About" },
                            { id: "skills", label: "Skills" },
                            { id: "projects", label: "Projects" },
                            { id: "contact", label: "Contact" },
                        ].map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`text-base font-medium transition-colors ${
                            activeSection === link.id
                                ? "text-accent-blue font-semibold"
                                : "text-slate-300 hover:text-white"
                            }`}
                        >
                            {link.label}
                        </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="w-full py-2.5 text-center bg-gradient-to-r from-accent-blue to-accent-pink rounded-full text-sm font-semibold text-white hover:opacity-90 block"
                        >
                            Hire Me
                        </a>
                    </div>
                )}
            </nav>
        </div>
    );
};