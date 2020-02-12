import actions from "./actionTypes";
export const signIn = credentials => {
  return (dispatch, state, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({
          type: actions.LOGIN_SUCCES
        });
      })
      .catch(err => {
        dispatch({ type: actions.LOGIN_ERROR, err });
      });
  };
};

export const signOut = () => {
  return (dispatch, state, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: actions.SIGNOUT_SUCCESS
        });
      });
  };
};
