import { useState } from 'react';

export interface GroomingStyleItem {
    id: string;
    name: string;
    tagline: string;
    description: string;
    suitableBreeds: string[];
    maintenance: 'Low' | 'Medium' | 'High';
    image: string;
    popularCut: string;
}

export function useGroomingStyle() {
    const groomingStylesData: GroomingStyleItem[] = [
        {
            id: 'teddy-bear',
            name: 'Teddy Bear Cut',
            tagline: 'Fluffy, round, and irresistibly cute',
            description: 'Keeps the fur at a uniform medium length across the body and rounds the face into a soft, cuddly teddy bear appearance. Perfect for breeds with dense, curly coats.',
            suitableBreeds: ['Shih Tzu', 'Poodle', 'Bichon Frise', 'Maltese mixes'],
            maintenance: 'Medium',
            image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800',
            popularCut: 'Face & Body Uniform Trim'
        },
        {
            id: 'puppy-cut',
            name: 'The Classic Puppy Cut',
            tagline: 'Low-maintenance and youthful',
            description: 'An all-over short cut that usually leaves hair between 1 to 2 inches long evenly across the entire body. Extremely popular for active dogs who love outdoor adventures.',
            suitableBreeds: ['Golden Retriever', 'Labradoodle', 'Cockapoo', 'Yorkie'],
            maintenance: 'Low',
            image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800',
            popularCut: '1-Inch All Over'
        },
        {
            id: 'lion-cut',
            name: 'The Majestic Lion Cut',
            tagline: 'Bold, regal, and distinctive',
            description: 'Features a shaved body with a magnificent mane around the head and neck, with tufts of fur left at the tail tip. Gives smaller companion dogs a grand, proud look.',
            suitableBreeds: ['Pomeranian', 'Shih Tzu', 'Chow Chow (modified)'],
            maintenance: 'High',
            image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=800',
            popularCut: 'Full Mane & Tail Pom'
        },
        {
            id: 'summer-shave',
            name: 'Summer Breeze Shave',
            tagline: 'Cool, clean, and refreshing',
            description: 'A close clip designed specifically to keep long-haired breeds cool during hot summer months. Greatly reduces matting risk and simplifies post-swim drying.',
            suitableBreeds: ['Siberian Husky mixes', 'Golden Retriever', 'Bernese Mountain Dog'],
            maintenance: 'Low',
            image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800',
            popularCut: 'Close Body Clip'
        },
        {
            id: 'lamb-cut',
            name: 'The Stylish Lamb Cut',
            tagline: 'Sleek body with fluffy legs',
            description: 'Shorter fur on the torso that smoothly transitions into longer, voluminous fur on the legs. It offers a sophisticated silhouette that looks pristine in any dog park.',
            suitableBreeds: ['Poodle', 'Bedlington Terrier', 'Portuguese Water Dog'],
            maintenance: 'Medium',
            image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&q=80&w=800',
            popularCut: 'Blended Leg Flares'
        },
        {
            id: 'asian-fusion',
            name: 'Asian Fusion Style',
            tagline: 'Whimsical, expressive, and trendy',
            description: 'Inspired by Japanese and Korean styling trends. Emphasizes oversized round ears, shortened muzzles, and playful styled leg warmers to maximize cute proportions.',
            suitableBreeds: ['Toy Poodle', 'Maltese', 'Yorkshire Terrier', 'Pomeranian'],
            maintenance: 'High',
            image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800',
            popularCut: 'Rounded Muzzle & Ears'
        }
    ]

    const [selectedMaintenance, setSelectedMaintenance] = useState<string>('All')

    const filteredData = selectedMaintenance === 'All'
        ? groomingStylesData
        : groomingStylesData.filter(style => style.maintenance === selectedMaintenance)

    const maintenanceOptions = ['All', 'Low', 'Medium', 'High']

    return {
        groomingStylesData,
        filteredData,
        selectedMaintenance,
        setSelectedMaintenance,
        maintenanceOptions
    }
}