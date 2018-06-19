"use strict";
var feint;
(function (feint) {
    var c = document.getElementById("world");
    var scene = new feint.Scene(new feint.Canvas(c));
    scene.Name = "bg";
    feint.resourceManager.save(new feint.ImageResource("bg", "../../img/bg.jpg", scene.Size));
    function levelScene(level, scene) {
        var padding = 200;
        scene.clearGameObjects();
        var cols = Math.pow(2, Math.ceil(level / 5));
        var line = scene.Size.Width > scene.Size.Height ? scene.Size.Height : scene.Size.Width;
        var rectWidth = (line - padding) / cols;
        var delta = (18 - 3 * ((level - 1) % 5));
        var r = Math.random() * (255 - delta);
        var g = Math.random() * (255 - delta);
        var b = Math.random() * (255 - delta);
        var r_del = r + delta;
        var g_del = g + delta;
        var b_del = b + delta;
        var answer = Math.floor(Math.random() * (cols * cols));
        for (var i = 0; i < cols; ++i) {
            for (var j = 0; j < cols; ++j) {
                var rect = new feint.Rectangle("rect_" + String(i * cols + j), new feint.Rect(padding / 2 + j * rectWidth + (j - 1) * 5, padding / 2 + i * rectWidth + (i - 1) * 5, rectWidth, rectWidth));
                if (i * cols + j == answer) {
                    rect.FillColor = feint.Color.rgba(r_del, g_del, b_del, 0.98);
                }
                else
                    rect.FillColor = feint.Color.rgba(r, g, b, 0.98);
                scene.addGameObject(rect);
            }
        }
        return answer;
    }
    var answer = 0;
    var level = 1;
    answer = levelScene(1, scene);
    // 游戏的运行逻辑
    scene.onUpdate(function () {
        scene.GameObjects.forEach(function (gameObject) {
            var rect = gameObject;
            rect.onMouseDown(function () {
                if (rect.Name == "rect_" + answer) {
                    level++;
                    answer = levelScene(level, scene);
                }
                else {
                    alert("Game Failed");
                    level = 1;
                    answer = levelScene(level, scene);
                }
            });
        });
    });
    scene.run();
    //scene.preview()
})(feint || (feint = {}));
