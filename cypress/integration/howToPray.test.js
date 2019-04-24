describe("Testing the HowToPray page: ", () => {
  it("should visit the fajr salah page", () => {
    cy.visit("/howToPraySalah");
    cy.get("nav.navbar-brand > a").click();
    
    // cy.visit("/howToPraySalah");
    // cy.get("a.pagination-next").click();
  });
});
