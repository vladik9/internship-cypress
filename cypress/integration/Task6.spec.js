import Register from "../support/RegisterPOM.spec";
const register = new Register();
import LogIn from "../support/LogInPOM.spec";
const logIn = new LogIn();
import RanGen from "../support/RandomGenerator.spec";
const ranGen = new RanGen();
var email = "canomeI105@email.com";
var password = "amParolaCea1MaiTare";

describe("POM model in Cypress", () => {
  beforeEach(() => {
    cy.visit("http://live.demoguru99.com");
  });

  it("Register POM model", () => {
    email = ranGen.genMeEmailcode();
    cy.get(
      register
        .getAccountButton()
        .should("have.class", "skip-link skip-account")
        .click()
    );
    cy.get(register.getRegisterButton().should("contain", "Register").click());
    cy.get(
      register.getFirstName().should("have.id", "firstname").type("Canome")
    );

    cy.get(register.getMiddleName().should("have.id", "middlename").type("R"));

    cy.get(register.getLastName().should("have.id", "lastname").type("Eduard"));
    cy.get(register.getEmail().should("have.id", "email_address").type(email));
    cy.get(
      register
        .getPassword()
        .should("have.class", "input-text required-entry validate-password")
        .type(password)
    );
    cy.get(
      register
        .getConfirmPassword()
        .should("have.id", "confirmation")
        .type(password)
    );
    cy.get(register.getSubscriptionNewsletter().check().should("be.checked"));
    cy.get(
      register
        .getSumbitRegistrationButton()
        .should("have.class", "button")
        .click()
    );
    cy.get(
      register
        .getOkMessageRegistrationButton()
        .should(
          "have.text",
          "Thank you for registering with Main Website Store."
        )
    );
    cy.get(register.getAccountButton().click());
    cy.get(register.getLogOutButton().click());
    cy.get(
      register.getLogOutMessage().should("have.text", "You are now logged out")
    );
  });

  it("LogIn POM model", () => {
    cy.get(
      logIn
        .getAccountButton()
        .should("have.class", "skip-link skip-account")
        .click()
    );
    cy.get(logIn.getLogOutButton().should("contain", "Log In").click());
    cy.get(
      logIn
        .getEmaillogIn()
        .should("have.id", "email")
        .type(email)
        .should("have.value", email)
    );
    cy.get(
      logIn
        .getPasswLogIn()
        .should("have.class", "input-text required-entry validate-password")
        .type(password)
        .should("have.value", password)
    );
    cy.get(logIn.getLogInButton().should("contain", "Login").click());
    cy.get(logIn.getLogInSuccessMessage().should("have.text", "My Dashboard"));
    cy.get(logIn.getAccountButton().click());
    cy.get(logIn.getLogOutButton().click());
    cy.get(
      logIn.getLogOutMessage().should("have.text", "You are now logged out")
    );
  });
});
