"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardAction,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";

interface CardProps {
    name: string;
    category: string;
    price: number;
    time: string;
    onReserve?: () => void;
}

export default function CardComponent({
    name,
    category,
    price,
    time,
    onReserve,
}: CardProps) {
    return (
        <Card className="rounded-lg overflow-hidden hover:scale-102 transition-all duration-300 mb-4">
            <CardHeader className="flex flex-row justify-between items-start">
                <div className="flex flex-col">
                    <CardTitle className="text-xl font-bold">{name}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground uppercase tracking-wide">
                        {category}
                    </CardDescription>
                </div>
                <div className="flex flex-col items-end text-right ml-4">
                    <span className="text-xl font-bold text-primary">
                        {price.toFixed(2)} €
                    </span>
                    <span className="text-sm font-medium text-primary">
                        {time}
                    </span>
                </div>
            </CardHeader>
            <CardContent>
                
            </CardContent>
            <CardAction className="p-4 pt-0">
                <Button
                    onClick={onReserve}
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                >
                    Reservar
                </Button>
            </CardAction>
        </Card>
    );
}