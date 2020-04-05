"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(c) {
        this.color = c;
    }
    return Car;
}());
var Tigor = /** @class */ (function (_super) {
    __extends(Tigor, _super);
    function Tigor(color, price) {
        var _this = _super.call(this, color) || this;
        _this.price = price;
        return _this;
    }
    Tigor.prototype.display = function () {
        console.log("Color of Tigor Car" + this.color);
        console.log("Color of Tigor Car" + this.price);
    };
    return Tigor;
}(Car));
var obj = new Tigor("Black", 90000);
obj.display();
