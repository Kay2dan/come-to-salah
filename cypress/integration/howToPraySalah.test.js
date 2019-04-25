describe("Testing the HowToPraySalah page:", () => {
  it("should visit the how to pray salah page", () => {
    cy.visit("/howToPraySalah");
  });

  it("should visit home page link:", () => {
    cy.get("div.navbar-brand div.navbar-item:first > a").click();
    cy.url().should("be", "/");
  });

  it("should visit the fajr salah page from navbar:", () => {
    cy.visit("/");
    cy.get("div.navbar-end div.navbar-item")
      .contains("How To Pray Salah")
      .trigger("mouseover");
    // we have to redo the steps to trigger 'mouseover'
    // see => https://stackoverflow.com/questions/48852219/handling-hover-over-menus-using-cypress
    cy.get("div.navbar-end div.navbar-item")
      .contains("How To Pray Salah")
      .next(".navbar-dropdown")
      .then(el => {
        cy.wrap(el).invoke("show");
        cy.wrap(el)
          .contains("Fajr")
          .click();
      });
  });

  it("should check previous page is disabled", () => {
    cy.get(".pagination-previous").should("have.attr", "disabled");
    cy.get("h2.subtitle").contains("Step 1: Standing");
  });

  it("should check next page is not disabled", () => {
    cy.get(".pagination-next").should("not.have.attr", "disabled");
    cy.get(".pagination-next").click();
    cy.get("h2.subtitle").contains("Step 1.2: Takbiir");
  });
});
