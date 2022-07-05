import React from 'react';
import styles from './commentbutton.css';
import CommentsButton from '../../../../../icons/commentsbutton';

export function CommentButton() {
  return (
    <button className={styles.commentsButton}>
      <CommentsButton />
      <span className={styles.commentsNumber}>13</span>
    </button>
  );
}
