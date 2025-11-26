// Firebase Configuration - Real project setup
const firebaseConfig = {
  apiKey: "AIzaSyCkueUW0ka8TK0XTT1v6LdWDGOp4a5LXHU",
  authDomain: "shringarika8415.firebaseapp.com",
  projectId: "shringarika8415",
  storageBucket: "shringarika8415.firebasestorage.app",
  messagingSenderId: "477120263735",
  appId: "1:477120263735:web:154915c47c635935c8b1b2",
  measurementId: "G-7QGB59TFY8"
};

// Initialize Firebase
try {
    firebase.initializeApp(firebaseConfig);
    console.log('✅ Firebase initialized successfully');
} catch (error) {
    console.error('❌ Firebase initialization error:', error);
}

const auth = firebase.auth();
const db = firebase.firestore();

// Set persistence to LOCAL so users stay logged in
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
    console.log('✅ Auth persistence set to LOCAL');
}).catch(error => {
    console.error('❌ Auth persistence error:', error);
});

// Google Auth Provider
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.addScope('email');
googleProvider.addScope('profile');

// Export for use in other files
window.firebaseAuth = auth;
window.firebaseDb = db;
window.googleProvider = googleProvider;

console.log('🔥 Using Real Firebase - Project: shringarika8415');
