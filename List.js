const params = new URL(window.location.href).searchParams;
var uniqueId = `${"ID"}${params.get("id")}`;

var ArrayList = JSON.parse(localStorage.getItem(uniqueId));

Table();

function Table() {
  const addList = document.getElementById("viewList");
  let str = " ";
  ArrayList.forEach((element, index) => {
    str += `
      <tr>
          <td scope="row">${index + 1}</td>
          <td>${element["name"]}</td>
          <td>${element["desc"]}</td>
          <td>${element["dated"]}</td>
          <td><button id="deleted" onclick="DeleteRow(${index})">Delete</button></td>
          
      </tr>
     `;
  });
  document.getElementById("viewList").innerHTML = str;
}

function DeleteRow(index) {
  ArrayList.splice(index, 1);
  localStorage.setItem(uniqueId, JSON.stringify(ArrayList));
  Table();
}

document
  .getElementById("button-right")
  .addEventListener("click", function BackList() {
    window.location.href = "/Add.html?id=" + params.get("id");
    event.preventDefault();
  });

document
  .getElementById("clearness")
  .addEventListener("click", function ClearList() {
    if (confirm("Do you areally want to clear?")) {
      localStorage.setItem(
        uniqueId,
        JSON.stringify(ArrayList.splice(ArrayList.length))
      );
      window.location.href = "/List.html?id=" + params.get("id");
    }
  });
