import Link from "next/link";
import Image from "next/image";
import { client } from "../libs/client";
import Header from "./header";
import Hooter from "./hooter";
import styles from "../styles/about.module.scss";

export default function Home({ works }) {
  const text_list = works.filter(works => {
    return (works.category[0] === "text")
  })
return (
  <>
    <Header />
    <div className={styles.top_works}>About</div>
    <ul className={styles.article_list}>
      {text_list.map((works) => (
        <li key={works.id} className={styles.topic}>
          <div className={styles.topic_eyeCatch}>
            <Link href={`/works/${works.id}`}>
              <Image src={works.eyeCatch.url} width={800} height={500} objectFit={"cover"}/>
            </Link>
          </div>
          <div className={styles.topic_caption}>
            <div className={styles.feature_topic}>Feature Topic</div>
            <Link href={`/works/${works.id}`}>
              <div className={styles.topic_title}>{works.title}</div>
            </Link>
            <Link href={`/works/${works.id}`}>
              <div className={styles.sub_title}>{works.sub_title}</div>
            </Link>
            <div className={styles.topic_description}>{works.description}</div>
            <div className={styles.moreButton}>
              <div className={styles.moreView}>→MORE VIEW</div>
              <div className={styles.moreContents}>→MORE CONTENTS</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
    <Hooter />
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