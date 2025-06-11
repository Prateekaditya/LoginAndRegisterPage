import NextAuth from "next-auth";
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"

export const {handlers,auth,signIn,signOut} = NextAuth({
    providers:[
        Google({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    secret:process.env.NEXTAUTH_SECRET
})

export const { GET ,POST} =handlers;