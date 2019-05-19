describe("Testing the links in navbar on Homepage: ", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should visit the 'Local Salah Time' page & find title `Local Salah Time`", () => {
    cy.get("div.navbar-end div.navbar-item:first")
      .contains("Local Salah Time")
      .trigger("mouseover");
    cy.get("div.navbar-end div.navbar-item:first")
      .contains("Local Salah Time")
      .next(".navbar-dropdown")
      .invoke("show")
      .contains("Local Salah Time")
      .click();
    cy.get("div#localSalahTimeWrapper > h1.title").should(
      "contain",
      "Local Salah Time"
    );
  });

  it("should visit the 'Fajr' section within 'How To Pray Salah' page", () => {
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

  it("should visit the 'What Is Salaat' section within 'Guide To Salaat", () => {
    cy.get("div.navbar-end div.navbar-item:nth-child(3)")
      .contains("Guide to Salaat")
      .next(".navbar-dropdown")
      .invoke("show")
      .contains("What Is Salaat")
      .click();
    // cy.get("div#");
  });
});
