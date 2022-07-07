import React, { ChangeEvent, FormEvent } from 'react';
import styles from './commentform.css';

interface ICommentFormProps {
  value: string,
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void,
  onSubmit: (event: FormEvent) => void
}
export function CommentForm({value, onChange, onSubmit} : ICommentFormProps) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <textarea className={styles.input} value={value} onChange={onChange}></textarea>
      <button className={styles.button} type='submit'>Comment</button>
    </form>
  );
}
