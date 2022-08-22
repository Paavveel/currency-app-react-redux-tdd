import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithStore } from '../../testUtils';
import { errorCourseState, loadingCourseState } from '../../testUtils/store';
import { fetchTodayCourse } from '../Course/courseSlice';
import { RefreshCourse } from './RefreshCourse';

describe('when the button is in initial state', () => {
  it('should contain the default text', () => {
    renderWithStore(<RefreshCourse />);

    expect(screen.getByText(/Обновить курс/i)).toBeInTheDocument();
  });
});

describe('when the button is in the loading state', () => {
  it('should contain the corresponding text', () => {
    renderWithStore(<RefreshCourse />, {
      state: { course: loadingCourseState },
    });

    expect(screen.getByText(/Обновляем курс .../i)).toBeInTheDocument();
  });
});

describe('when the button is in an error state', () => {
  it('should contain the error message', () => {
    renderWithStore(<RefreshCourse />, {
      state: { course: errorCourseState },
    });

    expect(screen.getByText(/Server Error!/i)).toBeInTheDocument();
  });
});

describe('when the button is clicked', () => {
  it('should call the dispatch', async () => {
    const dispatch = jest.fn();
    const thunk = fetchTodayCourse();
    await thunk(dispatch, () => ({}));

    const user = userEvent;
    renderWithStore(<RefreshCourse />);

    user.click(screen.getByRole('button'));

    expect(dispatch).toHaveBeenCalled();
  });
});
