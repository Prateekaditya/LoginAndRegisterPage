"use client"
import  Link from "next/link"
import {signOut,useSession} from "next-auth/react"
export default function Navbar(){
    const session =useSession();
    return(
        <>
            <div className="flex gap-15">
                <Link href="/dashboard">dashboard</Link>
                {session.status==="authenticated" ? (
                    <button onClick={signOut}>Logout</button>
                ) :(
                    <div className="flex gap-15">
                        <Link href="/login">Login</Link>
                        <Link href="/register">register</Link>
                    </div>
                )}
                
            </div>
        </>
    )
}