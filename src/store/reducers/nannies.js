import {
  GET_NANNY_PROFILE_BEGIN,
  GET_NANNY_PROFILE_SUCCESS,
  GET_NANNY_PROFILE_FAIL,
  // UPDATE_NANNY_PROFILE_BEGIN,
  // UPDATE_NANNY_PROFILE_SUCCESS,
  // UPDATE_NANNY_PROFILE_FAIL,
  GET_NANNIES_BEGIN,
  GET_NANNIES_SUCCESS,
  GET_NANNIES_FAIL,
  GET_ACTIVE_NANNIES_BEGIN,
  GET_ACTIVE_NANNIES_FAIL,
  GET_ACTIVE_NANNIES_SUCCESS,
  GET_APPOINTMENT_BEGIN,
  GET_APPOINTMENT_FAIL,
  GET_APPOINTMENT_SUCCESS,
  GET_CHILD_ACTIVITY_BEGIN,
  GET_CHILD_ACTIVITY_FAIL,
  GET_CHILD_ACTIVITY_SUCCESS,
  GET_CHILD_ACTIVITIES_BEGIN,
  GET_CHILD_ACTIVITIES_FAIL,
  GET_CHILD_ACTIVITIES_SUCCESS,
  POST_CHILD_ACTIVITIES_BEGIN,
  POST_CHILD_ACTIVITIES_FAIL,
  POST_CHILD_ACTIVITIES_SUCCESS,
  UPDATE_STATUS_APPOINTMENT_BEGIN,
  UPDATE_STATUS_APPOINTMENT_FAIL,
  UPDATE_STATUS_APPOINTMENT_SUCCESS,
} from '../actions/types';

const initialState = {
  nannies: [],
  loading: false,
  error: null,
  activity: [],
  childDetail: {
    loading: false,
    error: null,
    activities: {},
  },
};

const nannies = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_NANNY_PROFILE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_NANNY_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        profile: payload,
      };
    case GET_NANNY_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: error,
        profile: [],
      };
    case GET_NANNIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_NANNIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        nannies: payload,
      };
    case GET_NANNIES_FAIL:
      return {
        ...state,
        loading: false,
        error: error,
        nannies: [],
      };
    case GET_ACTIVE_NANNIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ACTIVE_NANNIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        activeNanny: payload,
      };
    case GET_ACTIVE_NANNIES_FAIL:
      return {
        ...state,
        loading: false,
        error: error,
        activeNanny: [],
      };
    case GET_APPOINTMENT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        appointment: payload,
      };
    case GET_APPOINTMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: error,
        appointment: [],
      };
    case UPDATE_STATUS_APPOINTMENT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case UPDATE_STATUS_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        appointmentUpdate: payload,
      };
    case UPDATE_STATUS_APPOINTMENT_FAIL:
      return {
        ...state,
        loading: false,
        error: error,
        appointmentUpdate: [],
      };
    case GET_CHILD_ACTIVITY_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_CHILD_ACTIVITY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        activity: payload,
      };
    case GET_CHILD_ACTIVITY_FAIL:
      return {
        ...state,
        loading: false,
        error: error,
        activity: [],
      };
    case GET_CHILD_ACTIVITIES_BEGIN:
      return {
        ...state,
        childDetail: {
          loading: true,
          error: null,
        },
      };
    case GET_CHILD_ACTIVITIES_SUCCESS:
      return {
        ...state,
        childDetail: {
          loading: false,
          error: null,
          activities: payload,
        },
      };
    case GET_CHILD_ACTIVITIES_FAIL:
      return {
        ...state,
        childDetail: {
          loading: false,
          error: error,
          activities: {},
        },
      };
    case POST_CHILD_ACTIVITIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case POST_CHILD_ACTIVITIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        activity: payload,
      };
    case POST_CHILD_ACTIVITIES_FAIL:
      return {
        ...state,
        loading: false,
        error: error,
        activity: [],
      };
  }
};

export default nannies;
