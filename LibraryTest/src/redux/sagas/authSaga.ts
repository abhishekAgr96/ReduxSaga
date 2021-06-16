import { call, put, takeLatest } from 'redux-saga/effects';
import { updateNameSuccess } from '../actions/authActions';


export default function* watcherSaga() {
    yield takeLatest('UPDATE_NAME', updateUserName);
}

export function* updateUserName(action){
    yield put(updateNameSuccess(action.payload))
}
  