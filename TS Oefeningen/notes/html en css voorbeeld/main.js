class Block {
    x:number
    y:number
    div:HTMLElement
    
    constructor() {
      this.div = document.createElement("car-div")
      document.body.appendChild(this.div)
  
      this.x = Math.random() * 400
      this.y = Math.random() * 400
  
      this.div.style.transform = `translate(${this.x}px,${this.y}px)`
    }
    
      public move(d) {
        this.x = this.x + d
        this.div.style.transform = `translate(${this.x}px,${this.y}px)`
      }
  }
  
  let allBlocks = []
  
  function createBlocks() {
    for (let i = 0; i<100; i++) {
      let b = new Block()
      allBlocks.push(b)
    }
  }
  
  function moveBlocks(d){
    for(let b of allBlocks) {
      b.move(d)
    }
    requestAnimationFrame(()=>{moveBlocks(d)})
  }
  
  createBlocks()
  moveBlocks(1)