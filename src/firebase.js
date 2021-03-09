// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyB0IqkHA_ohVxeB0TSUM577xlxkXLkys94",
    authDomain: "linkedin-clone-ef4d7.firebaseapp.com",
    projectId: "linkedin-clone-ef4d7",
    storageBucket: "linkedin-clone-ef4d7.appspot.com",
    messagingSenderId: "325094703819",
    appId: "1:325094703819:web:b877371e17286f1a14914e",
    measurementId: "G-WSDQTT4374"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig)
  const db= firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};