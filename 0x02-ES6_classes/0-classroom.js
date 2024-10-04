/**
 * Represents a classroom, which manages the size of the class.
 */
export default class ClassRoom {
  /**
   * Creates a new instance of {@link ClassRoom}.
   * @param {Number} maxStudentsSize - The maximum number of
   * students allowed in the classroom.
   */
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize; // Set the maximum number of students for this classroom
  }
}

