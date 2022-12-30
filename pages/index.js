import { Fragment } from "react";

import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util"

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

export default function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts
    },
    revalidate: 1800 // for refresh without redeploying every 3 hours
  }
}

// From tutorial
// 1) Hero => Pressent ourselved
// 2) Featured Posts section
// 