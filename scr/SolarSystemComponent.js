import React, {useEffect} from "react";
import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from "react-native";

const Planets = (props) => {
    const { image, title, desc, planet } = props;
    const clickedPlanet = () => {
        alert(`You Clicked ${planet}!`)
    }
    return (
        <TouchableOpacity onPress={clickedPlanet}>
            <View style={{
                flexDirection: 'row',
                backgroundColor: 'wheat',
                padding: 16,
                margin: 16,
                borderRadius: 20,
                borderColor: 'green',
                borderWidth: 1
            }}>
                {/* Image */}
                <Image
                    style={{
                        width: 100,
                        height: 100
                    }}
                    source={image}
                />

                {/* Name & Description */}
                <View style={{
                    flex: 1,
                    marginLeft: 8,
                    marginRight: 8,
                    justifyContent: "center"
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'black'
                    }}>
                        {title}
                    </Text>
                    <Text style={{
                        color: 'black'
                    }}>
                        {desc}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

export default Planets;