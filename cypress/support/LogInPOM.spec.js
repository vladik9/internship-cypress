class LogInFunctions {
  getAccountButton() {
    return cy.get("#header > div > div.skip-links > div > a").should("have.class", "skip-link skip-account");
  }
  getLogInButton() {
    return cy.get("#header-account > div > ul > li.last > ").should("contain", "Log In");
  }
  getEmaillogIn() {
    return cy.get("#email").should("have.id", "email");
  }
  getPasswLogIn() {
    return cy.get("#pass").should("have.class", "input-text required-entry validate-password");
  }
  getLogInButton() {
    return cy.get("#send2").should("contain", "Login");
  }
  getLogInSuccessMessage() {
    return cy.get(
      "body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > div.page-title > h1"
    ).should("have.text", "My Dashboard");
  }

  getLogOutButton() {
    return cy.get("#header-account > div > ul > li.last > a");
  }
  getLogOutMessage() {
    return cy.get("h1").contains("You are now logged out").should("have.text", "You are now logged out");
  }
}
export default LogInFunctions;
