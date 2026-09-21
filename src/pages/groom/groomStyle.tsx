import { useGroomingStyle } from './groom.condition'
export default function GroomStyle(){
    const {
        groomingStylesData, 
        filteredData,
        selectedMaintenance, 
        setSelectedMaintenance, 
        maintenanceOptions 
    } = useGroomingStyle()
    return (
        <div className='border-b p-2 border-stone-200 shadow-xs'> 
            <div className='max-w-6xl mx-auto p-4 '>
                <header className='mb-6 text-center'>
                    <span className='text-3xl font-bold text-stone-800'>You'r Pet style</span>
                    <p className='text-stone-600 mt-2'>Explore our popular cuts tailored for your pet's look and comfort.</p>
                </header>
                <div className='p-2'>
                    <span>Filter : </span>
                    {maintenanceOptions.map((option) => (
                        <button
                            key={option}
                            onClick={() =>setSelectedMaintenance(option)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                selectedMaintenance === option
                                    ? 'bg-stone-800 text-white shadow'
                                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                            }`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {/* {groomingStylesData.map((r) => (
            
                        <div key={r.id} className="p-2">
                            <img src={r.image}
                                alt="style_image_1" 
                                className="border border-stone-200 shadow-md rounded"    
                            />
                            <div>
                                <span>{r.description}</span>
                            </div>
                        </div>
                    ))} */}
                
                {filteredData.length > 0 ? (
                        filteredData.map((r) => (
                            <div  key={r.id} className="bg-white border border-stone-200 shadow-md rounded-lg overflow-hidden flex flex-col">
                                <div className="h-48 w-full overflow-hidden bg-stone-100">
                                    <img 
                                        src={r.image} 
                                        alt={r.name} 
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"    
                                    />
                                </div>
                                <div className='p-5 flex flex-col flex-grow'>
                                    <div className="flex justify-between items-start mb-2">
                                        <h2 className="text-xl font-semibold text-stone-800">{r.name}</h2>
                                        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                                            r.maintenance === 'Low' ? 'bg-green-100 text-green-800' :
                                            r.maintenance === 'Medium' ? 'bg-amber-100 text-amber-800' : 
                                            'bg-rose-100 text-rose-800'
                                        }`}>
                                            {/* {r.maintenance} Maintenance */}
                                        </span>
                                    </div>
                                    <p className="text-sm font-medium text-stone-500 italic mb-3">"{r.tagline}"</p>
                                    <p className="text-sm text-stone-600 mb-4 flex-grow">{r.description}</p>

                                    <div className="border-t border-stone-100 pt-3 mt-auto text-xs text-stone-500">
                                        <p className="mb-1">
                                            <strong className="text-stone-700">Popular Cut:</strong> {r.popularCut}
                                        </p>
                                        <p>
                                            <strong className="text-stone-700">Best For:</strong> {r.suitableBreeds.join(', ')}
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                        ))
                ) : (
                        <div className="col-span-full text-center py-12 text-stone-500">
                            No grooming styles found for this maintenance level.
                        </div>
                )}
                    
                </section>
            </div>
            
        </div>
    )
}