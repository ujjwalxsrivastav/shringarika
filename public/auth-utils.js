// Authentication utility functions for Shringarika

// Check if user is logged in
function isUserLoggedIn() {
    return new Promise((resolve) => {
        window.firebaseAuth.onAuthStateChanged((user) => {
            resolve(user);
        });
    });
}

// Logout user
async function logoutUser() {
    try {
        await window.firebaseAuth.signOut();
        window.location.href = 'login.html';
    } catch (error) {
        console.error('Logout error:', error);
        alert('Failed to logout. Please try again.');
    }
}

// Get current user data
async function getCurrentUserData() {
    const user = window.firebaseAuth.currentUser;
    if (!user) return null;
    
    try {
        const userDoc = await window.firebaseDb.collection('users').doc(user.uid).get();
        return userDoc.exists ? userDoc.data() : null;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
    }
}

// Protect page - redirect to login if not authenticated
async function protectPage() {
    const user = await isUserLoggedIn();
    if (!user) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// Export functions to global scope
window.isUserLoggedIn = isUserLoggedIn;
window.logoutUser = logoutUser;
window.getCurrentUserData = getCurrentUserData;
window.protectPage = protectPage;
