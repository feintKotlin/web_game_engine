"use strict";
var feint;
(function (feint) {
    var Transform = /** @class */ (function () {
        function Transform() {
        }
        return Transform;
    }());
    feint.Transform = Transform;
    var Position = /** @class */ (function () {
        function Position(x, y) {
            this._x = 0;
            this._y = 0;
            this._x = x;
            this._y = y;
        }
        Object.defineProperty(Position.prototype, "X", {
            get: function () {
                return this._x;
            },
            set: function (x) {
                this._x = x;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Position.prototype, "Y", {
            get: function () {
                return this._y;
            },
            set: function (y) {
                this._y = y;
            },
            enumerable: true,
            configurable: true
        });
        return Position;
    }());
    feint.Position = Position;
    var Size = /** @class */ (function () {
        function Size(width, height) {
            this._width = width;
            this._height = height;
        }
        Object.defineProperty(Size.prototype, "Width", {
            get: function () {
                return this._width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Size.prototype, "Height", {
            get: function () {
                return this._height;
            },
            enumerable: true,
            configurable: true
        });
        return Size;
    }());
    feint.Size = Size;
    var Rect = /** @class */ (function () {
        function Rect(x, y, width, height) {
            this._x = x;
            this._y = y;
            this._width = width;
            this._height = height;
        }
        Object.defineProperty(Rect.prototype, "X", {
            get: function () {
                return this._x;
            },
            set: function (x) {
                this._x = x;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rect.prototype, "Y", {
            get: function () {
                return this._y;
            },
            set: function (y) {
                this._y = y;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rect.prototype, "Width", {
            get: function () {
                return this._width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rect.prototype, "Height", {
            get: function () {
                return this._height;
            },
            enumerable: true,
            configurable: true
        });
        return Rect;
    }());
    feint.Rect = Rect;
})(feint || (feint = {}));
