var fname = document.getElementById("firstName");
var lname = document.getElementById("lastName");
var email = document.getElementById("email");
var Password = document.getElementById("pass");
var cPassword = document.getElementById("confirm-pass");
var number = document.getElementById("mobile");

var UPPER_CASE_LETTER = /[a-z]/g;
var LOWER_CASE_LETTER = /[A-Z]/g;
var NUMBERS = /[0-9]/g;
var PHONE_NUMBER = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var MAIL_FORMAT = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var LETTERS = /^[A-Za-z]+$/;
let R_DATA_ARRAY = [];
let getData = localStorage.getItem("RegisterData");

document
  .getElementById("btn_submit")
  .addEventListener("click", function saveData(event) {
    if (Password.value.length != 0) {
      if (Password.value.length > 8) {
        if (Password.value.length < 15) {
          if (Password.value.match(NUMBERS)) {
            if (Password.value.match(UPPER_CASE_LETTER)) {
              if (Password.value.match(LOWER_CASE_LETTER)) {
                if (Password.value == cPassword.value) {
                  storeArray();
                } else {
                  document.getElementById("warning").innerHTML =
                    "**confirm-password and password is not match";
                  event.preventDefault();
                }
              } else {
                document.getElementById("message").innerHTML =
                  "**Please add 1 lowercase letter";
                event.preventDefault();
              }
            } else {
              document.getElementById("message").innerHTML =
                "**Please add 1 uppercase letter";
              event.preventDefault();
            }
          } else {
            document.getElementById("message").innerHTML =
              "**Please add 1 number";
            event.preventDefault();
          }
        } else {
          document.getElementById("message").innerHTML =
            "**Password length must be atLeast 15 characters";
          event.preventDefault();
        }
      } else {
        document.getElementById("message").innerHTML =
          "**Password length must be atLeast 8 characters";
        event.preventDefault();
      }
    } else {
      document.getElementById("message").innerHTML =
        "**Fill the password please!";
      event.preventDefault();
    }
    if (!number.value.match(PHONE_NUMBER)) {
      document.getElementById("warningnumber").innerHTML =
        "**Only Numeric Value Accepted for Mobile Number!";
      event.preventDefault();
    }
    if (!email.value.match(MAIL_FORMAT)) {
      document.getElementById("warningemail").innerHTML =
        "**Enter Valid Email!";
      event.preventDefault();
    }
    if (!fname.value.match(LETTERS)) {
      document.getElementById("warningfirst").innerHTML =
        "**First Name can only contain Alphabets!";
      event.preventDefault();
    }
    if (!lname.value.match(LETTERS)) {
      document.getElementById("warninglast").innerHTML =
        "**Last Name can only contain Alphabets!";
      event.preventDefault();
    }

    function storeArray() {
      if (getData) {
        R_DATA_ARRAY = JSON.parse(getData);
      }
      R_DATA_ARRAY.push({
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        Password: Password.value,
        cPassword: cPassword.value,
        number: number.value,
        id: Math.floor(Math.random() * 100),
      });
      localStorage.setItem("RegisterData", JSON.stringify(R_DATA_ARRAY));
      // <--Convert a object into a string-->
      window.location.href = "/login.html";
    }
  });
