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

    register.getAccountButton().click();
    register.getRegisterButton().click();
    register.getFirstName().type("Canome");
    register.getMiddleName().type("R");
    register.getLastName().type("Eduard");
    register.getEmail().type(email);
    register.getPassword().type(password);
    register.getConfirmPassword().type(password);
    register.getSubscriptionNewsletter().check().should("be.checked");
    register.getSumbitRegistrationButton().click();
    register.getOkMessageRegistrationButton();
    register.getAccountButton().click();
    register.getLogOutButton().click();
    register.getLogOutMessage();
  });

  it("LogIn POM model", () => {
    logIn.getAccountButton().click();
    logIn.getLogOutButton().click();
    logIn.getEmaillogIn().type(email).should("have.value", email);
    logIn.getPasswLogIn().type(password).should("have.value", password);
    logIn.getLogInButton().click();
    logIn.getLogInSuccessMessage();
    logIn.getAccountButton().click();
    logIn.getLogOutButton().click();
    logIn.getLogOutMessage();
  });
});
