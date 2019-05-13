interface RaceCar {
    privatespoiler:boolean;
  }
  
  class Vehicle {
    protected speed:number;
    protected numWheels:number;
    protected brand:string;
    
    constructor(brand:string) {
      console.log("I am a vehicle");
      this.brand = brand;
      console.log("My Brand is " + this.brand);
    }
    
    public drive() {
      console.log("Vroom");
    }
  }
  
  class Car extends Vehicle implements RaceCar{
    
    private spoiler:boolean = false;
    
    constructor(brand:string) {
      super(brand)
      this.speed = 2;
      this.numWheels = 4;
      console.log("My speed is " + this.speed);
      console.log(this.spoiler)
    }
    
    public cleanWindow() {
      console.log("Spriets");
    }
  }
  
  class MotorBike extends Vehicle {
    
    constructor(brand:string) {
      super(brand);
      this.speed = 3;
      this.numWheels = 2;
      console.log("My speed is " + this.speed);
    }
    
    public wheelie():Void {
      console.log("Whoohoo");
    }
  }
  
  let c = new Car("Mercedes");
  c.drive();
  c.cleanWindow();
  let m = new MotorBike("Keta");
  m.drive();
  m.wheelie();
  