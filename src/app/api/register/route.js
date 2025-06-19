import User from "@/models/User";
import connect from "@/utils/Db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST =async(request)=>{
    try{
        const {name,email,password}=await request.json();
        await connect();
        const existingUser = await User.findOne({email});
        if(existingUser){
            return new NextResponse("User Already Exist",{
                status:400,
            });
        }
        const hashedPassword = await bcrypt.hash(password,5)
        const newUser = new User({
            name,
            email,
            password:hashedPassword
        });
        await newUser.save();

        return NextResponse.json({
            message:"User has been Created",
            user:{
                id:newUser._id,
                name:newUser.name,
                email:newUser.email,
            }
        },
        {status:201}
        );
    }
    catch(e){
        console.error("Registration Error:",e);
        return new NextResponse(e.message,{
            status:500,
        });
    }
}