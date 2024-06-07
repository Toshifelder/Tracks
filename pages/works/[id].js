import Image from "next/image";
import { client } from "../../libs/client";
import styles from "../../styles/article.module.scss";
import Header from "../header";
import Footer from "../footer";

export default function worksId({ works }) {
  return (
    <>
      <Header />
        <main className={styles.main}>
          <h1 className={styles.title}>{works.title}</h1>
          <Image src={works.eyeCatch.url} width={800} height={500} objectFit={"cover"}/>
          <p className={styles.publishedAt}>{works.publishedAt}</p>
          <div className={styles.works}
            dangerouslySetInnerHTML={{
              __html: `${works.body}`,
            }}
          />
        </main>
      <Footer />
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "works" });

  const paths = data.contents.map((content) => `/works/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "works", contentId: id });

  return {
    props: {
      works: data,
    },
  };
};