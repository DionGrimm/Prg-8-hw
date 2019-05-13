"use strict";
var Bomb = (function () {
    function Bomb(g) {
        var _this = this;
        this.element = document.createElement("bomb");
        this.game = g;
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this.element);
        this.spawn();
        this.element.addEventListener("click", function () { return _this.attack(); });
    }
    Bomb.prototype.update = function () {
        this.move();
        this.element.style.transform = "translate(" + this.posx + "px, " + this.posy + "px)";
    };
    Bomb.prototype.move = function () {
        this.posy = this.posy + this.speed;
        if (this.posy > this.game.gameHeight)
            this.explode();
    };
    Bomb.prototype.attack = function () {
        this.game.scorePoint();
        this.spawn();
    };
    Bomb.prototype.spawn = function () {
        this.posy = -200;
        this.posx = Math.random() * this.game.gameHeight;
        this.speed = Math.random() * 5 + 1;
    };
    Bomb.prototype.explode = function () {
        this.game.destroyBuilding();
        this.spawn();
    };
    return Bomb;
}());
var Car = (function () {
    function Car(g) {
        this.speed = 3;
        this.game = g;
        this.element = document.createElement("car");
        var foreground = document.getElementsByTagName("foreground")[0];
        foreground.appendChild(this.element);
        this.posx = 100;
        this.posy = 600;
        this.addClick();
    }
    Car.prototype.update = function () {
        this.drive();
        this.element.style.transform = "translate(" + this.posx + "px, " + this.posy + "px)";
    };
    Car.prototype.drive = function () {
        var w = window.innerWidth;
        this.posx = this.posx + this.speed;
        if (this.posx > w + 400)
            this.posx = 0;
    };
    Car.prototype.addClick = function () {
        var _this = this;
        this.element.addEventListener("click", function () { return _this.game.reset(); });
    };
    return Car;
}());
var Game = (function () {
    function Game() {
        this.score = 0;
        this.lifebarX = 0;
        this.gameHeight = window.innerHeight;
        this.textfield = document.getElementsByTagName("textfield")[0];
        this.statusbar = document.getElementsByTagName("bar")[0];
        this.bombs = [new Bomb(this), new Bomb(this), new Bomb(this)];
        this.car = new Car(this);
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.car.update();
        for (var _i = 0, _a = this.bombs; _i < _a.length; _i++) {
            var b = _a[_i];
            b.update();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.destroyBuilding = function () {
        this.lifebarX = this.lifebarX - 72;
        this.statusbar.style.backgroundPositionX = this.lifebarX + "px";
    };
    Game.prototype.scorePoint = function () {
        this.score++;
        this.textfield.innerHTML = "Score: " + this.score;
    };
    Game.prototype.reset = function () {
        this.lifebarX = 0;
        this.score = 0;
        this.textfield.innerHTML = "Score: " + this.score;
        this.statusbar.style.backgroundPositionX = this.lifebarX + "px";
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map