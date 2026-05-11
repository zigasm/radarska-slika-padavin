import { NextResponse } from "next/server";
export async function GET(_:Request,{params}:{params:Promise<{region:string}>}){const {region}=await params;return NextResponse.json({region,message:"Phase 1 placeholder"});}
