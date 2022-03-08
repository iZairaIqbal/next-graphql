import React from 'react';
import styles from "../styles/Home.module.css";

const Country = ({country}) => (
  <div key={country.code} className={styles.card}>
    <h3>{country.name}</h3>
    <p>
      {country.code}
    </p>
  </div>
)

export default Country;
