"use strict";
var _a;
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
    FuelType[FuelType["Dyzelinas"] = 0] = "Dyzelinas";
    FuelType[FuelType["Benzinas"] = 1] = "Benzinas";
})(FuelType || (FuelType = {}));
class Car {
    constructor(model, date, color, fuel) {
        this.model = model;
        this.date = new Date(date);
        this.color = color;
        this.fuel = +fuel;
    }
    printData(element) {
        let dateNoTime = '12/12/1020 12:00:00 AM';
        ;
        dateNoTime = dateNoTime.split(' ')[0];
        if (element) {
            element.innerHTML += `
                <div class="entry">
                    <div class="entry_parameter">${this.model}</div>
                    <div class="entry_parameter">${dateNoTime}</div>
                    <div class="entry_parameter">${this.color}</div>
                    <div class="entry_parameter">${FuelType[this.fuel]}</div>                      
                    <div class="actions">
                        <img onclick="editCar()" class="edit" src="./img/edit.png" alt="Atnaujinti">
                        <img onclick="deleteCar()" class="delete" src="./img/delete.png" alt="Istrinti">
                    </div>
                </div>`;
        }
    }
}
const carList = [];
(_a = UI.addButton) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    const model = UI.modelInput.value;
    const date = UI.dateInput.value;
    const color = UI.colorInput.value;
    const fuel = UI.fuelInput.value;
    const car = new Car(model, date, color, fuel);
    carList.push(car);
    publishList();
});
function publishList() {
    UI.carList.innerHTML = "";
    for (const car of carList) {
        car.printData(UI.carList);
    }
}
function editCar() {
    console.log(`keicia auto...`);
}
function deleteCar() {
    console.log(`trina auto...`);
}
