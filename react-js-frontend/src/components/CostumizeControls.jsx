import React, { useState } from 'react'

const CostumizeControls = ({ value, setValue, darkMode }) => {

   const [showError, setshowError] = useState(false)



   const onChangePassLength = (e) => {
      const re = /^[0-9\b]+$/;
      const value = parseInt(e.target.value);
      if (e.target.value === '' || (re.test(e.target.value) && value >= 1 && value <= 52)) {
         setshowError(false)
         setValue(e.target.value);
      } else {
         setshowError(true)
      }
   }



   return (
      <div className=" p-4 justify-center items-center flex flex-col mt-16">

         <label className={`relative cursor-pointer mb-4 ${!darkMode ? 'input-txt-bg' : 'input-txt-bg-dark'}`}>
            <input type="text" placeholder="Input" className='h-10 w-64 px-5 text-base text-gray-500  bg-gray-100 border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-sky-400 focus:bg-white placeholder-gray-300 placeholder-opacity-0 transition duration-200 dark:bg-slate-600 dark:border-slate-600 dark:text-gray-200 dark:focus:bg-slate-600 ' value={value} onChange={onChangePassLength} />
            <span className='text-base  text-gray-600  text-opacity-80 bg-gray-100 absolute left-5 top-2 px-1 transition duration-200 input-text dark:bg-slate-600 dark:text-gray-200'>Length</span>
            {showError && <p class="text-red-500 pl-2 pt-1 text-xs italic">Please enter a number between 1 and 52</p>}

         </label>

         <div className="w-[250px] pt-050  mb-6 range">
            {/* <div className="sliderValue">
       <span ref={spanRef}>25</span>
     </div> */}
            <div className="field ">

               <input className={darkMode ? 'dark-range' : 'light-range'} type="range" min="1" max="52" steps="1" value={value} onChange={(e) => setValue(e.target.value)} />

            </div>
         </div>

         {/* <div>
     <input id="medium-range" className="w-full h-2 mb-6 bg-gray-100 rounded-lg accent-sky-400 cursor-auto focus:border-0" type="range" min="1" max="30" step="1" onInput={handleOnInput} onBlur={handleOnBlur} />
   </div> */}


         <div className="flex align-center justify-center gap-x-14 gap-y-4 m-2 w-[340px] flex-wrap">
            <label className="relative inline-flex items-center mb-4 cursor-pointer">
               <input type="checkbox" value="" className="sr-only peer " />
               <div className="w-12 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-sky-100 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-[6px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-sky-400 peer-checked:after:left-[10px] dark:bg-slate-600 dark:after:border-slate-500  dark:peer-focus:ring-slate-200  "></div>
               <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-200">Uppercase</span>
            </label>
            <label className="relative inline-flex items-center mb-4 cursor-pointer">
               <input type="checkbox" value="" className="sr-only peer " />
               <div className="w-12 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-sky-100 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-[6px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-sky-400 peer-checked:after:left-[10px] dark:bg-slate-600 dark:after:border-slate-500  dark:peer-focus:ring-slate-200  "></div>
               <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-200">Numbers</span>
            </label>
            <label className="relative inline-flex items-center mb-4 cursor-pointer">
               <input type="checkbox" value="" className="sr-only peer " />
               <div className="w-12 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-sky-100 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-[6px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-sky-400 peer-checked:after:left-[10px] dark:bg-slate-600 dark:after:border-slate-500  dark:peer-focus:ring-slate-200  "></div>
               <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-200">Lowercase</span>
            </label>
            <label className="relative inline-flex items-center mb-4 cursor-pointer">
               <input type="checkbox" value="" className="sr-only peer " />
               <div className="w-12 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-sky-100 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-[6px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-sky-400 peer-checked:after:left-[10px] dark:bg-slate-600 dark:after:border-slate-500  dark:peer-focus:ring-slate-200  "></div>
               <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-200">Symbols</span>
            </label>



         </div>
      </div>
   )
}

export default CostumizeControls