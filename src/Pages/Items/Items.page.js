import React, {useState, useEffect} from "react";
import {View, Text, TouchableOpacity, ScrollView, Image} from "react-native";
import {StylesGenerals} from "../../Styles/StylesGenerals";
import {styles} from "./Items.page.styles";
import ButtonAdd from "../../components/ButtonAdd/ButtonAdd";
import ModalWindow from "../../components/Modal/ModalWindow";
import {useDispatch, useSelector} from "react-redux";
import {deleteItem} from "../../Redux/ItemReducer";

const Films = (props) => {
    const [activeModal, setActiveModal] = useState(false);
    const [currentId, setCurrentId] = useState(0);
    const [idEdit, setIdEdit] = useState(null);
    const {navigation, route} = props;
    const type = route.name.toLowerCase();

    const items = useSelector((state) => state.item[type]);

    const dispatch = useDispatch();

    const showDelete = (id) => {
        if(currentId === id) {
            setCurrentId(0);
        }else {
            setCurrentId(id)
        }
    }

    const deleteElem = (id) => {
        dispatch(deleteItem(id, type));
        setCurrentId(0);
    }

    const editElem = (id) => {
        setIdEdit(id);
        setActiveModal(true);
        setCurrentId(0);
    }

    return (
        <>
            <ModalWindow type={type} fromParentActive={activeModal} setFromParentActive={setActiveModal}
                         lastIdOfElement={items[items.length - 1].id} idEdit={idEdit} setIdEdit={setIdEdit} />
            <View style={StylesGenerals.container}>
                <View style={styles.add}>
                    <ButtonAdd text="Add New Film" onPress={() => setActiveModal(true)}/>
                </View>
                <ScrollView>
                    {
                        items.map((f) => {
                            return (
                                    <View style={styles.elem} key={f.id} >
                                         <TouchableOpacity style={styles.elemWrapper} onPress={() => showDelete(f.id)}>
                                            <Text style={styles.elemText}>
                                                {f.name}
                                            </Text>
                                        </TouchableOpacity>
                                        {
                                            currentId === f.id?
                                                <>
                                                    <View style={styles.edit}>
                                                        <TouchableOpacity onPress={() => editElem(f.id)}>
                                                            <Image style={styles.deleteImg}
                                                                   source={require("./../../../assets/edit.png")}/>
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View style={styles.delete}>
                                                        <TouchableOpacity onPress={() => deleteElem(f.id)}>
                                                            <Image style={styles.deleteImg}
                                                                   source={require("./../../../assets/delete.png")}/>
                                                        </TouchableOpacity>
                                                    </View>
                                                </>: null
                                        }

                                    </View>

                            );
                        })
                    }
                </ScrollView>
            </View>
        </>
    );
}

export default Films;