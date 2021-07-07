import { client } from "../libs/client";
import Header from "./header";
import Footer from "./footer";
import Link from "next/link";
import Image from "next/image"
import styles from "../styles/topic.module.scss";

export default function Home({ works }) {
  const topic_list = works.filter(works => {
    return (works.topic === true)
  })
  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.top_Tracks}>Tracks</div>
        <div className={styles.topic}>
              <div className={styles.topic_eyeCatch}>
                <Link href={`/works/${topic_list[0].id}`}>
                  <Image src={topic_list[0].eyeCatch.url} width={800} height={500} objectFit={"cover"}/>
                </Link>
              </div>
              <div className={styles.topic_caption}>
                <div className={styles.feature_topic}>Feature Topic</div>
                <Link href={`/works/${topic_list[0].id}`}>
                  <div className={styles.topic_title}>{topic_list[0].title}</div>
                </Link>
                <Link href={`/works/${topic_list[0].id}`}>
                  <div className={styles.sub_title}>{topic_list[0].subTitle}</div>
                </Link>
                <div className={styles.topic_description}>{topic_list[0].description}</div>
                <div className={styles.moreButton}>
                  <div className={styles.moreView}><Link href={`/works/${topic_list[0].id}`}>→MORE VIEW</Link></div>
                  <div className={styles.moreContents}><Link href={"/article_list"}>→MORE CONTENTS</Link></div>
                </div>
              </div>
        </div>
      </div>
      <Footer />
    </>
  )
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