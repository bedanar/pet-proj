import React from 'react';
import styles from './savebutton.css';
import SaveIcon from '../../../../../icons/save';

export function SaveButton() {
  return (
<button className={styles.saveButton}>
            <SaveIcon />
          </button>
  );
}
