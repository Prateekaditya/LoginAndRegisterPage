"use client";

import Link from "next/link";
import  {useRouter} from "next/navigation"
import { useState } from "react";

export default function Register (){
    const [err,setErr]=useState(false)
    const [loading ,setLoading] =useState(false);
    const router =useRouter();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setErr(false);
        setLoading(true);
        const name =e.target[0].value;
        const email =e.target[1].value;
        const password =e.target[2].value;
        try{
            const res = await fetch ("/api/register",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name,
                    email,
                    password
                })
            })
            const data = await res.json();
            if (res.status === 201) {
                router.push("/login");
              } else {
                setErr(data.message || "Something went wrong");
              }
        }
        catch(error){
            console.error("Registration error:", error);
            setErr("Network error. Please try again.");
        }
    }
    return(
        <>
            <div className="flex flex-col gap-10 justify-center items-center mt-10 p-2">
                <h1 className="text-3xl font-extrabold text-emerald-300">Hii this is the register page</h1>
                <form className="flex flex-col gap-10 " onSubmit={handleSubmit}>
                    <input
                     className="p-4 text-xl border-2 border-solid border-[#bbb] rounded-2xl"   
                     placeholder="Username" 
                     type="text"></input>
                    <input
                     className="p-4 text-xl border-2 border-solid border-[#bbb] rounded-2xl"   
                     placeholder="Email" 
                     type="email"></input>
                    <input
                     className="p-4 text-xl border-2 border-solid border-[#bbb] rounded-2xl"   
                     placeholder="Password" 
                     type="password"></input>
                     <button className="bg-emerald-500 p-4 text-black font-bold rounded-2xl cursor-pointer border-2 border-solid border-emerald-200">Register</button>
                </form>
                {err && <div className="text-red-500">{typeof err === 'string' ? err : "Something went wrong"}</div>}
                <Link href="/login">Login with an existing account</Link>
            </div>
        </>
    )
}