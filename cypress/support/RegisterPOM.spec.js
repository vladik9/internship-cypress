class RegisterFunctions {
  getAccountButton() {
    return cy.get("#header > div > div.skip-links > div > a").should("have.class", "skip-link skip-account");
  }
  getRegisterButton() {
    return cy.get("#header-account > div > ul > li:nth-child(5) > a").should("contain", "Register");
  }
  getFirstName() {
    return cy.get("#firstname").should("have.id", "firstname");
  }
  getMiddleName() {
    return cy.get("#middlename").should("have.id", "middlename");
  }
  getLastName() {
    return cy.get("#lastname").should("have.id", "lastname");
  }
  getEmail() {
    return cy.get("#email_address").should("have.id", "email_address");
  }
  getPassword() {
    return cy.get("#password") .should("have.class", "input-text required-entry validate-password");
  }
  getConfirmPassword() {
    return cy.get("#confirmation").should("have.id", "confirmation");
  }

  getSubscriptionNewsletter() {
    return cy.get("#is_subscribed");
  }
  getSumbitRegistrationButton() {
    return cy.get("#form-validate > div.buttons-set > button").should("have.class", "button");
  }
  getOkMessageRegistrationButton() {
    return cy.get("li > span").should(
          "have.text",
          "Thank you for registering with Main Website Store."
        );
  }
  getLogOutButton() {
    return cy.get("#header-account > div > ul > li.last > a");
  }

  getLogOutMessage() {
    return cy.get("h1").contains("You are now logged out").should("have.text", "You are now logged out");
  }
}
export default RegisterFunctions;
