import {REGISTER_USER1,REGISTER_USER1_SUCCESS,REGISTER_USER1_FAILURE,CREATE_USER,CREATE_USER_SUCCESS,CREATE_USER_FAILURE } from '../action/UserAction'
let initState = { isLoggedIn: false, id: undefined, token: false}

export const UserReducer = (state = initState, action) => {
    console.log("user reducer+++++++++++++++",action)
    switch (action.type) {
        case REGISTER_USER1:
            return {
                ...state,
                isLoggedIn: false,

            }
        case REGISTER_USER1_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,

            }
        case REGISTER_USER1_FAILURE:
            return {
                ...state,
                isLoggedIn: false,

            }
        case CREATE_USER:
            console.log(">>>>>>>",action.type);
            console.log("hhhhhhhhh",state);
            return {
                ...state,
                isLoggedIn: false,
                token: false

            }
        case CREATE_USER_SUCCESS:
            console.log("ioiiiiiiiiiiiiiiiiiii",action);
            localStorage.setItem("userToken", JSON.stringify(action.data.user||false))
            return {
                ...state,
                isloggedin:action.data.islogged,
                id: action.data.user._id,
                token: true
                
            }
        case CREATE_USER_FAILURE:
            return {
                ...state,
                isloggedin:action.data.islogged,
            }
        case 'USER_LOGOUT':
            localStorage.removeItem("userToken")
            return {
                ...state,
                id: undefined,
                isLoggedIn: false,
                token: false
            }
        default:
            return {
                ...state
            }
    }
}