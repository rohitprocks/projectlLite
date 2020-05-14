import React, { Component } from 'react';
import { View } from 'react-native';
import LoadingComponent from '../functionalcomponent/LoadingComponent';
import AppNavigatorContainer from '../navigation/AppNavigator';
import { connect } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import Internet from '../utils/Internet';
import NavigationService from '../navigation/NavigationService';
import * as appActionCreator from '../redux/app/appActions';
import { bindActionCreators } from 'redux';

class AppComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isInternetWarningShow: false,
    };
  }


  componentDidMount() {
    NetInfo.addEventListener(this._handleConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.removeEventListener(this.handleConnectivityChange);
  }


  _handleConnectivityChange = isConnected => {
    this.props.appActions.isConnectionStateChanged(isConnected);
  }

  

  render () {
    console.log('this.props.loading::::::::::::: ' + this.props.loading);
    return (
      <View style={{ flex: 1 }}>
        <AppNavigatorContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
        {this.props.loading ? <LoadingComponent /> : <View />}
        {!this.props.isConnected && this.props.isConnected !== undefined ? (
          <Internet onTryAgainClick={this.onTryAgainClick} isInternetWarningShow={this.state.isInternetWarningShow} />
        ) : (
          <View />
        )}
      </View>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.app.loading,
  isConnected: state.app.isConnected,
  
});

const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(appActionCreator, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);
