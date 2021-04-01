import * as firebase from "firebase";

const SET_ITEMS = "SET_ITEMS";

const initialState = {
    films: null,
    books: null,
}

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEMS:
            return {
                ...state,
                [action.typeItem]: action.items,
            }
        default:
            return state;
    }
}

export const getItems = (type) => {
    return async (dispatch) => {
        await firebase.database().ref(type).on("value", (snapshot) => {
            const items = snapshot.val().filter((i) => i !== undefined);
            dispatch(setItemsAction(items, type));
        }, (error) => {
            console.log("error firebase " + type, error);
        })
    }
}

export const updateItem = (id, type, name, description) => {
    return async (dispatch) => {
        await firebase.database().ref().update({
            [`/${type}/${id}`]: {name, description, id}
        });
    }
}

export const addItem = (id, filmData, type) => {
    return async (dispatch) => {
        await firebase.database().ref(type + "/" + id).set(filmData);
    }
}

export const deleteItem = (id, type) => {
    return async (dispatch) => {
        await firebase.database().ref(type + "/" + id).remove();
    }
}

const setItemsAction = (items, typeItem) => ({type: SET_ITEMS, items, typeItem});

export default itemReducer;