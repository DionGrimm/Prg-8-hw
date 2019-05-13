class Car {
    private wheel:Wheel

    constructor() {
        console.log("Car Created")
        this.wheel = new Wheel()
        //this.wheel.turn bestaat niet
        Wheel.turn
    }

    update():void {

    }
}