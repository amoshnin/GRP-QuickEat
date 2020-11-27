import {AppStateType} from '~/Redux/ReduxStore';

// AUTH //
export const getOnlineStatusSelector = (state: AppStateType) => {
  return state.AuthGetReducer.isOnline;
};

export const getAuthStatusSelector = (state: AppStateType) => {
  return state.AuthGetReducer.isAuth;
};

export const getIsClientSelector = (state: AppStateType) => {
  return state.AuthGetReducer.isClient;
};

// PROFILES //
export const getUserDataSelector = (state: AppStateType) => {
  return state.AuthGetReducer.UserData;
};
