"use strict";
var feint;
(function (feint) {
    var Canvas = /** @class */ (function () {
        function Canvas(canvas) {
            this._mouseDownEvent = function (event) { };
            this._canvas = canvas;
            this._context = canvas.getContext("2d");
        }
        Canvas.prototype.resize = function (size) {
            this._canvas.width = size.Width;
            this._canvas.height = size.Height;
        };
        Object.defineProperty(Canvas.prototype, "Canvas", {
            get: function () {
                return this._canvas;
            },
            enumerable: true,
            configurable: true
        });
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
        Canvas.prototype.drawImage = function (src, size, rederable) {
            var _this = this;
            var img = new Image(size.Width, size.Height);
            img.src = src;
            img.onload = function () {
                _this._context.drawImage(img, 0, 0, size.Width, size.Height);
                rederable.State = feint.RenderState.Rendered;
            };
        };
        Canvas.prototype.drawImageWithCanvas = function (canvas, rect, rederable) {
            this._context.drawImage(canvas, rect.X, rect.Y, rect.Width, rect.Height);
            rederable.State = feint.RenderState.Rendered;
        };
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
