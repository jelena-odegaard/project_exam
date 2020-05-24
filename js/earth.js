const url = "http://api.open-notify.org/astros.json";

async function fetchApi() {
    const response = await fetch(url);
    const json = await response.json();

    counter(json);
    names(json);

    console.log(json);
}

fetchApi();

function counter(json) {
    const howManyPeople = document.querySelector("#counter");

    howManyPeople.innerHTML = `There are ${json.number} people in the space right now: `;
    console.log(json.number);
}

function names(json) {
    const people = json.people;
    const displayNames = document.querySelector("#names");

    let newHTML = "";

    for (let i = 0; i < people.length; i++) {
        newHTML += `<h4>${people[i].name}</h4>`;
        console.log(people[i].name);
    }
    displayNames.innerHTML = newHTML;
}