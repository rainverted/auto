"use strict";
var _a;
const UI = {
    modelInput: document.getElementById("model"),
    dateInput: document.getElementById("date"),
    colorInput: document.getElementById("color"),
    fuelInput: document.getElementById("fuel"),
    addButton: document.getElementById("add"),
    updButton: document.getElementById("update"),
    carList: document.getElementById("list"),
};
const newUI = {
    modelUpdateInput: document.getElementById("updateModel"),
    dateUpdateInput: document.getElementById("updateDate"),
    colorUpdateInput: document.getElementById("updateColor"),
    fuelUpdateInput: document.getElementById("updateFuel"),
};
let updateCar;
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
        this.id = Math.round(Math.random() * 1000);
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
                        <img onclick="editCar(${this.id})" class="edit" src="./img/edit.png" alt="Atnaujinti">
                        <img onclick="deleteCar(${this.id})" class="delete" src="./img/delete.png" alt="Istrinti">
                    </div>
                </div>`;
        }
    }
}
let carList = [];
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
function editCar(id) {
    for (const car of carList) {
        if (id === car.id) {
            updateCar = car;
        }
    }
    console.log(updateCar);
    updateEntry();
    UI.addButton.classList.remove("hide");
    UI.updButton.classList.add("hide");
}
function updateEntry() {
    newUI.modelUpdateInput.value = updateCar.model;
    newUI.dateUpdateInput.value = updateCar.date.toISOString().slice(0, 10);
    newUI.colorUpdateInput.value = updateCar.color;
    newUI.fuelUpdateInput.value = updateCar.fuel.toString();
}
function onSave() {
    updateCar.model = newUI.modelUpdateInput.value;
    updateCar.date = new Date(newUI.dateUpdateInput.value);
    updateCar.color = newUI.colorUpdateInput.value;
    updateCar.fuel = +newUI.fuelUpdateInput.value;
    UI.addButton.classList.remove("hide");
    UI.updButton.classList.add("hide");
    publishList();
}
