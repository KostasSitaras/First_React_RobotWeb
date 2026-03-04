import 'boxicons/css/boxicons.min.css';
import { stringify } from 'postcss';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row 
    items-center justify-between min-h-[calc(90vh-6rem)]">
        
{/* This is the Home background Gradient And Blur Effect */}        
{/* Gradient Image Right */}
  <img className="absolute top-0 right-0 opacity-60 -z-10" 
  src="gradient.png" alt="Grandient-img" />

{/* Gradient Image Left */}
  <img className="absolute bottom-40 left-0 opacity-60 -z-10 hidden lg:block" 
  src="gradient.png" alt="Grandient-img" />

{/* Blur Effect Right */}
  <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] 
  shadow-[0_0_900px_40px_#e99b63] -rotate-[30deg] -z-10" >
  </div>
{/* Blur Effect Left */}
  <div className="h-0 w-[50rem] absolute top-[55%] left-[-10%] 
  shadow-[0_0_900px_35px_#e99b63] -rotate-[-30deg] -z-10 hidden lg:block" >
  </div>
        
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
                    Home Page
                </div>
            </div>
            {/* Main Heading  */}
            <h1 className='text-3xl sm:text-4xl 
            md:text-5xl lg:text-6xl font-semibold
            tracking-wider my-8'>
                Email for
                <br />
                Developers... 
                
                     
                
            </h1>
            {/* Description  */}
            <p className='text-base sm:text-lg
            tracking-wider text-gray-400 max-w-[25rem]
            lg:max-w-[30rem]'>
                <Typewriter options={{
                    strings: ['Hello World!',' My name is Kostas','I am trying to learn React','Thanks for Joining!'],
                    autoStart: true,
                    loop:true,
                    cursor:'_',
                } }  />
            </p>
            
            {/* Call to Action Button i dont know if i want to use it */}
             {/*{/<div>
                <a href="#">

                </a>
            </div>*/}


        </div>
    </main>
  )
}

export default Hero