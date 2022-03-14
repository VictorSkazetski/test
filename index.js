console.log("1");
var A = /** @class */ (function () {
    function A(_x) {
        this.x = _x;
    }
    A.prototype.getProp = function () {
        return this.x;
    };
    return A;
}());
var aa = new A(5);
console.log(aa.getProp());
