export default function DeliverOrderCard(){
    return(
        <>
            <li className="border-t border-gray-200">
        <div className="px-4 py-5 sm:px-6">
            <div className="flex items-center justify-between">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Item 1</h3>
                {/* <p className="mt-1 max-w-2xl text-sm text-gray-500 ">Delivery Location: <span className="text-green-600 ">12/13 ab road kol near hfsdh hjdsjh hjdbsj uweyfwef hjefj</span></p> */}
            </div>
            <div className="mt-4 flex items-center justify-between">
                <div className="text-sm font-medium text-gray-500">
                   <p> Resturent: <span className="text-green-600">Resturent Name</span></p>
                   <p className="max-w-80"> Location: <span className="text-green-600 ">12/13 ab road kol near hfsdh hjdsjh hjdbsj uweyfwef hjefj</span></p>
                </div>
                    <p className="max-w-60 text-sm font-medium text-gray-500">Deliver Location:<span className="text-green-600 ">12/13 ab road kol near hfsdh hjdsjh hjdbsj uweyfwef hjefj</span></p>

                <div className="">
                   {con? <>
                    <input className="px-3 py-1" placeholder="Your ID"/>
                    <span href="#" className="font-medium text-indigo-600 hover:text-indigo-500 ml-3 cursor-pointer">Edit</span>
                    </>
                    :
                    <>
                        <p> Accepted By: <span className="text-green-600">#34567</span></p>
                        <span href="#" className="font-medium text-indigo-600 hover:text-indigo-500 ml-3 cursor-pointer">View</span>
                        
                    </>}
                </div>

               
            </div>
        </div>
    </li>
    
        </>
    )
} 