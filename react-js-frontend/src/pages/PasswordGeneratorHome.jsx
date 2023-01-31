import React, { useState, useEffect } from 'react'
import { FaRegClone } from 'react-icons/fa'
import PasswordScoreBar from '../components/PasswordScoreBar';
import CostumizeControls from '../components/CostumizeControls';
import DarkLightButton from '../components/DarkLightButton';

const PasswordGenerator = () => {

   const [value, setValue] = useState("");
   const [passwordGenerated, setPasswordGenerated] = useState('');

   useEffect(() => {
      setPasswordGenerated('VDXjd2904_23@')
   }, [passwordGenerated])



   return (
      <div className="w-full h-screen justify-center items-center bg-gray-50 flex flex-col">
         {/* container */}
         <div className="w-full md:w-1080 justify-center items-center bg-white drop-shadow-lg h-840 rounded-2xl flex flex-col p-7">
            <DarkLightButton />
            <div className="w-full p-4 justify-center items-center flex flex-col">
               <h1 className="font-black  text-5xl text-center text-gray-900">Password Generator</h1>
               <p className="font-normal w-[500px]  my-5 text-center text-gray-500 first-line:max-w-screen-sm mx-auto pb-20" >Effortless Password Protection: The Password Generator creates complex, unique passwords for ultimate security.</p>

               <div className="md:w-2/3 relative">
                  <input
                     type="text"
                     value="VDXjd2904_23@"
                     className="bg-gray-100  font-medium appearance-none border-2 border-gray-100
                h-14 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none "
                     readOnly
                  />
                  <div className="absolute top-2 right-5">
                     <FaRegClone className="h-10 w-10 text-gray-600 rounded-lg p-1.5 hover:bg-gray-200" />
                  </div>
                  <div className="flex -mx-1">
                     <PasswordScoreBar password={passwordGenerated} />
                  </div>
               </div>

               <CostumizeControls
                  value={value}
                  setValue={setValue}

               />
               <button
                  type="button"
                  className="text-white w-[230px] bg-sky-400 hover:bg-sky-500
               focus:ring-4 focus:outline-nonefocus:ring-blue-100 font-medium
               rounded-lg text-base px-6 py-3.5 mt-3 text-center"
               >
                  Generate
               </button>

            </div>
         </div>
      </div>

   )
}

export default PasswordGenerator