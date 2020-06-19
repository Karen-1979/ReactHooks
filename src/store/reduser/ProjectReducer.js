const initState = {
  projects: [
    { id: 1, title: "help me find peach", photoURL:null},
    { id: 2, title: "help me find peach", photoURL:null},
    { id: 3, title: "help me find peach", photoURL:null}
  ]
};

const ProjectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log(action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log('create project error', action.err);
      return state;
     
    default:
      return state;
  }
};

export default ProjectReducer;
