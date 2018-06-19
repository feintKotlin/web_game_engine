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
    var GameObject = /** @class */ (function (_super) {
        __extends(GameObject, _super);
        function GameObject(name, bounding) {
            var _this = _super.call(this) || this;
            // layer的值越大，则物体越靠前。游戏物体的Layer的最小值为1
            _this._layer = 1;
            _this._keyDownEvent = function () { };
            _this._keyUpEvent = function () { };
            _this._keyDownEventMap = [];
            _this._keyUpEventMap = [];
            _this._mouseDownEvent = function (pos) { };
            _this._position = new feint.Position(bounding.X, bounding.Y);
            _this._size = new feint.Size(bounding.Width, bounding.Height);
            _this._bounding = bounding;
            _this.Name = name;
            return _this;
        }
        Object.defineProperty(GameObject.prototype, "Position", {
            get: function () {
                return this._position;
            },
            set: function (position) {
                this._position = position;
                this._bounding.X = position.X;
                this._bounding.Y = position.Y;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObject.prototype, "Bounding", {
            get: function () {
                return this._bounding;
            },
            enumerable: true,
            configurable: true
        });
        GameObject.prototype.onKeyDown = function (keyCode, event) {
            this._keyDownEventMap.push({ "keyCode": keyCode, "event": event });
        };
        GameObject.prototype.onKeyUp = function (keyCode, event) {
            this._keyUpEventMap.push({ "keyCode": keyCode, "event": event });
        };
        GameObject.prototype.onMouseDown = function (event) {
            this._mouseDownEvent = event;
        };
        GameObject.prototype.mouseDown = function (position) {
            this._mouseDownEvent(position);
        };
        GameObject.prototype.getKeyDownEvent = function (keyCode) {
            var event = function () { };
            this._keyDownEventMap.forEach(function (obj) {
                if (obj.keyCode == keyCode) {
                    event = obj.event;
                }
            });
            return event;
        };
        GameObject.prototype.getKeyUpEvent = function (keyCode) {
            var event = function () { };
            this._keyUpEventMap.forEach(function (obj) {
                if (obj.keyCode == keyCode) {
                    event = obj.event;
                }
            });
            return event;
        };
        return GameObject;
    }(feint.Renderable));
    feint.GameObject = GameObject;
    var Sprite = /** @class */ (function (_super) {
        __extends(Sprite, _super);
        function Sprite(img, name, bounding) {
            var _this = _super.call(this, name, bounding) || this;
            _this._img = img;
            return _this;
        }
        Sprite.prototype.draw = function (canvas) {
            canvas.drawImageWithCanvas(feint.resourceManager.find(this._img).Canvas.Canvas, this.Bounding, this);
        };
        return Sprite;
    }(GameObject));
    feint.Sprite = Sprite;
    var BaseShape = /** @class */ (function (_super) {
        __extends(BaseShape, _super);
        function BaseShape() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._fillColor = "#ccc";
            return _this;
        }
        Object.defineProperty(BaseShape.prototype, "FillColor", {
            get: function () {
                return this._fillColor;
            },
            set: function (color) {
                this._fillColor = color;
            },
            enumerable: true,
            configurable: true
        });
        BaseShape.prototype.draw = function (canvas) { };
        return BaseShape;
    }(GameObject));
    feint.BaseShape = BaseShape;
    var Rectangle = /** @class */ (function (_super) {
        __extends(Rectangle, _super);
        function Rectangle() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Rectangle.prototype.draw = function (canvas) {
            canvas.FillStyle = this.FillColor;
            canvas.fillRect(this.Bounding);
        };
        return Rectangle;
    }(BaseShape));
    feint.Rectangle = Rectangle;
})(feint || (feint = {}));
