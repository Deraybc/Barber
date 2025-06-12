"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

const Hero: React.FC = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false })
    )

    const images = [
        "/images/maquinas.png",
        "/images/dentro.jpeg",
        "/images/leds.jpg",
    ]

    const handleBookAppointment = () => {
        // Aquí puedes agregar la lógica para abrir un modal, redirigir a una página de citas, etc.
        alert("¡Redirigiendo a sistema de citas!")
    }

    return (
        <section className="relative h-[60vh] w-full overflow-hidden">
            {/* Carousel de fondo que ocupa toda la pantalla */}
            <Carousel
                plugins={[plugin.current]}
                className="absolute inset-0 w-full h-[60vh]"
                opts={{
                    loop: true,
                }}
            >
                <CarouselContent className="h-[60vh]">
                    {images.map((image, index) => (
                        <CarouselItem key={index} className="h-[60vh]">
                            <div className="relative h-full w-full">
                                <img
                                    src={image}
                                    alt={`Kyomu Barber Studio ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay oscuro para mejor legibilidad del texto */}
                                <div className="absolute inset-0 bg-black/50"></div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Contenido fijo encima del carousel */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
                        Kyomu Barber Studio
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-8 leading-relaxed drop-shadow-lg max-w-3xl mx-auto">
                        Descubre la excelencia en barbería donde tradición y modernidad se encuentran para crear tu estilo perfecto
                    </p>

                    {/* Botón de cita prominente */}
                    <button
                        onClick={handleBookAppointment}
                        className="inline-flex items-center px-10 py-5 text-xl font-bold text-black bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/25 border-2 border-yellow-300"
                    >
                        <svg
                            className="w-6 h-6 mr-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                        PEDIR CITA
                    </button>

                    {/* Información de contacto */}
                    <div className="mt-12 space-y-3">
                        <p className="text-lg text-white/80 drop-shadow">
                            🕒 Lun-Sáb: 9:00 - 20:00 | Dom: 10:00 - 18:00
                        </p>
                        <p className="text-lg text-white/80 drop-shadow">
                            📍 Calle Principal, 123 - Barcelona
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;