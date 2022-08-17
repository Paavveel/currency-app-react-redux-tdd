import React from 'react';
import styles from './Quote.module.css';
import { quotes } from './quotes';

export function Quote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const { text, author } = quotes[randomIndex];
  return (
    <footer className={styles.quote}>
      <blockquote>{text}</blockquote>
      <cite className={styles.author}>- {author}</cite>
    </footer>
  );
}
