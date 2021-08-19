let usename = "standard_user";
let password = "secret_sauce";

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
    cy.go("back");
    cy.get(":nth-child(8) > .Button").click();
    cy.get("#BackLink > a").click();
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
