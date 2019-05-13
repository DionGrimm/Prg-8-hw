class Bomb {
    
    private element:HTMLElement
    private game:Game
    private posy:number
    private posx:number
    private speed:number
        
    constructor(g:Game) {
        this.element = document.createElement("bomb")
        this.game = g
        let foreground = document.getElementsByTagName("foreground")[0]
        foreground.appendChild(this.element);
        this.spawn()
        this.element.addEventListener("click", () => this.attack())
    }

    public update():void {
        this.move()
        this.element.style.transform = `translate(${this.posx}px, ${this.posy}px)`
    }

    private move():void {
        this.posy = this.posy + this.speed
        if(this.posy > this.game.gameHeight) this.explode()
    }

    private attack():void {
        this.game.scorePoint()
        this.spawn()
    }

    public spawn():void {
        this.posy = -200
        this.posx = Math.random()*this.game.gameHeight
        this.speed = Math.random()*5+1
    }

    private explode():void {
        this.game.destroyBuilding()
        this.spawn()
    }
}