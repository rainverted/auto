const UI = {
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

    public constructor (model: string,
                        date: string, 
                        color: string,
                        fuel: string) {

        this.model = model;
        this.date = new Date(date); 
        this.color = color;
        this.fuel = +fuel;   
    } 

    public printData(element:HTMLElement): void {
        if (element) {
            element.innerHTML +=`
                <div class="entry">
                    <div class="entry_parameter">${this.model}</div>
                    <div class="entry_parameter">${this.date}</div>
                    <div class="entry_parameter">${this.color}</div>
                    <div class="entry_parameter">${this.fuel}</div>
                    <div class="actions">
                        <img onclick="editEntry()" class="edit" src="./img/edit.png" alt="Atnaujinti">
                        <img onclick="deleteEntry()" class="delete" src="./img/delete.png" alt="Istrinti">
                    </div>
                </div>`
    }
}

const carList: Car[] = [];

UI.addButton?.addEventListener('click', () => {
    const model = UI.modelInput.value;
    const date = UI.dateInput.value;
    const color = UI.colorInput.value;
    const fuel = UI.fuelInput.value;    

    const newCar = new Car(model, date, color, fuel);
    carList.push(newCar);

    publishList();
});

function publishList(): void {
    UI.carList.innerHTML = "";
    for (const car of carList) {
        car.printData(UI.carList);
    }
}