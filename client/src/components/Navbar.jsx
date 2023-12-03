import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

// react-icons
import { FaBarsStaggered, FaBlog, FaXmark } from 'react-icons/fa6';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
  
    // toggle menu
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
      const handleScroll = () => {
        setIsSticky(window.scrollY > 100);
      };
    
      window.addEventListener("scroll", handleScroll);
    
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    

    // nav items
    const navItems = [
      {link: "Home", path: "/"},
      {link: "About", path: "/about"},
      {link: "Shop", path: "/shop"},
      {link: "Sell Your Book", path: "/admin/dashboard"},
      {link: "Blog", path: "/blog"},
    ]    
  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 z-50'>
      <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-sky-200" : ""}`}>
        <div className='flex justify-between items-center text-base gap-8'>
          {/* log */}
          <Link to="/" className='pl-2 text-2xl font-bold text-sky-700 flex items-center gap-2'><FaBlog className='inline-block'/>Books</Link>
        
          {/* nav items for large devices */}

          <ul className='md:flex space-x-12 hidden md:pl-2'>
            {
              navItems.map(({link, path}) => <Link key={path} to={path} className='block text-base text-black font-semibold uppercase cursor-pointer hover:text-sky-900'>{link}</Link>)
            }
          </ul>

          {/* btn for large device */}
          <div className='space-x-12 hidden lg:flex items-center'>
            <button><FaBarsStaggered className='w-5 hover:text-sky-500'/></button>
          </div>


          {/* menu btn for mobiles */}
          <div className='md:hidden'>
              <button onClick={toggleMenu} className='text-black focus:outline-none'>
                {
                  isMenuOpen ? <FaXmark className='h-5 w-5 text-black'/> : <FaBarsStaggered className='h-5 w-5 text-black'/> 
                }
              </button>
          </div>
        </div>  

        {/* nav items for small devices */}
        <div className={`space-y-4 px-4 mt-16 py-7 bg-sky-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
          {
            navItems.map(({link, path}) => <Link key={path} to={path} className='block text-base font-semibold uppercase cursor-pointer hover:text-sky-900 text-white'>{link}</Link>)
          }
        </div>
      </nav>
    </header>
  )
}

export default Navbar