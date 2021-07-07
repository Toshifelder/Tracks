import React from "react";
import styles from "../styles/footer.module.scss";


export default class Hooter extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.footer_Tracks}>Tracks</div>
        <div className={styles.copyRight}>Copyright @ by Tracks Magazine All rights reserved.</div>
      </footer>
    );
  }
}