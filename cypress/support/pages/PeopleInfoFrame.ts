export class PeopleInfoFrame {

  private getGenderElement() {
    return cy.contains("Gender").closest('.row').find("div:nth-child(2)");
  }

  private getBirthDateElement() {
    return cy.contains("Birth year").closest('.row').find("div:nth-child(2)");
  }

  verifyGender(gender: string) {
    cy.log(`✅ Verifying gender is **${gender}**`);
    this.getGenderElement()
      .should("contain.text", `${gender}`);
  }

  verifyBirthDate(year: string) {
    cy.log(`✅ Verifying birthdate is **${year}**`);
    this.getBirthDateElement()
      .should("contain.text", `${year}`);
  }

}
