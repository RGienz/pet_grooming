import { useState } from "react";

export interface ServicePet {
    title : string
    description : string
    duration : string
    icon : string
    price : string

}

export function useServicePets(){
    const services = [
        {
            title: 'Full Grooming Spa',
            desc: 'Complete pampering including haircut, styling, nail trimming, ear cleaning, and relaxing oatmeal bath.',
            duration: '1.5 - 2 hrs',
            icon: '🐕',
            price: 'From $45'
        },
        {
            title: 'Bath & Brush Refresh',
            desc: 'Ideal between full haircuts. Deep cleaning shampoo, thorough blow-out, and 15-minute brush-out.',
            duration: '45 - 60 mins',
            icon: '🛁',
            price: 'From $30'
        },
        {
            title: 'Nail Care & Grinding',
            desc: 'Stress-free nail clipping and smooth filing to protect your floors and keep paws healthy.',
            duration: '15 mins',
            icon: '🐾',
            price: '$15'
        },
        {
            title: 'De-Shedding Treatment',
            desc: 'Specialized undercoat removal treatment to dramatically reduce shedding around your home.',
            duration: '60 mins',
            icon: '✨',
            price: 'From $40'
        }
    ];

    return {
        services
    }
}