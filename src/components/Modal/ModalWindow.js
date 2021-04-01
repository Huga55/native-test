import React, {useEffect, useState} from "react";
import {View, Modal, TextInput, Text, TouchableOpacity, Alert} from "react-native";
import {styles} from "./ModalWindow.styles";
import ButtonAdd from "../ButtonAdd/ButtonAdd";
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "./../../Redux/ItemReducer";
import {updateItem} from "../../Redux/ItemReducer";


const ModalWindow = (props) => {
    const { fromParentActive, setFromParentActive, type, lastIdOfElement, idEdit, setIdEdit } = props;

    const itemInfo = useSelector((state) => state.item[type]).find((i) => i.id === idEdit);

    const [active, setActive] = useState(false)
    const [inputText, setInputText] = useState("");
    const [inputDescribe, setInputDescribe] = useState("");


    const dispatch = useDispatch();

    useEffect(() => {
        if(fromParentActive) {
            setInputText("");
            setInputDescribe("");
            setActive(true);
            setFromParentActive(false);
        }
    }, [fromParentActive])

    useEffect(() => {
        if(itemInfo) {
            setInputText(itemInfo.name);
            setInputDescribe(itemInfo.description);
        }
    }, [itemInfo]);

    const addNew = () => {
        if(!inputText.trim()) {
            Alert.alert("Error", "Please enter name of the " + (type === "films"? "film" : "book"));
            return;
        }
        const id = lastIdOfElement + 1;
        dispatch(addItem(id, {id, name: inputText, description: inputDescribe.trim? inputDescribe : inputDescribe.trim()? "Any description" : inputDescribe}, type));
        closeModal();
    }

    const update = () => {
        if(!inputText.trim() || !inputDescribe.trim()) {
            Alert.alert("Error", "Please enter name of the " + (type === "films"? "film" : "book"));
            return;
        }
        dispatch(updateItem(idEdit, type, inputText, inputDescribe));
        closeModal()
    }

    const closeModal = () => {
        setIdEdit(null);
        setActive(false);
    }

    return (
        <Modal animationType={"slide"} transparent={false}
               visible={active} style={styles.modal}>
            <View style={styles.background} >
                <TouchableOpacity style={styles.backgroundTouch} onPress={closeModal} />
            </View>
            <View style={styles.window}>
                <View style={styles.form}>
                    <View style={styles.close}>
                        <TouchableOpacity onPress={closeModal} style={styles.closeTouch}>
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
                        <ButtonAdd text={idEdit === null? "Create" : "Change" } onPress={idEdit? update : addNew}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default ModalWindow;