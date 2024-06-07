import Link from "next/link";
import Image from "next/image";
import { client } from "../libs/client";
import styles from "../styles/article_list.module.scss"
import Header from "./header";
import Footer from "./footer";

export default function Home({ works }) {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.top_works}>Works</div>
        <ul className={styles.article_list}>
          {works.map((works) => (
            <li className={styles.article} key={works.id}>
              <div className={styles.eyeCatch}>
                <Link href={`/works/${works.id}`}>
                  <Image src={works.eyeCatch.url} width={400} height={300} objectFit={"cover"}></Image>
                </Link>
              </div>
              <div className={styles.title}>
                <Link href={`/works/${works.id}`}>
                  <a className={styles.article_title}>{works.title}</a>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
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