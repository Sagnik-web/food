export default function FoodCart({img, name, desc, price}){

    const imgsrc = "https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1679921049/Image_URL_header/Image_URL_header-png?_i=AA"
   
   
    return(
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-16 ml-5 mr-5">
            <a href="#">
                <img className="rounded-t-lg" src={imgsrc} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Rs: 499/-</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 "><button className="hover:text-slate-100"> + Add</button></p>
                
            </div>
        </div>
    )
} 