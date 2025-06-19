"use client";
import { signOut,useSession} from "next-auth/react"
export default function Dashboard(){
    const session =useSession();
    console.log(session.data)
    return(
        <>
            <div>
                <h1>Hii this is dashboard</h1>
            </div>
        </>
    )
}