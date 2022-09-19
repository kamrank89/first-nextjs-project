import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import Script from "next/script";

export default function FirstPost() {
  return (
    <Layout>
      <>
        <Head>
          <title>Welcome to first page</title>
        </Head>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
        <h1 className="underline text-red-300">First Post is op</h1>
        <h2 className="underline text-red-400">
          <Link href="/">
            <a className="text-blue-400">Back to home!!!!</a>
          </Link>
        </h2>
      </>
    </Layout>
  );
}
