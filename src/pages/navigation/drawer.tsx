import { useDrawerState } from './drawer.condition'
import HomePage from '../home/home'
import Style from '../groom/groomStyle'
import Service from '../service/groomService'

export default function Drawer(){
    const {
        openMenuSelection,
        toggleDrawer
    } = useDrawerState()

    return (
        <div className="w-full bg-stone-50 relative min-h-screen">
            {/* Header: Left-aligned logo/title, Right-aligned login/hamburger, NOTHING in the center */}
            <header className="sticky top-0 flex justify-between items-center border-b px-4 sm:px-6 md:px-8 py-3 border-stone-200 shadow-xs bg-white z-40">
                
                {/* Left Side: Logo and Title */}
                <div className="flex items-center">
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/7965/7965936.png" 
                        alt="header_image_1"
                        className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                    />
                    <span className='ml-4 font-bold text-stone-800 text-sm sm:text-base'>
                        Grooming's / Trim Salon
                    </span>
                </div>

                {/* Right Side (Desktop): Login Button */}
                <div className="hidden md:flex items-center">
                    <button className="px-4 py-2 rounded-xl border border-orange-200 bg-orange-50 hover:bg-orange-100 text-orange-600 font-semibold text-sm transition-all cursor-pointer shadow-xs">
                        Login
                    </button>
                </div>

                {/* Right Side (Mobile): Login Button & Toggle Menu */}
                <div className='md:hidden flex items-center gap-2'>
                    <button className="px-3 py-1.5 rounded-lg border border-orange-200 bg-orange-50 font-semibold text-xs text-orange-600 shadow-xs">
                        Login
                    </button>
                    
                    <button 
                        onClick={toggleDrawer} 
                        className="p-2 text-stone-600 hover:text-stone-900 focus:outline-none cursor-pointer" 
                        aria-label="Toggle Menu"
                    >
                        <svg className="w-6 h-6 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d={openMenuSelection ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                        </svg>
                    </button>
                </div>
            </header>

            {/* Mobile Dropdown Menu Drawer */}
            {openMenuSelection && (
                <div className="md:hidden bg-white border-b border-stone-200 px-6 py-4 flex flex-col gap-3 shadow-md z-35 fixed top-[65px] left-0 w-full animate-fadeIn">
                    <a href="#service" onClick={toggleDrawer} className="text-[18px] text-stone-600 font-semibold py-1 hover:text-orange-500">Services</a>
                    <a href="#style" onClick={toggleDrawer} className="text-[18px] text-stone-600 font-semibold py-1 hover:text-orange-500">Grooming Style</a>
                    <div className="text-[18px] text-stone-400 font-semibold py-1">Location</div>
                    <div className="text-[18px] text-stone-400 font-semibold py-1">About Us</div>
                </div>
            )}

            {/* Main Sections */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-24 space-y-16 pt-8">
                <section id="home" className="scroll-mt-24">
                    <HomePage />
                </section>
                <section id="service" className="scroll-mt-24">
                    <Service />
                </section>
                <section id="style" className="scroll-mt-24">
                    <Style />
                </section>
            </main>
        </div>
    )
}