"use client"

import CardComponent from "@/components/cards/CardComponent";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function ServicesBarber() {

    const categorys = [
        "Servicio más popular",
        "Cortes",
        "Pack tratamiento",
        "Facial",
    ];

    const services = [
        {
            name: "Corte de Pelo",
            category: "Servicio más popular",
            price: 10,
            time: "40 min",
            onReserve: () => { console.log("Reservado") }
        },
        {
            name: "Corte semanal + barba",
            category: "Servicio más popular",
            price: 20,
            time: "40 min",
            onReserve: () => { console.log("Reservado") }
        },
        {
            name: "Corte + barba",
            category: "Servicio más popular",
            price: 23,
            time: "50 min",
            onReserve: () => { console.log("Reservado") }
        },
        {
            name: "Corte de Pelo",
            category: "Cortes",
            price: 16,
            time: "40 min",
            onReserve: () => { console.log("Reservado") }
        },
        {
            name: "Corte de niño (hasta 10 años)",
            category: "Cortes",
            price: 12,
            time: "30 min",
            onReserve: () => { console.log("Reservado") }
        },
        {
            name: "Corte semanal",
            category: "Cortes",
            price: 13,
            time: "30 min",
            onReserve: () => { console.log("Reservado") }
        },
        {
            name: "Corte jubilado",
            category: "Cortes",
            price: 12,
            time: "30 min",
            onReserve: () => { console.log("Reservado") }
        },
        {
            name: "Color blanco + corte",
            category: "Pack tratamiento",
            price: 60,
            time: "2h 30min",
            onReserve: () => { console.log("Reservado") }
        },
        {
            name: "Permanentes + corte",
            category: "Cortes",
            price: 55,
            time: "2h 30min",
            onReserve: () => { console.log("Reservado") }
        },
        {
            name: "Mecha + corte",
            category: "Cortes",
            price: 55,
            time: "2h 30min",
            onReserve: () => { console.log("Reservado") }
        },
        {
            name: "Barba simple",
            category: "Facial",
            price: 9,
            time: "15min",
            onReserve: () => { console.log("Reservado") }
        },
    ];

    const [categorySelected, setCategorySelected] = useState<string>("Servicio más popular");

    const [servicesFiltered, setServicesFiltered] = useState<any[]>([]);

    const handleCategorySelect = (category: string) => {
        setCategorySelected(category);
    };

    useEffect(() => {
        const filteredServices = services.filter((service) => service.category === categorySelected);
        setServicesFiltered(filteredServices);
    }, [categorySelected]);

    return (

        <section className="py-20 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Servicios</h2>
                    <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                        Nuestros servicios son de calidad y están diseñados para brindar la mejor experiencia posible a nuestros clientes.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex flex-wrap justify-center gap-4">
                {categorys.map((category, index) => (
                    <Button
                        key={index}
                        className="w-[150px] h-[40px] sm:w-[200px] sm:h-[50px] lg:w-[250px] lg:h-[60px] bg-white hover:scale-105 transition-all duration-300 text-black"
                        onClick={() => handleCategorySelect(category)}
                    >
                        {category}
                    </Button>
                ))}
            </div>


            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {servicesFiltered.map((service, index) => (
                    <CardComponent
                        key={index}
                        name={service.name}
                        category={service.category}
                        price={service.price}
                        time={service.time}
                        onReserve={service.onReserve}
                    />
                ))}
            </div>


        </section>

    );
}