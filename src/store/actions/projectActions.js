import actions from "./actionTypes";
export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: actions.CREATE_PROJECT,
          project
        });
      })
      .catch(err => {
        dispatch({ type: actions.CREATE_PROJECT_ERROR, err });
      });
  };
};
