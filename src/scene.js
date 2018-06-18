"use strict";
var feint;
(function (feint) {
    var Scene = /** @class */ (function () {
        function Scene(canvas) {
            this._update = function () { };
            this._gameobjects = [];
            this._render = new feint.Render(this);
            this._width = 800;
            this._height = 800;
            this._canvas = canvas;
        }
        Object.defineProperty(Scene.prototype, "GameObjects", {
            get: function () {
                return this._gameobjects;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "Canvas", {
            get: function () {
                return this._canvas;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "Size", {
            get: function () {
                return new feint.Size(this._width, this._height);
            },
            set: function (size) {
                this._width = size.Width;
                this._height = size.Height;
            },
            enumerable: true,
            configurable: true
        });
        Scene.prototype.addGameObject = function (gameObject) {
            this._gameobjects.push(gameObject);
        };
        Scene.prototype.removeGameObject = function (gameObject) {
            this._gameobjects.splice(this._gameobjects.indexOf(gameObject), 1);
        };
        Scene.prototype.clearGameObjects = function () {
            this._gameobjects = [];
        };
        Scene.prototype.find = function (name) {
            var gameObject = null;
            for (var i = 0; i < this._gameobjects.length; ++i) {
                if (this._gameobjects[i].Name == name) {
                    gameObject = this._gameobjects[i];
                }
            }
            return gameObject;
        };
        Scene.prototype.onUpdate = function (event) {
            this._update = event;
        };
        Scene.prototype.run = function () {
            var _this = this;
            this.beforeStart();
            setInterval(function () {
                _this._update();
                _this._render.render();
            }, 100);
        };
        Scene.prototype.beforeStart = function () {
            var _this = this;
            this._canvas.MouseDownEvent = function (event) {
                var clickPos = new feint.Position(event.offsetX, event.offsetY);
                _this._gameobjects.forEach(function (gameobject) {
                    if (feint.isInArea(clickPos, gameobject.Bounding)) {
                        gameobject.mouseDown();
                    }
                });
            };
            this._canvas.openListener();
        };
        Scene.prototype.preview = function () {
            this._render.render();
        };
        return Scene;
    }());
    feint.Scene = Scene;
})(feint || (feint = {}));
