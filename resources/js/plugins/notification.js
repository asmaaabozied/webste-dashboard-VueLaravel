import store from './../store/index.js'
import firebase from 'firebase/app';
import 'firebase/messaging';
let messaging;

// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyBusCRE5BFtC1Gt0ijpSJn4wUv89hH492E",
    authDomain: "inmaa-276416.firebaseapp.com",
    databaseURL: "https://inmaa-276416.firebaseio.com",
    projectId: "inmaa-276416",
    storageBucket: "inmaa-276416.appspot.com",
    messagingSenderId: "1758356378",
    appId: "1:1758356378:web:80506c7108245b06395023",
    measurementId: "G-P7W4QMEELH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
if (firebase.messaging.isSupported()) {
    messaging = firebase.messaging();
    messaging.usePublicVapidKey("BC3OP8xiX-UUGnlJdE37220U83X0L0Gls_YLiDJmtlfov1lxpVx_tBY1M8pzC9yX98gOtEYkCVVioqPpi3u5iPk");
    function sendTokenToServer(token) {
        axios.post('/api/send_token', {fcm_token: token})
    }
    function retrieveToken() {
        // Get Instance ID token. Initially this makes a network call, once retrieved
        // subsequent calls to getToken will return from cache.
        messaging.getToken().then((currentToken) => {
            if (currentToken) {
                if (store.getters.isLoggedin)
                    sendTokenToServer(currentToken);
                // updateUIForPushEnabled(currentToken);
            } else {
                alert('please allow notification ')
            }
        }).catch((err) => {
            // console.log('An error occurred while retrieving token. ', err);
            // showToken('Error retrieving Instance ID token. ', err);
            // setTokenSentToServer(false);
        });
    }
    retrieveToken();
    messaging.onTokenRefresh(() => retrieveToken());
}
const message = messaging;
export default message;
