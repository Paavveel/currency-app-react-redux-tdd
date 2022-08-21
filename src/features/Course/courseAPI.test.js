import { API, fetchCourse } from './courseAPI';

beforeEach(() => {
  global.fetch = jest.fn(() => {
    return {
      json: async () => 'Test Response',
    };
  });
});
afterAll(() => jest.restoreAllMocks());

describe('when requested', () => {
  it('should call a require URL', async () => {
    await fetchCourse();

    expect(global.fetch).toHaveBeenCalledWith(API);
  });

  it('should return the json from the response', async () => {
    const result = await fetchCourse();

    expect(result).toEqual('Test Response');
  });
});
