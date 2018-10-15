import React from "react";
import { FlatList, TextInput, StyleSheet, View } from "react-native";
import { Text, ListItem, Left, Body, Right } from "native-base";
import Icon from 'react-native-vector-icons/Entypo'
import {Fonts} from '../utils/Fonts'
//import { Icon as icono } from 'react-native-vector-icons/Entypo'


//const data = require('../data/data.json')
import customData from '../data/data.json'
import { white, black } from "ansi-colors";

export default class ListSong extends React.Component {
  constructor() {
    super();
    this.state = {
      data: customData.data,
      dataClon: undefined,
      stickyHeaderIndices: [],
      text: '',
      hayRegistros: true,
      cambiarIcono: true
    };
  }


  renderItem = ({ item }) => {    
      return (
        <ListItem onPress={() => this.props.navigation.navigate('Song', { item: item.lyrics, titulo: item.name })} style={{ marginLeft: 0 }}>
          <Body>
            <Text style={styles.letra}>{item.name}</Text>
          </Body>
          <Right>            
          </Right>
        </ListItem>
      );    
  };

  filterData(text) {

    let textLowerCase = text.toLowerCase();
    const a = this.state.data.filter(d => d.name.toLowerCase().indexOf(textLowerCase) > -1);


    this.setState({
      dataClon: a,
      text: text,
      hayRegistros: a.length > 0
    });

  }

  channgeIcon(){
    this.setState({
      cambiarIcono: !cambiarIcono
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      
      <View style={{flex:1,backgroundColor:"black"}}>     
        <TextInput style={styles.textInput}
          onChangeText={(text) => this.filterData(text)}
          value={this.state.text}
          placeholder="Buscar"
          placeholderTextColor="white"
        />
        {(this.state.hayRegistros) ?
          <FlatList 
            data={this.state.dataClon || this.state.data}
            renderItem={this.renderItem}
            keyExtractor={item => item.name}
            stickyHeaderIndices={this.state.stickyHeaderIndices}
          /> :
          <Text style={styles.textElementsNotFound}>Título no encontrado</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#cecece',
    marginBottom: 10,
    marginHorizontal: 10,
    fontSize: 18, 
    color:'white'
  },
  textElementsNotFound: {
    fontSize: 30,
    marginLeft: 50,
    color:'white'
  },
  letra:{
    color: 'white',
    fontFamily: Fonts.GothamMediumRegular
  }
})