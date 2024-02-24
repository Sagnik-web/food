
export default function AdminUserCard(){
    return(
        <div className="flex justify-between border border-gray-200 shadow mb-3 px-6 py-4">
            <div>
                <p>Name: Sagnik Biswas</p>
                <p>Email: sagnik@gmail.com</p>
            </div>

            <div>
                <p>Total Price: 100/-</p>
                
            </div>


            <div>
                <span>Status: </span>
                <span className="text-slate-400">Pending</span>
                <span className="text-green-700">Approve</span>
                <span className="text-red-700">Block</span>
            </div>

        <div className="flex ">
            <div className="mr-4">
                <span className="text-blue-700 font-medium cursor-pointer hover:font-bold">View</span>
            </div>

            <div className="mr-4">
                <span className="text-green-700 font-medium cursor-pointer hover:font-bold">Approve</span>
            </div>

            <div className="mr-4">
                <span className="text-red-700 font-medium cursor-pointer hover:font-bold">Block</span>
            </div>
        </div>
        </div>
    )
} 