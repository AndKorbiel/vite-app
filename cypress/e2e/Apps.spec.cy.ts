describe("<App>", () => {
  it("should contain h1 with proper text", () => {
    cy.visit("http://localhost:5173/");
    cy.get("h1").should("contain", "Vite + React");
  });
  
  it('should update count after clicking on the button', ()=>{
    cy.visit("http://localhost:5173/");
    cy.get('button').should('contain', 'count is 0')

    cy.get('button').click()
    cy.get("button").should("contain", "count is 1");
  })
});
