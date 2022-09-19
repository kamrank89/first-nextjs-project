import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p className="underline text-green-400">
          Hello Hello I am bagh baghusdasdsad
        </p>
        <Link href="/posts/first-post">
          <a className="underline ">lets go to the first post</a>
        </Link>
        <br></br>
        <Link href="/posts/second-post">
          <a className="underline ">lets go to the second post</a>
        </Link>
        <br></br>

        <Link href="/posts/first-page">
          <a className="underline ">lets go to the dynamic page</a>
        </Link>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
