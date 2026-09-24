import { useState } from "react";
import AppointmentDialog from './dialog'

export default function Home() {

    const [isDialogOpen, setIsDialogOpen] = useState(false)


    return (
        <div className="w-full overflow-hidden border-b border-stone-300 py-6">
            <section className="px-4 py-10 sm:px-6 sm:py-14 md:px-10 lg:px-16 xl:px-24 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 ">
               <div className="flex flex-col">
                    <div className="leading-none whitespace-nowrap">
                        <span className="text-[58px] font-bold sm:text-[80px] md:text-[110px] lg:text-[145px] xl:text-[140px] 2xl:text-[180px]">
                        Give
                        </span>{" "}
                        <span className="text-[58px] sm:text-[80px] md:text-[110px] lg:text-[145px] xl:text-[180px]">
                        L<span className="text-red-400">♡</span>ve
                        </span>
                    </div>
            
                    <div className="leading-none">
                        <span className="text-[42px] font-bold sm:text-[55px] md:text-[70px] lg:text-[90px] xl:text-[110px]">
                        To Your
                        </span>
                    </div>
            
                    <div className="leading-none whitespace-nowrap">
                        <span className="text-[58px] sm:text-[80px] md:text-[110px] lg:text-[145px] xl:text-[180px]">
                        L<span className="text-red-400">♡</span>ve
                        </span>{" "}
                        <span className="text-[90px] sm:text-[130px] md:text-[180px] lg:text-[235px] xl:text-[290px]">
                        Pet
                        </span>
                    </div>

                    {/* <div className="mt-6 mb-2">
                        <button className="border px-6 py-3 text-lg sm:text-xl rounded-xl font-bold active:scale-95 cursor-pointer bg-orange-400 hover:bg-orange-500 text-white shadow-lg transition-all">
                            Make An Appointment
                        </button>
                    </div> */}
               </div>


               <div className="w-full lg:w-auto flex justify-center relative">
                  <div className="overflow-hidden rounded-3xl shadow-md">
                      <img 
                          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.muttzwithmannerz.com%2Fwp-content%2Fuploads%2F2019%2F09%2FDog-Grooming-Muttz-with-Mannerz-Stouffville-Markham.jpg&f=1&nofb=1&ipt=bc1928658ad41d8d77fead503e060a5fe59fc55aba459e2e3753c686f855abbd" 
                          alt="Happy dog getting groomed"
                          className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
                      />

                      
                  </div>

                  <div className="absolute -bottom-6 sm:-bottom-8 lg:bottom-6 right-4 sm:right-8">
                      <button  className="px-6 py-4 text-lg sm:text-xl rounded-2xl font-bold active:scale-95 cursor-pointer bg-orange-200 text-stone-900 hover:bg-orange-500 hover:text-white shadow-2xl border border-stone-200 transition-all duration-300">
                          Make An Appointment 🐾
                      </button>
                  </div>
                  
              </div>
            </section>

            <AppointmentDialog openModal={isDialogOpen} onCloseModal={() => setIsDialogOpen(false)} />

              
        </div>
    );
  }
  