# Firebase Authentication Setup Instructions

## 🚨 IMPORTANT: Update Firebase Configuration

Before using the authentication system, you MUST update the `firebase-config.js` file with your actual Firebase project configuration.

### Steps to get your Firebase config:

1. **Go to Firebase Console**: https://console.firebase.google.com/
2. **Select your project** or create a new one
3. **Enable Authentication**:
   - Go to Authentication → Sign-in method
   - Enable **Email/Password** authentication
   - Enable **Google** authentication
   - For Google: Add your domain to authorized domains (localhost for testing, your production domain for live)
4. **Enable Firestore Database**:
   - Go to Firestore Database → Create database
   - Choose test mode for now (you can secure it later)
5. **Get your config**:
   - Go to Project Settings → General → Your apps
   - Click the web app icon (</>)
   - Copy the `firebaseConfig` object
6. **Update firebase-config.js**:
   - Replace the placeholder config with your actual config

## Features Implemented

### ✅ Email/Password Authentication
- **Sign Up**: Create new account with name, email, password
- **Login**: Sign in with existing credentials
- **Password Reset**: Forgot password functionality
- **Form Validation**: Client-side validation with error handling

### ✅ Google Sign-In
- **Popup Authentication**: One-click Google sign-in
- **Profile Sync**: Automatically saves user data to Firestore
- **Error Handling**: Proper error messages for failed attempts

### ✅ User Data Management
- **Firestore Integration**: User data stored in `users` collection
- **Profile Updates**: Display name and email saved
- **Authentication State**: Persistent login sessions

### ✅ Error Handling
- **Specific Error Messages**: User-friendly error messages
- **Network Error Handling**: Graceful handling of connection issues
- **Form Validation**: Input validation before API calls

### ✅ Security Features
- **Password Confirmation**: Confirm password during signup
- **Email Validation**: Proper email format checking
- **Session Persistence**: Users stay logged in across browser sessions

## File Structure

```
├── firebase-config.js     # Firebase configuration (UPDATE THIS!)
├── auth-utils.js         # Authentication utility functions
├── login.html           # Login page with full auth
├── signup.html          # Signup page with full auth
└── SETUP_INSTRUCTIONS.md # This file
```

## Usage

### For Protected Pages
Add this script to any page that requires authentication:
```html
<script src="auth-utils.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', async function() {
        await protectPage();
        // Your protected page logic here
    });
</script>
```

### For Logout
```html
<button onclick="logoutUser()">Logout</button>
```

### For Getting User Data
```javascript
const userData = await getCurrentUserData();
console.log(userData);
```

## Next Steps

1. **Update Firebase config** (required!)
2. **Test authentication** in development
3. **Secure Firestore rules** for production
4. **Add Apple Sign-In** if needed
5. **Customize error messages** for your brand

## Common Issues & Solutions

### "auth/project-not-found"
- Your Firebase config is incorrect or project doesn't exist
- Update `firebase-config.js` with correct project details

### "auth/unauthorized-domain"
- Add your domain to Firebase Authentication authorized domains
- Include localhost for development

### Google Sign-In not working
- Ensure Google provider is enabled in Firebase Console
- Check that your domain is authorized
- Verify OAuth consent screen is configured

### Firestore permissions denied
- Update Firestore security rules
- For testing: use test mode (allows all read/write)

## Support

For Firebase-specific issues, check:
- Firebase Documentation: https://firebase.google.com/docs
- Firebase Console: https://console.firebase.google.com/
