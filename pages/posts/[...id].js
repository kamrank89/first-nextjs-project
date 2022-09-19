import Layout from "../../components/layout";

export default function Post(props) {
  return (
    <Layout>
      <div>dynamic routing</div>
      <h1 className="text-green-800">{props.des1}</h1>
      <h2 className="text-red-400">{props.des2}</h2>
    </Layout>
  );
}
export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: ["first-page", "a"] } }],
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  return {
    props: {
      des1: "first-page",
      des2: "this is working",
    },
  };
};
