import React, { useEffect, useContext } from 'react';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, setToken } from '../../../store/store';
import { useUserData } from '../../../hooks/useUserData';
import { userContext } from '../../context/userContext';
export function SearchBlock() {
  // const token = useSelector<RootState, string>(state => state.token)
  const dispatch = useDispatch()
  useEffect(() => {  
    
    if (window.__token__){
        dispatch(setToken(window.__token__))
    }
  }, []) 
  const {data, loading} = useUserData()
  // const {username, avatarImage} = useContext(userContext)
  return (
    <div className={styles.searchBlock}>
      <UserBlock 
      username={data.username} avatarSrc={data.avatarImage} loading={loading} 
      />
    </div>
  );
}
