const Engineer = require('../lib/Engineer');
 
describe('Engineer', () => {
  it('should return a string for the getName method', () => {
    const engineerName = 'Name';
    const test1 = new Engineer(engineerName);

    expect(test1.getName(engineerName)).toBe(engineerName);
    expect(typeof test1.getName()).toBe('string');
  });

  it('should return a string for the getId method', () => {
    const engineerName = 'Name';
    const engineerId = 'ID';
    const test2 = new Engineer(engineerName, engineerId);

    expect(test2.getId(engineerId)).toBe(engineerId);
    expect(typeof test2.getId()).toBe('string');
  });

  it('should return a string for the getEmail method', () => {
    const engineerName = 'Name';
    const engineerId = 'ID';
    const engineerEmail = 'Email';
    const test3 = new Engineer(engineerName, engineerId, engineerEmail);
    
    expect(test3.getEmail(engineerEmail)).toBe(engineerEmail);
    expect(typeof test3.getEmail()).toBe('string');
  });

  it('should return a string for the getGithub method', () => {
    const engineerName = 'Name';
    const engineerId = 'ID';
    const engineerEmail = 'Email';
    const engineerGithub = 'GitHubUser';
    const test4 = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);

    expect(test4.getGithub(engineerGithub)).toBe(engineerGithub);
    expect(typeof test4.getGithub()).toBe('string');

  });

  it('should return a string for the getRole method', () => {
    const engineerRole = 'Engineer';
    const test5 = new Engineer(engineerRole);

    expect(test5.getRole(engineerRole)).toBe(engineerRole);
    expect(typeof test5.getRole()).toBe('string');
  });
});