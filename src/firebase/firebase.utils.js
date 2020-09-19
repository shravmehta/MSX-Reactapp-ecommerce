import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';

const config = {
  apiKey: "AIzaSyC_GzLfx12gAvgBEkhfpt9dWN7Q7HbiKAg",
  authDomain: "msx-db.firebaseapp.com",
  databaseURL: "https://msx-db.firebaseio.com",
  projectId: "msx-db",
  storageBucket: "msx-db.appspot.com",
  messagingSenderId: "738284773981",
  appId: "1:738284773981:web:2f3419f405c08a746c23b4",
  measurementId: "G-BEW4F821HQ"
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
