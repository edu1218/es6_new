let util = require('util')
class Student {

    constructor(id, firstName, lastName) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName

        //這裡呼叫靜態方法，每次建構出一個學生實體就執行一次(假如都沒建構實例那就沒有那個屬性了)
        Student.addStudent()
    }

    //ES6是藉由靜態方法設定靜態屬性
    static addStudent() { //沒加static的話Student.addStudent()會報錯

        if (this._numOfStudents === undefined) {
            this._numOfStudents = 1
        } else {
            this._numOfStudents++
        }
    }

    //用getter與靜態方法取出目前的學生數量
    static get getStudentCount() {
        return this._numOfStudents
    }

}
//console.log(Student.isTeacher);



const aStudent = new Student(11, 'Eddy', 'Chang')
console.log(Student.getStudentCount)

const bStudent = new Student(22, 'Ed', 'Lu')
console.log(Student.getStudentCount)