import React from 'react'
import useTheme from '../Context/ThemeContext'

function btn() {

    const  onChangeBtn = (e)=>{
        const modeStatus = e.currentTarget.checked
        if (modeStatus) {
            DarkMode()
        } else {
            LightMode()
        }
    }
    const {LightMode, DarkMode , ThemeMode} = useTheme()
  return (
        <div className=" flex mt-[-440px]">
        <p className='font-bold p-2 dark:text-white'>Toggle Theme</p>
        <label className="relative inline-block w-16 h-8">
          <input 
          value=""
          onChange={onChangeBtn}
          checked={ThemeMode === "dark"}
          type="checkbox" 
          className="opacity-0 w-0 h-0 peer" />
          <span className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300 transition duration-400 rounded-full peer-checked:bg-blue-500"></span>
          <span className="absolute left-1 bottom-1 bg-white h-6 w-6 transition duration-400 rounded-full peer-checked:transform peer-checked:translate-x-8 cursor-pointer"></span>
        </label>
      </div>
  )
}

export default btn