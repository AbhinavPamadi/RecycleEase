//(----------------------------------------------CONTACT US FORM FIREBASE INTEGRATION STARTS---------------------------------------------)

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCeSxD7LNLUhb6-cCk9_mUnyW5K4qa4ZEo",
  authDomain: "recycleease-contact.firebaseapp.com",
  projectId: "recycleease-contact",
  storageBucket: "recycleease-contact.appspot.com",
  messagingSenderId: "679428494946",
  appId: "1:679428494946:web:932787cbe10417aaffa33b",
  measurementId: "G-EV149N2DMF",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Till here everything permanent.

// Reference contactInfo collections
let contactInfo = firebase.database().ref("contactqueries");

//Listening submission
document.querySelector(".contact-info").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //Getting input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);
}

// Save Infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();
  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}
