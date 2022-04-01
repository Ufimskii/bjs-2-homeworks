function parseCount(inputOfUser) {
    let parsResult = Number.parseInt(inputOfUser, 10);
    if (Number.isNaN(parsResult)) throw new Error('Невалидное значение');
    return parsResult;
};

function validateCount(inputOfUser2) {
    try {
        return parseCount(inputOfUser2)
    }
    catch (err) {
        return err;
    }
};

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (((a + b) < c) || ((a + c) < b) || ((b + c) < a))
            throw new Error('Треугольник с такими сторонами не существует');
    }

    getPerimeter() { return this.a + this.b + this.c }
    getArea() {
        let p = this.getPerimeter() / 2;
        let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number((s).toFixed(3));
    }

};

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    }
    catch (err) {
        return {
            getArea() {
                return "Ошибка! Треугольник не существует";
            },
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
};
