export const initialState = {
    selectedUser: 'AyarHlaine',
};
export const actionTypes = {
    SET_SELECTED_USER: "SET_SELECTED_USER",
};
export const reducer = (state , action) => {
    switch(action.type){
        case actionTypes.SET_SELECTED_USER: {
            return {
                ...state,
                selectedUser: action.payload,
            }
        }
        default: return state;
    }
}

export default reducer;