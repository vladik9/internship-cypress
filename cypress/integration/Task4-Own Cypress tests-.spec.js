const randomNumber1 = Math.floor(Math.random() * 5 + 1 / 6);
const randomNumber2 = Math.floor(Math.random() * 2 + 6 / 2);
const randomNumber3 = Math.floor(Math.random() * 7 + 2 / 9);
const randomNumber4 = Math.floor(Math.random() * 3 + 4 / 4);
let password = `seret${randomNumber2}_sauce${randomNumber1}`;
import RanGen from "../support/RandomGenerator.spec";
const ranGen = new RanGen();
let email = "";
let username = `stan${randomNumber1}da${randomNumber4}rd_${randomNumber3}user${randomNumber2}`;
describe("Write 3 own cypress test", () => {
  beforeEach(() => {
    cy.visit("https://petstore.octoperf.com/actions/Catalog.action");
  });

  it("Test search for an pet", () => {
    cy.get("[name=keyword]").type("cats").should("have.value", "cats");
    cy.get('[name="searchProducts"]').click();
    cy.get("[name=keyword]")
      .clear()
      .type("dogs")
      .should("have.value", "dogs")
      .clear()
      .type("cats")
      .clear();
    cy.get(
      '[href="/actions/Catalog.action?viewCategory=&categoryId=REPTILES"] > img'
    ).click();
    cy.get("tbody > :nth-child(2) > :nth-child(1) > a").click();
    cy.get("#BackLink > a").click();
    cy.get("#BackLink > a").click();
    cy.url().should(
      "eq",
      "https://petstore.octoperf.com/actions/Catalog.action"
    );
  });

  it("Add to cart a pet", () => {
    cy.get("[name=keyword]").type("Birds").should("have.value", "Birds");
    cy.get('[name="searchProducts"]').click();
    cy.get(
      '[href="/actions/Catalog.action?viewCategory=&categoryId=BIRDS"] > img'
    ).click();
    cy.get("tbody > :nth-child(2) > :nth-child(1) > a").click();
    cy.get("tbody > :nth-child(2) > :nth-child(1) > a").click();
    cy.get(".Button").click();
    cy.get('[href="/actions/Order.action?newOrderForm="]').click();
    cy.get("a").contains("Register Now!").click();
    cy.get("input[name=username]").click().clear().type(username);
    cy.get("input[name=password]").click().clear().type(password);

    cy.get("input[name=repeatedPassword]").click().clear().type(password);
    cy.get("input[name=account\\.firstName]")
      .click()
      .clear()
      .type("NewUserName");
    cy.get("input[name=account\\.lastName]")
      .click()
      .clear()
      .type("NewUserName");
    email = ranGen.genMeEmailcode();
    cy.get("input[name=account\\.email]").click().clear().type(email);
    cy.get("input[name=account\\.phone]").click().clear().type("0224466558");
    cy.get("input[name=account\\.address1]")
      .click()
      .clear()
      .type("Address nr1");
    cy.get("input[name=account\\.address2]")
      .click()
      .clear()
      .type("Address nr2");
    cy.get("input[name=account\\.city").click().clear().type("Desperado");
    cy.get("input[name=account\\.state").click().clear().type("Anada");
    cy.get("input[name=account\\.zip").click().clear().type("342116");
    cy.get("input[name=account\\.country")
      .click()
      .clear()
      .type("Beniioni")
      .should("have.value", "Beniioni");

    cy.get("input[name=account\\.listOption").check().should("be.checked");
    cy.get("input[name=account\\.bannerOption").check().should("be.checked");
    cy.get("input[name=newAccount").click();
    cy.get("#MenuContent > a:nth-child(1) > img").click();
    cy.get("a").contains("Proceed to Checkout").click();
    cy.get("input[name=newOrder").click();
    cy.get("a").contains("Confirm").click();

    cy.get("a").contains("Return to Main Menu").click();
    cy.url().should(
      "eq",
      "https://petstore.octoperf.com/actions/Catalog.action"
    );
  });

  it("Test multiple logo click home", () => {
    cy.get("#LogoContent > a > img").click();
    cy.get("#LogoContent > a > img").click();
    cy.url().should(
      "eq",
      "https://petstore.octoperf.com/actions/Catalog.action"
    );

    cy.reload(true);
    cy.get('[href="/actions/Account.action?signonForm="]').click();
    cy.get("#LogoContent > a > img").click();
    cy.url().should(
      "eq",
      "https://petstore.octoperf.com/actions/Catalog.action"
    );
    cy.get(
      '#QuickLinks > [href="/actions/Catalog.action?viewCategory=&categoryId=FISH"] > img'
    ).click();

    cy.get("[name=keyword]").type("FI-SW-01").should("have.value", "FI-SW-01");
    cy.get('[name="searchProducts"]').click();
    cy.get("#LogoContent > a > img").click();
    cy.url().should(
      "eq",
      "https://petstore.octoperf.com/actions/Catalog.action"
    );
  });

  it("Test diferente size of viewport", () => {
    cy.viewport("macbook-15");
    cy.viewport("macbook-13");
    cy.get("[name=keyword]").should("be.visible");
    cy.viewport("macbook-11");
    cy.viewport("ipad-2");
    cy.get("[name=keyword]").should("be.visible");
    cy.viewport("ipad-mini");
    cy.viewport("iphone-6+");
    cy.viewport("iphone-6");
    cy.get("[name=keyword]").should("be.visible");
    cy.viewport("iphone-5");
    cy.viewport("iphone-4");
    cy.get("[name=keyword]").should("be.visible");
    cy.viewport("iphone-3");
    cy.viewport("macbook-15");
    cy.viewport("ipad-2", "portrait");
    cy.get("[name=keyword]").should("be.visible");
    cy.viewport("iphone-4", "landscape");
    cy.viewport(1280, 720);
    cy.get("[name=keyword]").should("be.visible");
  });
});
