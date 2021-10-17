"use strict";
const UI = {
    modelInput: document.getElementById("model"),
    dateInput: document.getElementById("date"),
    colorInput: document.getElementById("color"),
    fuelInput: document.getElementById("fuel"),
    addButton: document.getElementById("add"),
    carList: document.getElementById("list"),
};
var FuelType;
(function (FuelType) {
    FuelType[FuelType["Diesel"] = 0] = "Diesel";
    FuelType[FuelType["Petrol"] = 1] = "Petrol";
})(FuelType || (FuelType = {}));
class Car {
    constructor(model, date, color, fuel) {
        this.carList = [];
        this.model = model;
        this.date = new Date(date);
        this.color = color;
        this.fuel = +fuel;
    }
    printData(element) {
        if (element) {
            element.innerHTML += `
                <div class="entry">
                    <div class="entry_parameter">${this.model}</div>
                    <div class="entry_parameter">${this.date}</div>
                    <div class="entry_parameter">${this.color}</div>
                    <div class="entry_parameter">${this.fuel}</div>
                    <div class="actions">
                        <img onclick="editEntry()" class="edit" src="./img/edit.png" alt="Atnaujinti">
                        <img onclick="deleteEntry()" class="delete" src="./img/delete.png" alt="Istrinti">
                    </div>
                </div>`;
        }
    }
    addEventListener() { }
}
() => {
    const model = UI.modelInput.value;
    const date = UI.dateInput.value;
    const color = UI.colorInput.value;
    const fuel = UI.fuelInput.value;
    const newCar = new Car(model, date, color, fuel);
    carList.push(newCar);
    publishList();
};
;
function publishList() {
    UI.carList.innerHTML = "";
    for (const car of carList) {
        car.printData(UI.carList);
    }
}
