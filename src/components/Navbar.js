"use client"
import  Link from "next/link"
import {signOut,useSession} from "next-auth/react"
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";


export default function Navbar(){
    const session =useSession();
    const [menu ,setMenu] = useState(false)
    const handleClick =()=>{
        setMenu(!menu);
    }
    return(
        <>
            <div className="hidden bg-[url(/hh.jpeg)] md:flex gap-20 items-center justify-center p-5 text-xl">
                <Link href="/" className="bg-black p-3 cursor-pointer hover:bg-white text-center hover:text-black duration-200 rounded-3xl">PA</Link>
                <Link className="bg-black p-3 cursor-pointer hover:bg-white text-center hover:text-black duration-200 w-50 rounded-3xl" href="/dashboard">DashBoard</Link>
                {session.status==="authenticated" ? (
                    <button onClick={signOut}>Logout</button>
                ) :(
                    <div className="flex gap-15">
                        <Link className="bg-black  p-3 cursor-pointer hover:bg-white text-center hover:text-black duration-200 w-50 rounded-3xl" href="/login">Login</Link>
                        <Link className="bg-black p-3 cursor-pointer hover:bg-white text-center hover:text-black duration-200 w-50 rounded-3xl" href="/register">Register</Link>
                    </div>
                )}
                
            </div>
            <div className="md:hidden bg-[url(/hh.jpeg)] p-4 flex justify-between">
            <Link href="/" className="bg-black p-3 h-fit cursor-pointer hover:bg-white text-center hover:text-black duration-200 rounded-3xl">PA</Link>
                    <div className="md:hidden absolute right-5">
                        {menu ? (
                            <div className="bg-white flex  gap-5 text-black p-4 rounded-4xl "> 
                                <button className="absolute top-7 right-4" onClick={handleClick}><RxCross1 /></button>
                                <div className="flex flex-col p-2 gap-5 mr-6">
                                <Link href="/dashboard">DashBoard</Link>
                                {session.status==="authenticated" ? (
                    <button onClick={signOut}>Logout</button>
                ) :(            <div className="flex flex-col gap-5">
                                <Link href="/login">Login</Link>
                                <Link href="/register">Register</Link> </div>)}
                                </div>
                            </div>  )   :   (   <>
                            <button onClick={handleClick}>
                                <CiMenuBurger className="text-3xl text-center"/></button>
                                </>)}
                        
                        <div>

                        </div>
                    </div>
            </div>
        </>
    )
}