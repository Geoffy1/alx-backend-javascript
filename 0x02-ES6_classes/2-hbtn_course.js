export default class HolbertonCourse {
  /**
   * Implement a class named HolbertonCourse
   * @parameter {String} name - class name.
   * @parameter {Number} length - class lduration.
   * @parameter {String} students - no of students enrolled.
   */
  
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    if (typeof length !== 'number') throw new TypeError('Length must be a number');
    if (!Array.isArray(student) throw new TypeError('Students must be an array of strings');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') throw new TypeError('Name must be a string');
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (!Number.isInteger(newLength) throw new TypeError('Length must be a number');
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudent) {
    if (!Array.isArray(newStudent) || !newStudent.every((student) => typeof student === 'string')) {
    throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudent;
  }
}
