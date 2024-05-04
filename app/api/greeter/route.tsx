import { NextResponse } from "next/server";

export async function GET(request:any) {
    //send response
    return NextResponse.json({ message: 'Hello api' })
}