import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDIR = path.join(process.cwd(), 'content', 'posts')

export function getPostData(postIdentifier) {
    const postSlug = postIdentifier.replace(/\.md$/, '') // removes file extension with regex

    const filePath = path.join(postsDIR, `${postSlug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    const postData = {
        slug: postSlug,
        ...data,
        content: content
    };

    return postData
}

export function getAllPostFileNames() {
    return fs.readdirSync(postsDIR)
}

export function getAllPosts() {
    const postFiltes = getAllPostFileNames()

    const allPosts = postFiltes.map(e => getPostData(e))

    return allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1)
}

export function getFeaturedPosts() {
    return getAllPosts().filter(post => post.isFeatured)
}