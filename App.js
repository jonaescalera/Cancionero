"use strict";
import React, { Component } from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";

import ListSong from "./src/components/ListSong";
import Song from "./src/components/Song";
import { createStackNavigator } from "react-navigation";
import { Fonts } from "./src/utils/Fonts";
import Icon from "react-native-vector-icons/FontAwesome";

import { Header } from "react-native-elements";

const AppNavigator = createStackNavigator(
	{
		ListSong: {
			screen: ListSong,
			navigationOptions: ({ navigation }) => {}
		},
		Song: { screen: Song }
	},
	{
		initialRouteName: "ListSong",
		headerMode: "screen",
		navigationOptions: ({ navigation }) => ({
			header: (props) => (
				<Header
					leftComponent={{
						icon: "menu",
						color: "#fff",
						onPress: () => {}
					}}
				/>
			)
		})
	}
);

class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.disableYellowBox = true;

		return <AppNavigator />;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});

export default App;
