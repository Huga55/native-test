import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";

const TodoElem = (props) => {
    const { id, text, showDelete, setShowDelete, deleteTodo } = props;

    const changeShowDelete = () => {
        if(id === showDelete) {
            setShowDelete(0);
        }else {
            setShowDelete(id);
        }
    }

    return(
        <View style={styles.block}>
            <TouchableOpacity onPress={changeShowDelete}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
            {
                showDelete === id?
                    <View style={styles.block_delete}>
                        <TouchableOpacity style={styles.delete} onPress={() => deleteTodo(id)}>
                            <Text style={styles.delete_text}>Delete</Text>
                        </TouchableOpacity>
                    </View> : null
            }
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        width: "100%",
        marginVertical: 5,
        padding: 10,
        backgroundColor: "#f2f2f2",
        position: "relative",
    },
    text: {
        fontSize: 18,
    },
    block_delete: {
        position: "absolute",
        right: 0,
        top: 0,
        bottom:0,
    },
    delete: {
        height: "100%",
        paddingHorizontal: 10,
        justifyContent: "center",
        backgroundColor: "#e84c3d",
    },
    delete_text: {
        color: "#fff",
    }
});

export default TodoElem;