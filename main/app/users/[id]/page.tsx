import React from 'react'

interface Props {
    params: {
        id: number
    }
}


export async function generateMetadata({ params, searchParams }:any, parent:any) {
    const id = Number(params.id)
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await response.json()
    //return meta object 

    return {
        title: `${user.id} detail`
    }
}

const UserDetails = ({ params: { id } }: Props) => {
    return (
        <div>UserDetails {id}</div>
    )
}

export default UserDetails