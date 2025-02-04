import React from 'react'

function Home() {
  return (
    <div className='min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto mb-12'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl'>
            Welcome to Our Blog
          </h1>
          <p className='mt-3 text-xl text-gray-500 sm:mt-4'>
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
        </div>
      </div>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img 
              src="https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=" 
              alt="Blog post" 
              className='w-full h-48 object-cover '
            />
            <div className='p-6'>
              <h2 className='text-xl font-semibold text-gray-900 mb-2'>
                Exploring Nature's Beauty
              </h2>
              <p className='text-gray-600 mb-4'>
                Discover the hidden wonders of nature and the amazing stories behind them.
              </p>
              <div className='text-sm text-gray-500'>
                Posted on March 15, 2024
              </div>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img 
              src="https://cdn.britannica.com/84/203584-050-57D326E5/speed-internet-technology-background.jpg" 
              alt="Blog post" 
              className='w-full h-48 object-cover'
            />
            <div className='p-6'>
              <h2 className='text-xl font-semibold text-gray-900 mb-2'>
                Future of Technology
              </h2>
              <p className='text-gray-600 mb-4'>
                Exploring the latest trends and innovations in the tech world.
              </p>
              <div className='text-sm text-gray-500'>
                Posted on March 14, 2024
              </div>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <img 
              src="https://canadianfoodfocus.org/wp-content/uploads/2021/03/cultural-cuisine.jpg" 
              alt="Blog post" 
              className='w-full h-48 object-cover'
            />
            <div className='p-6'>
              <h2 className='text-xl font-semibold text-gray-900 mb-2'>
                Culinary Adventures
              </h2>
              <p className='text-gray-600 mb-4'>
                Journey through different cuisines and food cultures around the world.
              </p>
              <div className='text-sm text-gray-500'>
                Posted on March 13, 2024
              </div>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <div className='bg-gray-50'>
              <img 
                src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb"
                alt="Blog post" 
                className='w-full h-48 object-cover'
              />
            </div>
            <div className='p-6'>
              <h2 className='text-xl font-semibold text-gray-900 mb-2'>
                Mindful Living
              </h2>
              <p className='text-gray-600 mb-4'>
                Explore practices for a more balanced and conscious lifestyle.
              </p>
              <div className='text-sm text-gray-500'>
                Posted on March 12, 2024
              </div>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <div className='bg-gray-50'>
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
                alt="Blog post" 
                className='w-full h-48 object-cover'
              />
            </div>
            <div className='p-6'>
              <h2 className='text-xl font-semibold text-gray-900 mb-2'>
                Digital Art Revolution
              </h2>
              <p className='text-gray-600 mb-4'>
                How AI and digital tools are reshaping creative expression.
              </p>
              <div className='text-sm text-gray-500'>
                Posted on March 11, 2024
              </div>
            </div>
          </div>

          <div className='bg-white rounded-lg shadow-md overflow-hidden'>
            <div className='bg-gray-50'>
              <img 
                src="https://images.unsplash.com/photo-1511649475669-e288648b2339"
                alt="Blog post" 
                className='w-full h-48 object-cover'
              />
            </div>
            <div className='p-6'>
              <h2 className='text-xl font-semibold text-gray-900 mb-2'>
                Remote Work Culture
              </h2>
              <p className='text-gray-600 mb-4'>
                Building effective teams in the digital workspace era.
              </p>
              <div className='text-sm text-gray-500'>
                Posted on March 10, 2024
              </div>
            </div>
          </div>
        </div>

        <div className='mt-16 bg-white rounded-lg shadow-md overflow-hidden'>
          <div className='md:flex flex-row-reverse'>
            <div className='md:flex-shrink-0'>
              <div className='bg-gray-50'>
                <img 
                  src="https://images.unsplash.com/photo-1507413245164-6160d8298b31"
                  alt="Featured post" 
                  className='h-48 w-full object-cover md:h-full md:w-96'
                />
              </div>
            </div>
            <div className='p-8'>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
                Featured: Innovation Hub
              </h2>
              <p className='text-gray-600 mb-4'>
                Discover groundbreaking innovations that are shaping our future. From sustainable 
                technology to revolutionary scientific breakthroughs, we explore the cutting-edge 
                developments that promise to transform our world.
              </p>
              <div className='text-sm text-gray-500'>
                Posted on March 17, 2024
              </div>
            </div>
          </div>
        </div>

        <div className='mt-16 bg-white rounded-lg shadow-md overflow-hidden'>
          <div className='p-8 text-center'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
              Stay Updated
            </h2>
            <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
              Get the latest stories and updates delivered straight to your inbox.
            </p>
            <div className='flex max-w-md mx-auto gap-4 flex-col sm:flex-row'>
              <input
                type="email"
                placeholder="Enter your email"
                className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              <button className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home