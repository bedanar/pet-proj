import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img src="https://cdn.dribbble.com/userupload/2986612/file/original-29f23ca5422f4049d64bc36ff0aa964b.png?compress=1&resize=1504x1128" 
      alt="preview" className={styles.previewImg} />
    </div>
  );
}
