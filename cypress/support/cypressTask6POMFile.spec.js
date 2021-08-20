var password = "amParolaCea1MaiTare";
var email = "canomeI105@email.com";
const genMeEmailcode = function () {
  const randomNum1 =
    Math.floor(Math.random() * 2) + Math.floor(Math.random() * 3) + 5;
  const randomNum2 =
    Math.floor(Math.random() * 7) + Math.floor(Math.random() * 2) + 4;
  const randomNum3 =
    Math.floor(Math.random() * 3) + Math.floor(Math.random() * 3) + 2;
  const randomNum4 =
    Math.floor(Math.random() * 8) + Math.floor(Math.random() * 0) + 2;
  return (email = `ca${randomNum4}nome${randomNum3}I${randomNum1}${randomNum2}`);
};

// for registering
class UtilsFunctions {
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
  getLogInButton() {
    return cy.get("#header-account > div > ul > li.last > ");
  }
  getEmaillogIn() {
    return cy.get("#email");
  }
  getEmailLogIn() {
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
  getLogOutMessage() {
    return cy.get("h1").contains("You are now logged out");
  }
}
export default UtilsFunctions;
