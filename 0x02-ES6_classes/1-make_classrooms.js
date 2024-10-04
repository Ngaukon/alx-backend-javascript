import ClassRoom from './0-classroom';

/**
 * Initializes and creates an array of {@link ClassRoom} instances with specified sizes.
 * @returns {ClassRoom[]} An array containing instances of {@link ClassRoom} initialized 
 * with sizes 19, 20, and 34.
 */
export default function initializeRooms() {
  // Map through the specified sizes and create a new ClassRoom instance for each size
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
