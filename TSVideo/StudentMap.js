class StudentMark {
    constructor(rollnum, name, percen) {
        this.rollnum = rollnum;
        this.name = name;
        this.percen = percen;
    }
}
let stu = new Map();
stu.set(new StudentMark(11, "Rohan", 89.90), "NullStop");
stu.set(new StudentMark(12, "Prashant", 56.89), "Swargate");
stu.set(new StudentMark(13, "Pradnya", 78.76), "Camp");
stu.set(new StudentMark(14, "Geeta", 67.89), "Camp");
stu.set(new StudentMark(15, "Kalpana", 78.90), "Shivajinagar");
stu.set(new StudentMark(16, "Rohit", 45.45), "Kothurd");
for (let entry of stu.entries()) {
    console.log(entry[0], entry[1]);
}
