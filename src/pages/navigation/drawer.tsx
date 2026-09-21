import { useDrawerState } from './drawer.condition'
import { NavLink } from 'react-router-dom';
import HomePage from '../home/home'
import Style from '../groom/groomStyle'
import Service from '../service/groomService'
export default function Drawer(){
    const {
        openMenuSelection,
        toggleDrawer
    } = useDrawerState()
    return (
        <div className="w-full bg-stone-50 relative">
           <header className="relative flex justify-between items-center border-b px-3 py-2 sm:px-4 md:px-6 md:py-3 border-stone-200 shadow-xs bg-white z-40" >
                <div className="flex items-center">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F028%2F274%2F744%2Flarge_2x%2Fpet-friendly-icon-pet-paw-or-dog-label-vet-clinic-shop-sticker-for-graphic-design-logo-website-social-media-mobile-app-ui-vector.jpg&f=1&nofb=1&ipt=faa711351c3160cacb0f1e8faacf2866dbc30d292784a3d60823e841f43d9baa" alt="header_image_1"
                        className="h-10 sm:h-14 md:h-16 lg:h-20 w-auto object-contain "
                    />

                    <span></span>

                </div>
                

                <div className="hidden md:flex items-center lg:gap-2">
                    <div className="text-[20px] mr-2 text-stone-400 font-semibold ">Services </div>
                    <div className="text-[20px] mr-2 text-stone-400 font-semibold ">Grooming Style </div>
                    <div className="text-[20px] mr-2 text-stone-400 font-semibold ">Location </div>
                    <div className="text-[20px] mr-5 text-stone-400 font-semibold ">About Us </div>
                    <button className="border p-1 rounded cursor-pointer bg-orange-100 font-semibold">
                        BOOK NOW
                    </button>
                </div>
                <div className='md:hidden flex items-center justify-center '>
                    
                    <button className="border p-1 rounded cursor-pointer bg-orange-100 font-semibold text-[13px]">
                        BOOK NOW
                    </button>

                    <button onClick={toggleDrawer} className="md:hidden p-2 text-stone-600 focus:outline-none cursor-pointer" aria-label="Toggle Menu">
                        <svg className="w-6 h-6 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </header>

            {openMenuSelection && (
                <div className="md:hidden bg-white border-b border-stone-200 px-4 py-4 flex flex-col gap-3 shadow-md z-35 relative">
                    <div className="text-[20px] mr-2 text-stone-400 font-semibold ">Services </div>
                    <div className="text-[20px] mr-2 text-stone-400 font-semibold ">Grooming Style </div>
                    <div className="text-[20px] mr-2 text-stone-400 font-semibold ">Location </div>
                    <div className="text-[20px] mr-5 text-stone-400 font-semibold ">About Us </div>
                
                </div>
            )}

            {/* <main className=" mx-auto px-6 sm:px-12 pt-40 pb-24 space-y-16"> */}
            <main className=" mx-auto px-6 m:px-12 pb-24 space-y-16">
                <section id="home" className="scroll-mt-40">
                    <HomePage />
                </section>
                <section id="service" className="scroll-mt-40">
                    <Service/>
                </section>
                <section id="style" className="scroll-mt-40">
                    <Style />
                </section>
               
       
            </main>
     
        </div>
    )
}