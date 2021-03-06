import { put, takeEvery } from '@redux-saga/core/effects';
import {
  GET_CLIENTS_BEGIN,
  GET_CLIENTS_SUCCESS,
  GET_CLIENTS_FAIL,
  GET_ACTIVE_CLIENTS_BEGIN,
  GET_ACTIVE_CLIENTS_FAIL,
  GET_ACTIVE_CLIENTS_SUCCESS,
  GET_CLIENT_DETAIL_BEGIN,
  GET_CLIENT_DETAIL_FAIL,
  GET_CLIENT_DETAIL_SUCCESS,
  GET_MAIN_CLIENTS_BEGIN,
  GET_MAIN_CLIENTS_FAIL,
  GET_MAIN_CLIENTS_SUCCESS,
  GET_CLIENT_ACCEPTED_BEGIN,
  GET_CLIENT_ACCEPTED_SUCCESS,
  GET_CLIENT_ACCEPTED_FAIL,
  UPDATE_STATUS_APPOINTMENT_BEGIN,
  UPDATE_STATUS_APPOINTMENT_SUCCESS,
  UPDATE_STATUS_APPOINTMENT_FAIL,
} from '../actions/types';
import axios from 'axios';
import Swal from 'sweetalert2';

const baseUrl = 'https://hi-parent-be.herokuapp.com/';

function* getMainClients() {
  try {
    const res = yield axios.get(`${baseUrl}appointments/dashboard`);
    console.log(res);
    yield put({
      type: GET_MAIN_CLIENTS_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    yield put({
      type: GET_MAIN_CLIENTS_FAIL,
      error: err,
    });
  }
}

function* getClients(action) {
  const { pages } = action;
  try {
    const res = yield axios.get(`${baseUrl}appointments/fe?page=${pages}`);
    yield put({
      type: GET_CLIENTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_CLIENTS_FAIL,
      error: err,
    });
  }
}

function* getClientDetail(actions) {
  const { appointment_id } = actions;
  try {
    const res = yield axios.get(`${baseUrl}appointments/detail/${appointment_id}`);
    console.log(res);
    
    yield put({
      type: GET_CLIENT_DETAIL_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    yield put({
      type: GET_CLIENT_DETAIL_FAIL,
      error: err,
    });
  }
}

function* getActiveClients() {
  try {
    const res = yield axios.get(`${baseUrl}parents/active`);
    console.log(res);
    yield put({
      type: GET_ACTIVE_CLIENTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_ACTIVE_CLIENTS_FAIL,
      error: err,
    });
  }
}

function* getClientAccepted() {
  try {
    const res = yield axios.get(`${baseUrl}appointments/accepted`);
    
    yield put({
      type: GET_CLIENT_ACCEPTED_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: GET_CLIENT_ACCEPTED_FAIL,
      error: err,
    });
  }
}

function* updateStatusAppointment(action) {
  // const { payload } = action;
  // const data = payload;
  const { data } = action;
  
  const token = localStorage.getItem('token');
  try {
    const res = yield axios.put(`${baseUrl}appointments/setStatus`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    yield put({
      type: UPDATE_STATUS_APPOINTMENT_SUCCESS,
    });
    Swal.fire('Success', res.data.message === 'success update' ? 'Successfully Accepted Client' : res.data[0], 'success');
    const resClients = yield axios.get(`${baseUrl}appointments/fe`);
    yield put({
      type: GET_CLIENTS_SUCCESS,
      payload: resClients.data,
    });
  } catch (err) {
    yield put({
      type: UPDATE_STATUS_APPOINTMENT_FAIL,
      error: err,
    });
  }
}

export function* watchGetMainClients() {
  yield takeEvery(GET_MAIN_CLIENTS_BEGIN, getMainClients);
}

export function* watchGetClients() {
  yield takeEvery(GET_CLIENTS_BEGIN, getClients);
}

export function* watchGetClientDetail() {
  yield takeEvery(GET_CLIENT_DETAIL_BEGIN, getClientDetail);
}

export function* watchGetActiveClients() {
  yield takeEvery(GET_ACTIVE_CLIENTS_BEGIN, getActiveClients);
}

export function* watchGetClientAccepted() {
  yield takeEvery(GET_CLIENT_ACCEPTED_BEGIN, getClientAccepted);
}

export function* watchUpdateStatusAppointment() {
  yield takeEvery(UPDATE_STATUS_APPOINTMENT_BEGIN, updateStatusAppointment);
}
