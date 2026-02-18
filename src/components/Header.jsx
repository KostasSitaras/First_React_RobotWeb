import 'boxicons/css/boxicons.min.css';

const Header = () => {
    //simple toggle function for mobile menu
    const toggleMobileMenu = () => {
        // Get the mobile menu element
        const mobileMenu = document.getElementById('mobileMenu');
        // Toggle the 'hidden' class to show/hide the menu
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
        }
    }
  return (
    <header className="flex justify-between 
    items-center py-4 px-4 lg:px-20">
        <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500" className="text-3xl md:text-4xl
        lg:text-5xl font-light m-0">
            KCODE
        </h1>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-12">
            <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" className="text-base tracking-wider
            transition-colors hover:text-gray-300 
            z-50" href="#">
                HOME
                
            </a>

            <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="text-base tracking-wider
            transition-colors hover:text-gray-300 
            z-50" href="#">
                HOME
                
            </a>

            <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000"className="text-base tracking-wider
            transition-colors hover:text-gray-300 
            z-50" href="#">
                HOME
                
            </a>

            <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2500"className="text-base tracking-wider
            transition-colors hover:text-gray-300 
            z-50" href="#">
                HOME
                
            </a>



        </nav>

        {/* Web Button  */}
        <button className="hidden md:block bg-
        [#a7a7a7] text-white py-3 px-8 rounded-full
        border-none font-medium transition-all 
        duration-500 hover:bg-white hover:text-black cursor-pointer
        z-50">
            Download CV
        </button>

        {/* Mobile Button  */}
        <button onClick={toggleMobileMenu} className='md:hidden text-3xl p-2 z-50'>
           <i class='bx bx-menu'></i>
        </button>

        {/* Mobile Navigation Bar  */}
        <div id='mobileMenu'className='hidden fixed top-16 bottom-0 right-0 left-0 p-5
        md:hidden z-40 bg-black bg-opacity-70
        backdrop-blur- md' >
            <nav className='flex flex-col items-center gap-6' >
                <a className="text-base tracking-wider
            transition-colors hover:text-gray-300 
            z-50" href="#">
                HOME
                
            </a>

            <a className="text-base tracking-wider
            transition-colors hover:text-gray-300 
            z-50" href="#">
                HOME
                
            </a>

            <a className="text-base tracking-wider
            transition-colors hover:text-gray-300 
            z-50" href="#">
                HOME
                
            </a>

            <a className="text-base tracking-wider
            transition-colors hover:text-gray-300 
            z-50" href="#">
                HOME
                
            </a> 
            </nav>
        </div>


    </header>
  )
}

export default Header