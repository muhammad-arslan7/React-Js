import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="sticky  top-0 z-50 w-[95%] m-auto rounded-lg bg-gray-50 shadow-md">
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 flex items-center justify-between">
        
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="https://logosbynick.com/wp-content/uploads/2018/03/final-logo-example.png" 
            alt="Website Logo" 
            className="h-8 w-auto sm:h-12 md:h-16 lg:h-20 mix-blend-multiply"
          />
        </Link>

        <nav className="flex items-center space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
               font-medium transition-colors duration-300
               px-2 py-1 md:px-3 md:py-2
               ${isActive 
                 ? 'text-blue-600 font-bold' 
                 : 'text-gray-600 hover:text-blue-600'
               }`
            }
          >
            Home
          </NavLink>

          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
               font-medium transition-colors duration-300
               px-2 py-1 md:px-3 md:py-2
               ${isActive 
                 ? 'text-blue-600 font-bold' 
                 : 'text-gray-600 hover:text-blue-600'
               }`
            }
          >
            About
          </NavLink>

          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              `text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
               font-medium transition-colors duration-300
               px-2 py-1 md:px-3 md:py-2
               ${isActive 
                 ? 'text-blue-600 font-bold' 
                 : 'text-gray-600 hover:text-blue-600'
               }`
            }
          >
            Services
          </NavLink>

          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
               font-medium transition-colors duration-300
               px-2 py-1 md:px-3 md:py-2
               ${isActive 
                 ? 'text-blue-600 font-bold' 
                 : 'text-gray-600 hover:text-blue-600'
               }`
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;