import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDIR = path.join(process.cwd(), 'content', 'posts')

function getPostData(fileName) {
    const filePath = path.join(postsDIR, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    const postSlug = fileName.replace(/\md$/, '') // removes file extension with regex
    const postData = {
        slug: postSlug,
        ...data,
        content: content
    };

    return postData
}

export function getAllPosts() {
    const postFiltes = fs.readdirSync(postsDIR)
    const allPosts = postFiltes.map(e => getPostData(e))

    return allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1)
}

export function getFeaturedPosts() {
    return getAllPosts().filter(post => post.isFeatured)
}