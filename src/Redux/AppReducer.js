
const SET_READY = "SET_READY";

const initialState = {
    isReady: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_READY:
            return {
                ...state,
                isReady: true,
            }
        default:
            return state;
    }
}

export const setReadyAction = () => ({type: SET_READY});


export default appReducer;