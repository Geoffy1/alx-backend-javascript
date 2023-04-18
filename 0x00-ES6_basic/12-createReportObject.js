export default function createReportObject(employeesList) {
  const allEmployees = {};

  for (const department in employeesList) {
    if (object.hasOwnProperty.call(employeesList, departmentName)) {
	    allEmployees[department] = [...employeesList[department]];
    }
  }

  const resObject = {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };

  return resObject;
}
