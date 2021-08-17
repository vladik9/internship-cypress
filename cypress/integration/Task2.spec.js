var password = "amParolaCea1MaiTare"; // amParolaCea1MaiTare
var email = "canomeI105@email.com"; //canomeI105@email.com

describe("Test search funtionality", () => {
  beforeEach(() => {
    cy.visit("http://live.demoguru99.com");
  });

  // it("Test search an item", () => {
  //   cy.get("#header > div > div.skip-links > div > a")
  //     .should("have.class", "skip-link skip-account")
  //     .click();
  //   cy.get("#header-account > div > ul > li.last > a")
  //     .should("contain", "Log In")
  //     .click();
  //   cy.get("#email")
  //     .should("have.id", "email")
  //     .type(email)
  //     .should("have.value", email);
  //   cy.get("#pass")
  //     .should("have.class", "input-text required-entry validate-password")
  //     .type(password)
  //     .should("have.value", password);
  //   cy.get("#send2").should("contain", "Login").click();

  //   cy.get(".nav-1 > .level0").should("have.class", "level0").click();
  //   cy.get("#search").click().type("IPHONE").clear().type("IPHONE 6");
  //   cy.get("#header > div > div.skip-links > div > a")
  //     .should("have.class", "skip-link skip-account")
  //     .click();
  //   cy.get("#header-account > div > ul > li.last > a").click();
  // });

  // it.only("Test add an item to shoping cart", () => {
  //   cy.get("#header > div > div.skip-links > div > a")
  //     .should("have.class", "skip-link skip-account")
  //     .click();
  //   cy.get("#header-account > div > ul > li.last > a")
  //     .should("contain", "Log In")
  //     .click();
  //   cy.get("#email")
  //     .should("have.id", "email")
  //     .type(email)
  //     .should("have.value", email);
  //   cy.get("#pass")
  //     .should("have.class", "input-text required-entry validate-password")
  //     .type(password)
  //     .should("have.value", password);
  //   cy.get("#send2").should("contain", "Login").click();

  //   cy.get(".nav-1 > .level0").should("have.class", "level0").click();
  //   cy.get("#search").click().type("IPHONE").clear().type("IPHONE 6");

  //   cy.get("#search_autocomplete > ul").first().click();

  //   cy.get(":nth-child(2) > .product-info > .actions > .button").click();

  //   cy.get("li > span").should(
  //     "have.text",
  //     "IPhone was added to your shopping cart."
  //   );
  //   cy.get(".a-center > .btn-remove").click();
  //   cy.get("h1").should("have.text", "Shopping Cart is Empty");

  //   cy.get("#header > div > div.skip-links > div > a")
  //     .should("have.class", "skip-link skip-account")
  //     .click();
  //   cy.get("#header-account > div > ul > li.last > a").click();
  // });

  it.only("Test cypress to finalize a purchase", () => {
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a")
      .should("contain", "Log In")
      .click();
    cy.get("#email")
      .should("have.id", "email")
      .type(email)
      .should("have.value", email);
    cy.get("#pass")
      .should("have.class", "input-text required-entry validate-password")
      .type(password)
      .should("have.value", password);
    cy.get("#send2").should("contain", "Login").click();

    cy.get(".nav-1 > .level0").should("have.class", "level0").click();
    cy.get("#search").click().type("IPHONE").clear().type("IPHONE 6");

    cy.get("#search_autocomplete > ul").first().click();

    cy.get(":nth-child(2) > .product-info > .actions > .button").click();

    cy.get("li > span").should(
      "have.text",
      "IPhone was added to your shopping cart."
    );
    cy.get(".method-checkout-cart-methods-onepage-bottom").click();

    cy.get("input-box").should("have.id", "company").type("checkbox");

    // cy.get("#header > div > div.skip-links > div > a")
    //   .should("have.class", "skip-link skip-account")
    //   .click();
    // cy.get("#header-account > div > ul > li.last > a").click();
  });
});
