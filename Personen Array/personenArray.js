class Person {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }

    getAge() {
        return new Date().getFullYear() - this.birthYear;
    }
}

let personen = [];

function addPerson() {
    personen.push(new Person(document.getElementById("firstName").value, document.getElementById("lastName").value, document.getElementById("birthYear").value));
    document.getElementById("firstName").value = null;
    document.getElementById("lastName").value = null;
    document.getElementById("birthYear").value = null;
    updateTable();

}

function updateTable() {
    let liste = document.getElementById("listBody");
    liste.innerHTML = null;
    for (let i in personen) {
        liste.innerHTML += "<tr><td>" + personen[i].firstName + "</td><td>" + personen[i].lastName + "</td><td>" + personen[i].getAge() + "</td></tr>";
    }
}

function removeLast() {
    personen.pop();
    updateTable();
}

function removeAll() {
    personen = [];
    updateTable();
}

function sortByAge() {
    personen.sort(function(a, b){return b.birthYear - a.birthYear});
    updateTable();
}

function sortByLastName() {
    personen.sort(function(a, b){
        let x = a.lastName.toLowerCase();
        let y = b.lastName.toLowerCase();
        if (x < y) {return -1};
        if (x > y) {return 1};
        return 0;})    
        updateTable();
}
