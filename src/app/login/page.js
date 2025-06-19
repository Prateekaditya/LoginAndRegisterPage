"use client";
import {signIn,useSession} from "next-auth/react"
import Link from "next/link"
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation"
import { useEffect ,useState } from "react";
export default function Login(){
    const session =useSession();
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    
    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setErr(false);
      setLoading(true);
    
      const email = e.target[0].value;
      const password = e.target[1].value;
    
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false, // 🛠️ Important!
      });
    
      setLoading(false);
    
      if (res?.error) {
        setErr(res.error);
      } else {
        router.push("/dashboard");
      }
    };
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
            <div className=" flex flex-col items-center justify-center p-2 mt-10 gap-10"> 
               <h1 className="text-3xl font-extrabold text-emerald-300">Hii this is the login page welcomee</h1>
               <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                <input
                    className="border-2 border-solid border-[#bbb] p-4 rounded-2xl text-[#bbb] text-xl"                
                placeholder="Email" type="email"/>
                <input
                    className="border-2 border-solid border-[#bbb] p-4 rounded-2xl text-[#bbb] text-xl"

                    placeholder="Password"
                    type="password"
                />
                <button className="bg-emerald-500 p-4 text-black font-bold rounded-2xl cursor-pointer border-2 border-solid border-emerald-200 hover:bg-emerald-800 hover:text-white duration-300">Login

                </button>
               </form>
               <button className="flex p-2.5 gap-4 justify-center items-center text-xl rounded-3xl bg-white text-black hover:text-blue-700 duration-200 hover:underline" onClick={()=>signIn("google")}>
                <span><FcGoogle/></span>
                Sign In with Google</button>
            </div>
        </>
    )
}