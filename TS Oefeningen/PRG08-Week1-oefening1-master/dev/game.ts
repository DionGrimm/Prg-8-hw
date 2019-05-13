class Game {
    
    private score:number = 0
    private textfield:HTMLElement
    private statusbar:HTMLElement
    private lifebarX:number = 0
    private bombs:Bomb[]
    private car:Car
    public gameHeight:number = window.innerHeight
    
    constructor() {
        this.textfield = document.getElementsByTagName("textfield")[0] as HTMLElement
        this.statusbar = document.getElementsByTagName("bar")[0] as HTMLElement

        this.bombs = [new Bomb(this), new Bomb(this), new Bomb(this)]
        this.car = new Car(this)
        this.gameLoop()
    }
    
    private gameLoop():void {
        this.car.update()
        for (const b of this.bombs) {
            b.update()
        }
        requestAnimationFrame(() => this.gameLoop())
    }

    public destroyBuilding():void{
        this.lifebarX = this.lifebarX -72
        this.statusbar.style.backgroundPositionX = this.lifebarX+"px"      // één kapot gebouw
    }
       
    public scorePoint():void {
        this.score ++
        this.textfield.innerHTML = "Score: " + this.score
    }

    public reset() {
        this.lifebarX = 0
        this.score = 0
        this.textfield.innerHTML = "Score: " + this.score
        this.statusbar.style.backgroundPositionX = this.lifebarX+"px"
    }

} 

window.addEventListener("load", () => new Game())