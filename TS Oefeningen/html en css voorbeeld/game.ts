class Block {
    x: number
    y: number
    div: HTMLElement
    
    constructor(){
      this.div = document.createElement("car-div")
      document.body.appendChild(this.div)
  
      this.x = Math.random() * 400
      this.y = Math.random() * 400
  
      this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
      
    }
    
    public move(){
      
      //this.x++
      this.x = Math.random() * 800
      this.y = Math.random() * 400
      
      //this.x+ = Math.random() * 4 -2 
      //this.y+ = Math.random() * 4 -2
      //this.scale Math.sin(this.x/100)
      //this.div.style.transform = `scale(${this.scale})`
  
  
      this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
  }

  let allBlocks = []

  function createBlocks(){
    for(let i = 0; i<1500; i++){
      let b = new Block()
      allBlocks.push(b)
    }
  }
  
  function moveAllBlocks(){
    for(let b of allBlocks){
      b.move() //Zet alle blokjes 1 px naar rechts.
    }
    //Game-Loop
    requestAnimationFrame(()=>moveAllBlocks())
  }
  
  createBlocks()
  moveAllBlocks()
  //setInterval(() => moveAllBlocks(), 100) //Beweegt om de 100 miliseconde