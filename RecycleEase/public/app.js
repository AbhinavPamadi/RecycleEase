//(-----------------------------------------------PICKUP SCHEDULE FORM FIREBASE INTEGRATION STARTS---------------------------------------)
// Your web app's Firebase configuration
var firebaseConfig = {
  aapiKey: "AIzaSyBfoz7nfAooU9CzPAtv2ZY4vJVIeUMHgLM",
  authDomain: "recycleease.firebaseapp.com",
  projectId: "recycleease",
  storageBucket: "",
  messagingSenderId: "839134010096",
  appId: "1:839134010096:web:bd908d06f5318311650035",
  measurementId: "G-DQKVYM29HJ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Till here everything permanent.
// Reference ScheduleRequests collections
let scheduleRequests = firebase.database().ref("scheduleRequests");

//Listening submission
document
  .querySelector(".schedule-pickup-form")
  .addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();
  //Getting input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let phone = document.querySelector(".phone").value;
  let date_pickup = document.querySelector(".date_pickup").value;
  let time_pickup = document.querySelector(".time_pickup").value;
  let address_pickup = document.querySelector(".address_pickup").value;
  let extra_notes = document.querySelector(".extra_notes").value;
  let waste_type = document.querySelector(".waste_type").value;
  let quantity = document.querySelector(".quantity").value;
  console.log(
    name,
    email,
    phone,
    date_pickup,
    time_pickup,
    address_pickup,
    extra_notes,
    waste_type,
    quantity
  );
  saveScheduleRequests(
    name,
    email,
    phone,
    date_pickup,
    time_pickup,
    address_pickup,
    extra_notes,
    waste_type,
    quantity
  );
}

// Save Infos to Firebase
function saveScheduleRequests(
  name,
  email,
  phone,
  date_pickup,
  time_pickup,
  address_pickup,
  extra_notes,
  waste_type,
  quantity
) {
  let newScheduleRequests = scheduleRequests.push();
  newScheduleRequests.set({
    name: name,
    email: email,
    phone: phone,
    date_pickup: date_pickup,
    time_pickup: time_pickup,
    address_pickup: address_pickup,
    extra_notes: extra_notes,
    waste_type: waste_type,
    quantity: quantity,
  });
}

document.getElementById("loginbtn").addEventListener("click", Googlelogin);
document.getElementById("logoutbtn").addEventListener("click", Logoutuser);

var Googlelogin = () => {
  var provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider).then(() => {
    window.location.assign;
  });
};
