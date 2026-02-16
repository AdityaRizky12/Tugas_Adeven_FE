import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCourses, addCourse, updateCourse, deleteCourse } from "../api/CourseApi";


export const fetchCourses = createAsyncThunk("courses/fetchCourses", async () => {
  return await getCourses();
});


export const createCourse = createAsyncThunk("courses/createCourse", async (course) => {
  return await addCourse(course);
});


export const editCourse = createAsyncThunk(
  "courses/editCourse",
  async ({ id, updateData }) => {
    return await updateCourse(id, updateData);
  }
);

export const removeCourse = createAsyncThunk("courses/removeCourse", async (id) => {
  await deleteCourse(id);
  return id;
});


const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder

      // FETCH
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // ADD
      .addCase(createCourse.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })

      // UPDATE
      .addCase(editCourse.fulfilled, (state, action) => {
        const index = state.data.findIndex((c) => c.id === action.payload.id);
        if (index !== -1) state.data[index] = action.payload;
      })

      // DELETE
      .addCase(removeCourse.fulfilled, (state, action) => {
        state.data = state.data.filter((item) => item.id !== action.payload);
      });
  },
});

export default coursesSlice.reducer;
