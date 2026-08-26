import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";

import {
    getDatabase,
    ref,
    push,
    set,
    onValue,
    remove
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyDLb1F3P0LX4atIF7MTQgF1nECX4rSqtV0",
    authDomain: "bus-tracker-5090b.firebaseapp.com",
    databaseURL: "https://bus-tracker-5090b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "bus-tracker-5090b",
    storageBucket: "bus-tracker-5090b.firebasestorage.app",
    messagingSenderId: "745348645444",
    appId: "1:745348645444:web:59a33a22d823496e513211"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


// Your existing code stays
const studentBtn = document.getElementById("studentBtn");

studentBtn.addEventListener("click", function () {
    window.location.href = "student.html";
});