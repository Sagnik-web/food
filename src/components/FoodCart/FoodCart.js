"use client"

import { useState } from "react"

export default function FoodCart({img, name, desc, price,isdelevered, con, time}){

    const imgsrc = "https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1679921049/Image_URL_header/Image_URL_header-png?_i=AA"
   
    const [check, setCheck] = useState(true)

    // const con = true
    return(
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mt-16 ml-5 mr-5">
            <a href="#">
                <img className="rounded-t-lg" src={imgsrc} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 ">Rs: 499/-</p>
                <p className="mb-3 font-normal text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                
                <p className="mb-2"><span className="ml-1  text-sm font-medium text-black">Total Time: </span><span className="ms-3 text-sm font-medium text-blue-700">10 minutes</span></p>
               {con == "menu" ? <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" checked={check} onChange={()=>setCheck(!check)}/>
                    <div className="relative w-11 h-6 bg-red-500 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    {check?<span className="ms-3 text-sm font-medium text-green-700">Active</span>:
                    <span className="ms-3 text-sm font-medium text-red-700">Deactive</span>}

                </label>
                :null}
                {con == "order"?
                <label className="inline-flex items-center cursor-pointer">
                     <input className="px-3 py-1" placeholder="Your ID"/>
                    <span href="#" className="font-medium text-indigo-600 hover:text-indigo-500 ml-3 cursor-pointer">Edit</span>

                </label>:null

                }

                {con == "history" ? 
                <label className=""><span>Status: </span> 
                    {isdelevered?
                    <span className="font-medium text-green-700 ">Delevard</span>:
                    <span className="font-medium text-red-700 ">Failed</span>}
                    {time?
                    <p >Time: <span className="font-medium text-blue-700 ">{time}</span></p>:null
                    }
                </label>:null}
            </div>
        </div>
    )
} 