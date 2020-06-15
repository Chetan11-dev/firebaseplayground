import firebase from 'firebase'
// TODO add your own confilg here then do npm run startapp 
const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
}

firebase.initializeApp(config)

export default firebase