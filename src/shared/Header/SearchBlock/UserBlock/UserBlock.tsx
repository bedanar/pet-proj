import React from 'react';
import AnonymIcon from '../../../../icons/anonym';
import { Text, EColors } from '../../../Text';
import styles from './userblock.css';

interface IUserBlockProps {
  avatarSrc?: string,
  username?: string
}

export function UserBlock({avatarSrc, username} : IUserBlockProps) {
  return (
    <a  
    href="https://www.reddit.com/api/v1/authorize?client_id=zyDry8dyH8XMFAD0Z5V7Qg&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
    className={styles.userBox}>
      <div className={styles.avatarBox}>
        {avatarSrc
          ? <img src={avatarSrc} alt={username} className={styles.avatarImage} />
          : <AnonymIcon />
        }
      </div>
      <div className={styles.username}>
        <Text size={20} color={username ? EColors.black : EColors.grey99}>{username || 'Аноним'}</Text>
      </div>
    </a>
  );
}
