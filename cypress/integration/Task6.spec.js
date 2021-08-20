var password = "amParolaCea1MaiTare";
var email = "canomeI105@email.com";
import POM from "./cypressTask6POMFile.spec.js";
const pom = new POM();
const genMeEmailcode = function () {
  const randomNum1 =
    Math.floor(Math.random() * 2) + Math.floor(Math.random() * 3) + 5;
  const randomNum2 =
    Math.floor(Math.random() * 7) + Math.floor(Math.random() * 2) + 4;
  const randomNum3 =
    Math.floor(Math.random() * 3) + Math.floor(Math.random() * 3) + 2;
  const randomNum4 =
    Math.floor(Math.random() * 8) + Math.floor(Math.random() * 0) + 2;
  return (email = `ca${randomNum4}nome${randomNum3}I${randomNum1}${randomNum2}@email.com`);
};

describe("POM model in Cypress", () => {
  beforeEach(() => {
    cy.visit("http://live.demoguru99.com");
  });

  it("Register POM model", () => {
    genMeEmailcode();
    cy.get(
      pom
        .getAccountButton()
        .should("have.class", "skip-link skip-account")
        .click()
    );
    cy.get(pom.getRegisterButton().should("contain", "Register").click());
    cy.get(pom.getFirstName().should("have.id", "firstname").type("Canome"));

    cy.get(pom.getMiddleName().should("have.id", "middlename").type("R"));

    cy.get(pom.getLastName().should("have.id", "lastname").type("Eduard"));
    cy.get(pom.getEmail().should("have.id", "email_address").type(email));
    cy.get(
      pom
        .getPassword()
        .should("have.class", "input-text required-entry validate-password")
        .type(password)
    );
    cy.get(
      pom.getConfirmPassword().should("have.id", "confirmation").type(password)
    );
    cy.get(pom.getSubscriptionNewsletter().check().should("be.checked"));
    cy.get(
      pom.getSumbitRegistrationButton().should("have.class", "button").click()
    );
    cy.get(
      pom
        .getOkMessageRegistrationButton()
        .should(
          "have.text",
          "Thank you for registering with Main Website Store."
        )
    );
    cy.get(pom.getAccountButton().click());
    cy.get(pom.getLogOutButton().click());
  });

  it("LogIn POM model", () => {
    cy.get(
      pom
        .getAccountButton()
        .should("have.class", "skip-link skip-account")
        .click()
    );
    cy.get(pom.getLogOutButton().should("contain", "Log In").click());
    cy.get(
      pom
        .getEmaillogIn()
        .should("have.id", "email")
        .type(email)
        .should("have.value", email)
    );
    cy.get(
      pom
        .getEmailLogIn()
        .should("have.class", "input-text required-entry validate-password")
        .type(password)
        .should("have.value", password)
    );
    cy.get(pom.getLogInButton().should("contain", "Login").click());
    cy.get(pom.getLogInSuccessMessage().should("have.text", "My Dashboard"));
    cy.get(pom.getAccountButton().click());
    cy.get(pom.getLogOutButton().click());
    cy.get(
      pom.getLogOutMessage().should("have.text", "You are now logged out")
    );
  });
});
