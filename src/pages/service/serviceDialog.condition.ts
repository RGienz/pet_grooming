import { useState , useEffect } from "react"
import type { ServicePet, ShampooOption } from "./groomService.condition"

export interface serviceForm {
    client_name : string
    dog_name : string
    dog_breed : string
    dog_size : string
    service : string
    total : number | null
}

export interface serviceModalProps {
    openModalServ : boolean
    onCloseModal : () =>void
    selectedService: ServicePet | null
    shampoos: ShampooOption[]
    organicShampoos?: ShampooOption[]
}

export function useServiceEnquire(props : serviceModalProps){

    // const { openModalServ, onCloseModal } = props

    const { openModalServ, onCloseModal, selectedService, shampoos , organicShampoos } = props

    const [clientName, setClientName] = useState("")
    const [petName, setPetName] = useState("")
    const [breed, setBreed] = useState("")
    // const [petSize, setPetSize] = useState<"small" | "medium" | "large" | "">("")
    const [petSize, setPetSize] = useState<string>("")
    const [selectedShampoo, setSelectedShampoo] = useState<ShampooOption | null>(shampoos[0] || null)
    const [appointmentDate, setAppointmentDate] = useState("")
    const [total, setTotal] = useState<number>(0)

    // useEffect(() => {
    //     if(!selectedService) return 

    //     let basePrice = 0
    //     if(petSize === "small") basePrice = selectedService.prices.small
    //     else if(petSize === "medium") basePrice = selectedService.prices.medium
    //     else if(petSize === "large") basePrice = selectedService.prices.large
    //     else basePrice = selectedService.prices.small

    //     const shampooPrice = selectedShampoo ? selectedShampoo.price : 0
    //     setTotal(basePrice + shampooPrice)

    // }, [selectedService , petSize , selectedShampoo])

    useEffect(() => {
        if(!selectedService) return 

        if (selectedService.title === 'Organic Shampoo Add-on') {
            setSelectedShampoo(organicShampoos?.[0] || null)
        } else {
            setSelectedShampoo(shampoos?.[0] || null)
        }
    }, [selectedService, shampoos, organicShampoos])

    useEffect(() => {
        if(!selectedService) return 

        let basePrice = 0
        if (petSize && selectedService.prices[petSize as keyof typeof selectedService.prices] !== undefined) {
            basePrice = selectedService.prices[petSize as keyof typeof selectedService.prices] as number
        } else {
            const prices = Object.values(selectedService.prices).filter((p): p is number => typeof p === 'number')
            basePrice = prices.length > 0 ? prices[0] : 0
        }

        const shampooPrice = selectedShampoo ? selectedShampoo.price : 0
        setTotal(basePrice + shampooPrice)

    }, [selectedService , petSize , selectedShampoo])

    const submitServiceAppointment = ( e : React.FormEvent ) => {
        e.preventDefault()
        alert(`Appointment Confirmed!\nClient: ${clientName}\nPet: ${petName}\nDate: ${appointmentDate}\nTotal: $${total}`)
        onCloseModal()
    }
    

    // const shouldRenderService = openModalServ

    return {
        shouldRenderService : openModalServ,
        onCloseModal,
        selectedService,
        shampoos,
        clientName, setClientName,
        petName, setPetName,
        breed, setBreed,
        petSize, setPetSize,
        selectedShampoo, setSelectedShampoo,
        appointmentDate, setAppointmentDate,
        total,
        submitServiceAppointment,
        organicShampoos
        

    }
}