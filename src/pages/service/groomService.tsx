import { useServicePets } from './groomService.condition'
export default function GroomService(){
    const {
        services
    } = useServicePets()
    return (
        <div className="p-6 ">
            <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
                <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">What We Offer</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900">Professional Grooming Services</h2>
                <p className="text-stone-600 text-base sm:text-lg">Choose from our comprehensive menu designed to keep your pet healthy, clean, and stylish.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                {services.map((s, idx) => (
                    <div key={idx} className="bg-stone-50 hover:bg-orange-50/30 border border-stone-200 hover:border-orange-300 p-6 rounded-3xl transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md">
                        <div className="flex flex-col gap-4">
                            <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                                {s.icon}
                            </div>
                            <h3 className="font-bold text-stone-900 text-xl">{s.title}</h3>
                            <p className="text-stone-600 text-sm leading-relaxed">{s.desc}</p>
                        </div>
                        <div className="pt-6 mt-6 border-t border-stone-200/60 flex items-center justify-between">
                            <span className="text-xs text-stone-500 font-medium bg-stone-200/60 px-2.5 py-1 rounded-lg">{s.duration}</span>
                            {/* <span className="font-bold text-orange-600 text-base">{s.price}</span> */}
                        </div>
                    </div>
                ))}
            </div>
            <div className='border-b py-6 border-stone-200 shadow-xs'></div>
        </div>
    )
}