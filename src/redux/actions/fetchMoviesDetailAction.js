import Constants from '../constants';
import {requestStarted, requestCompleted} from '../app/appActions';
import axios from 'axios';

export const fetchMoviesDetailAction = (movieId) => (
  dispatch,
  getState,
) => {
  dispatch(requestStarted());

    try{
      axios.get("https://api.themoviedb.org/3/movie/"+movieId+"?api_key=68e82445c8842ba8616d0f6bf0e97a41")
      .then(function(response){
          console.log("response Movie Details By Movie Id is "+JSON.stringify(response.data.poster_path));
          dispatch(requestCompleted());

          dispatch(genreMovieDetailDataSuccess(response.data));

      })
      .catch(function(error){
        dispatch(genreMovieDetailDataFailure(error));
        dispatch(requestCompleted());

          alert(error);
      })
  
  } catch (e) {
    dispatch(genreMovieDetailDataFailure(error));
    dispatch(requestCompleted());
    console.log('catch error is ' + e);
  }
};




const genreMovieDetailDataSuccess = data => dispatch => {
  dispatch({
    type: Constants.FETCH_GENRE_MOVIE_DATA_SUCCESS,
    payload: data,
  });
};

const genreMovieDetailDataFailure = error => dispatch => {
  dispatch({
    type: Constants.FETCH_GENRE_MOVIE_DATA_FAILURE,
    payload: error,
  });
};

