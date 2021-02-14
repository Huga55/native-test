import React, {useEffect, useState} from "react";
import {View, Modal, TextInput, Text, TouchableOpacity, Alert} from "react-native";
import {styles} from "./ModalWindow.styles";
import ButtonAdd from "../ButtonAdd/ButtonAdd";
import {useDispatch} from "react-redux";
import {addFilm} from "../../Redux/FilmReducer";
import {addBook} from "../../Redux/BookReducer";


const ModalWindow = (props) => {
    const [active, setActive] = useState(false)
    const [inputText, setInputText] = useState("");
    const [inputDescribe, setInputDescribe] = useState("");

    const { fromParentActive, setFromParentActive, type, lastIdOfElement } = props;

    const dispatch = useDispatch();

    useEffect(() => {
        if(fromParentActive) {
            setInputText("");
            setActive(true);
            setFromParentActive(false);
        }
    }, [fromParentActive])

    const addNew = () => {
        if(!inputText.trim()) {
            Alert.alert("Error", "Please enter name of the " + (type === "films"? "film" : "book"));
            return;
        }
        const id = lastIdOfElement + 1;
        if(type === "films") {
            dispatch(addFilm(id, {id, name: inputText, description: inputDescribe.trim? inputDescribe : "Any description"}));
        }else {
            dispatch(addBook(id, {id, name: inputText, description: inputDescribe.trim? inputDescribe : "Any description"}));
        }
        setActive(!active)
    }

    return (
        <Modal animationType={"slide"} transparent={false}
               visible={active} style={styles.modal}>
            <View style={styles.background} >
                <TouchableOpacity style={styles.backgroundTouch} onPress={() => setActive(false)}></TouchableOpacity>
            </View>
            <View style={styles.window}>
                <View style={styles.form}>
                    <View style={styles.close}>
                        <TouchableOpacity onPress={() => setActive(false)} style={styles.closeTouch}>
                            <Text style={styles.closeX}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.title}>
                        Add New {type === "films"? "Film" : "Book"}
                    </Text>
                    <TextInput style={styles.inputName} placeholder="Name" value={inputText}
                               onChangeText={setInputText}/>
                    <TextInput style={styles.inputDescribe} multiline={true} placeholder="Describe" value={inputDescribe}
                               onChangeText={setInputDescribe}/>
                    <View>
                        <ButtonAdd text="Create" onPress={addNew}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default ModalWindow;