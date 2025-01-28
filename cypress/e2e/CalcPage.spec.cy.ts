/// <reference types="Cypress" />

describe("<CalcPage>", () => {
  beforeEach(() => {
    cy.visitApp("/calc");
  });

  it("should display Calculators page with all elements", () => {
    cy.get("h1").should("contain", "Calculators");
  });

  it("should display Distance calculator", () => {
    cy.get("h4").should("contain", "Distance Calculator");
    cy.get("p").should(
      "contain",
      "Calculate distance you will cover running at a set pace in a given time."
    );

    cy.get("[data-test='distance-calc-form']").within(() => {
      cy.get(".MuiFormControl-root").should("contain", "Planned running pace:");
      cy.get("input[name='paceMinutes']").should("have.value", "0");
      cy.get("input[name='paceSeconds']").should("have.value", "0");
      cy.get(".MuiFormControl-root").should("contain", "Planned running time:");
      cy.get("input[name='timeHours']").should("have.value", "0");
      cy.get("input[name='timeMinutes']").should("have.value", "0");
      cy.get("input[name='timeSeconds']").should("have.value", "0");
      cy.get("button").should("contain", "Calculate");
      cy.get(".MuiTypography-h5").should("contain", "Distance you will cover:");
    });
  });

  it('should calculate distance based on "Planned running pace" and "Planned running time"', () => {
    cy.get("[data-test='distance-calc-form']").within(() => {
      cy.get(".MuiTypography-h5").should("contain", "0 km 0 m");

      cy.get("input[name='paceMinutes']").clear().type("5");
      cy.get("input[name='paceSeconds']").clear().type("30");
      cy.get("input[name='timeHours']").clear().type("1");
      cy.get("button").contains("Calculate").click();

      cy.get(".MuiTypography-h5").should("contain", "10 km 909 m");
    });
  });
});
