import { combineReducers } from 'redux';

import app from './app/appReducer';
import fetchMoviesGenreListActionReducer from './reducers/fetchMoviesGenreListActionReducer';
import fetchGenreMovieDetailReducer from './reducers/fetchGenreMovieDetailReducer';
import fetchMoviesDtatReducer from './reducers/fetchMoviesDtatReducer';


export default appReducer = combineReducers({
  app,
  fetchMoviesGenreListActionReducer,
  fetchGenreMovieDetailReducer,
  fetchMoviesDtatReducer,
  
});



