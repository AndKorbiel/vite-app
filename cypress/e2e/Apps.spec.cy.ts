/// <reference types="Cypress" />

describe("<App>", () => {
  beforeEach(() => {
    cy.visitApp();
  });

  it("should contain h1 with proper text", () => {
    cy.get("h1").should("contain", "Hello world");
  });

  it("should contain navbar with all pages links", () => {
    cy.get("a").should("have.length", 2);
    cy.get("a").eq(0).should("contain", "Home");
    cy.get("a").eq(1).should("contain", "Calculators");
  });

  it("should redirect to proper page after clicking nav links", () => {
    cy.get("a").eq(1).click();
    cy.url().should("include", "/calc");

    cy.get("a").eq(0).click();
    cy.url().should("include", "/");
  });
});
