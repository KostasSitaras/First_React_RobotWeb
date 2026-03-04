import React from 'react'
import Typewriter from 'typewriter-effect';

export const Projects = () => {
  return (
    <div>
        <h1 className='text-1xl sm:text-2xl 
            md:text-3xl lg:text-4xl font-semibold
            tracking-wider my-8'>
                Nothing to see here... 
        </h1>
            {/* Description  */}
        <p className='text-base sm:text-lg
            tracking-wider text-gray-400 max-w-[25rem]
            lg:max-w-[30rem]'>
                <Typewriter options={{
                    strings: ['Just a work in progress. ',' Just a work in progress. ','Just a work in progress. ','Just a work in progress. '],
                    autoStart: true,
                    loop:true,
                    cursor:'_',
                } }  />
        </p>
            
            

       
    </div>
  )
}
export default Projects;
