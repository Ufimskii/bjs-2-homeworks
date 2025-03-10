"use strict";
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
};

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    let marks = [];
    this.marks = marks;
    this.marks.push(mark);
  } else {
    this.marks.push(mark);
  };
};

Student.prototype.addMarks = function (...rest) {
  if (this.marks === undefined) {
    let marks = [];
    this.marks = marks;
    this.marks.push(...rest);
  } else {
    this.marks.push(...rest);
  };
};

Student.prototype.getAverage = function () {
  const average = this.marks.reduce((acc, item, idx, arr) => {
    acc += item;
    if (idx === arr.length - 1) {
      return acc / arr.length;
    } else return acc;
  })

  return average;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};
