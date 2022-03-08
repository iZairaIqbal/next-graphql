import React from 'react';
import Head from "next/head";
import styles from "../styles/Home.module.css";
import {SpotifyGraphQLClient} from 'spotify-graphql';
import config from "../config";
import client from "../apollo/apollo-client";
import { gql } from "@apollo/client";
import Playlist from "../components/Playlist";
import Country from "../components/Country";

export default function Home({ playlists, countries }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spotify Playlists</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          Playlists
        </p>

        <div key={"playlists"} className={styles.grid}>
          {playlists.map((playlist) => (
            <Playlist key={playlist.id} playlist={playlist}/>
          ))}
        </div>

        <div key={"countries"} className={styles.grid}>
          {countries.map((country) => (
            <Country key={country.name} country={country}/>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const playlists = await SpotifyGraphQLClient(config).query(`
  {
    user(id: "11879785") {
      playlists {
        id
        name
        images {
          url
        }
        tracks {
          track {
            id
            name
          }
        }
      }
    }
  }`
  ).then(result => {
    return result.data;
  });

  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries,
      playlists: playlists.user.playlists,
    },
  };
}
