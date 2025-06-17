"use client"

import Image from "next/image";

export default function Waiting() {

    const waiting = [
        "/images/wait_room/room-1.jpg",
        "/images/wait_room/room-2.jpg",
    ];


    return (
        <section className="py-20 bg-black text-white">



            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Sala de Espera</h2>
                    <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                        Nuestra sala de espera es un espacio acogedor y cómodo donde nuestros clientes pueden relajarse y esperar su turno, donde disfrutaras de una seccion de juegos y un ambiente acogedor.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                        {waiting.map((person, index) => (
                            <div key={index} className="flex flex-col items-center w-full sm:w-auto max-w-[600px] hover:scale-105 transition-all duration-300">
                                <Image
                                    src={person}
                                    alt={person}
                                    width={600}
                                    height={400}
                                    className="rounded-lg h-full w-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}