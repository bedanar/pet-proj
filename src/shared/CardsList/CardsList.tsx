import React, { useContext } from 'react';
import { postContext } from '../context/postContext';
import { Card } from './Card/Card';
import styles from './cardslist.css';

export function CardsList() {
  const [data] = useContext(postContext)
  return (
    <ul className={styles.cardsList}>
      {
        // @ts-ignore
        data.map((d: any, index: number) => {
          return <Card />
        }) 
      }
    </ul>
  );
}
