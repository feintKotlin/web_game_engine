"use strict";
var feint;
(function (feint) {
    function isInArea(pos, rect) {
        return pos.X >= rect.X && pos.X <= (rect.X + rect.Width) && pos.Y >= rect.Y && pos.Y <= (rect.Y + rect.Height);
    }
    feint.isInArea = isInArea;
    var Color;
    (function (Color) {
        function rgb(r, g, b) {
            return "rgb(" + r + "," + g + "," + b + ")";
        }
        Color.rgb = rgb;
    })(Color = feint.Color || (feint.Color = {}));
})(feint || (feint = {}));
