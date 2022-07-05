import React from 'react';
import styles from './karmacounter.css';
import Up from '../../../../../icons/up';
import Down from '../../../../../icons/down';

export function KarmaCounter() {
  return (
<div className={styles.karmaCounter}>
          <button className={styles.up}>
            <Up />
          </button>
          <span className={styles.karmaValue}>1234</span>
          <button className={styles.down}>
            <Down />
          </button>
        </div>
  );
}
