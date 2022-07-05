import React, { useState } from 'react';
import styles from './title.css';
import {Post} from '../../../../Post'

export function Title() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <h2 className={styles.title}>
          <a href="#post-url" className={styles.postLink} 
          onClick={() => setIsModalOpen(true)}>Реплицированные с зарубежных источников возможности </a>
          {
            isModalOpen && <Post onClose={() => setIsModalOpen(false)} />
          }
        </h2>
  );
}
