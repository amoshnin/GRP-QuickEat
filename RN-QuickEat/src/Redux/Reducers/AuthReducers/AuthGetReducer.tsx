//    *GENERAL IMPORTS*   //
import {ThunkAction} from 'redux-thunk';
import {AppStateType, InferActionsTypes} from '~/Redux/ReduxStore';
import {collections} from '~/Redux/Helpers/Constants';
import {UserDataType} from '~/Redux/Types/AuthTypes';

////////////////////////////////////////////////////////////////////////

const initialState = {
  isOnline: false as boolean,
  isAuth: false as boolean,
  isClient: false as boolean,
  //
  UserData: {} as UserDataType,
};

type initialStateType = typeof initialState;

// *REDUCER* //
const AuthGetReducer = (
  state = initialState,
  action: ActionTypes,
): initialStateType => {
  if (action.type === 'SET_IS_ONLINE') {
    return {
      ...state,
      isOnline: action.isOnline,
    };
  }

  if (action.type === 'SET_IS_AUTH') {
    return {
      ...state,
      isAuth: action.isAuth,
    };
  }

  if (action.type === 'SET_IS_CLIENT') {
    return {
      ...state,
      isClient: action.isClient,
    };
  }

  if (action.type === 'SET_USER_DATA') {
    return {
      ...state,
      UserData: action.userData,
    };
  }

  return state;
};

export default AuthGetReducer;

///////////////////////////////////////////////////////////////////////

type ActionTypes = InferActionsTypes<typeof ActionCreatorsList>;

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {
  setIsOnlineActionCreator: (isOnline: boolean) =>
    ({
      type: 'SET_IS_ONLINE',
      isOnline,
    } as const),

  setIsAuthActionCreator: (isAuth: boolean) =>
    ({
      type: 'SET_IS_AUTH',
      isAuth,
    } as const),

  setIsClientActionCreator: (isClient: boolean) =>
    ({
      type: 'SET_IS_CLIENT',
      isClient,
    } as const),

  setUserDataActionCreator: (userData: UserDataType) =>
    ({
      type: 'SET_USER_DATA',
      userData,
    } as const),
};

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

// Authentification trigger thunk
export const setIsAuthThunkCreator = (
  isAuth: boolean,
  UID?: string,
): ThunkType => {
  return async (dispatch, getState, {getFirebase, getFirestore}: any) => {
    dispatch(ActionCreatorsList.setIsAuthActionCreator(isAuth));

    if (isAuth && UID) {
      const firestore = getFirestore();

      await firestore
        .collection(collections.clients)
        .doc(UID)
        .onSnapshot(async (doc: any) => {
          if (doc.exists) {
            dispatch(ActionCreatorsList.setIsClientActionCreator(true));
            dispatch(
              ActionCreatorsList.setUserDataActionCreator({
                ...doc.data(),
                UID,
              }),
            );
          } else {
            dispatch(ActionCreatorsList.setIsClientActionCreator(false));
            await firestore
              .collection(collections.companies)
              .doc(UID)
              .onSnapshot(async (doc: any) => {
                if (doc.exists) {
                  dispatch(
                    ActionCreatorsList.setUserDataActionCreator({
                      ...doc.data(),
                      UID,
                    }),
                  );
                }
              });
          }
        });
    }
  };
};
