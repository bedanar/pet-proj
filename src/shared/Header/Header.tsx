import React, { useContext } from 'react';
import { tokenContext } from '../context/tokenContext';
import styles from './header.css';
import { SearchBlock } from './SearchBlock';
import { SortBlock } from './SortBlock';
import { ThreadTitle } from './ThreadTitle';

interface IHeaderProps{
  token: string
}

export function Header() {
  // const {Consumer} = tokenContext
  return (
    <header className={styles.header}>
      <ThreadTitle />
      <SearchBlock/>
      <SortBlock />
    </header>
  );
}
