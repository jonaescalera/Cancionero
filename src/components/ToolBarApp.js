import React, { Component } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Toolbar } from "react-native-material-ui";

export default class ToolBarApp extends Component {
	render() {
		const {
			title,
			leftMenu,
			rightMenu,
			onRightMenuPress,
			height,
			backgroundColor = "rgba(0,0,0,0.5)"
		} = this.props;
		const colorMenu = "#fff";

		return (
			<Toolbar
				leftElement={leftMenu}
				centerElement={title}
				rightElement={rightMenu}
				onRightElementPress={onRightMenuPress}
				style={{
					container: {
						backgroundColor: backgroundColor,
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						height: (height !== undefined ? height : 150)
					},
					leftElement: { color: colorMenu },
					titleText: { color: colorMenu },
					rightElement: { color: colorMenu }
				}}
			/>
		);
	}
}