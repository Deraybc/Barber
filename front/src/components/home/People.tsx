"use client"

import Image from "next/image";

export default function People() {

    const people = [
        "/images/people/primo.jpg"
    ];


    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestros Barberos</h2>
                    <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                        Nuestros barberos son expertos en su campo y están comprometidos con brindar la mejor experiencia posible a nuestros clientes.
                    </p>

                    <div className="flex justify-center">
                        {people.map((person, index) => (
                            <Image
                                key={index}
                                src={person}
                                alt={`Person ${index + 1}`}
                                width={200}
                                height={200}
                                className="rounded-lg"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}