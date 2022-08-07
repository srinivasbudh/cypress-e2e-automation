export class PlanetInfoFrame {

  private getPlanetPopulationElement() {
    return cy.get('#population');
  }

  private getPlanetClimateElement() {
    return cy.get('#climate');
  }

  private getPlanetGravityElement() {
    return cy.get('#gravity');
  }

  verifyPlanetPopulation(population: number) {
    cy.log(`✅ Verifying planet population is **${population}**`);
    this.getPlanetPopulationElement()
      .should('contain.text', `${population}`);
  }

  verifyPlanetClimate(climate: string) {
    cy.log(`✅ Verifying planet climate is **${climate}**`);
    this.getPlanetClimateElement()
      .should('contain.text', `${climate}`);
  }

}
