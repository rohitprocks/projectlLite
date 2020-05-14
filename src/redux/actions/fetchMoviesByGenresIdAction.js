import Constants from '../constants';
import {requestStarted, requestCompleted} from '../app/appActions';
import axios from 'axios';

export const fetchMoviesByGenresIdAction = (genreId) => (
  dispatch,
  getState,
) => {
  dispatch(requestStarted());

  console.log("genreId is "+genreId);

    try{
      axios.get("https://api.themoviedb.org/3/genre/"+genreId+"/movies?api_key=68e82445c8842ba8616d0f6bf0e97a41")
      .then(function(response){
          console.log("response of Movie data is "+JSON.stringify(response.data.results));
          dispatch(requestCompleted());

          dispatch(movieDataSuccess(response.data.results));

      })
      .catch(function(error){
        dispatch(movieDataFailure(error));
        dispatch(requestCompleted());

          alert(error);
      })
  
  } catch (e) {
    dispatch(movieDataFailure(error));
    dispatch(requestCompleted());
    console.log('catch error is ' + e);
  }
};




const movieDataSuccess = data => dispatch => {
  dispatch({
    type: Constants.FETCH_MOVIE_DATA_SUCCESS,
    payload: data,
  });
};

const movieDataFailure = error => dispatch => {
  dispatch({
    type: Constants.FETCH_MOVIE_DATA_FAILURE,
    payload: error,
  });
};

