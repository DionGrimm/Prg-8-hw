class Game {
    private car = new Car()
    private static instance: Game

    constructor() {
        console.log("Game Created")
    }

    public gameOver():void {
        console.log("Game Over")
    }

    public static getInstance() {
        if(!Game.instance) {
            Game.instance = new Game()
        }
        return Game.instance
    }

}
window.addEventListener("load", () => {
    console.log("Building site")
    let gameOne = Game.getInstance()
    let gameTwo = Game.getInstance() // Heeft dezelde game instance als gameOne nu
})