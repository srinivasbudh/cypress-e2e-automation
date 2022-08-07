
const parameters = [
  {"name": "Biggs Darklighter", "gender": "male", "birthdate": "24BBY"},
  {"name": "Jabba Desilijic Tiure", "gender": "hermaphrodite", "birthdate": "600BBY"},
  {"name": "Beru Whitesun lars", "gender": "female", "birthdate": "47BBY"},
];

describe('Star wars api testing', () => {
  parameters.forEach((parameter) => {
    it(`fetches Todo items - GET ${parameter.name}`, () => {
      cy.request(Cypress.env('apiUrl') + '/people/?search=' + parameter.name).as('peoplesResponse');
      cy.get('@peoplesResponse').then(peoples => {
        expect(peoples.status).to.eq(200);
        expect(peoples.body.results[0].gender).to.be.a('string').to.eq(parameter.gender);
      });
    });
  });
});
