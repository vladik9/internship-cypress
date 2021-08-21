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

describe("Test register in new customer account functionality ", () => {
  beforeEach(() => {
    cy.visit("http://live.demoguru99.com");
  });

  it("Test register new user", () => {
    genMeEmailcode();
    email = `${genMeEmailcode()}@email.com`;
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();

    cy.get("#header-account > div > ul > li:nth-child(5) > a")
      .should("contain", "Register")
      .click();
    cy.get("#firstname").should("have.id", "firstname").type("Canome");
    cy.get("#middlename").should("have.id", "middlename").type("R");
    cy.get("#lastname").should("have.id", "lastname").type("Eduard");

    cy.get("#email_address").should("have.id", "email_address").type(email);
    cy.get("#password")
      .should("have.class", "input-text required-entry validate-password")
      .type(password);
    cy.get("#confirmation").should("have.id", "confirmation").type(password);
    cy.get("#is_subscribed").check();
    cy.get("#form-validate > div.buttons-set > button")
      .should("have.class", "button")
      .click();
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("li > span").should(
      "have.text",
      "Thank you for registering with Main Website Store."
    );
    cy.get("#header-account > div > ul > li.last > a").click();
  });

  it("Test Login an existing user", () => {
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a")
      .should("contain", "Log In")
      .click();
    cy.get("#email").should("have.id", "email").type("canomeI87@email.com");
    cy.get("#pass")
      .should("have.class", "input-text required-entry validate-password")
      .type("amParolaCea1MaiTare");
    cy.get("#send2").should("contain", "Login").click();
    cy.get(
      "body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > div.page-title > h1"
    ).should("have.text", "My Dashboard");
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a").click();
  });
  it("Test register valid Email", () => {
    genMeEmailcode();
    email = `${genMeEmailcode()}@email.com`;
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li:nth-child(5) > a")
      .should("contain", "Register")
      .click();
    cy.get("#firstname").should("have.id", "firstname").type("Canome");
    cy.get("#middlename").should("have.id", "middlename").type("R");
    cy.get("#lastname").should("have.id", "lastname").type("Eduard");
    cy.get("#email_address").should("have.id", "email_address").type(email);
    cy.get("#password")
      .should("have.class", "input-text required-entry validate-password")
      .type(password);
    cy.get("#confirmation").should("have.id", "confirmation").type(password);
    cy.get("#is_subscribed").check();
    cy.get("#form-validate > div.buttons-set > button")
      .should("have.class", "button")
      .click();
    cy.get("li > span").should(
      "have.text",
      "Thank you for registering with Main Website Store."
    );
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a").click();
  });
  it("Test register invalid Email without the @ sign", () => {
    genMeEmailcode();
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li:nth-child(5) > a")
      .should("contain", "Register")
      .click();

    email = `invalid${genMeEmailcode()}`;
    cy.get("#firstname").should("have.id", "firstname").type("Canome");
    cy.get("#middlename").should("have.id", "middlename").type("R");
    cy.get("#lastname").should("have.id", "lastname").type("Eduard");

    cy.get("#email_address").should("have.id", "email_address").type(email);
    cy.get("#password")
      .should("have.class", "input-text required-entry validate-password")
      .type(password);
    cy.get("#confirmation").should("have.id", "confirmation").type(password);
    cy.get("#is_subscribed").check();
    cy.get("#email_address").should("have.value", email);
    cy.get("#form-validate > div.buttons-set > button")
      .should("have.class", "button")
      .click();
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a").click();
  });
  it("Test register invalid Email without dot in the domain name", () => {
    genMeEmailcode();
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li:nth-child(5) > a")
      .should("contain", "Register")
      .click();
    email = `invalid${genMeEmailcode()}@emailcom`;
    cy.get("#firstname").should("have.id", "firstname").type("Canome");
    cy.get("#middlename").should("have.id", "middlename").type("R");
    cy.get("#lastname").should("have.id", "lastname").type("Eduard");
    cy.get("#email_address").should("have.id", "email_address").type(email);
    cy.get("#password")
      .should("have.class", "input-text required-entry validate-password")
      .type(password);
    cy.get("#confirmation").should("have.id", "confirmation").type(password);
    cy.get("#is_subscribed").check();
    cy.get("#email_address").should("have.value", email);
    cy.get("#form-validate > div.buttons-set > button")
      .should("have.class", "button")
      .click();
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a").click();
  });
  it("Test register invalid Email without the domain name location", () => {
    genMeEmailcode();
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li:nth-child(5) > a")
      .should("contain", "Register")
      .click();
    email = `invalid${genMeEmailcode()}@email`;
    cy.get("#firstname").should("have.id", "firstname").type("Canome");
    cy.get("#middlename").should("have.id", "middlename").type("R");
    cy.get("#lastname").should("have.id", "lastname").type("Eduard");
    cy.get("#email_address").should("have.id", "email_address").type(email);
    cy.get("#password")
      .should("have.class", "input-text required-entry validate-password")
      .type(password);
    cy.get("#confirmation").should("have.id", "confirmation").type(password);
    cy.get("#is_subscribed").check();
    cy.get("#email_address").should("have.value", email);
    cy.get("#form-validate > div.buttons-set > button")
      .should("have.class", "button")
      .click();
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a").click();
  });

  it("Test register invalid Email without email adress", () => {
    genMeEmailcode();
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li:nth-child(5) > a")
      .should("contain", "Register")
      .click();
    email = `@email.com`;

    cy.get("#firstname").should("have.id", "firstname").type("Canome");
    cy.get("#middlename").should("have.id", "middlename").type("R");
    cy.get("#lastname").should("have.id", "lastname").type("Eduard");
    cy.get("#email_address").should("have.id", "email_address").type(email);
    cy.get("#password")
      .should("have.class", "input-text required-entry validate-password")
      .type(password);
    cy.get("#confirmation").should("have.id", "confirmation").type(password);
    cy.get("#is_subscribed").check();
    cy.get("#email_address").should("have.value", email);
    cy.get("#form-validate > div.buttons-set > button")
      .should("have.class", "button")
      .click();
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a").click();
  });

  it("Test register whit name from numbers", () => {
    genMeEmailcode();
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li:nth-child(5) > a")
      .should("contain", "Register")
      .click();
    email = `invalid${genMeEmailcode()}@email.com`;
    cy.get("#firstname")
      .should("have.id", "firstname")
      .type("1234")
      .should("have.value", "1234");
    cy.get("#middlename").should("have.id", "middlename").type("R");
    cy.get("#lastname")
      .should("have.id", "lastname")
      .type("3445")
      .should("have.value", "3445");
    cy.get("#email_address").should("have.id", "email_address").type(email);
    cy.get("#password")
      .should("have.class", "input-text required-entry validate-password")
      .type(password);
    cy.get("#confirmation").should("have.id", "confirmation").type(password);
    cy.get("#is_subscribed").check();
    cy.get("#email_address").should("have.value", email);
    cy.get("#form-validate > div.buttons-set > button")
      .should("have.class", "button")
      .click();
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a").click();
  });

  it("Test register whit empty required fields", () => {
    genMeEmailcode();
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li:nth-child(5) > a")
      .should("contain", "Register")
      .click();
    email = `invalid${genMeEmailcode()}`;
    cy.get("#firstname")
      .should("have.id", "firstname")
      .type(" ")
      .should("have.value", " ");
    cy.get("#middlename").should("have.id", "middlename").type("R");
    cy.get("#lastname")
      .should("have.id", "lastname")
      .type(" ")
      .should("have.value", " ");
    cy.get("#email_address")
      .should("have.id", "email_address")
      .type(" ")
      .should("have.value", "");
    cy.get("#password")
      .should("have.class", "input-text required-entry validate-password")
      .type(password);
    cy.get("#confirmation").should("have.id", "confirmation").type(" ");
    cy.get("#is_subscribed").check();
    cy.get("#form-validate > div.buttons-set > button")
      .should("have.class", "button")
      .click();
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a").click();
  });

  it("Test register whit short password ", () => {
    genMeEmailcode();
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li:nth-child(5) > a")
      .should("contain", "Register")
      .click();
    email = `invalid${genMeEmailcode()}`;
    cy.get("#firstname").should("have.id", "firstname").type("TestName ");
    cy.get("#middlename").should("have.id", "middlename").type("R");
    cy.get("#lastname").should("have.id", "lastname").type("SecondTestaName");
    cy.get("#email_address").should("have.id", "email_address").type(email);
    cy.get("#password")
      .should("have.class", "input-text required-entry validate-password")
      .type("123")
      .should("have.value", "123");
    cy.get("#confirmation")
      .should("have.id", "confirmation")
      .type("123")
      .should("have.value", "123");
    cy.get("#is_subscribed").check();
    cy.get("#email_address").should("have.value", email);
    cy.get("#form-validate > div.buttons-set > button")
      .should("have.class", "button")
      .click();
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a").click();
  });
  it("Login whit wrong password", () => {
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a")
      .should("contain", "Log In")
      .click();
    cy.get("#email").should("have.id", "email").type("canomeI87@email.com");
    cy.get("#pass")
      .should("have.class", "input-text required-entry validate-password")
      .type("am1MaiTare")
      .should("have.value", "am1MaiTare");
    cy.get("#send2").should("contain", "Login").click();
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a").click();
  });
  it("Login whit wrong EMAIL whithouth @ sign", () => {
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a")
      .should("contain", "Log In")
      .click();
    cy.get("#email")
      .should("have.id", "email")
      .type("canomeI87@emaicom")
      .should("have.value", "canomeI87@emaicom");
    cy.get("#pass")
      .should("have.class", "input-text required-entry validate-password")
      .type("amParolaCea1MaiTare");
    cy.get("#send2").should("contain", "Login").click();
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a").click();
  });

  it("Login whit wrong email  whit false domaine name", () => {
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a")
      .should("contain", "Log In")
      .click();
    cy.get("#email")
      .should("have.id", "email")
      .type("canomeI87@email.comm")
      .should("have.value", "canomeI87@email.comm");
    cy.get("#pass")
      .should("have.class", "input-text required-entry validate-password")
      .type("amParolaCea1MaiTare");
    cy.get("#send2").should("contain", "Login").click();

    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a").click();
  });

  it("Login whit no password", () => {
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a")
      .should("contain", "Log In")
      .click();
    cy.get("#email").should("have.id", "email").type("canomeI87@email.com");
    cy.get("#pass")
      .should("have.class", "input-text required-entry validate-password")
      .type(" ")
      .should("be.empty");
    cy.get("#send2").should("contain", "Login").click();

    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a").click();
  });

  it("Login whit EMAIL in capitals", () => {
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a")
      .should("contain", "Log In")
      .click();
    cy.get("#email")
      .should("have.id", "email")
      .type("CANOMEI87@EMAIL.COM")
      .should("have.value", "CANOMEI87@EMAIL.COM");
    cy.get("#pass")
      .should("have.class", "input-text required-entry validate-password")
      .type("amParolaCea1MaiTare");
    cy.get("#send2").should("contain", "Login").click();

    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a").click();
  });
});
