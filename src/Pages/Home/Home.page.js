import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {styles} from "./Home.page.styles";

const Home = (props) => {
    const { navigation } = props;

    const changeScreen = (screen) => {
        navigation.navigate(screen);
    }

    return (
        <View style={styles.home}>
            <Text style={styles.mainText}>
                Please select section
            </Text>
            <View style={styles.buttons}>
                <TouchableOpacity onPress={() => changeScreen("Films")} style={styles.touch}>
                    <Text style={styles.buttonText}>
                        Your Films
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => changeScreen("Books")} style={styles.touch}>
                    <Text style={styles.buttonText}>
                        Your Books
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home;