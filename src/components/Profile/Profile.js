"use client"

import { useState } from "react"

export default function Profile(){
    const [chUser,setChuser] = useState(false)
    const [chBio,setChBio] = useState(false)
    const [chLoc,setChLoc] = useState(false)
    const [chMob,setChMob] = useState(false)
    // const [chUser,setChuser] = useState(false)


    return(

<div  className=" sm:mx-32 lg:mx-32 xl:mx-72 ">
<div className="flex justify-between container mx-auto">
<div className="w-full">
<div className="mt-4 px-4">

<h1 className="font-thinner flex text-4xl pt-10 px-5">Profile</h1>

<form className="mx-5 my-5">
    <h2 className="mb-3 flex justify-between"><span>Sagnik Biswas</span> <span className="ml-3 cursor-pointer  text-white bg-black pt-2 pb-2 pl-7 pr-7 rounded" onClick={()=>setChuser(!chUser)}>update</span></h2>
{chUser ? <label className="relative block p-3 border-2 border-black rounded" htmlFor="name">
  <span className="text-md font-semibold text-zinc-900" htmlFor="name">
    Name
  </span>
  <input className="w-full bg-transparent p-0 text-sm  text-gray-500 focus:outline-none" id="name" type="text" placeholder="Your name" />
</label>: null}
<h2 className="mt-4 "><span className="mr-2">Email:</span><samp>abc@gmail.com</samp></h2>


<div className="flex justify-between">
      <div className="shrink-0 mt-5">
    <img className="h-20 w-20 object-cover rounded-full" src="" alt="Current profile photo" />
  </div> 
  <label className="block pt-2">
    <span className="sr-only t-2">Choose profile photo</span>
    <input type="file" className="w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-pink-300 file:text-zinc-900
      hover:file:bg-rose-300
    "/>
  </label>

  </div>



<div>
    <h2 className="mt-6 mb-3 flex justify-between"><span>Bio</span><span className="ml-3 cursor-pointer  text-white bg-black pt-2 pb-2 pl-7 pr-7 rounded" onClick={()=>setChBio(!chBio)}>Update</span></h2>
    <p>cab jdnkjjnd jknjadfnjk</p>
</div>

{chBio?<label className="relative block p-3 border-2 mt-5 border-black rounded" htmlFor="name">
  <span className="text-md font-semibold text-zinc-900" htmlFor="name">
    Bio
  </span>

  <textarea className="w-full   p-0 text-sm border-none bg-transparent text-gray-500 focus:outline-none" id="name" type="text" placeholder="Write Your Bio" ></textarea>
</label>
:null}




<div>
    <h2 className="mt-6 mb-3 flex justify-between"><span>Location</span><span className="ml-3 cursor-pointer  text-white bg-black pt-2 pb-2 pl-7 pr-7 rounded" onClick={()=>setChLoc(!chLoc)}>Update</span></h2>
    <p>cab jdnkjjnd jknjadfnjk</p>
</div>

{chLoc?<label className="relative block p-3 border-2 mt-5 border-black rounded" htmlFor="name">
  <span className="text-md font-semibold text-zinc-900" htmlFor="name">
    Location
  </span>

  <textarea className="w-full   p-0 text-sm border-none bg-transparent text-gray-500 focus:outline-none" id="name" type="text" placeholder="Write Your Bio" ></textarea>
</label>:null}



<h2 className="mb-3 mt-5 flex justify-between"><span>Phone Number: 34567890987</span> <span className="ml-3 cursor-pointer  text-white bg-black pt-2 pb-2 pl-7 pr-7 rounded" onClick={()=>setChMob(!chMob)}>update</span></h2>
{chMob?<label className="relative block p-3 border-2 border-black rounded" htmlFor="name">
  <span className="text-md font-semibold text-zinc-900" htmlFor="name">
    Phone Number
  </span>
  <input className="w-full bg-transparent p-0 text-sm  text-gray-500 focus:outline-none" id="name" type="text" placeholder="Your" />
</label>:null}







<button className="mt-5 border-2 px-5 py-2 rounded-lg border-black border-b-4 font-black translate-y-2 border-l-4">
  Submit
</button>
</form>
  </div>
    </div>


</div>
</div>

    )
}