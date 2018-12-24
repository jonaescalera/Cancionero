import React from "react";
import { FlatList, TextInput, StyleSheet, View } from "react-native";
import { Text, ListItem, Left, Body, Right } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { Fonts } from "../utils/Fonts";
import { Input } from "react-native-elements";
//import { Icon as icono } from 'react-native-vector-icons/Entypo'

//const data = require('../data/data.json')
import customData from "../data/data.json";
import { white, black } from "ansi-colors";

import Background from "../components/Background";


export default class ListSong extends React.Component {
	constructor() {
		super();
		this.state = {
			data: customData.data,
			dataClon: undefined,
			stickyHeaderIndices: [],
			text: "",
			hayRegistros: true,
			cambiarIcono: true
		};
	}

	renderItem = ({ item }) => {
		return (
			<ListItem
				onPress={() =>
					this.props.navigation.navigate("Song", {
						item: item.lyrics,
						titulo: item.name
					})
				}
				style={{ marginLeft: 0 }}
			>
				<Body>
					<Text style={styles.letra}>{item.name}</Text>
				</Body>
				<Right />
			</ListItem>
		);
	};

	filterData(text) {
		let textLowerCase = text.toLowerCase();
		const a = this.state.data.filter(
			(d) => d.name.toLowerCase().indexOf(textLowerCase) > -1
		);

		this.setState({
			dataClon: a,
			text: text,
			hayRegistros: a.length > 0
		});
	}

	channgeIcon() {
		this.setState({
			cambiarIcono: !cambiarIcono
		});
	}

	componentDidMount() {
		this.props.navigation.setParams({ filterData: this.filterData.bind(this) });
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<Background >
				<View>
					{this.state.hayRegistros ? (
						<FlatList
							data={this.state.dataClon || this.state.data}
							renderItem={this.renderItem}
							keyExtractor={(item) => item.name}
							stickyHeaderIndices={this.state.stickyHeaderIndices}
						/>
					) : (
							<Text style={styles.textElementsNotFound}>
								No se encontraron resultados
					</Text>
						)}
				</View>
			</Background>
		);
	}
}

const styles = StyleSheet.create({
	textInput: {
		height: 40,
		borderWidth: 1,
		borderColor: "#cecece",
		marginBottom: 10,
		marginHorizontal: 10,
		fontSize: 18,
		color: "white",
		borderRadius: 25,
		paddingLeft: 10
	},
	textElementsNotFound: {
		fontSize: 18,
		marginLeft: 50,
		marginTop: 10,
		color: "white",
		fontFamily: Fonts.GothamMediumRegular
	},
	letra: {
		color: "white",
		fontFamily: Fonts.GothamMediumRegular
	},
	searchSection: {
		flex: 1,
		backgroundColor: "black"
	},
	searchIcon: {
		paddingBottom: 10,
		paddingLeft: 350
	}
});

/*
				<TextInput
					style={styles.textInput}
					onChangeText={(text) => this.filterData(text)}
					value={this.state.text}
					placeholder="Busca una canción"
					placeholderTextColor="white"
					underlineColorAndroid="transparent"
				/>
				<Icon
					style={styles.searchIcon}
					name="ios-search"
					size={20}
					color="white"
				/>

*/
