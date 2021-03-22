const CharactersReducer = (state = [], action) => {
    switch (action.type) {
        case "NAME_ACTION":
        const { name } = action;
        return name;

        default:
        return state;
    }
};
    export default CharactersReducer;
