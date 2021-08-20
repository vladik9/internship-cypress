class LogInFunctions {
  getAccountButton() {
    return cy.get("#header > div > div.skip-links > div > a");
  }
  getLogInButton() {
    return cy.get("#header-account > div > ul > li.last > ");
  }
  getEmaillogIn() {
    return cy.get("#email");
  }
  getPasswLogIn() {
    return cy.get("#pass");
  }
  getLogInButton() {
    return cy.get("#send2");
  }
  getLogInSuccessMessage() {
    return cy.get(
      "body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > div.page-title > h1"
    );
  }

  getLogOutButton() {
    return cy.get("#header-account > div > ul > li.last > a");
  }
  getLogOutMessage() {
    return cy.get("h1").contains("You are now logged out");
  }
}
export default LogInFunctions;
