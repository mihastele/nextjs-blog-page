import { Fragment } from "react";

import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

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

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  )
}

// From tutorial
// 1) Hero => Pressent ourselved
// 2) Featured Posts section
// 