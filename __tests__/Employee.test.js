const Employee = require('../lib/Employee');
 
describe('Employee', () => {
  it('should return a string for the getName method', () => {
    const employeeName = 'Name';
    const test1 = new Employee(employeeName);

    expect(test1.getName(employeeName)).toBe(employeeName);
    expect(typeof test1.getName()).toBe('string');
  });

  it('should return a string for the getId method', () => {
    const employeeName = 'Name';
    const employeeId = 'ID';
    const test2 = new Employee(employeeName, employeeId);

    expect(test2.getId(employeeId)).toBe(employeeId);
    expect(typeof test2.getId()).toBe('string');
  });

  it('should return a string for the getEmail method', () => {
    const employeeName = 'Name';
    const employeeId = 'ID';
    const employeeEmail = 'Email';
    const test3 = new Employee(employeeName, employeeId, employeeEmail);
    
    expect(test3.getEmail(employeeEmail)).toBe(employeeEmail);
    expect(typeof test3.getEmail()).toBe('string');
  });

  it('should return a string for the getRole method', () => {
    const employeeRole = 'Employee';
    const test4 = new Employee(employeeRole);

    expect(test4.getRole(employeeRole)).toBe(employeeRole);
    expect(typeof test4.getRole()).toBe('string');
  });
});