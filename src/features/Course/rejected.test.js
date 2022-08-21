import { loadingCourseState } from '../../testUtils/store';
import { fetchTodayCourseRejected } from './rejected';

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
