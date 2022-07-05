import React from 'react';
import styles from './textcontent.css';
import { Title } from './Title';

export function TextContent() {
  return (
<div className={styles.textContent}>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80" 
            alt="avatar" className={styles.avatar} />
            <a href="#user-url" className={styles.userLink}>Dmitry Grishin</a>
          </div>
          <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>published</span>
            4 hours ago
          </span>
        </div>
        <Title />
      </div>
  );
}
