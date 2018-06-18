"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var feint;
(function (feint) {
    var Scene = /** @class */ (function (_super) {
        __extends(Scene, _super);
        function Scene(canvas) {
            var _this = _super.call(this) || this;
            _this._update = function () { };
            _this._resize = function (size) { };
            _this._gameobjects = [];
            _this._gameObjectMap = new feint.Map();
            _this._render = new feint.Render(_this);
            _this._backGround = "";
            _this._resourceManager = new feint.ResourceManager();
            _this._width = document.documentElement.clientWidth;
            _this._height = document.documentElement.clientHeight;
            _this._canvas = canvas;
            _this._canvas.resize(_this.Size);
            return _this;
        }
        Object.defineProperty(Scene.prototype, "ResourceManager", {
            get: function () {
                return this._resourceManager;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "BackGround", {
            get: function () {
                return this._backGround;
            },
            set: function (background) {
                this._backGround = background;
            },
            enumerable: true,
            configurable: true
        });
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
        Scene.prototype.resize = function (size) {
            this._width = size.Width;
            this._height = size.Height;
            this._canvas.resize(size);
        };
        Scene.prototype.addGameObject = function (gameObject) {
            this._gameobjects.push(gameObject);
            this._gameObjectMap.put(gameObject.Name, gameObject);
        };
        Scene.prototype.removeGameObject = function (gameObject) {
            this._gameobjects.splice(this._gameobjects.indexOf(gameObject), 1);
        };
        Scene.prototype.clearGameObjects = function () {
            this._gameobjects = [];
            this._gameObjectMap = new feint.Map();
        };
        Scene.prototype.find = function (name) {
            if (this._gameObjectMap.get(name) != null)
                return this._gameObjectMap.get(name);
            else
                return null;
        };
        Scene.prototype.onUpdate = function (event) {
            this._update = event;
        };
        Scene.prototype.onResize = function (event) {
            this._resize = event;
        };
        Scene.prototype.run = function () {
            var _this = this;
            this.beforeStart();
            setInterval(function () {
                _this._resize(new feint.Size(document.documentElement.clientWidth, document.documentElement.clientHeight));
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
        Scene.prototype.loadResource = function () {
        };
        Scene.prototype.preview = function () {
            this._render.render();
        };
        return Scene;
    }(feint.Renderable));
    feint.Scene = Scene;
})(feint || (feint = {}));
