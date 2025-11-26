// Mock Firebase for UI Testing (No real backend)
// Replace with real firebase-config.js when you have Firebase setup

const mockFirebase = {
    auth: () => ({
        createUserWithEmailAndPassword: (email, password) => 
            Promise.resolve({ user: { uid: 'mock-uid', email, updateProfile: () => Promise.resolve() } }),
        signInWithEmailAndPassword: (email, password) => 
            Promise.resolve({ user: { uid: 'mock-uid', email } }),
        signInWithPopup: (provider) => 
            Promise.resolve({ user: { uid: 'mock-google-uid', email: 'test@gmail.com', displayName: 'Test User' } }),
        sendPasswordResetEmail: (email) => Promise.resolve(),
        onAuthStateChanged: (callback) => {
            setTimeout(() => callback(null), 100);
            return () => {};
        },
        setPersistence: () => Promise.resolve(),
        currentUser: null
    }),
    firestore: () => ({
        collection: () => ({
            doc: () => ({
                set: () => Promise.resolve(),
                get: () => Promise.resolve({ exists: false })
            })
        })
    }),
    initializeApp: () => {}
};

// Mock Google Provider
const mockGoogleProvider = {};

// Initialize mock Firebase
const auth = mockFirebase.auth();
const db = mockFirebase.firestore();

// Export for use in other files
window.firebaseAuth = auth;
window.firebaseDb = db;
window.googleProvider = mockGoogleProvider;

console.log('🧪 Using Mock Firebase - UI Testing Mode');
