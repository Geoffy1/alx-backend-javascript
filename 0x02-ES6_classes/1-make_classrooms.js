import ClassRoom from './0-classroom';

/**
 * imports classroom from classroom.js
 * returns array of elements 19,20,34
 */

export default function initializeRooms() {

  const myRooms = [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34)
  ];

  // Return the array of ClassRoom objects
  return myRooms;
}

