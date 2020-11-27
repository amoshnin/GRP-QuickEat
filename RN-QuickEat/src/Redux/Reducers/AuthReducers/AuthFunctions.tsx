import {GoogleSignin} from '@react-native-community/google-signin';
import FirebaseAuth from '@react-native-firebase/auth';
import {auth} from '~/API/FirebaseConfig';
import {registerThunkCreator} from './AuthSetReducer';

export const registerClient = (dispatch: any, uid: string, data: any) => {
  dispatch(registerThunkCreator(uid, data, true));
};

export const emailAuthFunction = (
  dispatch: any,
  email: string,
  password: string,
) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((res) =>
      registerClient(dispatch, res.user.uid, {
        name: res.user.displayName,
        image: res.user.photoURL,
      }),
    )
    .catch((error) =>
      auth.signInWithEmailAndPassword(email, password).then((res) =>
        registerClient(dispatch, res.user.uid, {
          name: res.user.displayName,
          image: res.user.photoURL,
        }),
      ),
    );
};

export const googleAuthFunction = async (dispatch: any) => {
  await GoogleSignin.signOut();
  await GoogleSignin.hasPlayServices();
  GoogleSignin.signIn()
    .then((user) => {
      const credential = FirebaseAuth.GoogleAuthProvider.credential(
        user.idToken,
      );
      return FirebaseAuth()
        .signInWithCredential(credential)
        .then((result) => {
          console.log(result.user.uid);
          registerClient(dispatch, result.user.uid, {
            name: user.user.name,
            image: user.user.photo,
          });
        })
        .catch((error: any) => error);
    })
    .catch((error) => error);
};
