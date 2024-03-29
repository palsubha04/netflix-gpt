// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCWueQaSJ_VlDNLHGcd2rdInmLypNl-aKE',
  authDomain: 'netflixgpt-de4ad.firebaseapp.com',
  projectId: 'netflixgpt-de4ad',
  storageBucket: 'netflixgpt-de4ad.appspot.com',
  messagingSenderId: '597417769991',
  appId: '1:597417769991:web:51db195b4996aa66e8bea2',
  measurementId: 'G-DW7BJ974YS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
