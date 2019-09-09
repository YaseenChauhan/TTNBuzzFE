
const initialState = {
    isAuthenticated: false,
    userInfo: {}
}
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOGIN_INFO': {
            return {
                ...state,
                isAuthenticated: action.isAuthenticated,
                userInfo: action.payload
            }
        }
        case 'SET_USER_INFO': {
            return {
                ...state,
                isAuthenticated: action.isAuthenticated,
                userInfo: action.payload
            }
        }
        default: return state;
    }

}
export default userReducer;