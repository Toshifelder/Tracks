import Link from "next/link";
import Image from "next/image";
import styles from "../styles/topic.module.scss";


export default function Topic(props) {
	for (let i=0; i < props.articles.length; i++) {
		const topicState = props.articles[i].topic;
		if (topicState === true) {
			return (
				<div className={styles.main}>
					<div className={styles.top_Tracks}>Tracks</div>
					<div className={styles.topic}>
						<div className={styles.topic_eyeCatch}>
							<Link href={`/works/${props.articles[i].id}`}>
								<Image src={props.articles[i].eyeCatch.url} width={800} height={500} objectFit={"cover"}/>
							</Link>
						</div>
						<div className={styles.topic_caption}>
							<div className={styles.feature_topic}>Feature Topic</div>
							<Link href={`/works/${props.articles[i].id}`}>
								<div className={styles.topic_title}>{props.articles[i].title}</div>
							</Link>
							<Link href={`/works/${props.articles[i].id}`}>
								<div className={styles.sub_title}>{props.articles[i].subTitle}</div>
							</Link>
							<div className={styles.topic_description}>{props.articles[i].description}</div>
							<div className={styles.moreButton}>
								<div className={styles.moreView}><Link href={`/works/${props.articles[i].id}`}>→MORE VIEW</Link></div>
								<div className={styles.moreContents}><Link href={"/article_list"}>→MORE CONTENTS</Link></div>
							</div>
						</div>
					</div>
				</div>
			)
		}
	}
}