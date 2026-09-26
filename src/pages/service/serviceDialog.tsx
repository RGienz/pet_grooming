import { useServiceEnquire, type serviceModalProps } from './serviceDialog.condition'

export default function ServiceDialog(props : serviceModalProps){
    const {
        onCloseModal,
        shouldRenderService,
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
    } = useServiceEnquire(props)

    if (!shouldRenderService) return null

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto'>
            <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full my-auto max-h-[90vh] overflow-y-auto">
                
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-stone-900">
                        {selectedService ? `Book: ${selectedService.title}` : 'Form'}
                    </h2>
                    <button onClick={onCloseModal} className="text-stone-400 hover:text-stone-700 font-bold text-xl cursor-pointer">&times;</button>
                </div>

                <form onSubmit={submitServiceAppointment}>
                    <div className='mb-3'>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">Client Name</label>
                        <input 
                            required
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                            name="client_name" 
                            type="text" 
                            placeholder="e.g. Lu Coza" 
                            className="w-full px-3.5 py-2.5 border border-stone-300 rounded-xl text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm" 
                        />
                    </div>

                    <div className='mb-3'>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">Pet Name</label>
                        <input 
                            required
                            value={petName}
                            onChange={(e) => setPetName(e.target.value)}
                            name="pet_name" 
                            type="text" 
                            placeholder="e.g. Max" 
                            className="w-full px-3.5 py-2.5 border border-stone-300 rounded-xl text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm" 
                        />
                    </div>

                    <div className='mb-3'>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">Breed</label>
                        <input 
                            required
                            value={breed}
                            onChange={(e) => setBreed(e.target.value)}
                            name="breed" 
                            type="text" 
                            placeholder="e.g. Golden Retriever / Persian" 
                            className="w-full px-3.5 py-2.5 border border-stone-300 rounded-xl text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm" 
                        />
                    </div>

                    {/* 1. Show Organic Shampoo Formula selection ONLY when Organic Shampoo Add-on is selected */}
                    {selectedService?.title === 'Organic Shampoo Add-on' && (
                        <div className='mb-3'>
                            <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                                Select Organic Shampoo Formula
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {organicShampoos?.map((item) => {
                                    const isSelected = selectedShampoo?.id === item.id;
                                    return (
                                        <div 
                                            key={item.id}
                                            onClick={() => setSelectedShampoo(item)}
                                            className={`border rounded-xl p-2 cursor-pointer flex flex-col items-center text-center transition-all ${
                                                isSelected ? 'border-green-500 bg-green-50 ring-2 ring-green-400' : 'border-stone-200 hover:bg-stone-50'
                                            }`}
                                        >
                                            <img src={item.image} alt={item.name} className="w-10 h-10 object-cover rounded-lg mb-1" />
                                            <span className="text-xs font-semibold text-stone-800 line-clamp-1">{item.name}</span>
                                            <span className="text-[10px] text-green-600">
                                                {item.price === 0 ? 'Included' : `+$${item.price}`}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* 2. Show Standard Shampoo Brand selection ONLY for other services (NOT Organic Shampoo) */}
                    {selectedService?.title !== 'Organic Shampoo Add-on' && (
                        <div className='mb-3'>
                            <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                                Select Shampoo Brand
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {shampoos?.map((shampoo) => {
                                    const isSelected = selectedShampoo?.id === shampoo.id;
                                    return (
                                        <div 
                                            key={shampoo.id}
                                            onClick={() => setSelectedShampoo(shampoo)}
                                            className={`border rounded-xl p-2 cursor-pointer flex flex-col items-center text-center transition-all ${
                                                isSelected ? 'border-orange-500 bg-orange-50 ring-2 ring-orange-400' : 'border-stone-200 hover:bg-stone-50'
                                            }`}
                                        >
                                            <img src={shampoo.image} alt={shampoo.name} className="w-10 h-10 object-cover rounded-lg mb-1" />
                                            <span className="text-xs font-semibold text-stone-800 line-clamp-1">{shampoo.name}</span>
                                            <span className="text-[10px] text-orange-600">+${shampoo.price}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    <div className='mb-3'>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">Appointment Date</label>
                        <input 
                            required
                            type="date" 
                            value={appointmentDate}
                            onChange={(e) => setAppointmentDate(e.target.value)}
                            className="w-full px-3.5 py-2.5 border border-stone-300 rounded-xl text-stone-800 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm bg-white" 
                        />
                    </div>

                    <div className='mb-3'>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">Total Amount</label>
                        <input 
                            name="total" 
                            type="text" 
                            readOnly
                            value={`$${total}.00`} 
                            className="w-full px-3.5 py-2.5 border border-stone-200 bg-stone-50 rounded-xl text-stone-800 font-bold focus:outline-none text-sm" 
                        />
                    </div>

                    <div className="flex justify-end gap-2 mt-4">
                        <button type="button" onClick={onCloseModal} className="px-4 py-2 bg-gray-200 rounded-lg active:scale-95 cursor-pointer">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-orange-500 text-white rounded-lg active:scale-95 cursor-pointer">Submit</button>
                    </div>
                </form>

            </div>
        </div>
    )
}