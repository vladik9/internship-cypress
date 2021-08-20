// //this thing block my page
// // <reference types="cypress" />

// describe("a test scenario", () => {
//   beforeEach(() => {
//     cy.visit("http://live.demoguru99.com");
//   });

//   it("will contain a test case", () => {
//     cy.get("body div.header-language-background p")
//       .should("be.visible")
//       .contains("Default welcome msg!");
//   });
// });

describe("a test scenario", () => {
  beforeEach(() => {
    cy.visit("https://petstore.octoperf.com/actions/Catalog.action");
  });

  it("will contain a test case", () => {
    cy.get("a").contains("Sign In").click();
    cy.get("input[name=username]").click().type("jbaka");
  });
});
