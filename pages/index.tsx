import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";

import Hero from "../components/Hero";
import Featured from "../components/Featured";

import { getFeaturedBlogs } from "../lib/fetchPosts";
import { Blog } from "../types/blog-types";

interface Props {
  blogs: Blog[];
}

const Home: NextPage<Props> = ({ blogs }) => {
  return (
    <>
      <Head>
        <title>Home | its just a Blog</title>
        <meta
          name="description"
          content="A simple in design, complex in content blog"
        />
        <meta property="og:url" content="https://justablog.vercel.app/" />
        <meta property="og:type" content="blog" />
        <meta property="og:title" content="The drafted 12AM journey - Blog" />
        <meta
          property="og:description"
          content="A simple blog with complex thoughts"
        />
        <meta property="og:image" content="/meta-image.jpg" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero />
      <Featured blogs={blogs} />
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const featuredBlogs = getFeaturedBlogs();

  return {
    props: {
      blogs: featuredBlogs,
    },
  };
};

export default Home;
