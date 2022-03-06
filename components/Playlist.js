import styles from "../styles/Home.module.css";

const Playlist = ({playlist}) => (
  <div key={playlist.code} className={styles.card}>
    <h3>{playlist.name}</h3>
    <img src={playlist.images[0]?.url} alt={playlist.name} className={styles.playlistImg} />
  </div>
);

export default Playlist;
