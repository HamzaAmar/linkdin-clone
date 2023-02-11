import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyD4IdyW0BBbKXUgADFV86aviF9vvIFkgpI',
  authDomain: 'linkdin-clone-a95d1.firebaseapp.com',
  projectId: 'linkdin-clone-a95d1',
  storageBucket: 'linkdin-clone-a95d1.appspot.com',
  messagingSenderId: '422644852303',
  appId: '1:422644852303:web:591bb019653016d21e6c3a',
  measurementId: 'G-J3G4E66ZT0',
}

initializeApp(firebaseConfig)

// make DB
const db = getFirestore()
//  Ref Collection
const userCollection = collection(db, 'users')
const postsCollection = collection(db, 'posts')

//  // Docs

export { getDocs, userCollection, postsCollection }
