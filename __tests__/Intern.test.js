const Intern = require('../lib/Intern');
 
describe('Intern', () => {
  it('should return a string for the getName method', () => {
    const internName = 'Name';
    const test1 = new Intern(internName);

    expect(test1.getName(internName)).toBe(internName);
    expect(typeof test1.getName()).toBe('string');
  });

  it('should return a string for the getId method', () => {
    const internName = 'Name';
    const internId = 'ID';
    const test2 = new Intern(internName, internId);

    expect(test2.getId(internId)).toBe(internId);
    expect(typeof test2.getId()).toBe('string');
  });

  it('should return a string for the getEmail method', () => {
    const internName = 'Name';
    const internId = 'ID';
    const internEmail = 'Email';
    const test3 = new Intern(internName, internId, internEmail);
    
    expect(test3.getEmail(internEmail)).toBe(internEmail);
    expect(typeof test3.getEmail()).toBe('string');
  });

  it('should return a string for the getSchool method', () => {
    const internName = 'Name';
    const internId = 'ID';
    const internEmail = 'Email';
    const internSchool = 'School';
    const test4 = new Intern(internName, internId, internEmail, internSchool);
    
    expect(test4.getSchool(internSchool)).toBe(internSchool);
    expect(typeof test4.getSchool()).toBe('string');
  })

  it('should return a string for the getRole method', () => {
    const internRole = 'Intern';
    const test5 = new Intern(internRole);

    expect(test5.getRole(internRole)).toBe(internRole);
    expect(typeof test5.getRole()).toBe('string');
  });
});