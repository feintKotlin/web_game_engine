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
            return "rgb(" + Math.floor(r) + "," + Math.floor(g) + "," + Math.floor(b) + ")";
        }
        Color.rgb = rgb;
        function rgba(r, g, b, a) {
            return "rgba(" + Math.floor(r) + "," + Math.floor(g) + "," + Math.floor(b) + "," + a + ")";
        }
        Color.rgba = rgba;
        function isColor(color) {
            return (color.indexOf("rgb") == 0 || (color.indexOf("#") == 0));
        }
        Color.isColor = isColor;
    })(Color = feint.Color || (feint.Color = {}));
    var Map = /** @class */ (function () {
        function Map() {
            this._capacity = 16;
            this._pairList = [];
            for (var i = 0; i < this._capacity; ++i) {
                this._pairList.push([]);
            }
        }
        Map.prototype.put = function (key, value) {
            this._pairList[this.hashcode(key)].push(value);
        };
        Map.prototype.get = function (key) {
            var hash = this.hashcode(key);
            var resutlList = this._pairList[hash];
            if (resutlList.length == 1)
                return resutlList[0];
            else if (resutlList.length > 1) {
                var resultIndex = 0;
                for (var i = 0; i < resutlList.length; ++i) {
                    if (resutlList[i].Name == key) {
                        resultIndex = i;
                        break;
                    }
                }
                return resutlList[resultIndex];
            }
            else {
                return null;
            }
        };
        Map.prototype.hashcode = function (key) {
            var hash = 0;
            for (var i = 0; i < key.length; ++i) {
                hash += Number(key.charAt(i)) << i;
            }
            return hash % this._capacity;
        };
        return Map;
    }());
    feint.Map = Map;
})(feint || (feint = {}));
