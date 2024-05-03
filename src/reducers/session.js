const initState = {
    userAddress: "",
};

const sessionReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_ADDRESS":
            return {
                ...state,
                userAddress: action.payload,
            };
        default:
            return state;
    }
};

export default sessionReducer;
