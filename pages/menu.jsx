import styles from "../styles/menu.module.scss";
import Link from "next/link";
import React, {useState} from "react";

// export default function Menu() {
// 	const [openMenu, setOpenMenu] = useState(false);
// 	const menuToggle = () => {
// 		setOpenMenu(!openMenu)
// 	}

// 	return(
// 		<div className={styles.nav_area} onClick={() => menuToggle()}>
// 			<div className={styles.toggle_btn}>
// 				<span className={openMenu ? styles.open : styles.close}></span>
// 				<span className={openMenu ? styles.open : styles.close}></span>
// 				<span className={openMenu ? styles.open : styles.close}></span>
// 			</div>
// 			<div className={`${styles.nav} ${openMenu ? styles.open : styles.close}`}>
// 				<div className={styles.inner}>
// 					<ul className={styles.main_manu}>
// 						<li><Link href={"/"}><a>TOP</a></Link></li>
// 						<li><Link href={"/about"}><a>ABOUT</a></Link></li>
// 						<li className={styles.works}><Link href={"/article_list"}><a>WORKS</a></Link>
// 							<ul className={styles.sub_menu}>
// 								<li><Link href={"/exhibition"}><a>EXHIBITION</a></Link></li>
// 								<li><Link href={"/text"}><a>TEXT</a></Link></li>
// 								<li><Link href={"/video"}><a>VIDEO</a></Link></li>
// 							</ul>
// 						</li>
// 					</ul>
// 				</div>
// 			</div>
// 			<div className={`${styles.mask} ${openMenu ? styles.open : styles.close}`}></div>
// 		</div>
// 	)
// }

export default function Menu() {
	const [openMenu, setOpenMenu] = useState(false);
	const menuToggle = () => {
		setOpenMenu(!openMenu)
	}

	return(
		<div className={styles.nav_area} onClick={() => menuToggle()}>
			<div className={styles.toggle_btn}>
				<span className={openMenu ? styles.open : styles.close}></span>
				<span className={openMenu ? styles.open : styles.close}></span>
				<span className={openMenu ? styles.open : styles.close}></span>
			</div>
			<div className={`${styles.nav} ${openMenu ? styles.open : styles.close}`}>
				<div className={styles.inner}>
					<ul className={styles.dropdown}>
						<li><Link href={"/"}><a>TOP</a></Link></li>
						<li><Link href={"/about"}><a>ABOUT</a></Link></li>
						<li className={styles.works}>
							<div><Link href={"/article_list"}><a>WORKS</a></Link></div>
								{/* <div className={styles.sub_innner}> */}
									<ul className={styles.sub_menu}>
										<li><Link href={"/exhibition"}><a>EXHIBITION</a></Link></li>
										<li><Link href={"/text"}><a>TEXT</a></Link></li>
										<li><Link href={"/video"}><a>VIDEO</a></Link></li>
									</ul>
								{/* </div> */}
						</li>
					</ul>
				</div>
			</div>
			<div className={`${styles.mask} ${openMenu ? styles.open : styles.close}`}></div>
		</div>
	)
}