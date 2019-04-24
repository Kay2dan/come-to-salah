describe("Testing the Home page: ", () => {
  it("should visit the page", () => {
    cy.visit("/");
    cy.get("div.navbar-end div.navbar-item:first").trigger("mouseover");
    cy.get("div.navbar-dropdown > div.navbar-item:first")
      .contains("Fajr")
      .click();
  });
});
