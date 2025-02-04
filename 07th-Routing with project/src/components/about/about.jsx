import React from 'react'

function About() {
  return (
    <div className='min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8'>
      {/* Header Section */}
      <div className='max-w-7xl mx-auto mb-12'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl'>
            About Our Blog
          </h1>
          <p className='mt-3 text-xl text-gray-500 sm:mt-4'>
            Dedicated to sharing knowledge and inspiring minds across the globe
          </p>
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className='max-w-7xl mx-auto'>
        <div className='bg-white rounded-lg shadow-md overflow-hidden mb-12'>
          <div className='md:flex items-center'>
            <div className='md:flex-1 p-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
                Our Mission
              </h2>
              <p className='text-gray-600 mb-4'>
                We believe in the power of sharing knowledge and ideas. Our platform serves as a bridge 
                connecting thought leaders, experts, and curious minds, fostering a community where 
                learning never stops and inspiration knows no bounds.
              </p>
            </div>
            <div className='md:flex-1'>
              <div className='bg-gray-50'>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                  alt="Team collaboration" 
                  className='w-full h-64 object-cover'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <div className='bg-gray-50'>
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                alt="Team member" 
                className='w-full h-48 object-cover'
              />
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                Sarah Johnson
              </h3>
              <p className='text-gray-600 mb-2'>Founder & Editor-in-Chief</p>
              <p className='text-gray-500 text-sm'>
                With 15 years of experience in digital publishing, Sarah leads our editorial vision.
              </p>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <div className='bg-gray-50'>
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="Team member" 
                className='w-full h-48 object-cover'
              />
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                David Chen
              </h3>
              <p className='text-gray-600 mb-2'>Technical Director</p>
              <p className='text-gray-500 text-sm'>
                David ensures our platform runs smoothly and stays ahead of technological trends.
              </p>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <div className='bg-gray-50'>
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                alt="Team member" 
                className='w-full h-48 object-cover'
              />
            </div>
            <div className='p-6'>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                Emily Martinez
              </h3>
              <p className='text-gray-600 mb-2'>Content Strategist</p>
              <p className='text-gray-500 text-sm'>
                Emily crafts our content strategy and ensures quality across all publications.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className='bg-white rounded-lg shadow-md overflow-hidden mb-12'>
          <div className='p-8'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-8 text-center'>
              Our Impact
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 text-center'>
              <div>
                <div className='text-3xl font-bold text-blue-600 mb-2'>1M+</div>
                <div className='text-gray-600'>Monthly Readers</div>
              </div>
              <div>
                <div className='text-3xl font-bold text-blue-600 mb-2'>5K+</div>
                <div className='text-gray-600'>Published Articles</div>
              </div>
              <div>
                <div className='text-3xl font-bold text-blue-600 mb-2'>100+</div>
                <div className='text-gray-600'>Expert Contributors</div>
              </div>
              <div>
                <div className='text-3xl font-bold text-blue-600 mb-2'>50+</div>
                <div className='text-gray-600'>Countries Reached</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className='bg-white rounded-lg shadow-md overflow-hidden'>
          <div className='p-8'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4 text-center'>
              Get in Touch
            </h2>
            <p className='text-gray-600 mb-6 text-center max-w-2xl mx-auto'>
              Have questions or want to contribute? We'd love to hear from you.
            </p>
            <div className='max-w-md mx-auto'>
              <div className='mb-4'>
                <input
                  type="text"
                  placeholder="Your Name"
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <div className='mb-4'>
                <input
                  type="email"
                  placeholder="Your Email"
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <div className='mb-4'>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                ></textarea>
              </div>
              <button className='w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200'>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About