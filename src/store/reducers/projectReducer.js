import actions from "../actions/actionTypes";

const initialState = {
  projects: [
    { id: "1", title: "help me find peach", content: "blah blah blah" },
    { id: "2", title: "collect all the stars", content: "blah blah blah" },
    { id: "3", title: "egg hunt with yoshi", content: "blah blah blah" }
  ]
};
const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CREATE_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.project]
      };
    case actions.CREATE_PROJECT_ERROR:
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
