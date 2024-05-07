import { NextResponse } from "next/server"
export async function POST(request, { params }) {
    //read body 
    const payload = await request.json()
    console.log('payload', payload)
    await fetch(`http://localhost:3000/expenses`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            payload
        })
    })
    return NextResponse.json({ payload })
}