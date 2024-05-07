import React from 'react'

interface Props {
    params: {
        photoid: number
    }
}


const PhotoDetails = ({ params: { photoid } }: Props) => {
    return (
        <div>Photo details {photoid}</div>
    )
}

export default PhotoDetails;