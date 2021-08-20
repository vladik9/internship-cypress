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

        .click()
    );
    cy.get(register.getRegisterButton().click());
    cy.get(register.getFirstName().type("Canome"));

    cy.get(register.getMiddleName().type("R"));

    cy.get(register.getLastName().type("Eduard"));
    cy.get(register.getEmail().type(email));
    cy.get(register.getPassword().type(password));
    cy.get(register.getConfirmPassword().type(password));
    cy.get(register.getSubscriptionNewsletter().check().should("be.checked"));
    cy.get(register.getSumbitRegistrationButton().click());
    cy.get(register.getOkMessageRegistrationButton());
    cy.get(register.getAccountButton().click());
    cy.get(register.getLogOutButton().click());
    cy.get(register.getLogOutMessage());
  });

  it("LogIn POM model", () => {
    cy.get(logIn.getAccountButton().click());
    cy.get(logIn.getLogOutButton().click());
    cy.get(logIn.getEmaillogIn().type(email).should("have.value", email));
    cy.get(logIn.getPasswLogIn().type(password).should("have.value", password));
    cy.get(logIn.getLogInButton().click());
    cy.get(logIn.getLogInSuccessMessage());
    cy.get(logIn.getAccountButton().click());
    cy.get(logIn.getLogOutButton().click());
    cy.get(logIn.getLogOutMessage());
  });
});
