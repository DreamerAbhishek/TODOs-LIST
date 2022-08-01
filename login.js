let storeData = JSON.parse(localStorage.getItem("RegisterData"));

document
  .getElementById("login-btn")
  .addEventListener("click", function LoginData(event) {
    event.preventDefault();
    var userData = document.getElementById("userData").value;
    var userPass = document.getElementById("userPass").value;

    for (let i = 0; i < storeData.length; i++) {
      if (storeData[i].email == userData && storeData[i].Password == userPass) {
        alert("U r Login");

        window.location.href = "/Add.html?id=" + storeData[i].id;
        break;
      } else {
        alert("Email and Password is Incorrect!");
      }
    }
  });
