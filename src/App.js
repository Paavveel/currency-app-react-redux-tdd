import React from 'react';
import styles from './App.module.css';
import { Converter } from './features/Converter';
import { Quote } from './features/Quote';

export function App() {
  return (
    <main className={styles.main}>
      {/* Header */}
      <Converter />
      <Quote />
    </main>
  );
}
