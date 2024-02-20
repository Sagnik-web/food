export default function Login(){
    return(
        // <>
        <div className="bg-stone-700 place-content-center grid h-screen">
            <div className="bg-stone-900 rounded text-white inline-block p-7">
                <h2 className="text-2xl text-center">Signin</h2>
               <form>
                    <p className="mt-2">Email</p>
                    <p className="mt-1"><input className="p-1"/></p>
                    <p className="mt-2">Password</p>
                    <p className="mt-1"><input className="p-1"/></p>
                </form>
                <button className="mt-2 p-4 text-center">Login</button>
            </div>
        </div>
        // </>
    )
}