import { useState } from "react";

export interface ServicePet {
    title : string
    desc : string
    duration : string
    icon : string
    image?: string
    prices: {
        small?: number
        medium?: number
        large?: number
        xl?: number
        xxl?: number
        xxxl?: number
    }

}

export interface ShampooOption {
    id : string
    name : string
    price : number
    image : string
    desc : string
}

export function useServicePets(){
    // const services = [
    const services: ServicePet[] = [
        {
            title: 'Dog Full Grooming Packages',
            desc: 'Complete dog grooming for small, medium, large, XL, 2XL, and 3XL — priced by weight bracket. Includes haircut, bath, and blowdry.',
            duration: '1.5 - 2.5 hrs',
            icon: '🐕',
            prices: { small: 45, medium: 60, large: 80, xl: 95, xxl: 110, xxxl: 130 }
        },
        {
            title: 'Cat Full Grooming Packages',
            desc: 'Professional cat grooming services near you. Packages for cats 5kg and below, and medium cats up to 10kg. Cat haircut and bath included.',
            duration: '1 - 1.5 hrs',
            icon: '🐈',
            prices: { small: 40, medium: 55 }
        },
        {
            title: 'Dematting Service',
            desc: 'Dedicated dematting for dogs and cats with matted coats. Available for all size brackets including larger dogs.',
            duration: '30 - 60 mins',
            icon: '✂️',
            prices: { small: 20, medium: 30, large: 40, xl: 50 }
        },
        {
            title: 'Bath and Blowdry',
            desc: 'Ala carte dog bathing service with blowdry for small, medium, and large breeds. Ideal between full grooming sessions.',
            duration: '45 - 60 mins',
            icon: '🛁',
            prices: { small: 30, medium: 40, large: 55 }
        },
        {
            title: 'Special Cut Add-on',
            desc: 'Breed-specific haircuts such as shih tzu haircut, puppy cut, and other special styling available as an add-on fee.',
            duration: '30 mins',
            icon: '🪮',
            prices: { small: 15, medium: 20, large: 25 }
        },
        {
            title: 'Organic Shampoo Add-on',
            desc: 'Optional organic shampoo upgrade available per grooming session for dogs and cats with sensitive skin.',
            duration: 'N/A',
            icon: '🌿',
            image: 'https://images.unsplash.com/photo-1608248597359-9d7b4d134d13?auto=format&fit=crop&w=150&q=80',
            prices: { small: 10, medium: 10, large: 10 }
        }

        // {
        //     title: 'Full Grooming Spa',
        //     desc: 'Complete pampering including haircut, styling, nail trimming, ear cleaning, and relaxing oatmeal bath.',
        //     duration: '1.5 - 2 hrs',
        //     icon: '🐕',
        //     // price: 'From $45'
        //     prices: { small: 45, medium: 60, large: 80 }
        // },
        // {
        //     title: 'Bath & Brush Refresh',
        //     desc: 'Ideal between full haircuts. Deep cleaning shampoo, thorough blow-out, and 15-minute brush-out.',
        //     duration: '45 - 60 mins',
        //     icon: '🛁',
        //     // price: 'From $30'
        //     prices: { small: 30, medium: 40, large: 55 }
        // },
        // {
        //     title: 'Nail Care & Grinding',
        //     desc: 'Stress-free nail clipping and smooth filing to protect your floors and keep paws healthy.',
        //     duration: '15 mins',
        //     icon: '🐾',
        //     // price: '$15'
        //     prices: { small: 15, medium: 20, large: 25 }
        // },
        // {
        //     title: 'De-Shedding Treatment',
        //     desc: 'Specialized undercoat removal treatment to dramatically reduce shedding around your home.',
        //     duration: '60 mins',
        //     icon: '✨',
        //     // price: 'From $40'
        //     price: ''
        // }
    ]

    const shampoos : ShampooOption[] = [
        {
            id: 'shamp_1',
            name: 'Oatmeal Soothe',
            price: 5,
            image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=150&q=80',
            desc: 'Great for sensitive or itchy skin.'
        },
        {
            id: 'shamp_2',
            name: 'Lavender Calm',
            price: 7,
            image: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&w=150&q=80',
            desc: 'Relaxing aroma therapy wash.'
        },
        {
            id: 'shamp_3',
            name: 'Medicated Anti-Flea',
            price: 10,
            image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=150&q=80',
            desc: 'Deep treatment for pest protection.'
        }
    ]

    const organicShampoos : ShampooOption[] = [
        {
            id: 'org_1',
            name: 'Aloe Vera Organic',
            price: 0,
            image: 'https://premium4pets.shop/cdn/shop/files/15.jpg?v=1787215188&width=1946',
            desc: 'Deeply hydrating organic aloe formula.'
        },
        {
            id: 'org_2',
            name: 'Chamomile Gentle',
            price: 3,
            image: 'https://down-ph.img.susercontent.com/file/sg-11134201-82594-mrftqcfhpyis06',
            desc: 'Soothing organic chamomile for puppies.'
        },
        {
            id: 'org_3',
            name: 'Neem & Tea Tree',
            price: 5,
            image: 'https://tiimg.tistatic.com/fp/1/010/361/dog-cat-pet-shampoo-080.jpg',
            desc: 'Natural antibacterial organic shield.'
        }
    ]

    return {
        services,
        shampoos,
        organicShampoos
    }
}