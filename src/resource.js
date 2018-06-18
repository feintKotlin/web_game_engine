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
    var Resource = /** @class */ (function (_super) {
        __extends(Resource, _super);
        function Resource() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Resource;
    }(feint.Renderable));
    feint.Resource = Resource;
    var ResourceManager = /** @class */ (function () {
        function ResourceManager() {
            this._resourceMap = new feint.Map();
        }
        ResourceManager.prototype.save = function (resource) {
            this._resourceMap.put(resource.Name, resource);
        };
        ResourceManager.prototype.find = function (name) {
            return this._resourceMap.get(name);
        };
        return ResourceManager;
    }());
    feint.ResourceManager = ResourceManager;
    var ImageResource = /** @class */ (function (_super) {
        __extends(ImageResource, _super);
        function ImageResource(name, src, size) {
            var _this = _super.call(this) || this;
            _this.Name = name;
            var canvasEle = document.createElement("canvas");
            _this._canvas = new feint.Canvas(canvasEle);
            _this._canvas.resize(size);
            _this._canvas.drawImage(src, size, _this);
            return _this;
        }
        Object.defineProperty(ImageResource.prototype, "Canvas", {
            get: function () {
                return this._canvas;
            },
            enumerable: true,
            configurable: true
        });
        return ImageResource;
    }(Resource));
    feint.ImageResource = ImageResource;
})(feint || (feint = {}));
