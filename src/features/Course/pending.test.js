import { initialCourseState } from './courseSlice';
import { fetchTodayCoursePending } from './pending';

describe('when called', () => {
  it('should return a state with the loading status', () => {
    const result = fetchTodayCoursePending(initialCourseState);

    expect(result.status).toEqual('loading');
  });

  it('should return a state with the error status null', () => {
    const result = fetchTodayCoursePending(initialCourseState);

    expect(result.error).toEqual(null);
  });
});
