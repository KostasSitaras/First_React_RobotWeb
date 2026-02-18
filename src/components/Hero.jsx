import 'boxicons/css/boxicons.min.css';

const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row 
    items-center justify-between min-h-[calc(90vh-6rem)]">
        
        <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" 
            className="max-w-xl ml-[5%] z-10 mt-[90%]
            md:mt-[60%] lg:mt-0">
            
            <div className='relative w-[95%] sm:w-48 h-10
            bg-gradient-to-r from-[#656565] to-[#e99b63]
            shadow-[0_0_15px_rgba(255,255,255,0.4)]
            rounded-full'>
                <div className='absolute inset-[2px] 
                bg-black rounded-full flex items-center
                justify-center gap-1 '>
                    INTRODUCING
                </div>
            </div>
            {/* Main Heading  */}
            <h1 className='text-3xl sm:text-4xl 
            md:text-5xl lg:text-6xl font-semibold
            tracking-wider my-8'>
                Email for
                <br />
                Developers
            </h1>
            {/* Description  */}
            <p className='text-base sm:text-lg
            tracking-wider text-gray-400 max-w-[25rem]
            lg:max-w-[30rem]'>
                πρεπει να κατσω να γραψω κατι για το τι κανει η εφαρμογη αλλα δεν ξερω τι ακριβως να γραψω
            </p>
            
            {/* Call to Action Button i dont know if i want to use it */}
            <div>
                <a href="#">

                </a>
            </div>


        </div>
    </main>
  )
}

export default Hero