// import FetchPost from "@/app/components/FetchPosts";
import FetchPostsUsingSWR from "@/app/components/PostsClientUsingSWR"

export default function PostPage() {
    // const isvalid = true
    // if (isvalid) {
    //     console.log('error')
    //     throw 'Dashboard Page is broken'
    // }

    return <div>
        <h1>Post Page Fetching Data from the Client Side</h1>
        {/* <FetchPost/> */}
        <FetchPostsUsingSWR />
    </div>
}