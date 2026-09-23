import { useState } from "react"

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
}

export function serviceEnquire(props : serviceModalProps){

    const { openModalServ, onCloseModal } = props
    

    const shouldRenderService = openModalServ

    return {
        openModalServ,
        onCloseModal,
        shouldRenderService

    }
}