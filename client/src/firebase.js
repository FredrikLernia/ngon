import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCMVQvxee-WBZu0GPC3RYXdFopy02E3ZLY",
  authDomain: "ngon-9da45.firebaseapp.com",
  projectId: "ngon-9da45",
  storageBucket: "ngon-9da45.appspot.com",
  messagingSenderId: "482932788261",
  appId: "1:482932788261:web:be5dd0ecda87f7395d43cc",
  measurementId: "G-TVMLQSG7EF"
})

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

export { db, auth }