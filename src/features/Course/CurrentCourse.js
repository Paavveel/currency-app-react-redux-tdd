import React from 'react';
import { useSelector } from 'react-redux';
import { selectCourse } from './courseSlice';
import styles from './CurrentCourse.module.css';

export function CurrentCourse() {
  const value = useSelector(selectCourse);
  return <div className={styles.value}>{value}₽</div>;
}
