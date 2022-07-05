import React, { useContext } from 'react';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';
import {useUserData} from '../../../hooks/useUserData'
import { userContext } from '../../context/userContext';

export function SearchBlock() {
  // const [data] = useUserData()
  // const {username, avatarImage} = useContext(userContext)
  return (
    <div className={styles.searchBlock}>
      <UserBlock 
      // username={username} avatarSrc={avatarImage} 
      />
    </div>
  );
}
