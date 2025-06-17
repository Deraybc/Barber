"use client"

import Image from "next/image";

export default function People() {

    const people = [{
        "name": "Andy",
        "image": "/images/people/primo.jpg"
    }];


    return (
        <section className="py-20 bg-black text-white border-b border-red-500">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">💈 Nuestros Barberos 💈</h2>
                    <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                        Nuestros barberos son expertos en su campo y están comprometidos con brindar la mejor experiencia posible a nuestros clientes.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                        {people.map((person, index) => (
                            <div key={index} className="flex flex-col items-center w-full sm:w-auto max-w-[250px] hover:scale-105 transition-all duration-300">
                                <Image
                                    src={person.image}
                                    alt={person.name}
                                    width={200}
                                    height={200}
                                    className="w-full h-auto max-w-[250px] rounded-lg mb-2"
                                />
                                <span className="text-base sm:text-lg font-bold text-center px-2">
                                    {person.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}