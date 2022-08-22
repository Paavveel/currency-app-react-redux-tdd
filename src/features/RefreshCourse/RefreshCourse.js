import React from 'react';
import { useSelector } from 'react-redux';
import { selectError, selectStatus } from '../Course/courseSlice';

export const RefreshCourse = () => {
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const isLoading = status === 'loading';

  return (
    <>
      <button type='button'>
        {isLoading ? 'Обновляем курс ...' : 'Обновить курс'}
      </button>
      {error && <p>{error}</p>}
    </>
  );
};
