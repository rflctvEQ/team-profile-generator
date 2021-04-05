const Manager = require('../lib/Manager');
 
describe('Manager', () => {
  it('should return a string for the getName method', () => {
    const managerName = 'Name';
    const test1 = new Manager(managerName);

    expect(test1.getName(managerName)).toBe(managerName);
    expect(typeof test1.getName()).toBe('string');
  });

  it('should return a string for the getId method', () => {
    const managerName = 'Name';
    const managerId = 'ID';
    const test2 = new Manager(managerName, managerId);

    expect(test2.getId(managerId)).toBe(managerId);
    expect(typeof test2.getId()).toBe('string');
  });

  it('should return a string for the getEmail method', () => {
    const managerName = 'Name';
    const managerId = 'ID';
    const managerEmail = 'Email';
    const test3 = new Manager(managerName, managerId, managerEmail);
    
    expect(test3.getEmail(managerEmail)).toBe(managerEmail);
    expect(typeof test3.getEmail()).toBe('string');
  });

  it('should return a string for the getOfficeNumber method', () => {
    const managerName = 'Name';
    const managerId = 'ID';
    const managerEmail = 'Email';
    const managerOffice = 'Office Number'
    const test4 = new Manager(managerName, managerId, managerEmail, managerOffice);
    
    expect(test4.getOfficeNumber(managerOffice)).toBe(managerOffice);
    expect(typeof test4.getOfficeNumber()).toBe('string');
  })

  it('should return a string for the getRole method', () => {
    const managerRole = 'Manager';
    const test5 = new Manager(managerRole);

    expect(test5.getRole(managerRole)).toBe(managerRole);
    expect(typeof test5.getRole()).toBe('string');
  });
});