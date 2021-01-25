class Car {
    gearBox;
    seats;
    windows;
    engine;
    clutch;


    constructor(gearbox, wheels, seats, windows, engine, glutch){
        this.gearBox = gearbox;
        this.seats = seats;
        this.windows = windows;
        this.engine = engine;
        this.clutch = clutch;
    }

    startClutch(){
        return console.log("clutch has started");
    }

    startEngine(){
        console.log(this.engine + " has started")
    }

    startCar(){
        console.log(this.startClutch + " and " + this.startEngine)
    }
}

class Porsche extends Car {

    constructor(gearbox, seats, windows, mirrors, engine, glutch)
    super(gearbox, seats, windows, mirrors, engine, glutch)
}

class Toyota extends Car {
    
    constructor(gearbox, seats, windows, color, engine, glutch)
    super(gearbox,seats, windows, color, engine = "Toyota engine", glutch)
    startEngine(){
        console.log("the engine has started")
    }
}

class Volkaswagen extends Car {
    
    constructor(gearbox, seats, windows, color, engine, glutch)
    super(gearbox,seats, windows, color, engine = "Porsche engine", glutch)
}

const car1 = new Porsche("planetary", "4", "tempered", "grey", "4806cc", "multiplate")