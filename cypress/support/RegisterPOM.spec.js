class RegisterFunctions {
  getAccountButton() {
    return cy.get("#header > div > div.skip-links > div > a");
  }
  getRegisterButton() {
    return cy.get("#header-account > div > ul > li:nth-child(5) > a");
  }
  getFirstName() {
    return cy.get("#firstname");
  }
  getMiddleName() {
    return cy.get("#middlename");
  }
  getLastName() {
    return cy.get("#lastname");
  }
  getEmail() {
    return cy.get("#email_address");
  }
  getPassword() {
    return cy.get("#password");
  }
  getConfirmPassword() {
    return cy.get("#confirmation");
  }

  getSubscriptionNewsletter() {
    return cy.get("#is_subscribed");
  }
  getSumbitRegistrationButton() {
    return cy.get("#form-validate > div.buttons-set > button");
  }
  getOkMessageRegistrationButton() {
    return cy.get("li > span");
  }
  getLogOutButton() {
    return cy.get("#header-account > div > ul > li.last > a");
  }

  getLogOutMessage() {
    return cy.get("h1").contains("You are now logged out");
  }
}
export default RegisterFunctions;
