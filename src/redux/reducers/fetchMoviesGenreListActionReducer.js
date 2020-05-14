import Constants from '../constants';

const initialState = {
  movieGenreList: '',
  fetchError: null,
};

const fetchMoviesGenreListActionReducer = (state = initialState, action) => {
  console.log('data fetch error: ' + action.error);
  console.log('fetchMoviesGenreListActionReducer payload: ' + JSON.stringify(action.payload));
  console.log('fetchMoviesGenreListActionReducer payload: ' + action.type);

  switch (action.type) {
    case Constants.FETCH_MOVIE_GENRES_DATA_SUCCESS:
      console.log('fetchMoviesGenreListActionReducer payload: Data fetch SUCCESS');
      return {
        ...state,
        movieGenreList: action.payload,
        fetchError: null,
      };
   
    case Constants.FETCH_MOVIE_GENRES_DATA_FAILURE:
      console.log('fetchMoviesGenreListActionReducer payload: Data fetch Failed');
      return {
        ...state,
        movieGenreList: action.payload,
        fetchError: action.error,
      };

    default:
      return state;
  }
};

export default fetchMoviesGenreListActionReducer;
