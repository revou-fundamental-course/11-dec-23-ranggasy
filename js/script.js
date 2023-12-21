function setName() {
  const name = localStorage.getItem("savedName");
  if (!name) {
    name = prompt("Please enter your name", "");
    localStorage.setItem("savedName", name);
  }
  document.getElementById("halo-nama").innerHTML = name;
}

setName();
const navbar = document.getElementById("navbar");
icon.addEventListener("click", function () {
  navbar.classList.toggle("hidden");
});

const homeBtn = document.getElementById("home");
const profileBtn = document.getElementById("ourProfile");
const AchievementBtn = document.getElementById("Achievement");
const messageBtn = document.getElementById("message");

navbar.addEventListener("click", function (e) {
  if (
    !homeBtn.contains(e.target) &&
    !profileBtn.contains(e.target) &&
    !AchievemntBtn.contains(e.target) &&
    !messageBtn.contains(e.target)
  ) {
    navbar.classList.toggle("hidden");
  }
});

function validateForm() {
  const name = document.forms["message-form"]["name"].value;
  const birthDate = document.forms["message-form"]["tanggal"].value;
  const gender = document.forms["message-form"]["gender"].value;
  const messages = document.forms["message-form"]["message-from"].value;
  const timeNow = new Date();
 
  const messageReturn = document.getElementById("returnText");

  if (messageReturn.classList == "returnText") {
    messageReturn.classList.toggle("returnText");
  }

  document.getElementById("time-api").innerHTML = timeNow;
  document.getElementById("sender-name").innerHTML = name;
  document.getElementById("sender-birth-date").innerHTML = birthDate;
  document.getElementById("sender-gender").innerHTML = gender;
  document.getElementById("sender-message").innerHTML = messages;
  document.getElementById("time-api").parentNode.style.display = "none";

  return false;
}
