"use strict";
var feint;
(function (feint) {
    var c = document.getElementById("world");
    var scene = new feint.Scene(new feint.Canvas(c));
    scene.BackGround = "#568cee";
    feint.resourceManager.save(new feint.ImageResource("white", "../../img/white.png", new feint.Size(50, 50)));
    feint.resourceManager.save(new feint.ImageResource("black", "../../img/black.png", new feint.Size(50, 50)));
    feint.resourceManager.save(new feint.ImageResource("qipan", "../../img/qipan.png", new feint.Size(600, 600)));
    var startX = (scene.Size.Width - 600) / 2;
    var startY = (scene.Size.Height - 600) / 2;
    var qiPan = new feint.Sprite("qipan", "qipan", new feint.Rect(startX, startY, 600, 600));
    scene.addGameObject(qiPan);
    function toStandardPos(pos) {
        var x = pos.X;
        var y = pos.Y;
        x = qiPan.Bounding.X + Math.floor(x / 50 + 0.5) * 50 - 25;
        y = qiPan.Bounding.Y + Math.floor(y / 50 + 0.5) * 50 - 25;
        return new feint.Position(x, y);
    }
    var times = 0;
    qiPan.onMouseDown(function (pos) {
        var stdPos = toStandardPos(pos);
        var hasPieces = false;
        scene.GameObjects.forEach(function (piece) {
            if (piece.Position.equals(stdPos)) {
                hasPieces = true;
            }
        });
        if (hasPieces)
            return;
        if (times % 2 == 0) {
            scene.addGameObject(new feint.Sprite("black", "black" + times, new feint.Rect(stdPos.X, stdPos.Y, 50, 50)));
        }
        else {
            scene.addGameObject(new feint.Sprite("white", "white" + times, new feint.Rect(stdPos.X, stdPos.Y, 50, 50)));
        }
        times++;
    });
    scene.onUpdate(function () {
    });
    scene.run();
    //scene.preview()
})(feint || (feint = {}));
