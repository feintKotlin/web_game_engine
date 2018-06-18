"use strict";
var feint;
(function (feint) {
    var Render = /** @class */ (function () {
        function Render(scene) {
            this._scene = scene;
        }
        Render.prototype.render = function () {
            var _this = this;
            this._scene.Canvas.clear();
            this.renderScene();
            var gameObjects = this._scene.GameObjects;
            gameObjects.forEach(function (gameObject) {
                _this._scene.Canvas.FillStyle = "#ffffff";
                _this.renderObject(gameObject);
            });
        };
        Render.prototype.renderObject = function (gameObject) {
            //console.log("update gameobject:["+gameObject.Name+"]")
            // 渲染边框线，在DEBUG模式下开启
            this._scene.Canvas.StrokeStyle = "#00ff00";
            this._scene.Canvas.strokeRect(gameObject.Bounding);
            // 渲染游戏物件的实际图像
            gameObject.draw(this._scene.Canvas);
        };
        Render.prototype.renderScene = function () {
            this._scene.Canvas.FillStyle = "#000";
            this._scene.Canvas.fillRect(new feint.Rect(0, 0, this._scene.Size.Width, this._scene.Size.Height));
        };
        return Render;
    }());
    feint.Render = Render;
})(feint || (feint = {}));
