import React, { useEffect, useState } from "react";
import Link from "next/link";

import axios from "axios";

import BaseLayout from "../components/layout/BaseLayout";

const Portfolio = (props) => {
  const { posts } = props;

  return (
    <BaseLayout>
      <h1>Portfolio.js</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link as={`/portfolio/${post.id}`} href={`/portfolio/[id]`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </BaseLayout>
  );
};

export async function getStaticProps() {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/`);
  const posts = res.data;

  return {
    props: { posts: posts.slice(0, 10) },
    revalidate: 1,
  };
}

export default Portfolio;
