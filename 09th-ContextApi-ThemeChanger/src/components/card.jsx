import React from "react"

function Card() {
  return (
    
    <div>
      
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm mt-10 dark:bg-gray-700">
          <img className="w-full h-48 object-cover rounded-sm" src="https://www.ideas.org.au/images/resources/blog/Aircraft.png" alt="Sunset in the mountains" />
          <div className="px-2 py-4">
            <div className="font-bold text-xl mb-2 text-gray-900 dark:text-white">The Coldest Sunset</div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 flex items-center justify-between">
            <span className="inline-block bg-gray-200 rounded-full px-4 py-1 text-sm font-semibold text-gray-700 mb-2 dark:bg-gray-600 dark:text-gray-300">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-4 py-1 text-sm font-semibold text-gray-700 mb-2 dark:bg-gray-600 dark:text-gray-300">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-4 py-1 text-sm font-semibold text-gray-700 mb-2 dark:bg-gray-600 dark:text-gray-300">#nature</span>
          </div>
        </div>
      </div>
  )
}

export default Card