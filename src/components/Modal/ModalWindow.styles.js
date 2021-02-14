import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
    },
    background: {
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "#000",
        opacity: 0.6,
    },
    backgroundTouch: {
        width: "100%",
        height: "100%",
    },
    modal: {
        backgroundColor: "#000",
    },
    window: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    form: {
        width: "90%",
        marginTop: "-25%",
        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 10,
        position: "relative",
    },
    close: {
        width: 20,
        height: 20,
        position: "absolute",
        right: 10,
        top: 10,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2,
    },
    closeTouch: {
        width: "100%",
        height: "100%",
    },
    title: {
        marginBottom: 10,
        fontSize: 20,
    },
    inputName: {
        width: "100%",
        paddingVertical: 11,
        paddingLeft: 15,
        marginLeft: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 1,
    },
    inputDescribe: {
        width: "100%",
        padding: 15,
        paddingBottom: 25,
        marginLeft: 0,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 1,
    },
});