import React from 'react';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

export function Card() {
  return (
    <li className={styles.card}>
      <div className={styles.textContent}>
        <TextContent />
      </div>
      <Preview />
      <Menu />
      <Controls />
    </li>
  );
}
