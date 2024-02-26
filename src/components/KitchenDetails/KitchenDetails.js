"use client"
import { useState } from "react"
import MenuItems from "../MenuItem/MenuItem"
import Feedback from "../Feedback/feedback"


export default function KitchenDetails(){

    const [isActive, setIsActive] = useState("menu")
    const activeTabClass = "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
    const inactiveTabClass = "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 "


    const URL = 'https://assets.architecturaldigest.in/photos/61bf5698964e7236ae515700/16:9/w_960,c_limit/(1).jpg'
    return(
        <div className="m-auto max-w-screen-md my-7">
            <div className="mb-4">
                <img src={URL} className="object-cover h-48 w-full"/>
            </div>

            <div className="mb-4">
                <h2 className="mb-1 font-bold">Resturent Name</h2>
                <p className="flex mb-1">
                    <span>
                    <svg class="h-5 w-5 text-slate-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
</svg>

                    </span>
                    <span className="ml-1">12/13 A.C Road</span>
                </p>

                <p className="flex mb-1">
                    <span>

                    <svg class="h-5 w-5 text-slate-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
</svg>

                    </span>
                    <span className="ml-1">abc@gb.com</span>
                </p>

                <p className="flex mb-1">
                    <span>
                    <svg class="h-5 w-5 text-slate-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    </span>
                    <span className="ml-1">+91 987503212</span>
                </p>

                <p className="flex mb-1">
                    <span>
                    <svg class="h-5 w-5 text-slate-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                    </span>
                    <span className="ml-1">100</span>
                </p>
            </div>

            <div  className="mb-4">
                <p className="font-semibold">Description</p>
                <p>All Description about Kitchen</p>
            </div>
            




<div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mb-4">
    <ul class="flex flex-wrap -mb-px">
        <li onClick={()=>setIsActive('menu')} class="me-2">
            <a href="#" class={`inline-block p-4 ${isActive=='menu'?activeTabClass:inactiveTabClass}`}>Menu</a>
        </li>
        <li onClick={()=>setIsActive('review')} class="me-2">
            <a href="#" class={`inline-block p-4 ${isActive=='review'?activeTabClass:inactiveTabClass}`} aria-current="page">Review</a>
        </li>
       
    </ul>
</div>


            <div className="mb-6">
                {isActive == 'menu'?
                 <>
                 <MenuItems/>
                 <MenuItems/>
                 <MenuItems/>
                 <MenuItems/>
                 </>:null
            }
               
               {isActive == 'review'?
                 <>
                    <Feedback/>
                 </>:null
            }  
            </div>

            <div className="flex justify-center">
                {/* <span className="text-slate-400">Pending</span> */}
                <span className="text-green-700 hover:font-medium cursor-pointer">Approve</span>
                <span className="text-red-700 hover:font-medium cursor-pointer">Block</span>
            </div>
        </div>
    )
}