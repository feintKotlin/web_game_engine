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
    var Render = /** @class */ (function () {
        function Render(scene) {
            this._scene = scene;
        }
        Render.prototype.render = function () {
            this._scene.Canvas.clear();
            if (this._scene.State == RenderState.NoRender)
                this.renderScene();
            this.renderObjects();
            if (this._scene.State == RenderState.Rendered)
                this._scene.State = RenderState.NoRender;
        };
        Render.prototype.renderObjects = function () {
            var _this = this;
            var gameObjects = this._scene.GameObjects;
            gameObjects.forEach(function (gameObject) {
                _this.renderObject(gameObject);
            });
        };
        Render.prototype.renderObject = function (gameObject) {
            //console.log("update gameobject:["+gameObject.Name+"]")
            if (feint.DEBUG) {
                // 渲染边框线，在DEBUG模式下开启
                this._scene.Canvas.StrokeStyle = "#00ff00";
                this._scene.Canvas.strokeRect(gameObject.Bounding);
            }
            // 渲染游戏物件的实际图像
            gameObject.draw(this._scene.Canvas);
        };
        Render.prototype.renderScene = function () {
            this._scene.State = RenderState.Rendering;
            if (feint.Color.isColor(this._scene.BackGround)) {
                this._scene.Canvas.FillStyle = this._scene.BackGround;
                this._scene.Canvas.fillRect(new feint.Rect(0, 0, this._scene.Size.Width, this._scene.Size.Height));
                this._scene.State = RenderState.Rendered;
            }
            else {
                this._scene.Canvas.drawImageWithCanvas(feint.resourceManager.find(this._scene.BackGround).Canvas.Canvas, new feint.Rect(0, 0, this._scene.Size.Width, this._scene.Size.Height), this._scene);
            }
        };
        return Render;
    }());
    feint.Render = Render;
    var RenderState;
    (function (RenderState) {
        RenderState[RenderState["NoRender"] = 10] = "NoRender";
        RenderState[RenderState["Rendering"] = 20] = "Rendering";
        RenderState[RenderState["Rendered"] = 30] = "Rendered";
    })(RenderState = feint.RenderState || (feint.RenderState = {}));
    var Nameable = /** @class */ (function (_super) {
        __extends(Nameable, _super);
        function Nameable() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._name = "untitle";
            return _this;
        }
        Object.defineProperty(Nameable.prototype, "Name", {
            get: function () {
                return this._name;
            },
            set: function (name) {
                this._name = name;
            },
            enumerable: true,
            configurable: true
        });
        return Nameable;
    }(feint.Object));
    feint.Nameable = Nameable;
    var Renderable = /** @class */ (function (_super) {
        __extends(Renderable, _super);
        function Renderable() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._state = RenderState.NoRender;
            return _this;
        }
        Object.defineProperty(Renderable.prototype, "State", {
            get: function () {
                return this._state;
            },
            set: function (state) {
                this._state = state;
            },
            enumerable: true,
            configurable: true
        });
        return Renderable;
    }(Nameable));
    feint.Renderable = Renderable;
})(feint || (feint = {}));
