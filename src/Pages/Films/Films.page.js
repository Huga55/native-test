import React, {useState, useEffect} from "react";
import {View, Text, TouchableOpacity, ScrollView} from "react-native";
import {StylesGenerals} from "../../Styles/StylesGenerals";
import {styles} from "./Films.page.styles";
import ButtonAdd from "../../components/ButtonAdd/ButtonAdd";
import ModalWindow from "../../components/Modal/ModalWindow";
import {useDispatch, useSelector} from "react-redux";
import {getFilms} from "../../Redux/FilmReducer";

const Films = (props) => {
    const [activeModal, setActiveModal] = useState(false);
    const {navigation} = props;

    const films = useSelector((state) => state.films.data);

    return (
        <>
            <ModalWindow type="films" fromParentActive={activeModal} setFromParentActive={setActiveModal}
                         lastIdOfElement={films[films.length - 1].id} />
            <View style={StylesGenerals.container}>
                <View style={styles.add}>
                    <ButtonAdd text="Add New Film" onPress={() => setActiveModal(true)}/>
                </View>
                <ScrollView>
                    {
                        films.map((f) => {
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

export default Films;