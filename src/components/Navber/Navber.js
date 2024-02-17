"use client"

import { useEffect } from "react";
import Options from "../Options/option";

// import { ChevronDownIcon } from '@heroicons/react/24/solid'


export default function Navber() {

    let loggedin = ''
    let user = 'sd'
    let kitchen = ''
    let deliver = ''

    
    return (
        <nav className="flex justify-between p-4 bg-stone-700 text-white">
            <div>
                <p className="inline-block p-2">Logo</p>    
            </div>
            <div>
                {loggedin == ''?
                    <>
                        {!user ? 
                            <>
                                <p className="inline-block p-2 hover:bg-neutral-900 cursor-pointer">Login</p>
                                <p className="inline-block p-2 hover:bg-neutral-900 ml-2 cursor-pointer">Signup</p>
                            </>
                            :<>
                                <Options/>
                            </>}
                       
                    </>
                    :null
                }

                
                {loggedin == 'kitchen'?
                    <>
                        {!kitchen ? 
                            <>
                                <p className="inline-block p-2 hover:bg-neutral-900 cursor-pointer">Login</p>
                                <p className="inline-block p-2 hover:bg-neutral-900 ml-2 cursor-pointer">Signup</p>
                            </>
                            :<>
                                <p>kitchen Data</p>
                            </>}
                    </>
                    :null
                }

                {loggedin == 'deliver'?
                    <>
                        {!deliver ? 
                            <>
                                <p className="inline-block p-2 hover:bg-neutral-900 cursor-pointer">Login</p>
                                <p className="inline-block p-2 hover:bg-neutral-900 ml-2 cursor-pointer">Signup</p>
                            </>
                            :<>
                                <p>deliver Data</p>
                            </>}
                    </>
                    :null
                }
                
            </div>
        </nav>
    );
  }
  