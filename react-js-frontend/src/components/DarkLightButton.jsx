import React from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'

const DarkLightButton = ({ toggleDarkMode, darkMode }) => {
   console.log(darkMode)
   return (
      <>
         <button type="button"
            onClick={toggleDarkMode}
            className="flex items-center p-2 mr-2 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:text-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-200"
         >
            {
               darkMode ?
                  <HiSun className="w-8 h-8 p-1" /> :
                  <HiMoon className="w-8 h-8 p-1" />

            }

         </button>
      </>
   )
}

export default DarkLightButton