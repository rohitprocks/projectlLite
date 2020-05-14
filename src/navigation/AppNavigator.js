import React from 'react';
import { createAppContainer } from 'react-navigation';
import {
  createStackNavigator,
} from 'react-navigation-stack';

import movieComponent from '../functionalcomponent/movieComponent';
import MovieDetailScreen from '../functionalcomponent/movieDetailsComponents';



const AppNavigator = createStackNavigator({
 
  
  movie:{
    screen:movieComponent,
    navigationOptions: {
      header: null,
    }
  },

  movieDetail:{
    screen:MovieDetailScreen,
    navigationOptions: {
      header: null,
    }
  }

}, {
  headerMode: 'none',
  
})

const AppNavigatorContainer = createAppContainer(AppNavigator);


export default AppNavigatorContainer;
