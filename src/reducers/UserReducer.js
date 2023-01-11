export const inicialState = {
    avatar: '',
    favorites: [],
    appointments: []
};

export const UseReducer = (state, action) => {
    switch(action.type){
        case 'setAvatar':
            return { ...state,avatar: action.payload.avatar };
        break;
        default:
            return state;
    }
}