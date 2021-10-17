```js
const UI = {
//
modelInput: document.getElementById("model") as HTMLInputElement,
dateInput: document.getElementById("date") as HTMLInputElement,
colorInput: document.getElementById("color") as HTMLInputElement,
fuelInput: document.getElementById("fuel") as HTMLInputElement,
addButton: document.getElementById("add") as HTMLInputElement,
carList: document.getElementById("list") as HTMLInputElement,
}

enum FuelType {
    Diesel,
    Petrol,
}

//sukuriame klase ir reikaimus atributus
class Car {
    public readonly model: string;
    public readonly date: Date;
    public readonly color: string;
    // fuel at. priskiriame sukurta Enum tipa
    public readonly fuel: FuelType;

    constructor (model: string, date: string, color: string, fuel: string){
        this.model = model;
        this.date = new Date(date);     //i duota Date iskvieciame stringa ir priskiriame date
        this.color = model;
        this.fuel = +fuel;          //stringa paverciame skaiciumi, nes taip saugomas enum'e
    }
}

//sukurtus automobilius saugosime masyve
//Car[] nurodo kokio tipo duomenys bus saugomi kintamajame/nurodytoje klaseje
let carList: Car[] = [];

UI.addButton.addEventListener('click', () => {
    const model = UI.modelInput.value;
    const date = UI.dateInput.value;
    const color = UI.colorInput.value;
    const fuel = UI.fuelInput;

    //paspaudus mygtuka sukuriame nauja objekta
    const newCar = new Car(model, date, color, fuel.value);
    //nauja objekta itraukiame i masyva
    carList.push(newCar);
    publishList();
});

//sukuriame funk., kuri atspauzdins ir ja panaudosime paspaudus mygtuka
function printData(element:HTMLElement): void {
if (element) {
            element.innerHTML +=`
                <div class="entry">
                    <div class="entry_parameter">Audi</div>
                </div>
            `
}
function publishList(): void {
    UI.carList.innerHTML = "";
    for (const car of carList) {
        car.printData(UI.carList);
    }
}
```
