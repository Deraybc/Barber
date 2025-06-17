"use client"

import React from 'react';
import { Facebook, Instagram, Scissors, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-950 pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div className="flex items-center mb-6">
                            <Scissors className="w-6 h-6 mr-2 text-white" />
                            <span className="text-xl font-bold text-white">Kyomu Barber Studio</span>
                        </div>
                        <p className=" mb-6 text-white">
                            Kyomu Barber Studio es un espacio de barbería que ofrece servicios de barbería de calidad y un ambiente acogedor para todos los clientes.
                        </p>
                        <div className="flex space-x-4 text-white">
                            <a href="#" className="hover:text-blue-600 transition-colors duration-300">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="hover:text-blue-600 transition-colors duration-300">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="hover:text-blue-600 transition-colors duration-3  00">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Recursos</h3>
                        <ul className="space-y-3 text-white">
                            <li>
                                <a href="#" className=" hover:text-blue-600 transition-colors duration-300">
                                    Contactanos
                                </a>
                            </li>
                            <li>
                                <a href="#" className=" hover:text-blue-600 transition-colors duration-300">
                                    Horario de Atencion
                                </a>
                            </li>
                            <li>
                                <a href="#" className=" hover:text-blue-600 transition-colors duration-300">
                                    Ubicacion
                                </a>
                            </li>
                            <li>
                                <a href="#" className=" hover:text-blue-600 transition-colors duration-300">
                                    Precios
                                </a>
                            </li>
                            <li>
                                <a href="#" className=" hover:text-blue-600 transition-colors duration-300">
                                    Reseñas
                                </a>
                            </li>
                        </ul>
                    </div>


                </div>

                <div className="border-t border-gray-200 pt-8">
                    <p className="text-white text-center">
                        © {new Date().getFullYear()} Kyomu Barber Studio. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 