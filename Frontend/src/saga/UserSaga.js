import { call, put, takeLatest } from 'redux-saga/effects';
import { CREATE_USER, createUserSuccess,createUserFailure,REGISTER_USER1,registerUserSuccess,registerUserFailure } from '../action/UserAction';
import api from './UserApi'

function* createUser(action){
    console.log("ddddddd");
    console.log("Action create User is" + JSON.stringify(action))
    try{
        const{username,email,password} = action.payload;
        let { data }=yield call(api.loginuser,{username,email,password});
        console.log("add User saga"+JSON.stringify(data))
        yield put(createUserSuccess(data));
    } catch(err){
        yield put(createUserFailure());
        console.log("ERROR IS" + JSON.stringify(err.response.data));
        return err
    }
}

function* registerUser(action) {

    try {
        console.log("Action DAta User Saga is" + JSON.stringify(action))

        const { username, email, password } = action;
        const { data } = yield call(api.adduser, { username, email, password });

        //const  {data}= yield call(api.products);
        console.log("User saga" + JSON.stringify(data))
        yield put(registerUserSuccess(data));

    } catch (err) {
        yield put(registerUserFailure());
        console.log(err);
    }
}

export default function* UserSaga() {
    
    yield takeLatest(CREATE_USER,createUser);
    yield takeLatest(REGISTER_USER1, registerUser);
   
}