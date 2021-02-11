import React from "react";
import {View, Text, Button} from "react-native";

const Films = (props) => {
    const { navigation } = props;

    return(
        <View>
            <Text>
                Films
            </Text>
            <Button
                title="Go to Books"
                onPress={() => navigation.navigate('Books')}
            />
        </View>
    );
}

export default Films;