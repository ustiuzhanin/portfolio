import React from "react";

import axios from "axios";

import BaseLayout from "../../components/layout/BaseLayout";

const PortfolioItem = (props) => {
  const { title, id, body } = props.post;
  return (
    <BaseLayout>
      <h1>{title}</h1>
      <p>BODY: {body}</p>
      <p>ID: {id}</p>
    </BaseLayout>
  );
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false, // See the "fallback" section below
  };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = res.data;

  return {
    props: { post },
    revalidate: 1,
  };
}

export default PortfolioItem;
