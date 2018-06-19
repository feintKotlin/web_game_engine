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
    var Transform = /** @class */ (function () {
        function Transform() {
        }
        return Transform;
    }());
    feint.Transform = Transform;
    var Position = /** @class */ (function (_super) {
        __extends(Position, _super);
        function Position(x, y) {
            var _this = _super.call(this) || this;
            _this._x = 0;
            _this._y = 0;
            _this._x = x;
            _this._y = y;
            return _this;
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
        Position.prototype.equals = function (pos) {
            return this._x == pos.X && this._y == pos.Y;
        };
        Position.prototype.clone = function () {
            return new Position(this._x, this._y);
        };
        return Position;
    }(feint.Object));
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
