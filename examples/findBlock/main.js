"use strict";
var feint;
(function (feint) {
    var c = document.getElementById("world");
    c.width = document.body.clientWidth;
    c.height = document.body.clientHeight;
    var scene = new feint.Scene(new feint.Canvas(c));
    scene.Size = new feint.Size(c.width, c.width);
    function levelScene(level, scene) {
        scene.clearGameObjects();
        var cols = Math.pow(2, Math.ceil(level / 5));
        var rectWidth = scene.Size.Width / cols;
        var delta = (15 - 3 * ((level - 1) % 5));
        var r = Math.random() * (255 - delta);
        var g = Math.random() * (255 - delta);
        var b = Math.random() * (255 - delta);
        var r_del = r + delta;
        var g_del = g + delta;
        var b_del = b + delta;
        var answer = Math.floor(Math.random() * (cols * cols));
        for (var i = 0; i < cols; ++i) {
            for (var j = 0; j < cols; ++j) {
                var rect = new feint.Rectangle("rect_" + String(i * cols + j), new feint.Rect(j * rectWidth, i * rectWidth, rectWidth, rectWidth));
                if (i * cols + j == answer) {
                    rect.FillColor = feint.Color.rgb(r_del, g_del, b_del);
                }
                else
                    rect.FillColor = feint.Color.rgb(r, g, b);
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
