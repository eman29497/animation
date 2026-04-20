import { connectDB } from "@/app/lib/mongodb";
import Content from "@/app/models/Content";
import { NextResponse } from "next/server";
export async function GET(){
    await connectDB();
    const allContent = await Content.find({});
    return NextResponse.json(allContent);
}
export async function POST(request:Request){
    try{
        await connectDB();
        const body = await request.json();
        const newContent = await Content.create(body);
        return NextResponse.json({message:'Data Saved',data:newContent}, {status:201});
    
    }catch(error){
        return NextResponse.json({message:'Error saving data',error}, {status:500});
    }
}


