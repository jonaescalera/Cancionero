"use strict";
import React, { Component } from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import { IconToggle } from "react-native-material-ui";

import Song from "./src/components/Song";
import ListSong from "./src/components/ListSong";
import ToolBarApp from "./src/components/ToolBarApp";
import InputSearch from "./src/components/InputSearch";
import { Fonts } from "./src/utils/Fonts";

const AppNavigator = createStackNavigator(
	{
		ListSong: {
			screen: ListSong,
			navigationOptions: ({ navigation }) => {
				const { params = {} } = navigation.state;

				return {
					header: (
						<ToolBarApp
							title={(
								<View>
									<View style={{ flexDirection: "row" }}>
										<Text style={{
											color: "white",
											fontSize: 50,
											fontFamily: Fonts.GothamMediumRegular
										}}>canta</Text>
										<Text style={{
											fontSize: 50,
											color: "red",
											fontFamily: Fonts.GothamMediumRegular
										}}>olivos</Text>
									</View>

									<InputSearch filterData={params.filterData} />
								</View>
							)}
						/>
					)
				};
			}
		},
		Song: {
			screen: Song, navigationOptions: ({ navigation }) => {
				const { params = {} } = navigation.state;

				return {
					header: (
						<ToolBarApp
							height={60}
							backgroundColor="transparent"
							leftMenu={
								<IconToggle
									name="arrow-back"
									color="white"

									onPress={() => {
										navigation.goBack();
									}}
								/>
							}
						/>
					)
				};
			}
		}
	},
	{
		initialRouteName: "ListSong",
		headerMode: "screen",
	}
);

export default class App extends Component {
	render() {
		console.disableYellowBox = true;

		return <AppNavigator />;
	}
}