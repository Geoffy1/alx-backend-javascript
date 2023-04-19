export default function iterateThroughObject(reportWithIterator) {
  let myEmployees = '';
  for (const employee of reportWithIterator) {
    myEmployees += `${employee} | `;
  }
  return myEmployees.slice(0, -3); // remove trailing ' | '
}
