const UserReducer = (state = '', action) => {

    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case 'DELETE_USER':
            return {
                ...state,
                items: state.items.filter((user) => user.id !== action.payload)
            }
        case 'USER_INFO':
            let userDetail = state.items.filter((user) => user.id == action.payload)
            return {
                ...state,
                user: (userDetail.length > 0) ? userDetail[0] : {}
            }
        case 'UPDATE_USER':
            return {
                ...state,
                items: state.items.map((user) => user.id === action.payload.id ? action.payload : user)
            }
        default:
            return state
    }
}
export default UserReducer;