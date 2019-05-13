class Calculator {
    public static addNumbers(a:number,b:number) {
      console.log(a+b)
    }
  }
  
  // c heeft geen addNumbers
  // let c = new Calculator()
  // c.addNumbers()
  
  // Gebruik een static functie ipv een instance maken om geheugen te besparen
  Calculator.addNumbers(3,4)