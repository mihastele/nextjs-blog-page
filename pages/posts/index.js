import Link from "next/link"
import Logo from "../../components/layout/logo"
import AllPosts from "../../components/posts/all-posts"

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

function AllPoststPage() {
    return <AllPosts posts={DUMMY_POSTS} />

}

export default AllPoststPage