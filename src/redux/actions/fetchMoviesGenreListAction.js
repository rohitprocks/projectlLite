import Constants from '../constants';
import {requestStarted, requestCompleted} from '../app/appActions';
import axios from 'axios';

export const fetchMoviesGenreListAction = () => (
  dispatch,
  getState,
) => {
  dispatch(requestStarted());

    try{
      axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=68e82445c8842ba8616d0f6bf0e97a41")
      .then(function(response){
          console.log("response is "+JSON.stringify(response.data.genres));
          dispatch(requestCompleted());

          dispatch(movieGenreDataSuccess(response.data.genres));

      })
      .catch(function(error){
        dispatch(movieGenreDataFailure(error));
        dispatch(requestCompleted());

          alert(error);
      })
  
  } catch (e) {
    dispatch(movieGenreDataFailure(error));
    dispatch(requestCompleted());
    console.log('catch error is ' + e);
  }
};




const movieGenreDataSuccess = data => dispatch => {
  dispatch({
    type: Constants.FETCH_MOVIE_GENRES_DATA_SUCCESS,
    payload: data,
  });
};

const movieGenreDataFailure = error => dispatch => {
  dispatch({
    type: Constants.FETCH_MOVIE_GENRES_DATA_FAILURE,
    payload: error,
  });
};

