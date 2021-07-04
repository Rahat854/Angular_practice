"use strict";
exports.__esModule = true;
exports.likeComponent = void 0;
var likeComponent = /** @class */ (function () {
    function likeComponent(_likesCount, _isSelected) {
        this._likesCount = _likesCount;
        this._isSelected = _isSelected;
    }
    likeComponent.prototype.onClick = function () {
        this._likesCount += (this._isSelected) ? -1 : 1;
        this._isSelected = !this._isSelected;
    };
    Object.defineProperty(likeComponent.prototype, "likesCount", {
        get: function () {
            return this._likesCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(likeComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: false,
        configurable: true
    });
    return likeComponent;
}());
exports.likeComponent = likeComponent;
