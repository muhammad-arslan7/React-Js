import React from 'react';
import Profile from '../assests/profile.png'

function Contact() { 
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Let's Connect!</h1>
          <p className="text-lg text-gray-600">
            Thank you for exploring my example website! I'm always excited to connect with new people
            and discuss potential collaborations. Feel free to reach out through any of the Platforms below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center ">
          <div className="animate-slideLeft ">
            <img 
              src={Profile}
              alt="Profile"
              className="w-64 h-64 rounded-full mx-auto shadow-lg bg-gradient-to-r from-gray-200 via-gray-50 to-gray-200"
            />
          </div>

          <div className="space-y-6 animate-slideRight">
            <div className="grid gap-4">
              <a
                href="https://github.com/muhammad-arslan7"
                className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg" 
                  alt="GitHub"
                  className="w-6 h-6 mr-3"
                />
                <span className="text-gray-700">Follow me on GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-arslan-06759b281/"
                className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg" 
                  alt="LinkedIn"
                  className="w-6 h-6 mr-3"
                />
                <span className="text-gray-700">Connect on LinkedIn</span>
              </a>

              <a
                href="https://www.instagram.com/muhammad_arslan7_/" 
                className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/instagram.svg" 
                  alt="Instagram"
                  className="w-6 h-6 mr-3"
                />
                <span className="text-gray-700">Follow on Instagram</span>
              </a>

              <a
                href="https://wa.me/+923298169375"
                className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/whatsapp.svg" 
                  alt="WhatsApp"
                  className="w-6 h-6 mr-3"
                />
                <span className="text-gray-700">Chat on WhatsApp</span>
              </a>

              <a
                href="mailto:marslanmushtaq7@gmail.com"
                className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/gmail.svg" 
                  alt="Email"
                  className="w-6 h-6 mr-3"
                />
                <span className="text-gray-700">Send me an email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Contact;