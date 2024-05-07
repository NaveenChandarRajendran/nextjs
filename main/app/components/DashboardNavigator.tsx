'use client'
import { useRouter } from "next/navigation"

export function DashBoardNavigator() {
    const router = useRouter()
    return <>
        <button onClick={() => {
            router.push('/users')
        }}>Dashboard</button>
    </>
}