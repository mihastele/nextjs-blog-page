// slug is a unique human readable ID and search engine friendly

import PostContent from "../../components/posts/post-detail/post-content"
import { getAllPostFileNames, getPostData } from "../../lib/posts-util"
import Head from "next/head"
import { Fragment } from "react"

function PostDetailsPage(props) {
    return <Fragment>
        <Head>
            <title>{props.post.title}</title>
            <meta name="description" content={props.post.excerpt} />
        </Head>
        <PostContent post={props.post} />
    </Fragment>

}


export function getStaticProps(context) {
    const { params } = context
    const { slug } = params

    const postData = getPostData(slug)

    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

export function getStaticPaths() {
    const names = getAllPostFileNames()
    const slugs = names.map(filename => filename.replace(/\.md$/, ''))

    return {
        paths: slugs.map(slug => ({ params: { slug: slug } })), // extra parantheses so curly braces don't count as a function body
        fallback: false
    }
}

export default PostDetailsPage