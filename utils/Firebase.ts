import firebase from 'firebase/app'
import "firebase/auth"


const config ={
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSEGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}

if(!firebase.apps.length){
    console.log("イニシャライズサレマシタ")
    firebase.initializeApp(config)
}


export const auth =firebase.auth();
export default firebase