describe("Even/Odd Checker App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173"); // change to your app URL
  });

  it("should render input and button in UI", () => {
    cy.get("input[name='number']").should("exist");
    cy.get("button").contains("Check").should("exist");
  });

  it("should show success message for even number", () => {
    cy.get("input[name='number']").type("124");
    cy.get("button").click();
    cy.contains("The number 124 is even!").should("be.visible");
  });

  it("should show error message for odd number", () => {
    cy.get("input[name='number']").type("123");
    cy.get("button").click();
    cy.contains("Oops, 123 is odd!").should("be.visible");
  });

  it("should show error for NaN (not a number)", () => {
    cy.get("input[name='number']").type("Crio");
    cy.get("button").click();
    cy.contains("Not a valid number!").should("be.visible");
  });
});

