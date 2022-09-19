import Link from "next/link";
import Layout from "../../components/layout";

export const getServerSideProps = async (ctx) => {
  return {
    props: {
      message: "this is hello form server",
    },
  };
};

export default function SecondPost(props) {
  return (
    <>
      <Layout>
        <h1 className="m-10 text-green-400">Second Post is op</h1>
        <Link href="/">
          <a className="m-10 text-blue-300">{props.message}</a>
        </Link>
      </Layout>
    </>
  );
}
