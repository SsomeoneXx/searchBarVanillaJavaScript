let searchBar = document.querySelector("input");
let actualData = [];

async function fetchData(url) {
  let fetchedData = await fetch(url);
  actualData = await fetchedData.json();
  displayData(actualData);
}
fetchData("https://jsonplaceholder.typicode.com/users");

function displayData(data) {
  let container = document.querySelector(".container");
  container.innerHTML = "";
  for (let i of data) {
    let outerDiv = document.createElement("div");
    outerDiv.classList.add("box");
    let h1 = document.createElement("h1");
    let USER_NAME = document.createElement("p");
    let website = document.createElement("h5");
    let name = document.createElement("h1");

    website.style.textTransform = "uppercase";
    website.style.textDecoration = "bold";
    website.innerHTML = i.website;

    name.innerHTML = `Name : ${i.username}`;
    name.style.fontWeight = "300";
    name.classList.add("forName");

    USER_NAME.innerHTML = `E-mail -> ${i.email}`;
    h1.innerHTML = i.name;

    outerDiv.append(h1, USER_NAME, website, name);
    container.append(outerDiv);
  }
}

searchBar.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filteredData = actualData.filter(function (user) {
    return (
      user.username.toLowerCase().includes(value) ||
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value)
    );
  });
  displayData(filteredData);
});
