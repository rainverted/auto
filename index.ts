const UI = {
    modelInput: document.getElementById("model") as HTMLInputElement,
    dateInput: document.getElementById("date") as HTMLInputElement,
    colorInput: document.getElementById("color") as HTMLInputElement,
    fuelInput: document.getElementById("fuel") as HTMLInputElement,

    addButton: document.getElementById("add") as HTMLElement,
    updButton: document.getElementById("update") as HTMLElement,

    carList: document.getElementById("list") as HTMLInputElement,
}

const newUI = {
    modelUpdateInput : document.getElementById("updateModel") as HTMLInputElement,
    dateUpdateInput : document.getElementById("updateDate") as HTMLInputElement,
    colorUpdateInput : document.getElementById("updateColor") as HTMLInputElement,
    fuelUpdateInput : document.getElementById("updateFuel") as HTMLInputElement,
}

let updateCar: Car; //atnaujinamo automobilio objektas

enum FuelType {
    Dyzelinas,
    Benzinas,
}

//sukuriame klase ir reikaimus atributus
class Car {
    public model: string;
    public date: Date;
    public color: string;
    // fuel at. priskiriame sukurta Enum tipa
    public fuel: FuelType;
    public id: number;

    public constructor (model: string,
                        date: string, 
                        color: string,
                        fuel: string) {

        this.model = model;
        this.date = new Date(date); 
        this.color = color;
        this.fuel = +fuel;
        //random id atsitiktiniam automobiliui
        this.id = Math.round(Math.random() *1000);  
    } 

    public printData(element:HTMLElement): void {
     let dateNoTime = '12/12/1020 12:00:00 AM';; 
		dateNoTime = dateNoTime.split(' ')[0];

        if (element) {
            element.innerHTML +=`
                <div class="entry">
                    <div class="entry_parameter">${this.model}</div>
                    <div class="entry_parameter">${dateNoTime}</div>
                    <div class="entry_parameter">${this.color}</div>
                    <div class="entry_parameter">${FuelType[this.fuel]}</div>                      
                    <div class="actions">
                        <img onclick="editCar(${this.id})" class="edit" src="./img/edit.png" alt="Atnaujinti">
                        <img onclick="deleteCar(${this.id})" class="delete" src="./img/delete.png" alt="Istrinti">
                    </div>
                </div>`
        }
    }
}

let carList: Car[] = [];

UI.addButton?.addEventListener('click', () => {
    const model = UI.modelInput.value;
    const date = UI.dateInput.value;
    const color = UI.colorInput.value;
    const fuel = UI.fuelInput.value;    

    const car = new Car(model, date, color, fuel);
    carList.push(car);

    publishList();
});

function publishList(): void {
    UI.carList.innerHTML = "";
    for (const car of carList) {
        car.printData(UI.carList);
    }
}

//paspaudus edit ikona suranda objekta, kuri norime atnaujinti 
function editCar(id: number): void {
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
    updateCar.fuel = + newUI.fuelUpdateInput.value;

    UI.addButton.classList.remove("hide");
    UI.updButton.classList.add("hide");

    publishList();
}


