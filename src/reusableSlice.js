import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  PopularMovieList: null,
  TopRatedList: null,
  UpcomingList: null,
  NowPlayingList: null,
  AllMoviesList: null,
};

export const reusableSlice = createSlice({
  name: "reusable",
  initialState,
  reducers: {

    setPopularMovieList: (state, action) => {
      if (action.payload.page === 1 || !state.PopularMovieList) {
        state.PopularMovieList = action.payload;
      } else {
        state.PopularMovieList.results.push(...action.payload.results);
        state.PopularMovieList.page = action.payload.page;
      }
    },

    setTopRatedList: (state, action) => {
      if (action.payload.page === 1 || !state.TopRatedList) {
        state.TopRatedList = action.payload;
      } else {
        state.TopRatedList.results.push(...action.payload.results);
        state.TopRatedList.page = action.payload.page;
      }
    },

    setUpcomingList: (state, action) => {
      if (action.payload.page === 1 || !state.UpcomingList) {
        state.UpcomingList = action.payload;
      } else {
        state.UpcomingList.results.push(...action.payload.results);
        state.UpcomingList.page = action.payload.page;
      }
    },

    setNowPlayingList: (state, action) => {
      if (action.payload.page === 1 || !state.NowPlayingList) {
        state.NowPlayingList = action.payload;
      } else {
        state.NowPlayingList.results.push(...action.payload.results);
        state.NowPlayingList.page = action.payload.page;
      }
    },

    setAllMoviesList: (state, action) => {
      if (action.payload.page === 1 || !state.AllMoviesList) {
        state.AllMoviesList = action.payload;
      } else {
        state.AllMoviesList.results.push(...action.payload.results);
        state.AllMoviesList.page = action.payload.page;
      }
    },
  },
});

export const {
  setPopularMovieList,
  setTopRatedList,
  setUpcomingList,
  setNowPlayingList,
  setAllMoviesList,
} = reusableSlice.actions;

export default reusableSlice.reducer;
