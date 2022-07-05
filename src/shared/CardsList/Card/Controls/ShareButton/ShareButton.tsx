import React from 'react';
import styles from './sharebutton.css';
import ShareIcon from '../../../../../icons/share';

export function ShareButton() {
  return (
<button className={styles.shareButton}>
            <ShareIcon />
          </button>
  );
}
