import { NextRequest ,NextResponse} from "next/server";


import Topic from "@/app/models/TopicModel";
import DbConfig from "@/app/DbConfig";

 export const POST= async(req:NextRequest)=>{
 try {
    DbConfig()
    const { title, description } = await req.json();
    const topic = await Topic.create({ title, description });
    return NextResponse.json({message:"Topic created", status: 201, data:topic});
 } catch (error) {
    console.error(error);
 }
}
export const GET= async()=>{
    try {
       DbConfig()
       const topic = await Topic.find();
       return NextResponse.json({message:"Topic gotten", status: 201,data:topic});
    } catch (error) {
       console.error(error);
    }
   }

   export const DELETE= async(req:NextRequest)=>{
    try {
       DbConfig()
      const id = req.nextUrl.searchParams.get("id");
      await Topic.findByIdAndDelete(id);
       return NextResponse.json({message:"Topic deleted", status: 201});
    } catch (error) {
      console.error(error);

    }
   }