import React, { useState } from 'react';
import { useEffect } from 'react';
import zxcvbn from 'zxcvbn'

const PasswordScoreBar = ({ password }) => {

   const [passwordScore, setPasswordScore] = useState(0)

   const checkStrength = () => {
      password = '12342sQ'
      if (!password) { return setPasswordScore(0) }
      setPasswordScore(zxcvbn(password).score)

      console.log("Password Score: ", passwordScore)
   }
   useEffect(() => {
      checkStrength();
   }, [password, setPasswordScore])

   const barColors = [
      'bg-gray-200 dark:bg-slate-600',
      'bg-red-400',
      'bg-yellow-400',
      'bg-green-500',
      'bg-green-500'
   ];


   const bars = [];
   for (let i = 0; i < 4; i++) {
      bars.push(
         <div key={i} className="w-1/4 px-1">
            <div
               className={`h-2 rounded-xl m-3 transition-colors ${i < passwordScore ? barColors[passwordScore] : barColors[0]
                  }`}
            ></div>
         </div>
      );
   }

   return <>{bars}</>;
};

export default PasswordScoreBar;