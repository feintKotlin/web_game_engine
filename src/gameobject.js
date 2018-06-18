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
    var GameObject = /** @class */ (function () {
        function GameObject(name, bounding) {
            this._keyDownEvent = function () { };
            this._keyUpEvent = function () { };
            this._keyDownEventMap = [];
            this._keyUpEventMap = [];
            this._mouseDownEvent = function () { };
            this._position = new feint.Position(bounding.X, bounding.Y);
            this._size = new feint.Size(bounding.Width, bounding.Height);
            this._bounding = bounding;
            this._name = name;
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
        Object.defineProperty(GameObject.prototype, "Name", {
            get: function () {
                return this._name;
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
        GameObject.prototype.mouseDown = function () {
            this._mouseDownEvent(this);
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
    }());
    feint.GameObject = GameObject;
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
