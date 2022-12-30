import { Fragment } from "react";

import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";


export default function Home() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  )
}

// From tutorial
// 1) Hero => Pressent ourselved
// 2) Featured Posts section
// 