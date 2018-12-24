import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import BackgroundImage from './BackgroundImage'
import { Fonts } from '../utils/Fonts'

export class Song extends Component {
    render() {
        console.log(this.props)
        const { navigation } = this.props;
        const itemId = navigation.getParam('item')
        const titulo = navigation.getParam('titulo')

        return (
            <BackgroundImage source={require('../images/preview.jpg')} >
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.letraTitulo} >
                            {titulo}
                        </Text>
                        {itemId.map((item, key) => (
                            <Text key={key} style={styles.letra}>
                                {item}
                            </Text>
                        ))}


                    </View>
                </ScrollView>
            </BackgroundImage>

        )
    }
};

const styles = StyleSheet.create({
    letraTitulo: {
        color: "white",
        fontFamily: Fonts.Crayon,
        fontSize: 40,
        margin: 40
    },
    letra: {
        color: "white",
        fontFamily: Fonts.Crayon,
        fontSize: 30,
        margin: 20
    }
});

export default Song;