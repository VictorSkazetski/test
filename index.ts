console.log("1");

class A {
    x: number;

    constructor(_x: number) {
        this.x = _x;
    }

    getProp() {
        return this.x;
    }
}

let aa: A = new A(5);
console.log(aa.getProp());