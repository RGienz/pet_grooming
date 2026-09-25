import { useState } from "react";
import AppointmentDialog from './dialog'

export default function Home() {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    return (
        <div className="w-full overflow-hidden border-b border-stone-300 py-6">
            <section className="max-w-7xl mx-auto px-4 py-8 sm:px-6 sm:py-12 md:px-10 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
               
               {/* Left Text Container (Untouched) */}
               <div className="flex flex-col shrink-0">
                    <div className="leading-none whitespace-nowrap">
                        <span className="text-[72px] font-bold sm:text-[70px] lg:text-[90px] xl:text-[150px]">
                        Give
                        </span>{" "}
                        <span className="text-[62px] sm:text-[70px] lg:text-[90px] xl:text-[150px]">
                        L<span className="text-red-400">♡</span>ve
                        </span>
                    </div>
            
                    <div className="leading-none my-1">
                        <span className="text-[32px] font-bold sm:text-[50px] lg:text-[65px] xl:text-[80px]">
                        To Your
                        </span>
                    </div>
            
                    <div className="leading-none whitespace-nowrap">
                        <span className="text-[62px] sm:text-[70px] lg:text-[90px] xl:text-[150px]">
                        L<span className="text-red-400">♡</span>ve
                        </span>{" "}
                        <span className="text-[60px] sm:text-[100px] lg:text-[140px] xl:text-[170px]">
                        Pet
                        </span>
                    </div>
               </div>

               {/* Right Image Container with Centered Button */}
               <div className="w-full lg:w-auto flex flex-col items-center relative mt-6 lg:mt-0">
                  <div className="overflow-hidden rounded-3xl shadow-md relative">
                      {/* <img 
                          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.muttzwithmannerz.com%2Fwp-content%2Fuploads%2F2019%2F09%2FDog-Grooming-Muttz-with-Mannerz-Stouffville-Markham.jpg&f=1&nofb=1&ipt=bc1928658ad41d8d77fead503e060a5fe59fc55aba459e2e3753c686f855abbd" 
                          alt="Happy dog getting groomed"
                          className="w-full max-w-sm sm:max-w-md lg:max-w-sm xl:max-w-md h-[350px] sm:h-[450px] lg:h-[500px] object-cover"
                      /> */}
                      <img 
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKAvv17kiuQEKWZB8H-r4D4skEbd4uX40eC0P0k5gO-Mz3576UR1rUqyEi&s=10" 
                          alt="Happy dog getting groomed"
                          className="w-full max-w-sm sm:max-w-md lg:max-w-sm xl:max-w-md h-[350px] sm:h-[450px] lg:h-[500px] object-cover"
                      />
                      
                      {/* Horizontally centered button overlaying the bottom section of the image */}
                      {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-11/12 max-w-[280px] sm:max-w-xs flex justify-center">
                          <button 
                              onClick={() => setIsDialogOpen(true)}
                              className="w-full py-3.5 text-base sm:text-lg rounded-2xl font-bold active:scale-95 cursor-pointer bg-orange-500 text-white hover:bg-orange-600 shadow-2xl border-2 border-white transition-all duration-300 text-center"
                          >
                              Make An Appointment 🐾
                          </button>
                      </div> */}
                  </div>
               </div>
            </section>

            <AppointmentDialog openModal={isDialogOpen} onCloseModal={() => setIsDialogOpen(false)} />
        </div>
    );
}