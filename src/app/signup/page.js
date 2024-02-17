
export default function Signup(){
    return(
        <div className="bg-stone-700 place-content-center grid h-screen">
            <div className="bg-stone-900 rounded text-white inline-block p-7">
                <h2 className="text-2xl text-center">Signup</h2>
                <p className="mt-2">User Name</p>
                <p className="mt-1"><input className="p-1"/></p>
                <p className="mt-2">Email</p>
                <p className="mt-1"><input className="p-1"/></p>
                <p className="mt-2">Password</p>
                <p className="mt-1"><input className="p-1"/></p>
                <p className="mt-2">Confarm Password</p>
                <p className="mt-1"><input className="p-1"/></p>
                <button className="mt-2 p-4 text-center">Register</button>
            </div>
        </div>
    )
}
