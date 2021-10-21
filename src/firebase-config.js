import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD6Yzj-CWcCYwVKvSJR8RNj61a-69Ut5oQ",
    authDomain: "ngo-connect-bf888.firebaseapp.com",
    projectId: "ngo-connect-bf888",
    storageBucket: "ngo-connect-bf888.appspot.com",
    messagingSenderId: "1096930878557",
    appId: "1:1096930878557:web:6beb4a5237e82dcbc419b4",
    measurementId: "G-E8QM4X3RDW"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);