import React from 'react';
import styles from './menuitemslist.css';
import ReportIcon from '../../../../../icons/report';
import HideIcon from '../../../../../icons/hide';

interface IMenuItemsListProps {
  postId?: string
}

export function MenuItemsList({postId} : IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem}>
        <HideIcon />
        <span className={styles.menuItemText}>Скрыть</span>
      </li>
      <div className={styles.divider}></div>
      <li className={styles.menuItem}>
        <ReportIcon />
        <span className={styles.menuItemText}>Пожаловаться</span>
      </li>
    </ul>
  );
}
