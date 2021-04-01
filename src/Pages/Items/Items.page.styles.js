import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    elem: {
        minHeight: 35,
        marginVertical: 5,
        paddingHorizontal:5,
        backgroundColor: "#46aeeb",
        position: "relative",
        justifyContent: "center",
    },
    elemText: {
        fontSize: 15,
        color: "#fff",
    },
    add: {
        marginVertical: 20,
    },
    edit: {
        width: 40,
        height: "100%",
        position: "absolute",
        right: 45,
        top: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    delete: {
        width: 40,
        height: "100%",
        position: "absolute",
        right: 0,
        top: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    deleteImg: {
        width: 25,
        height: 25,
    },
    elemWrapper: {
        width: "100%",
        height: 35,
        justifyContent: "center",
    },
});