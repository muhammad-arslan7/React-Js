import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-50 text-black py-8 mt-auto border-t-2 w-[95%] m-auto rounded-lg border-gray-200 shadow-xl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-around gap-8">
          <div className="flex-1 min-w-[250px]">
            <h3 className="text-xl font-semibold mb-4">About Me</h3>
            <p className="text-gray-600">
              I strive to push the boundaries of what's possible. This is an example website on React Routing
            </p>
          </div>

          <div className="flex-1 min-w-[250px]">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `hover:text-blue-600 transition-colors ${
                        isActive ? "text-blue-600 font-bold" : "text-gray-600"
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      `hover:text-blue-600 transition-colors ${
                        isActive ? "text-blue-600 font-bold" : "text-gray-600"
                      }`
                    }
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/DynamicParams"
                    className={({ isActive }) =>
                      `hover:text-blue-600 transition-colors ${
                        isActive ? "text-blue-600 font-bold" : "text-gray-600"
                      }`
                    }
                  >
                    Dynamic Parameters
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `hover:text-blue-600 transition-colors ${
                        isActive ? "text-blue-600 font-bold" : "text-gray-600"
                      }`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex-1 min-w-[250px]">
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-600 mb-2">
              Email: marslanmushtaq7@gmail.com
            </p>
            <p className="text-gray-600">Phone: +92 329 8169375</p>
          </div>
        </div>

        <div className="text-center mt-8 pt-4 border-t border-gray-200">
          <p className="text-gray-600">
            &copy; 2024 Example Website. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
