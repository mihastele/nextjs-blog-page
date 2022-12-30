import Link from "next/link"
import Logo from "../../components/layout/logo"
import AllPosts from "../../components/posts/all-posts"
import { getAllPosts } from "../../lib/posts-util"

/*
const DUMMY_POSTS = [{
    slug: "getting-started",
    title: "Getting started",
    image: "elkfefe.png",
    excerpt: "SSsdWDWD asdasd sadasff asfdfweq fwfdwqWw",
    date: "2022-02-10"
},
{
    slug: "getting-started2",
    title: "Getting started",
    image: "elkfefe.png",
    excerpt: "SSsdWDWD asdasd sadasff asfdfweq fwfdwqWw",
    date: "2022-02-10"
},
{
    slug: "getting-started3",
    title: "Getting started",
    image: "elkfefe.png",
    excerpt: "SSsdWDWD asdasd sadasff asfdfweq fwfdwqWw",
    date: "2022-02-10"
}]
*/

function AllPoststPage(props) {
    return <AllPosts posts={props.posts} />
}

export function getStaticProps() {
    const featuredPosts = getAllPosts()

    return {
        props: {
            posts: featuredPosts
        },
        // revalidate: 3600 // We need to redeploy anyway
    }
}

export default AllPoststPage