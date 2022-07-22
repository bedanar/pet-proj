import React, { createRef, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom'
import { CommentForm } from '../CommentForm';
// import { CommentFormContainer } from '../CommentFormContainer';
import styles from './post.css';

interface IPostProps {
  onClose?: () => void
}

export function Post({onClose} : IPostProps) {
  const postRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !postRef.current?.contains(event.target)) {
        onClose?.()
      }
      console.log('clicked out')
    }

    document.addEventListener('click', handleClick)

    return () => (
      removeEventListener('click', handleClick)
    )
  })

  const node = document.querySelector('#modal_root')
  if (!node) return null

  return ReactDOM.createPortal((
    <div className={styles.modal} ref={postRef}>
        <h2>Следует отметить, что новая модель организационной деятельности поможет</h2>
        <div className={styles.content}>
          <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, 
            как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям.
          </p>
          <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, 
            как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. 
          </p>
        </div>
        {/* <CommentFormContainer /> */}
        <CommentForm />
    </div>),
    node
  );
}
