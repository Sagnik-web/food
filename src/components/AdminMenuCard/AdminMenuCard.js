
export default function AdminMenuCard(){
    return(
        <div className="flex justify-between border border-gray-200 shadow mb-3 px-6 py-4">
            <div>
                <p>Resturent Name: ABC</p>
                <p>Item Name: xyz</p>
            </div>

            <div className="w-1/5">
                <p>Description:</p>
                <p >setdyfghjhv      vgjjjjjjjjj jgvvgvggkhkuihhsdbdsbbuisbdb  ysg v vsivbs  vuisvbsdv nbsdfu nvhuvbvbkbk</p>
            </div>

            <div>
                <p>Price: 100/-</p>
                <p>Duration: 10 minits</p>
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