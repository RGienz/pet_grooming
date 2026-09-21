import { useState } from 'react';

export function useDrawerState(){
    const [openMenuSelection , setOpenMenuSelection] = useState<boolean>(false)

    const toggleDrawer = () => {
        setOpenMenuSelection(prev => !prev)
    }

    return {
        openMenuSelection,
        toggleDrawer
    }
}