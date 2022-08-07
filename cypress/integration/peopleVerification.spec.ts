/// <reference types="cypress" />

import {SearchPage} from '../support/pages/SearchPage';

const searchPage: SearchPage = new SearchPage();

const parameters = [
  {'name': 'Luke Skywalker', 'gender': 'male', 'birthdate': '19BBY'},
  {'name': 'Dart Vader', 'gender': 'male', 'birthdate': '41.9BBY'},
  {'name': 'Leia Organa', 'gender': 'female', 'birthdate': '19BBY'},
];

describe('Validate possibility of searching for the Star Warspeople', () => {

  it('should be able to open star-wars app', () => {
    cy.visit(Cypress.env('baseUrl'));
  });

  parameters.forEach((parameter) => {
    it(`should be able to find ${parameter.name}`, () => {
      searchPage.searchForThePeople(parameter.name);
      searchPage.getPeopleInfoLayout().verifyGender(parameter.gender);
      searchPage.getPeopleInfoLayout().verifyBirthDate(parameter.birthdate);
    });
  });

  it(`should not be able to find any person with invalid name`, () => {
    searchPage.searchForThePeople('Bill Gates');
    searchPage.verifyNotFound();
  });

  it.skip(`should not be able to find any person with empty space`, () => {
    searchPage.searchForThePeople(' ');
    searchPage.verifyNotFound();
  });
});

