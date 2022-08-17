import React from 'react';
import { quotes } from './quotes';

export function Quote() {
  const { text, author } = quotes[0];
  return (
    <>
      <blockquote>{text}</blockquote>
      <cite>- {author}</cite>
    </>
  );
}
