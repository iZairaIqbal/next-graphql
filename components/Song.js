import React from 'react';
import styles from "../styles/Home.module.css";

const Song = ({song}) => (
  <div key={song.id} className={styles.card}>
    <h3>{song.name}</h3>
  </div>
);

export default Song;
