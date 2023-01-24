import React, { useState, useEffect } from 'react'
import { FaRegClone } from 'react-icons/fa'
import PasswordScoreBar from '../components/PasswordScoreBar';
import CostumizeControls from '../components/CostumizeControls';
import DarkLightButton from '../components/DarkLightButton';

const PasswordGenerator = () => {

   const [value, setValue] = useState("");
   const [passwordGenerated, setPasswordGenerated] = useState('');

   const [darkMode, setDarkMode] = useState(
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
         window.matchMedia('(prefers-color-scheme: dark)').matches)
   );

   useEffect(() => {
      if (darkMode) {
         document.documentElement.classList.add('dark');
         localStorage.setItem('color-theme', 'dark');
      } else {
         document.documentElement.classList.remove('dark');
         localStorage.setItem('color-theme', 'light');
      }
   }, [darkMode]);

   useEffect(() => {
      setPasswordGenerated('VDXjd2904_23@')
   }, [passwordGenerated])

   const toggleDarkMode = () => {
      if (localStorage.getItem('color-theme')) {
         if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
         } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
         }
      } else {
         if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
         } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
         }
      }
      setDarkMode(!darkMode);
   };


   return (
      <div className="w-full h-screen justify-center items-center bg-gray-50 flex flex-col dark:bg-gray-900">
         {/* container */}
         <div className="w-full md:w-1080 justify-center items-center  bg-white drop-shadow-lg h-840 rounded-2xl flex flex-col px-9 dark:bg-gray-800">
            <div className='self-end'>
               <DarkLightButton
                  toggleDarkMode={toggleDarkMode}
                  darkMode={darkMode}
               />
            </div>

            <div className="w-full p-4 justify-center items-center flex flex-col">
               <h1 className="font-black  text-5xl text-center text-gray-900 dark:text-white">Password Generator</h1>
               <p className="font-normal w-[500px]  my-5 text-center text-gray-500 first-line:max-w-screen-sm mx-auto pb-20 dark:text-gray-300 " >Effortless Password Protection: The Password Generator creates complex, unique passwords for ultimate security.</p>

               <div className="md:w-2/3 relative">
                  <input
                     type="text"
                     value="VDXjd2904_23@"
                     className="bg-gray-100  font-medium appearance-none border-2 border-gray-100
                h-14 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none dark:bg-slate-600 dark:text-gray-200 dark:border-gray-500"
                     readOnly
                  />
                  <div className="absolute top-2 right-5">
                     <FaRegClone className="h-10 w-10 text-gray-600 rounded-lg p-1.5 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-slate-500" />
                  </div>
                  <div className="flex -mx-1">
                     <PasswordScoreBar password={passwordGenerated} />
                  </div>
               </div>

               <CostumizeControls
                  value={value}
                  setValue={setValue}
                  darkMode={darkMode}

               />
               <button
                  type="button"
                  className="text-white w-[230px] bg-sky-400 hover:bg-sky-500
               font-medium
               rounded-lg text-base px-6 py-3.5 mt-3 text-center shadow-md dark:focus:outline-nonefocus:ring-sky-400  dark:focus:ring-2"
               >
                  Generate
               </button>

            </div>
         </div>
      </div>

   )
}

export default PasswordGenerator