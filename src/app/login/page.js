"use client";
import {signIn,useSession} from "next-auth/react"
import Link from "next/link"
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation"
import { useEffect } from "react";
export default function Login(){
    const session = useSession();
    const router =useRouter();
    useEffect(() => {
        if (session.status === "authenticated") {
            router.push('/dashboard');
        }
    }, [session.status, router]);
    console.log(session)
    if(session.status==="loading"){
        return <p>loading</p>
      }
    
    return (
        <>
            <div>
               <h1>Hii this is the login page welcomee</h1>
               <button className="flex p-2.5 gap-4 justify-center items-center text-xl rounded-3xl bg-white text-black hover:text-blue-700 duration-200 hover:underline" onClick={()=>signIn("google")}>
                <span><FcGoogle/></span>
                Sign In with Google</button>
            </div>
        </>
    )
}