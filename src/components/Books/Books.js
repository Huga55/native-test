import React from "react";
import {View, Text, Button} from "react-native";

const Books = (props) => {
    const { navigation } = props;

    return(
        <View>
            <Text>
                Books
            </Text>
            <Button
                title="Go to Films"
                onPress={() => navigation.navigate('Films')}
            />
        </View>
    );
}

export default Books;