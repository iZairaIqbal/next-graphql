import Image from 'next/image';
import React, { useState } from 'react';
import styles from "../styles/Home.module.css";
import { DEFAULT_IMG_URL } from '../utils/constants';
import Song from './Song';

const Playlist = ({playlist}) => {
  const [image, setImage] = useState(playlist.images[0]?.url || DEFAULT_IMG_URL);

  const setDefaultImage=()=> {
    setImage(DEFAULT_IMG_URL);
  }

  return (
    <div key={playlist.id} className={styles.card}>
      <h3>{playlist.name}</h3>
      <Image
        src={image}
        alt={playlist.name}
        width={100}
        height={100}
        layout="responsive"
        onError={setDefaultImage}
      />
      {playlist.tracks.map((song)=> (
        <Song key={song.track.id} song={song.track} />
      ))}
    </div>
  )
}

export default Playlist;
