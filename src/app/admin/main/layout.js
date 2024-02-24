"use client"

import SideBer from "@/components/SideBer/SideBer";
import { useState } from "react";

export default function mainMenu({children}){
    const [closeber, setCloseber] = useState(false)

    const closeFnc = ()=>{
        setCloseber(!closeber)
    }

    return(
        <>
        {/* <Navber/> */}
        <div className=" flex py-3 bg-black">


        <div className="ml-6">
      <button className="relative group" onClick={closeFnc}>
        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden group-focus:-translate-y-1.5 group-focus:-rotate-90">
            <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg] group-focus:w-2/3 delay-150"></div>
            <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10"></div>
            <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150"></div>
          </div>
        </div>
      </button>
    </div>

    
    
    <div className="flex-1">
        <p className="text-white text-center text-2xl">Admin</p>
    </div>
    
    </div>
        {!closeber ? <SideBer closeFnc={closeFnc}/>:null}

        {children}
    
    </>
    )
}