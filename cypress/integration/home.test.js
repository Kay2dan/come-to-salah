describe("Testing the Home page: ", () => {
  it("should visit the page", () => {
    cy.visit("/");
    // cy.get("div.navbar-end div.navbar-item:first").trigger("mouseover");
    cy.get("div.navbar-end div.navbar-item")
      .contains("How To Pray Salah")
      .trigger("mouseover");
    cy.get("div.navbar-end div.navbar-item")
      .contains("How To Pray Salah")
      .next(".navbar-dropdown")
      .then($el => {
        cy.wrap($el).invoke("show");
        cy.wrap($el)
          .contains("Fajr")
          .click();
      });
  });
});
