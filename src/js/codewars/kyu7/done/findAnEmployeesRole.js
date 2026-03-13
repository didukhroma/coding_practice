let employees = [{ firstName: 'Dipper', lastName: 'Pines', role: 'Boss' }];

function findEmployeesRole(name) {
  const [firstName, lastName] = name.split(' ');
  // employees array preloaded
  const employee = employees.find(
    el => el.firstName === firstName && el.lastName === lastName
  );
  return employee?.role || 'Does not work here!';
}

console.log('Dipper Pines');
