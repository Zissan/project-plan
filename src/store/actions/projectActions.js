import actions from "./actionTypes";
export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Zissan",
        authorLastName: "Chowdhury",
        authorId: 12345,
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
