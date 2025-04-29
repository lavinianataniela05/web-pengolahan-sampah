// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAOZWU07RtTX5QxeMgEzLENLcN9rdyH35c",
  authDomain: "pengolahansampah.firebaseapp.com",
  projectId: "pengolahansampah",
  storageBucket: "pengolahansampah.appspot.com", // diperbaiki
  messagingSenderId: "537721866386",
  appId: "1:537721866386:web:7a8b4cbb3e46ab0028fe4b",
  measurementId: "G-YR5BK9LHY8",
};

// Pastikan tidak re-initialize jika sudah ada app
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

let analytics: Analytics | undefined;

if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
