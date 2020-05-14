import Constants from '../constants';

const initialState = {
  movieDetails: '',
  fetchError: null,
};

const fetchGenreMovieDetailReducer = (state = initialState, action) => {
  console.log('data fetch error: ' + action.error);
  console.log('fetchGenreMovieDetailReducer payload: ' + JSON.stringify(action.payload));
  console.log('fetchGenreMovieDetailReducer payload: ' + action.type);

  switch (action.type) {
    case Constants.FETCH_GENRE_MOVIE_DATA_SUCCESS:
      console.log('fetchGenreMovieDetailReducer payload: Data fetch SUCCESS');
      return {
        ...state,
        movieDetails: action.payload,
        fetchError: null,
      };
   
    case Constants.FETCH_GENRE_MOVIE_DATA_FAILURE:
      console.log('fetchGenreMovieDetailReducer payload: Data fetch Failed');
      return {
        ...state,
        movieDetails: action.payload,
        fetchError: action.error,
      };

    default:
      return state;
  }
};

export default fetchGenreMovieDetailReducer;
