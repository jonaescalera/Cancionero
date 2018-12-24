import React from "react";
import { Input } from "react-native-elements";

export default class InputSearch extends React.Component {
    render() {
        const { filterData } = this.props;

        return (
            <Input
                underlineColorAndroid="transparent"
                rightIcon={{ name: "search", color: "#fff" }}
                placeholder="Busca una canción"
                inputStyle={{
                    color: "#fff"
                }}
                placeholderTextColor="gray"
                containerStyle={{
                    borderWidth: 1,
                    borderColor: "gray",
                    borderRadius: 15,
                }}
                inputContainerStyle={{
                    borderBottomColor: "transparent",
                }}
                onChangeText={(text) => filterData(text)}
            />
        );
    }
}

