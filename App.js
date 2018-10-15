'use strict';
import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native'

import ListSong from './src/components/ListSong'
import Song from './src/components/Song'
import {StackNavigator} from 'react-navigation'
import {Fonts} from './src/utils/Fonts'

const AppNavigator = StackNavigator({
  ListSong:{screen: ListSong},
  Song:{screen: Song}
},{
  headerMode: 'screen'
}
)

class App extends Component {
  constructor(props) {
      super(props)     
  }
  render() {
      console.disableYellowBox = true;
      
      return (
              <AppNavigator />             

      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;