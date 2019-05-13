class Car {
    
    private element: HTMLElement
    private posx:number
    private posy:number
    private game:Game
    private speed:number = 3
        
    constructor(g:Game) {
        this.game = g
        this.element = document.createElement("car")
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.element);
        this.posx = 100
        this.posy = 600
        this.addClick()
    }

    public update():void {
        this.drive()
        this.element.style.transform = `translate(${this.posx}px, ${this.posy}px)`
    }

    private drive():void {
        let w = window.innerWidth
        this.posx = this.posx + this.speed
        if(this.posx>w+400) this.posx = 0
    }

    public addClick():void {
        this.element.addEventListener("click", () => this.game.reset())
    }
}