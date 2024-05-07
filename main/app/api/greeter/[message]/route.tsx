import { NextResponse } from "next/server";

export async function GET(request: any, { params: { message } }: any) {
    // console.log(obj.params.message)
    return NextResponse.json({ message })
}