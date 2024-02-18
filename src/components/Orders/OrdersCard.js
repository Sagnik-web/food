import FoodItems from "./FoodItems"
import Status from "./Status"


export default function OrdersCard(){

    const url ="https://html.com/wp-content/uploads/flamingo.jpg"
    return(
<>


            <div className="max-w-screen-lg m-auto mt-7">
                <a className="text-center ">
                    <img className="rounded-t-lg" src={url} alt="" />
                </a>

                <div className="p-5 mt-4 mb-4">
                    
                    <h5 className="mb-2">Resturent Name</h5>
                    
                    <p className="">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        
                </div>


            <div className="flex justify-between ">
                <div className="">
               <FoodItems/>


                <div className="flex mb-5 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={url} alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </div>


                <div className="flex mb-5 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={url} alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </div>


                </div>




                <div className="">
            

                    <Status/>
                </div>

            </div>
            
            
            </div>



        </>
    )
}