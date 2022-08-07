import {SearchPage} from "../../../support/pages/SearchPage";
import {Given, Then, When} from "cypress-cucumber-preprocessor/steps";


const searchPage: SearchPage = new SearchPage();

Given("A user is able to access the application", function(){
  cy.visit(Cypress.env('baseUrl'));
});

When("user search for the planet {string}", function (planetName: string) {
  searchPage.searchForThePlanet(planetName);
});

Then("user should see the planet with a population of {int}", function (population: number) {
  searchPage.getPlanetInfoLayout().verifyPlanetPopulation(population);
});

Then("user should see the planet with a climate of {string}", function (climate: string) {
  searchPage.getPlanetInfoLayout().verifyPlanetClimate(climate);
});

Then("user should not see any results", function () {
  searchPage.verifyNotFound();
});
