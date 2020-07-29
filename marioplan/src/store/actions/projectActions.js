
export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async call to database
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project, // spread/unpack operator

      // TODO: Firebase Auth
      authorFirstName: 'Net',
      authorLastName: 'Net',
      createdAt: new Date(),
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project });
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err });
    });
  }
}