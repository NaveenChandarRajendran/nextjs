import { NextResponse } from "next/server";

export async function GET(request: any) {
    //send response
    return NextResponse.json({ message: 'Hello api' })
}
export async function POST(request: any) {
    //read body
    const payload = await request.json()
    console.log(payload)
    return NextResponse.json({ message: 'saved' })
}
