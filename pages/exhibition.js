import { client } from "../libs/client";
import Link from "next/link";
import Image from "next/image";
import Header from "./header";
import Footer from "./footer";
import styles from "../styles/exhibition.module.scss";

export default function Home({ works }) {
  const exhi_list = works.filter(works => {
    return (works.category[0] === "exhibition")
  })
return (
  <>
    <Header />
    <div className={styles.main}>
      <div className={styles.top_works}>Works</div>
      <div className={styles.categories}>Exhibition</div>
      <ul className={styles.article_list}>
      {exhi_list.map((works) => (
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
