import { setMovieDetailData, setMovieDetailsLoading } from "../../reusableSlice"
import axiosInstance from "../api"

export const getMovieDetails = (movieId) => async (dispatch) => {
    try {
        dispatch(setMovieDetailsLoading());
        
        const res = await axiosInstance.get(`/movie/${movieId}?append_to_response=videos,credits,similar`)
        
        if (res?.status) {
            dispatch(setMovieDetailData(res?.data || []))
        } else {
            dispatch(setMovieDetailData([]))
        }
    } catch (error) {
        console.error(error)
    }
}