import React from 'react';
import styles from './menu.css';
import DropdownIcon from '../../../../icons/dropdown';
import { Dropdown } from '../../../Dropdown';
import { MenuItemsList } from './MenuItemsList';

export function Menu() {
  return (
    <div className={styles.menu}>
        <Dropdown button={<button className={styles.menuButton}>
          <DropdownIcon />
          </button>}>
          <div className={styles.dropdown}>
            <MenuItemsList /> 
            <button className={styles.closeButton}>
              <p className={styles.closeButtonText}>Закрыть</p>
            </button>
          </div>
        </Dropdown>
    </div>
  );
}
