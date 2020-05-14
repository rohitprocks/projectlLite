import Constants from '../constants';

const initialState = {
  movieDataList: '',
  fetchError: null,
};

const fetchMoviesDtatReducer = (state = initialState, action) => {
  console.log('data fetch error: ' + action.error);
  console.log('fetchMoviesDtatReducer payload: ' + JSON.stringify(action.payload));
  console.log('fetchMoviesDtatReducer payload: ' + action.type);

  switch (action.type) {
    case Constants.FETCH_MOVIE_DATA_SUCCESS:
      console.log('fetchMoviesDtatReducer payload: Data fetch SUCCESS');
      return {
        ...state,
        movieDataList: action.payload,
        fetchError: null,
      };
   
    case Constants.FETCH_MOVIE_DATA_FAILURE:
      console.log('fetchMoviesDtatReducer payload: Data fetch Failed');
      return {
        ...state,
        movieDataList: action.payload,
        fetchError: action.error,
      };

    default:
      return state;
  }
};

export default fetchMoviesDtatReducer;
