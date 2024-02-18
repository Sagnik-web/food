import FoodItems from "@/components/Orders/FoodItems";


export default function OrdersPlace(){
    return(
        <div className="m-auto max-w-screen-lg">
            <div className="mt-5 mb-5 ml-2">
                <h2>Name</h2>
                <p>Email: abc@gmail.com</p>
                <p>Location:<span>Kolkata</span> <span>update</span></p>
                <p>Ph No: <span>7894561237</span> <span>update</span></p>
            </div>
            <div className="flex ">
                <div className="flex-1">
                    <FoodItems/>
                    <FoodItems/>
                    <FoodItems/>
                </div>
                <div>
                    <div className="w-60 border-double border-4 border-sky-500 pt-3 pb-3 pl-6 pr-6 rounded">
                        <h3 >Checkout</h3>
                        <p className="flex justify-between"><span>Total Rs:</span> <span>100/-</span></p>
                        <p className="flex justify-between"><span>GST:</span> <span>10/-</span></p>
                        <p className="flex justify-between"><span>Dalivary Charg:</span> <span>40/-</span></p>
                        <p className="flex justify-between"><span>Discount:</span> <span>- 20/-</span></p>
                        <hr></hr>
                        <p className="flex justify-between"><span>Net Price:</span> <span>130/-</span></p>

                        <p className="mt-3 cursor-pointer pt-2 pb-2 pl-10 pr-10 rounded bg-black text-center text-white">Go</p>
                    </div>
                </div>
            </div>
        </div>
    )
}