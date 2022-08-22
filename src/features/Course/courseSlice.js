import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCourse } from './courseAPI';
import { fetchTodayCourseFulfilled } from './fulfilled';
import { fetchTodayCoursePending } from './pending';
import { fetchTodayCourseRejected } from './rejected';

export const initialCourseState = {
  value: 42,
  status: 'idle',
  error: null,
};

export const fetchTodayCourse = createAsyncThunk(
  'course/fetchTodayCourse',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchCourse();

      if (!response) {
        throw new Error('Server Error!');
      }

      return response.Valute.USD.value;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const courseSlice = createSlice({
  name: 'course',
  initialState: initialCourseState,
  extraReducers: {
    [fetchTodayCourse.pending]: fetchTodayCoursePending,
    [fetchTodayCourse.fulfilled]: fetchTodayCourseFulfilled,
    [fetchTodayCourse.rejected]: fetchTodayCourseRejected,
  },
});

export const selectCourse = state => state.course.value;
export const selectStatus = state => state.course.status;
export const selectError = state => state.course.error;

export default courseSlice.reducer;
