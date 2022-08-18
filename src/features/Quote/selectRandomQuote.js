import { quotes } from './quotes';

export const selectRandomQuote = second => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};
