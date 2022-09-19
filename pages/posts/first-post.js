import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import Script from "next/script";

export const getStaticProps = async (ctx) => {
  return {
    props: {
      message: "testing the fetching data",
      date: "09/19/2022",
      name: "kamran",
    },
  };
};

export default function FirstPost(props) {
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
        <h1 className="text-green-800 no-underline">{props.date}</h1>
        <h1 className="text-green-700 underline">{props.message}</h1>
        <h1 className="text-green-700">{props.name}</h1>
        <Link href="/">
          <a className="text-blue-400">Back to home!!!!</a>
        </Link>
      </>
    </Layout>
  );
}
