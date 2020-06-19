export const createProject = project => {
  return (dispatct, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    // const authorMessage=getState().firebase.database().ref().child('posts').push().key;
    firestore.collection('projects').add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        authorPhoto:profile.photoURL,
        createdAt: new Date()
      })
      .then(() => {
        dispatct({ type: "CREATE_PROJECT", project });
      })
      .catch((err) => {
        dispatct({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};

