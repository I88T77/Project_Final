export const CREATE_USER = "CREATE_USER";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS"
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE"

export const REGISTER_USER1 = "REGISTER_USER1";
export const REGISTER_USER1_FAILURE = " REGISTER_USER_FAILURE";
export const REGISTER_USER1_SUCCESS = " REGISTER_USER_SUCCESS";

export const registerUser = ({username, email, password}) => {console.log("hellooooooo",username, email, password);
                          return{ type: REGISTER_USER1,
                            username,
                            email,
                            password,
                        }
                        };

export const registerUserSuccess = data => ({ type: REGISTER_USER1_SUCCESS, data });

export const registerUserFailure = () => ({ type: REGISTER_USER1_FAILURE });

export const createUser = ({ username, email, Password },onSuccess,onFailure) => {
    console.log(username, email, Password);
    return {
        type: CREATE_USER,
        payload:{username,
        email,
        Password
        },      
        onSuccess,
        onFailure
    };
}

export const createUserSuccess = data => {console.log("kkkkk",data);return{ type: CREATE_USER_SUCCESS, data };}

export const createUserFailure = () => ({ type: CREATE_USER_FAILURE });
export const logout = () => ({ type: 'USER_LOGOUT' })