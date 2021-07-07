import { client } from "../libs/client";
import Header from "./header";
import Footer from "./footer";
import Topic from "./topic";

export default function Home({ works }) {
  return (
    <>
      <Header />
      <Topic articles = {works}/>
      <Footer />
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "works" });

  return {
    props: {
      works: data.contents,
    },
  };
};