var password = "amParolaCea1MaiTare"; // amParolaCea1MaiTare
var email = "canomeI105@email.com"; //canomeI105@email.com

describe("Test funtionality for registred user", () => {
  beforeEach(() => {
    cy.visit("http://live.demoguru99.com");
  });
  Cypress.config("defaultCommandTimeout", 10000);
  it("Test update an account information ", () => {
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a")
      .should("contain", "Log In")
      .click();
    cy.get("#email")
      .should("have.id", "email")
      .type(email)
      .should("have.value", email);
    cy.get("#pass")
      .should("have.class", "input-text required-entry validate-password")
      .type(password)
      .should("have.value", password);
    cy.get("#send2").should("contain", "Login").click();
    cy.get("h1").should("have.text", "My Dashboard");
    cy.get("a")
      .contains("Account Information")
      .should("have.html", "Account Information")
      .click();
    cy.get("#firstname")
      .should("have.value", "Camoe")
      .clear()
      .type("Camoe")
      .should("have.value", "Camoe");
    cy.get("#current_password")
      .should("have.value", "")
      .type(password)
      .should("have.value", password);
    cy.get("button").contains("Save").click();
    cy.get("li > span").should(
      "have.text",
      "The account information has been saved."
    );
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a").click();
  });

  it("Test adding new address ", () => {
    Cypress.config("defaultCommandTimeout", 10000);
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a")
      .should("contain", "Log In")
      .click();
    cy.get("#email")
      .should("have.id", "email")
      .type(email)
      .should("have.value", email);
    cy.get("#pass")
      .should("have.class", "input-text required-entry validate-password")
      .type(password)
      .should("have.value", password);
    cy.get("#send2").should("contain", "Login").click();
    cy.get("h1").should("have.text", "My Dashboard");
    cy.get("a")
      .contains("Address Book")
      .should("have.html", "Address Book")
      .click();
    cy.get("button").contains("Add New Address").should("be.visible").click();
    cy.get("#firstname")
      .should("have.class", "input-text required-entry")
      .clear()
      .type("Miniowich")
      .should("have.value", "Miniowich");
    cy.get("#middlename").should("have.class", "input-text").clear().type("M");
    cy.get("#lastname")
      .should("have.class", "input-text required-entry")
      .clear()
      .type("Andrew")
      .should("have.value", "Andrew");

    cy.get("#telephone")
      .should("have.class", "input-text")
      .clear()
      .type("02244665874")
      .should("have.value", "02244665874");
    cy.get("#street_1")
      .clear()
      .type("New user addres")
      .should("have.value", "New user addres");
    cy.get("#city")
      .should("have.class", "input-text required-entry")
      .clear()
      .type("Budapest")
      .should("have.value", "Budapest");
    cy.get("#region_id").select("Maryland").should("have.value", "31");
    cy.get("#zip").clear().should("have.value", "").type("131678");
    cy.get("#country")
      .should("have.class", "validate-select")
      .select("Hungary")
      .should("have.value", "HU");
    cy.get("#primary_billing").check().should("be.checked");
    cy.get("#primary_shipping").check().should("be.checked");
    cy.get("button").contains("Save Address").click();
    cy.get("span")
      .contains("The address has been saved.")
      .and("have.text", "The address has been saved.");
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a").click();
  });

  it("Test for wishlist ", () => {
    Cypress.config("defaultCommandTimeout", 10000);
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a")
      .should("contain", "Log In")
      .click();
    cy.get("#email")
      .should("have.id", "email")
      .type(email)
      .should("have.value", email);
    cy.get("#pass")
      .should("have.class", "input-text required-entry validate-password")
      .type(password)
      .should("have.value", password);
    cy.get("#send2").should("contain", "Login").click();

    cy.get(".nav-1 > .level0").should("have.class", "level0").click();
    cy.get("#search").click().type("IPHONE").clear().type("IPHONE 6");
    cy.get("#search_autocomplete > ul").first().click();
    cy.get("#product-collection-image-2").click();
    cy.get("a").contains("Add to Wishlist").click();
    cy.get("span")
      .contains(
        "IPhone has been added to your wishlist. Click here to continue shopping"
      )
      .and(
        "have.text",
        "IPhone has been added to your wishlist. Click here to continue shopping."
      );

    cy.get(".nav-1 > .level0").should("have.class", "level0").click();
    cy.get("#search").click().clear().type("LG LCD");
    cy.get("#search_autocomplete > ul").first().click();
    cy.get("#product-collection-image-4").click();
    cy.get("a").contains("Add to Wishlist").click();
    cy.get("h1").should("have.text", "My Wishlist");
    cy.get("a").contains("Remove item").last().click();
    cy.get("h1").should("have.text", "My Wishlist");
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a").click();
  });

  it("Test to purchase items", () => {
    Cypress.config("defaultCommandTimeout", 10000);
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a")
      .should("contain", "Log In")
      .click();
    cy.get("#email")
      .should("have.id", "email")
      .type(email)
      .should("have.value", email);
    cy.get("#pass")
      .should("have.class", "input-text required-entry validate-password")
      .type(password)
      .should("have.value", password);
    cy.get("#send2").should("contain", "Login").click();

    cy.get(".nav-1 > .level0").should("have.class", "level0").click();
    cy.get("#search").clear().type("Samsung Galaxy");
    cy.get("#search_autocomplete > ul").first().click();
    cy.get(":nth-child(2) > .product-info > .actions > .button").click();
    cy.get("li > span").should(
      "have.text",
      "Samsung Galaxy was added to your shopping cart."
    );

    cy.get("#search").click().clear().type("Iphone 6");
    cy.get("#search_autocomplete > ul").first().click();
    cy.get(":nth-child(2) > .product-info > .actions > .button").click();
    cy.get("li > span").should(
      "have.text",
      "IPhone was added to your shopping cart."
    );
    cy.get("#search").click().clear().type("LG LCD");
    cy.get("#search_autocomplete > ul").first().click();
    cy.get(":nth-child(2) > .product-info > .actions > .button").click();
    cy.get("li > span").should(
      "have.text",
      "LG LCD was added to your shopping cart."
    );
    cy.get("#search").click().clear().type("Samsung LCD");
    cy.get("#search_autocomplete > ul").first().click();
    cy.get(
      ":nth-child(1) > .product-info > .actions > .button > :nth-child(1) > span"
    ).click();
    cy.get("li > span").should(
      "have.text",
      "Samsung LCD was added to your shopping cart."
    );
    cy.get(
      "#shopping-cart-table > tbody > tr.last.even > td.a-center.product-cart-remove.last > a"
    )
      .contains("Remove Item")
      .click();
    cy.get(".first > .product-cart-actions > .input-text")
      .click()
      .clear()
      .type("10");
    cy.get(".first > .product-cart-actions > .button > :nth-child(1) > span")
      .contains("Update")
      .click();
    cy.get("span").contains("Proceed to Checkout").click();
    cy.get("#billing-buttons-container > .button").click();
    cy.get("#shipping-method-buttons-container > .button").click();
    cy.get("#p_method_checkmo").check().should("be.checked");
    cy.get("#payment-buttons-container > .button").click();
    cy.get("#review-buttons-container > .button").click();

    cy.get(".large").click();
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > .links > ul > .first > a")
      .should("contain", "My Account")
      .click();
    cy.get("a").contains("Address Book").click();
    cy.get("h3")
      .contains("Default Shipping Address")
      .should("have.text", "Default Shipping Address");

    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a").click();
  });

  it("Test to check order status", () => {
    Cypress.config("defaultCommandTimeout", 10000);
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();
    cy.get("#header-account > div > ul > li.last > a")
      .should("contain", "Log In")
      .click();
    cy.get("#email")
      .should("have.id", "email")
      .type(email)
      .should("have.value", email);
    cy.get("#pass")
      .should("have.class", "input-text required-entry validate-password")
      .type(password)
      .should("have.value", password);
    cy.get("#send2").should("contain", "Login").click();
    cy.get("a").contains("View Order").first().click();
    cy.get("#order-info-tabs > .current").should(
      "have.text",
      "Order Information"
    );
    cy.get(".table-caption").contains("Items Ordered").should("be.visible");

    cy.get(".nobr").first().contains("10").and("have.text", "10");
    cy.get("#header > div > div.skip-links > div > a")
      .should("have.class", "skip-link skip-account")
      .click();

    cy.get("#header-account > div > ul > li.last > a").click();
  });
});
