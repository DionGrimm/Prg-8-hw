class Wheel {
    private game:Game
    constructor() {
        console.log("Wheel created")
        Game.getInstance().gameOver() // Zo roep je de game instance aan
    }

    public static turn() {
        console.log("the hweel is turning")
    }

    update():void {

    }
}