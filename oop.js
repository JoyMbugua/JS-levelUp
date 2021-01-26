class Car {
    gearBox;
    seats;
    windows;
    engine;
    clutch;


    constructor(gearbox, wheels, seats, windows, engine, clutch){
        this.gearBox = gearbox;
        this.seats = seats;
        this.windows = windows;
        this.engine = engine;
        this.clutch = clutch;
    }

    startClutch(){
        console.log("clutch has started");
    }

    startEngine(){
        console.log(this.engine + " has started")
    }

    startCar(){
        console.log(this.startClutch() + " and " + this.startEngine())
    }
}

class Porsche extends Car {

    constructor(gearbox, seats, windows, mirrors, engine, clutch){
        super(gearbox, seats, windows, mirrors, engine, clutch)
    }
}

class Toyota extends Car {
    
    constructor(gearbox, seats, windows, color, engine, clutch){
        super(gearbox,seats, windows, color, engine = "Toyota engine", clutch)
    }
    
}

class Volkaswagen extends Car {
    
    constructor(gearbox, seats, windows, color, engine, clutch){
        super(gearbox,seats, windows, color, engine = "Porsche engine", clutch)
    }
}

const car1 = new Porsche("planetary", "4", "tempered", "grey", "4806cc", "multiplate")
car1.startClutch()