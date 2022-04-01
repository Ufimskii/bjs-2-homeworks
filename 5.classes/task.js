class PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(condition) {
        if (condition < 0) this._state = 0;
        if (condition > 100) this._state = 100;
        if ((condition >= 0) && (condition <= 100)) this._state = condition;
    }

    get state() {
        return this._state;
    }
};

class Magazine extends PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
};

class Book extends PrintEditionItem {

    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
};

class NovelBook extends Book {

    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
};

class FantasticBook extends Book {

    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
};

class DetectiveBook extends Book {

    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
};

class Library {

    constructor(name) {
        this.name = name;
        let books = [];
        this.books = books;
    }

    addBook(book) {
        this.books.push(book);
    }

    findBookBy(type, value) {
        const findResult = this.books
            .find(book => book[type] === value)
        if (findResult === undefined) return null;
        return findResult;
    }

    giveBookByName(bookName) {

        const giveResult = this.books
            .find((book) => book.name === bookName);
        const indexResult = this.books.findIndex((book) => book.name === bookName);
        if (giveResult === undefined) return null;
        else this.books.splice(indexResult, 1);
        return giveResult;
    }
};

class Student {

    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    addMark(mark, subject) {
        if (mark <= 0 || mark > 5)
            return 'Ошибка, оценка должна быть числом от 1 до 5';
        if (this[subject] === undefined) {
            this[subject] = [];
            this[subject].push(mark);
        } else {
            this[subject].push(mark);
        }
    }

    getAverageBySubject(subject) {
        if (this[subject] === undefined)
            return 'Несуществующий предмет';
        const average = this[subject].reduce((acc, item, idx, arr) => {
            acc += item;
            if (idx === arr.length - 1) {
                return acc / arr.length;
            } else return acc;
        })

        return average;
    }

    getAverage() {
        let sumAverage = 0;
        let subjectsCount = 0;
        for (let prop in this) {
            if ((prop !== 'name') && (prop !== 'gender') && (prop !== 'age')) {
                sumAverage += this.getAverageBySubject(prop);
                subjectsCount += 1;
            }
        }
        return Number((sumAverage / subjectsCount).toFixed(2));

    }

    exclude(reason) {
        if (this.excluded !== undefined)
            return 'Исключен за попытку подделать оценки';
        this.excluded = reason;
        return 'reason'
    };

};

