import Link from "next/link";
import Image from "next/image";
import { client } from "../libs/client";
import Header from "./header";
import Footer from "./footer";
import styles from "../styles/about.module.scss";

// export default function Home({ works }) {
//   const text_list = works.filter(works => {
//     return (works.category[0] === "text")
//   })
// return (
//   <>
//     <Header />
//     <div className={styles.top_works}>About</div>
//     <ul className={styles.article_list}>
//       {text_list.map((works) => (
//         <li key={works.id} className={styles.topic}>
//           <div className={styles.topic_eyeCatch}>
//             <Link href={`/works/${works.id}`}>
//               <Image src={works.eyeCatch.url} width={800} height={500} objectFit={"cover"}/>
//             </Link>
//           </div>
//           <div className={styles.topic_caption}>
//             <div className={styles.feature_topic}>Feature Topic</div>
//             <Link href={`/works/${works.id}`}>
//               <div className={styles.topic_title}>{works.title}</div>
//             </Link>
//             <Link href={`/works/${works.id}`}>
//               <div className={styles.sub_title}>{works.sub_title}</div>
//             </Link>
//             <div className={styles.topic_description}>{works.description}</div>
//             <div className={styles.moreButton}>
//               <div className={styles.moreView}>→MORE VIEW</div>
//               <div className={styles.moreContents}>→MORE CONTENTS</div>
//             </div>
//           </div>
//         </li>
//       ))}
//     </ul>
//     <Hooter />
//   </>
// );
// }

export default function Home({ works }) {
  const text_list = works.filter(works => {
    return (works.category[0] === "text")
  })
return (
  <>
    <Header />
    <main className={styles.main}>
    <div className={styles.top_works}>ABOUT</div>
      <section className={styles.section}>
            <h2>Our Mission</h2>
            <p>
                At GRIDIN, our mission is to provide innovative and effective design solutions that help businesses thrive in a constantly evolving digital landscape. We believe in the power of creativity, collaboration, and technology to transform ideas into impactful visual experiences.
            </p>
        </section>

        <section className={styles.section}>
            <h2>Who We Are</h2>
            <p>
                GRIDIN is a team of passionate designers, developers, and strategists dedicated to pushing the boundaries of design. Our diverse backgrounds and expertise allow us to tackle projects from various angles, ensuring unique and comprehensive solutions for our clients.
            </p>
        </section>

        <section className={styles.section}>
            <h2>Our Approach</h2>
            <p>
                We approach each project with a fresh perspective, tailoring our process to meet the specific needs of our clients. From initial concept to final delivery, we are committed to excellence and continuous improvement. Our collaborative approach ensures that we stay aligned with our clients goals and vision.
            </p>
        </section>

        <section className={styles.section}>
            <h2>Our Services</h2>
            <ul className={styles.list}>
                <li>Web Design and Development</li>
                <li>Graphic Design</li>
                <li>Branding and Identity</li>
                <li>User Experience (UX) Design</li>
                <li>Mobile App Design</li>
                <li>Digital Marketing</li>
            </ul>
        </section>
    </main>
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