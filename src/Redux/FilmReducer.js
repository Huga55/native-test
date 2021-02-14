import * as firebase from "firebase";

const SET_FILMS = "SET_FILMS";

const initialState = {
    data: [

    ],
}

const filmReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILMS:
            return {
                ...state,
                data: action.films,
            }
        default:
            return state;
    }
}

export const getFilms = () => {
    return async (dispatch) => {
        await firebase.database().ref("films").on("value", (snapshot) => {
            const films = snapshot.val();
            dispatch(setFilmsAction(films));
        }, (error) => {
            console.log("error firebase film", error);
        })
    }
}

export const addFilm = (id, filmData) => {
    return async (dispatch) => {
        await firebase.database().ref("films/" + id).set(filmData);
    }
}

const setFilmsAction = (films) => ({type: SET_FILMS, films});

export default filmReducer;