import {PlanetInfoFrame} from "./PlanetInfoFrame";
import {PeopleInfoFrame} from "./PeopleInfoFrame";

export class SearchPage {

  private getRadioElement(text: string) {
    return cy.get(`#${text}`);
  }

  private getSearchField() {
    return cy.get("#query");
  }

  private getSearchButton() {
    return cy.get("[type=submit]");
  }

  private getNotFoundText() {
    return cy.get("#notFound");
  }

  searchForThePlanet(planetName: string) {
    this.getRadioElement("planets").click();
    this.getSearchField().type(planetName);
    this.getSearchButton().click();
  }

  searchForThePeople(peopleName: string) {
    this.getRadioElement("people").click();
    this.getSearchField().clear().type(peopleName);
    this.getSearchButton().click();
  }

  getPlanetInfoLayout() {
    return new PlanetInfoFrame();
  }

  getPeopleInfoLayout() {
    return new PeopleInfoFrame();
  }

  verifyNotFound() {
    this.getNotFoundText().should('be.visible');
  }
}
