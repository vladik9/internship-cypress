//##################################
//global variables
var password = ""; // amParolaCea1MaiTare
var email = ""; //canomeI105@email.com

// // #################################
describe("Test register in new customer account ", () => {
  beforeEach(() => {
    cy.visit("http://live.demoguru99.com");
  });

  it("Test register functionality", () => {
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();

    cy.get("#header-account > div > ul > li:nth-child(5) > a")
      .should("contain", "Register")
      .click();

    const randomNum1 =
      Math.floor(Math.random() * 4) + Math.floor(Math.random() * 3) + 5;
    const randomNum2 =
      Math.floor(Math.random() * 4) + Math.floor(Math.random() * 3) + 5;
    password = "amParolaCea1MaiTare";
    email = `canomeI${randomNum1}${randomNum2}@email.com`;

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
      .click(); //need to be comm/uncomment
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();

    cy.get("#header-account > div > ul > li.last > a").click();
  });
});

describe("Test login functionality ", () => {
  beforeEach(() => {
    cy.visit("http://live.demoguru99.com");
  });
  it("Test Login functionality", () => {
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
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a").click();
  });
});

// // #################################

describe("Validation tests for registering new customer account ", () => {
  beforeEach(() => {
    cy.visit("http://live.demoguru99.com");
  });
  it("Test register valid Email", () => {
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();

    cy.get("#header-account > div > ul > li:nth-child(5) > a")
      .should("contain", "Register")
      .click();

    const randomNum1 =
      Math.floor(Math.random() * 4) + Math.floor(Math.random() * 3) + 5;
    const randomNum2 =
      Math.floor(Math.random() * 4) + Math.floor(Math.random() * 3) + 5;
    password = "amParolaCea1MaiTare" + randomNum2 + randomNum1;
    email = `valid${randomNum1}${randomNum2}@email.com`;

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
      .click(); //need to be comm/uncomment
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a").click();
  });
  it("Test register invalid Email without the @ sign", () => {
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();

    cy.get("#header-account > div > ul > li:nth-child(5) > a")
      .should("contain", "Register")
      .click();

    const randomNum1 =
      Math.floor(Math.random() * 4) + Math.floor(Math.random() * 3) + 5;
    const randomNum2 =
      Math.floor(Math.random() * 4) + Math.floor(Math.random() * 5) + 3;
    password = "amParolaCea1MaiTare" + randomNum2 + randomNum1;
    email = `valid${randomNum1}${randomNum2}.email.com`;

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
      .click(); //need to be comm/uncomment
    cy.wait(3000);
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a").click();
  });

  it("Test register invalid Email without dot in the domain name", () => {
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();

    cy.get("#header-account > div > ul > li:nth-child(5) > a")
      .should("contain", "Register")
      .click();

    const randomNum1 =
      Math.floor(Math.random() * 4) + Math.floor(Math.random() * 3) + 5;
    const randomNum2 =
      Math.floor(Math.random() * 4) + Math.floor(Math.random() * 5) + 3;
    password = "amParolaCea1MaiTare" + randomNum2 + randomNum1;
    email = `valid${randomNum1}${randomNum2}@emailcom`;

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
      .click(); //need to be comm/uncomment
    cy.wait(3000);
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a").click();
  });

  it("Test register invalid Email without  the domain name location", () => {
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();

    cy.get("#header-account > div > ul > li:nth-child(5) > a")
      .should("contain", "Register")
      .click();

    const randomNum1 =
      Math.floor(Math.random() * 4) + Math.floor(Math.random() * 3) + 5;
    const randomNum2 =
      Math.floor(Math.random() * 4) + Math.floor(Math.random() * 5) + 3;
    password = "amParolaCea1MaiTare" + randomNum2 + randomNum1;
    email = `valid${randomNum1}${randomNum2}@email`;

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
      .click(); //need to be comm/uncomment
    cy.wait(3000);
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a").click();
  });

  it("Test register invalid Email without email adress", () => {
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();

    cy.get("#header-account > div > ul > li:nth-child(5) > a")
      .should("contain", "Register")
      .click();

    const randomNum1 =
      Math.floor(Math.random() * 4) + Math.floor(Math.random() * 3) + 5;
    const randomNum2 =
      Math.floor(Math.random() * 4) + Math.floor(Math.random() * 5) + 3;
    password = "amParolaCea1MaiTare" + randomNum2 + randomNum1;
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
    cy.get("#form-validate > div.buttons-set > button")
      .should("have.class", "button")
      .click(); //need to be comm/uncomment
    cy.wait(3000);
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a").click();
  });
  it("Test register whit name from numbers", () => {
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();

    cy.get("#header-account > div > ul > li:nth-child(5) > a")
      .should("contain", "Register")
      .click();

    const randomNum1 =
      Math.floor(Math.random() * 4) + Math.floor(Math.random() * 3) + 5;
    const randomNum2 =
      Math.floor(Math.random() * 4) + Math.floor(Math.random() * 5) + 3;
    password = "amParolaCea1MaiTare" + randomNum2 + randomNum1;
    email = `valid${randomNum1}${randomNum2}@email.com`;

    cy.get("#firstname").should("have.id", "firstname").type("1234");
    cy.get("#middlename").should("have.id", "middlename").type("R");
    cy.get("#lastname").should("have.id", "lastname").type("3445");

    cy.get("#email_address").should("have.id", "email_address").type(email);
    cy.get("#password")
      .should("have.class", "input-text required-entry validate-password")
      .type(password);
    cy.get("#confirmation").should("have.id", "confirmation").type(password);
    cy.get("#is_subscribed").check();
    cy.get("#form-validate > div.buttons-set > button")
      .should("have.class", "button")
      .click(); //need to be comm/uncomment
    cy.wait(3000);
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a").click();
  });

  it("Test register whit empty required fields", () => {
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();

    cy.get("#header-account > div > ul > li:nth-child(5) > a")
      .should("contain", "Register")
      .click();

    const randomNum1 =
      Math.floor(Math.random() * 4) + Math.floor(Math.random() * 3) + 5;
    const randomNum2 =
      Math.floor(Math.random() * 4) + Math.floor(Math.random() * 5) + 3;
    password = "amParolaCea1MaiTare" + randomNum2 + randomNum1;
    email = `valid${randomNum1}${randomNum2}@email.com`;

    cy.get("#firstname").should("have.id", "firstname").type(" ");
    cy.get("#middlename").should("have.id", "middlename").type("R");
    cy.get("#lastname").should("have.id", "lastname").type(" ");

    cy.get("#email_address").should("have.id", "email_address").type(" ");
    cy.get("#password")
      .should("have.class", "input-text required-entry validate-password")
      .type(password);
    cy.get("#confirmation").should("have.id", "confirmation").type(" ");
    cy.get("#is_subscribed").check();
    cy.get("#form-validate > div.buttons-set > button")
      .should("have.class", "button")
      .click(); //need to be comm/uncomment
    cy.wait(3000);
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a").click();
  });
  it("Test register whit short password ", () => {
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();

    cy.get("#header-account > div > ul > li:nth-child(5) > a")
      .should("contain", "Register")
      .click();

    const randomNum1 =
      Math.floor(Math.random() * 4) + Math.floor(Math.random() * 3) + 5;
    const randomNum2 =
      Math.floor(Math.random() * 4) + Math.floor(Math.random() * 5) + 3;
    password = "amParolaCea1MaiTare" + randomNum2 + randomNum1;
    email = `valid${randomNum1}${randomNum2}@email.com`;

    cy.get("#firstname").should("have.id", "firstname").type("TestName ");
    cy.get("#middlename").should("have.id", "middlename").type("R");
    cy.get("#lastname").should("have.id", "lastname").type("SecondTestaName");

    cy.get("#email_address").should("have.id", "email_address").type(email);
    cy.get("#password")
      .should("have.class", "input-text required-entry validate-password")
      .type("123");
    cy.get("#confirmation").should("have.id", "confirmation").type("123");
    cy.get("#is_subscribed").check();
    cy.get("#form-validate > div.buttons-set > button")
      .should("have.class", "button")
      .click(); //need to be comm/uncomment
    cy.wait(3000);
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a").click();
  });
});
//canomeI105@email.com canomeI87@email.com
// amParolaCea1MaiTare

// //###############################
describe("Validation tests for customer login functionality ", () => {
  beforeEach(() => {
    cy.visit("http://live.demoguru99.com");
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
      .type("amPa1MaiTare");
    cy.get("#send2").should("contain", "Login").click();
    cy.wait(3000);
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a").click();
  });
  it("Login whit wrong email whithouth @ sign", () => {
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a")
      .should("contain", "Log In")
      .click();
    cy.get("#email").should("have.id", "email").type("canomeI87@emaicom");
    cy.get("#pass")
      .should("have.class", "input-text required-entry validate-password")
      .type("amParolaCea1MaiTare");
    cy.get("#send2").should("contain", "Login").click();
    cy.wait(3000);
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
    cy.get("#email").should("have.id", "email").type("canomeI87@email.comm");
    cy.get("#pass")
      .should("have.class", "input-text required-entry validate-password")
      .type("amParolaCea1MaiTare");
    cy.get("#send2").should("contain", "Login").click();
    cy.wait(3000);
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
      .type(" ");
    cy.get("#send2").should("contain", "Login").click();
    cy.wait(3000);
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
    cy.get("#email").should("have.id", "email").type("CANOMEI87@EMAIL.COM");
    cy.get("#pass")
      .should("have.class", "input-text required-entry validate-password")
      .type("amParolaCea1MaiTare");
    cy.get("#send2").should("contain", "Login").click();
    cy.wait(3000);
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a").click();
  });
});
