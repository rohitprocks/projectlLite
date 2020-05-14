import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import configureStore from '../redux/store';
import AppContainer from '../functionalcomponent/AppCompnent';

const ProjectLiteApp = props => {


  return (
    <Provider store={configureStore()}>
      <AppContainer/>
    </Provider>
  );
};

export default ProjectLiteApp;
