import { useState } from 'react'

export interface groomingInfo {
    name : string
    petName : string
    service : String
    date : string
}

export interface DialogProps {
    openModal: boolean;
    onCloseModal: () => void;
}

// export function dialogAppointment(){
export function dialogAppointment(props: DialogProps){

    // const [ openModal , setOpenModal ] = useState(false)
    const { openModal, onCloseModal } = props;
    const formData  : groomingInfo[] = [
        {
            name : 'test 1',
            petName : 'Chow',
            service : '',
            date : '',
        },
        {
            name : 'test 2',
            petName : 'Labra',
            service : '',
            date : '',
        },
        {
            name : 'test 3',
            petName : 'Chiwa',
            service : '',
            date : '',
        },
        {
            name : 'test 3',
            petName : 'Askal',
            service : '',
            date : '',
        },
    ]

   

    const submitAppointment = () => {
        console.log('SUBMITTED HAHAHA')
    }

    const shouldRender = openModal;




    return {
        openModal,
        formData,
        onCloseModal,
        submitAppointment,
        shouldRender,
        // openDialog,
        // closeDialog

    }
}