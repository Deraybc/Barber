"use client"

import Image from "next/image";
import { useState } from "react";
import { Menu, X, Scissors, Calendar, Phone, MapPin, Clock } from "lucide-react";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { name: "Inicio", href: "/"},
        { name: "Servicios", href: "/servicios" },
        { name: "Nosotros", href: "/nosotros" },
        { name: "Galería", href: "/galeria" },
        { name: "Contacto", href: "/contacto" }
    ];

    return (
        <>
            <nav className="bg-black shadow-2xl border-b border-red-600/30 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo y nombre */}
                        <div className="flex items-center space-x-4">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                                <div className="relative">
                                    <Image
                                        src="/images/logo_nombre.png"
                                        alt="Kyomu Barber Studio Logo"
                                        width={60}
                                        height={60}
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>
                            <div>
                                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                    Kyomu Barber Studio
                                </span>
                                <div className="flex items-center space-x-1 mt-1">
                                    <Scissors className="h-3 w-3 text-red-600" />
                                    <span className="text-xs text-gray-400 uppercase tracking-wider">
                                        Premium Cuts
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Desktop */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="group relative text-gray-300 hover:text-white transition-all duration-300 font-medium py-2"
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-800 group-hover:w-full transition-all duration-300"></div>
                                    <div className="absolute inset-0 bg-red-600/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-md"></div>
                                </a>
                            ))}
                        </div>

                        {/* CTA Buttons Desktop */}
                        <div className="hidden md:flex items-center space-x-3">
                            <a
                                href="tel:+34666188934"
                                className="flex items-center space-x-2 text-gray-300 hover:text-red-400 transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-gray-800/50"
                            >
                                <Phone className="h-4 w-4" />
                                <span className="text-sm font-medium">Llamar</span>
                            </a>

                            <button className="group relative overflow-hidden bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-600/25 border border-red-500/30">
                                <div className="flex items-center space-x-2 relative z-10">
                                    <Calendar className="h-4 w-4" />
                                    <span>Reservar</span>
                                </div>
                                <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-gray-300 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800/50"
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50`}>
                    <div className="px-4 pt-4 pb-6 space-y-3">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300 font-medium border border-transparent hover:border-red-600/30"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}

                        <div className="pt-4 border-t border-gray-700/50 space-y-3">
                            <a
                                href="tel:+123456789"
                                className="flex items-center justify-center space-x-2 w-full text-gray-300 hover:text-red-400 px-4 py-3 rounded-lg transition-colors duration-300 border border-gray-700 hover:border-red-600/50"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Phone className="h-5 w-5" />
                                <span>Llamar Ahora</span>
                            </a>

                            <button className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border border-red-500/30">
                                <div className="flex items-center justify-center space-x-2">
                                    <Calendar className="h-5 w-5" />
                                    <span>Reservar Cita</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}