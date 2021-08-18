var password = "amParolaCea1MaiTare"; // amParolaCea1MaiTare
var email = "canomeI105@email.com"; //canomeI105@email.com

describe("Test funtionality for registred user", () => {
  beforeEach(() => {
    cy.visit("http://live.demoguru99.com");
  });

  // it("Test update an account information ", () => {
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
  //   cy.get("h1").should("have.text", "My Dashboard");
  //   cy.get("a")
  //     .contains("Account Information")
  //     .should("have.html", "Account Information")
  //     .click();
  //   cy.get("#firstname")
  //     .should("have.value", "Camoe")
  //     .clear()
  //     .type("Camoe")
  //     .should("have.value", "Camoe");
  //   cy.get("#current_password")
  //     .should("have.value", "")
  //     .type(password)
  //     .should("have.value", password);
  //   cy.get("button").contains("Save").click();
  //   cy.get("li > span").should(
  //     "have.text",
  //     "The account information has been saved."
  //   );
  //   cy.get("#header > div > div.skip-links > div > a")
  //     .should("have.class", "skip-link skip-account")
  //     .click();
  //   cy.get("#header-account > div > ul > li.last > a").click();
  // });

  it("Test adding new address ", () => {
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
    cy.get("h1").should("have.text", "My Dashboard");
    cy.get("a")
      .contains("Address Book")
      .should("have.html", "Address Book")
      .click();
    cy.get("a")
      .contains("Change Billing Address")
      .should("have.text", "Change Billing Address")
      .click();
    cy.get("#street_2")
      .should("have.class", "input-text")
      .clear()
      .type("the new way nr.2")
      .should("have.value", "the new way nr.2");

    // cy.get("button").contains("Save Address").click();
    // cy.get("span")
    //   .contains("The address has been saved.")
    //   .should("have.text", "The address has been saved.");
    // cy.get("#header > div > div.skip-links > div > a")
    //   .should("have.class", "skip-link skip-account")
    //   .click();
    // cy.get("#header-account > div > ul > li.last > a").click();
  });
});
