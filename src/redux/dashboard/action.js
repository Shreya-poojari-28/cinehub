import { setAllMoviesList, setNowPlayingList, setPopularMovieList, setTopRatedList, setUpcomingList } from "../../reusableSlice";
import axiosInstance from "../api";

export const getPopularMovies = (page = 1, sortBy = 'popularity.desc') => async (dispatch) => {
    try {
        const res = await axiosInstance.get(`/movie/popular?page=${page}`);
        dispatch(setPopularMovieList(res.data));
        return res.data;
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        throw error;
    }
};

export const getTopRatedMovies = (page = 1) => async (dispatch) => {
    try {
        const res = await axiosInstance.get(`/movie/top_rated?page=${page}`);
        dispatch(setTopRatedList(res.data));
        return res.data;
    } catch (error) {
        console.error("Error fetching top rated movies:", error);
        throw error;
    }
};

export const getUpcomingMovies = (page = 1) => async (dispatch) => {
    try {
        const res = await axiosInstance.get(`/movie/upcoming?page=${page}`);
        dispatch(setUpcomingList(res.data));
        return res.data;
    } catch (error) {
        console.error("Error fetching upcoming movies:", error);
        throw error;
    }
};

export const getNowPlayingMovies = (page = 1) => async (dispatch) => {
    try {
        const res = await axiosInstance.get(`/movie/now_playing?page=${page}`);
        dispatch(setNowPlayingList(res.data));
        return res.data;
    } catch (error) {
        console.error("Error fetching now playing movies:", error);
        throw error;
    }
};
