import { initialCourseState } from './courseSlice';
import { fetchTodayCourseRejected } from './rejected';

const loadingCourseState = {
  ...initialCourseState,
  status: 'loading',
};

const testAction = {
  payload: 'Server Error!',
};

describe('when called', () => {
  it('should return a state with the error', () => {
    const result = fetchTodayCourseRejected(loadingCourseState, testAction);

    expect(result.error).toEqual('Server Error!');
  });

  it('should change the loading status', () => {
    const result = fetchTodayCourseRejected(loadingCourseState, testAction);

    expect(result.status).toEqual('idle');
  });
});
