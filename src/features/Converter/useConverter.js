import { useState } from 'react';
import { rubToUsd, usdToRub } from '../../domain/converter';

export const useConverter = (initialRubValue, course) => {
  const calculatedUsdAmount = rubToUsd(initialRubValue, course);
  const [rub, setRub] = useState(initialRubValue);
  const [usd, setUsd] = useState(calculatedUsdAmount);

  const updateRub = value => {
    const rub = value;
    const usd = rubToUsd(rub, course);

    setRub(rub);
    setUsd(usd);
  };
  const updateUsd = value => {
    const usd = value;
    const rub = usdToRub(usd, course);

    setRub(rub);
    setUsd(usd);
  };

  return {
    rub,
    usd,
    updateRub,
    updateUsd,
  };
};
