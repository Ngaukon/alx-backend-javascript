/**
 * Represents a Holberton Course with a name, length, and enrolled students.
 */
export default class HolbertonCourse {
  /**
   * Creates a new instance of {@link HolbertonCourse}.
   *
   * @param {String} name - The name of the course.
   * @param {Number} length - The duration of the course in months.
   * @param {String[]} students - An array containing the names of students enrolled in the course.
   */
  constructor(name, length, students) {
    this.name = name; // Initialize the course name
    this.length = length; // Initialize the course length
    this.students = students; // Initialize the list of students
  }

  /**
   * Gets the name of this course.
   * @returns {String} The name of the course.
   */
  get name() {
    return this._name; // Return the private name property
  }

  /**
   * Sets the name of this course.
   * @param {String} value - The new name to set for the course.
   * @throws {TypeError} Throws an error if the provided value is not a string.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string'); // Validate that the value is a string
    }
    this._name = value; // Set the private name property
  }

  /**
   * Gets the length of this course (in months).
   * @returns {Number} The length of the course.
   */
  get length() {
    return this._length; // Return the private length property
  }

  /**
   * Sets the length of this course (in months).
   * @param {Number} value - The new length to set for the course.
   * @throws {TypeError} Throws an error if the provided value is not a number.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number'); // Validate that the value is a number
    }
    this._length = value; // Set the private length property
  }

  /**
   * Gets the names of students in this course.
   * @returns {String[]} An array of student names.
   */
  get students() {
    return this._students; // Return the private students property
  }

  /**
   * Sets the names of students in this course.
   * @param {String[]} value - An array of student names to set.
   * @throws {TypeError} Throws an error if the provided value is not an array of strings.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings'); // Validate that the value is an array
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings'); // Validate that all elements are strings
    }
    this._students = value; // Set the private students property
  }
}
