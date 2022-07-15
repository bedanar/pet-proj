import React, { ChangeEvent, FormEvent, useContext } from 'react';
import styles from './commentform.css';
import { commentContext } from '../context/commentContext';

// interface ICommentFormProps {
//   value: string,
//   onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void,
//   onSubmit: (event: FormEvent) => void
// }
// export function CommentForm({value, onChange, onSubmit} : ICommentFormProps) {
//   return (
//     <form className={styles.form} onSubmit={onSubmit}>
//       <textarea className={styles.input} value={value} onChange={onChange}></textarea>
//       <button className={styles.button} type='submit'>Comment</button>
//     </form>
//   );
// }

export function CommentForm() {
  const {value, onChange} = useContext(commentContext)
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value)
  }
  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} value={value} onChange={handleChange}></textarea>
      <button className={styles.button} type='submit'>Comment</button>
    </form>
  );
}