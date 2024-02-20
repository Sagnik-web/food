"use client"

export default function Signup(){
    return(
        
<div>
<form className="max-w-screen-md mt-16 m-auto mb-16">
  <div className="mb-5">
    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 ">Your Full Name</label>
    <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  placeholder="ABCD" required />
  </div>
  <div className="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
    <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  required />
  </div>
  <div className="mb-5">
    <label for="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 ">Repeat password</label>
    <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  required />
  </div>
  <div className="mb-5">
    <label for="mobile" className="block mb-2 text-sm font-medium text-gray-900 ">1. Mobile Number</label>
    <input type="text" id="mobile" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5">
    <label for="2mobile" className="block mb-2 text-sm font-medium text-gray-900 ">2. Mobile Number</label>
    <input type="text" id="2mobile" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5">
    <label for="desc" className="block mb-2 text-sm font-medium text-gray-900 ">Desc</label>
    <textarea type="text" id="desc" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5">
    <label for="location" className="block mb-2 text-sm font-medium text-gray-900 ">Location</label>
    <textarea type="text" id="location" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  placeholder="name@flowbite.com" required />
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " required />
    </div>
    <label for="terms" className="ms-2 text-sm font-medium text-gray-900 ">I agree to join as Delevary Agent</label>
  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " required />
    </div>
    <label for="terms" className="ms-2 text-sm font-medium text-gray-900 ">I agree with the <a href="#" className="text-blue-600 hover:underline ">terms and conditions</a></label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Register new account</button>
</form>
</div>
    )
}
