import React from "react";
import {Text, TouchableOpacity} from "react-native";
import {styles} from "./ButtonAdd.styles";

const ButtonAdd = (props) => {
    const {text, ...otherProps} = props;
    return (
        <>
            <TouchableOpacity style={styles.buttonAdd} {...otherProps}>
                <Text style={styles.buttonAddText}>
                    {text}
                </Text>
            </TouchableOpacity>
        </>
    );
}

export default ButtonAdd;