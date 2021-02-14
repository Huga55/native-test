import React, {useState, useEffect} from "react";
import {View, Text, TouchableOpacity, ScrollView} from "react-native";
import {StylesGenerals} from "../../Styles/StylesGenerals";
import {styles} from "../Films/Films.page.styles";
import ButtonAdd from "../../components/ButtonAdd/ButtonAdd";
import ModalWindow from "../../components/Modal/ModalWindow";
import {useSelector} from "react-redux";

const Books = (props) => {
    const [activeModal, setActiveModal] = useState(false);
    const {navigation} = props;

    const books = useSelector((state) => state.books.data);

    return (
        <>
            <ModalWindow type="books" fromParentActive={activeModal} setFromParentActive={setActiveModal}
                         lastIdOfElement={books[books.length - 1].id} />
            <View style={StylesGenerals.container}>
                <View style={styles.add}>
                    <ButtonAdd text="Add New Book" onPress={() => setActiveModal(true)}/>
                </View>
                <ScrollView>
                    {
                        books.map((f) => {
                            return (
                                <TouchableOpacity key={f.id}>
                                    <View style={styles.elem}>
                                        <Text style={styles.elemText}>
                                            {f.name}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        })
                    }
                </ScrollView>
            </View>
        </>
    );
}

export default Books;