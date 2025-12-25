import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD0GduvmtKA0IDo6ZL0gSu6MMCs3k2uf9I",
  authDomain: "rahad-5a736.firebaseapp.com",
  databaseURL: "https://rahad-5a736-default-rtdb.firebaseio.com",
  projectId: "rahad-5a736",
  storageBucket: "rahad-5a736.firebasestorage.app",
  messagingSenderId: "648212405098",
  appId: "1:648212405098:web:a30fd4e672360df70f2313",
  measurementId: "G-4W9MVY2G3Z"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
