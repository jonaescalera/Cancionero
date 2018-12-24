import React, { Component } from "react";
import { ImageBackground, StyleSheet } from "react-native";

export default class Background extends Component {
    render() {
        return (
            <ImageBackground
                style={styles.imagen}
                source={require("../images/imagenTrasera.jpg")}
            >
                {this.props.children}
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    imagen: {
        flex: 1,
        paddingTop: 150
    }
});
