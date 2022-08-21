import React from 'react';
import { CurrentCourse } from '../Course';
import { RefreshCourse } from '../RefreshCourse';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      Курса доллара сегодня:
      <CurrentCourse />
      <RefreshCourse />
    </header>
  );
}
