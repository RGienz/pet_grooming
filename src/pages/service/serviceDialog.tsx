import { serviceEnquire , type serviceModalProps } from './serviceDialog.condition'
export default function ServiceDialog(props : serviceModalProps){
    const {
        onCloseModal,
        shouldRenderService
    } = serviceEnquire(props)

    if (!shouldRenderService) return null

    return (
        <div>
            <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
                <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full ">
                    <h2 className="text-xl font-bold mb-4 text-center ">Form</h2>
                    <div >
                        {/* <div className="flex justify-end gap-2 mt-4">
                            <button onClick={onCloseModal} className="px-4 py-2 bg-gray-200 rounded-lg active:scale-95 cursor-pointer">Cancel</button>
                            <button  className="px-4 py-2 bg-orange-500 text-white rounded-lg active:scale-95 cursor-pointer">Submit</button>
                        </div> */}

                        <div className='mb-3'>
                            <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">Client Name</label>
                            <input 
                                name="client_name" 
                                type="text" 
                                placeholder="e.g. Lu Coza" 
                                className="w-full px-3.5 py-2.5 border border-stone-400 rounded-xl text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm" 
                            />
                        </div>

                        <div className='mb-3'>
                            <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">Pet Name</label>
                            <input 
                                name="pet_name" 
                                type="text" 
                                placeholder="e.g. Max" 
                                className="w-full px-3.5 py-2.5 border border-stone-400 rounded-xl text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm" 
                            />
                        </div>

                        <div className='mb-3'>
                            <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">Breed</label>
                            <input 
                                name="breed" 
                                type="text" 
                                placeholder="e.g. Golden Retriever" 
                                className="w-full px-3.5 py-2.5 border border-stone-400 rounded-xl text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm" 
                            />
                        </div>

                        <div className='mb-3'>
                            <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">Pet's Size</label>
                            <select 
                                name="pet_size" 
                                className="w-full px-3.5 py-2.5 border border-stone-400 rounded-xl text-stone-800 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm cursor-pointer"
                            >
                                <option value="">Select size</option>
                                <option value="small">Small (0 - 25 lbs)</option>
                                <option value="medium">Medium (26 - 50 lbs)</option>
                                <option value="large">Large (51+ lbs)</option>
                            </select>
                        </div>

                        <div className='mb-3'>
                            <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5 ">Total Amount</label>
                            <input 
                                name="total" 
                                type="text" 
                                readOnly
                                placeholder="$0.00" 
                                className="w-full px-3.5 py-2.5 border border-stone-200 bg-stone-50 rounded-xl text-stone-800 font-bold focus:outline-none text-sm" 
                            />
                        </div>
                    </div>

                    <div className="flex justify-center gap-2 mt-4">
                        <button onClick={onCloseModal} className="px-4 py-2 bg-gray-200 rounded-lg active:scale-95 cursor-pointer">Cancel</button>
                        <button  className="px-4 py-2 bg-orange-500 text-white rounded-lg active:scale-95 cursor-pointer">Submit</button>
                    </div>
                    
                  

                </div>
            </div>
        </div>
    )
}