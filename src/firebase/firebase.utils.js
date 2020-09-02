import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBpO476XH4b8nQ57hl224wOUXLF1r-NrtA",
  authDomain: "udemy-ztm-crwn-db.firebaseapp.com",
  databaseURL: "https://udemy-ztm-crwn-db.firebaseio.com",
  projectId: "udemy-ztm-crwn-db",
  storageBucket: "udemy-ztm-crwn-db.appspot.com",
  messagingSenderId: "582617837961",
  appId: "1:582617837961:web:4b4ff70248b723d9e07158"
}

export const createUserProfileDocument  = async ( userAuth, additionalData ) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();
  
  if(!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error craeting user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase