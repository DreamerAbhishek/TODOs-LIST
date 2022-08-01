var names = document.getElementById("title");
var desc = document.getElementById("description");
var dated = document.getElementById("dates");

const params = new URL(window.location.href).searchParams;
var uniqueId = `${"ID"}${params.get("id")}`;

var idData = localStorage.getItem(uniqueId);

var formData = [];

document
  .getElementById("button-rights")
  .addEventListener("click", function todoList() {
    if (idData) {
      formData = JSON.parse(idData);
    }

    formData.push({
      name: names.value,
      desc: desc.value,
      dated: dated.value,
    });
    localStorage.setItem(uniqueId, JSON.stringify(formData));
    window.location.href = "/List.html?id=" + params.get("id");
    event.preventDefault();
  });

document
  .getElementById("button-lefts")
  .addEventListener("click", function viewList() {
    window.location.href = "/List.html?id=" + params.get("id");
    event.preventDefault();
  });
