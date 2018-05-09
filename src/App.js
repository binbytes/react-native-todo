import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';

import MainScene from './containers/MainScene.container';

import store from './store/index.store';

const ConnectedRouter = connect()(Router);

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <ConnectedRouter>
          <Scene key="root">
            <Scene 
              key="Main" 
              component={MainScene} 
              title="All Tasks" 
              initial={true}
              titleStyle={{alignSelf: 'center', fontWeight: '100', fontSize: 20}}  
              navigationBarStyle={{ elevation: 2, backgroundColor: '#f9f9f9'}} />
          </Scene>
        </ConnectedRouter>
      </Provider>
    )
  }
}