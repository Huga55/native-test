import * as firebase from "firebase";

const GET_BOOKS = "GET_BOOKS";

const initialState = {
    data: [],
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state,
                data: action.books,
            }
        default:
            return state;
    }
}

const getBooksAction = (books) => ({type: GET_BOOKS, books});

export const getBooks = () => {
    return async (dispatch) => {
        await firebase.database().ref("books").on("value", snapshot => {
            const books = snapshot.val();
            dispatch(getBooksAction(books));
        }, error => {
            console.log("error firebase book", error)
        })
    }
}

export const addBook = (id, bookData) => {
    return async (dispatch) => {
        await firebase.database().ref("books/" + id).set(bookData);
    }
}

export default bookReducer;