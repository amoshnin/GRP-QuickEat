//    *GENERAL IMPORTS*   //
import {ThunkAction} from 'redux-thunk';
import {AppStateType, InferActionsTypes} from '~/Redux/ReduxStore';
import {collections} from '~/Redux/Helpers/Constants';

////////////////////////////////////////////////////////////////////////

const initialState = {};

type initialStateType = typeof initialState;

// *REDUCER* //
const AuthSetReducer = (
  state = initialState,
  action: ActionTypes,
): initialStateType => {
  return state;
};

export default AuthSetReducer;

///////////////////////////////////////////////////////////////////////

type ActionTypes = InferActionsTypes<typeof ActionCreatorsList>;

//    *ACTION CREATORS*   //
export const ActionCreatorsList = {};

//    *THUNKS*   //
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

// Register
export const registerThunkCreator = (
  UID: string,
  data: any,
  isClient?: boolean,
): ThunkType => {
  return async (dispatch, getState, {getFirebase, getFirestore}: any) => {
    const firestore = getFirestore();

    const document = isClient
      ? await firestore.collection(collections.clients).doc(UID)
      : await firestore.collection(collections.companies).doc(UID);

    document.set(data, {merge: true});
  };
};
