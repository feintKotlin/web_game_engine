"use strict";
var feint;
(function (feint) {
    var Canvas = /** @class */ (function () {
        function Canvas(canvas) {
            this._mouseDownEvent = function (event) { };
            this._canvas = canvas;
            this._context = canvas.getContext("2d");
        }
        Object.defineProperty(Canvas.prototype, "Width", {
            get: function () {
                return this._canvas.width;
            },
            set: function (width) {
                this._canvas.width = width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Canvas.prototype, "Height", {
            get: function () {
                return this._canvas.height;
            },
            set: function (height) {
                this._canvas.height = height;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Canvas.prototype, "FillStyle", {
            set: function (style) {
                this._context.fillStyle = style;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Canvas.prototype, "MouseDownEvent", {
            set: function (event) {
                this._mouseDownEvent = event;
            },
            enumerable: true,
            configurable: true
        });
        Canvas.prototype.fillRect = function (rect) {
            this._context.fillRect(rect.X, rect.Y, rect.Width, rect.Height);
        };
        Canvas.prototype.strokeRect = function (rect) {
            this._context.strokeRect(rect.X, rect.Y, rect.Width, rect.Height);
        };
        Object.defineProperty(Canvas.prototype, "StrokeStyle", {
            set: function (style) {
                this._context.strokeStyle = style;
            },
            enumerable: true,
            configurable: true
        });
        Canvas.prototype.clear = function () {
            this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
        };
        Canvas.prototype.openListener = function () {
            var _this = this;
            this._canvas.onmousedown = function (event) {
                _this._mouseDownEvent(event);
            };
        };
        return Canvas;
    }());
    feint.Canvas = Canvas;
})(feint || (feint = {}));
