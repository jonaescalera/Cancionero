'use strict';
import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground
} from 'react-native'

import ListSong from './src/components/ListSong'
import Song from './src/components/Song'
import { StackNavigator } from 'react-navigation'
import { Fonts } from './src/utils/Fonts'
import Icon from "react-native-vector-icons/FontAwesome";

const AppNavigator = StackNavigator({
  ListSong: { 
    screen: ListSong,
    navigationOptions: ({navigation}) => {
      
    }
   },
  Song: { screen: Song }
}, {
    initialRouteName: "ListSong",
    headerMode: 'screen',
    navigationOptions: ({ navigation }) => (
      {
        headerLeft: <View><Icon name="arrow-left" size={30}></Icon></View>,
        header: (
          <ImageBackground source={require('./src/images/imagenTrasera.jpg')}
            style={{ flex: 1, width: null, height: null }}>
            
          </ImageBackground>
        )
      }
    )
  }
);

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