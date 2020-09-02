import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';

const config = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_DOMAIN_NAME",
    databaseURL: "DB_URL",
    projectId: "projectId",
    storageBucket: "projectId.appspot.com",
    messagingSenderId: "738284773981",
    appId: "APP_ID",
    measurementId: "measurementId"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const createUserProfileDocument = async (userAuth, data) =>{
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapshot = await userRef.get();

      if(!snapshot.exists){
          const {displayName, email} = userAuth;
          const createdAt = new Date();

          try{
            await userRef.set({
                displayName, email, createdAt, ...data
            })
          }catch(err){
            console.log('error creating user', err.message);
          }
      }
      return userRef;
  };

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
