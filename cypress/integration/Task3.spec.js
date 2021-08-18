var password = "amParolaCea1MaiTare"; // amParolaCea1MaiTare
var email = "canomeI105@email.com"; //canomeI105@email.com

describe("Test funtionality for registred user", () => {
  beforeEach(() => {
    cy.visit("http://live.demoguru99.com");
  });

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

  // it("Test adding new address ", () => {
  //   cy.get("#header > div > div.skip-links > div > a")
  //     .should("have.class", "skip-link skip-account")
  //     .click();
  //   cy.get("#header-account > div > ul > li.last > a")
  //     .should("contain", "Log In")
  //     .click();
  //   cy.get("#email")
  //     .should("have.id", "email")
  //     .type(email)
  //     .should("have.value", email);
  //   cy.get("#pass")
  //     .should("have.class", "input-text required-entry validate-password")
  //     .type(password)
  //     .should("have.value", password);
  //   cy.get("#send2").should("contain", "Login").click();
  //   cy.get("h1").should("have.text", "My Dashboard");
  //   cy.get("a")
  //     .contains("Address Book")
  //     .should("have.html", "Address Book")
  //     .click();
  //   cy.get("a")
  //     .contains("Change Billing Address")
  //     .should("have.text", "Change Billing Address")
  //     .click();
  //   cy.get("#street_2")
  //     .should("have.class", "input-text")
  //     .clear()
  //     .type("the new way nr.2")
  //     .should("have.value", "the new way nr.2");
  //   cy.get("button").contains("Save Address").click();
  //   cy.get("span")
  //     .contains("The address has been saved.")
  //     .should("have.text", "The address has been saved.");
  //   cy.get("#header > div > div.skip-links > div > a")
  //     .should("have.class", "skip-link skip-account")
  //     .click();
  //   cy.get("#header-account > div > ul > li.last > a").click();
  // });

  // it("Test for wishlist ", () => {
  //   cy.get("#header > div > div.skip-links > div > a")
  //     .should("have.class", "skip-link skip-account")
  //     .click();
  //   cy.get("#header-account > div > ul > li.last > a")
  //     .should("contain", "Log In")
  //     .click();
  //   cy.get("#email")
  //     .should("have.id", "email")
  //     .type(email)
  //     .should("have.value", email);
  //   cy.get("#pass")
  //     .should("have.class", "input-text required-entry validate-password")
  //     .type(password)
  //     .should("have.value", password);
  //   cy.get("#send2").should("contain", "Login").click();

  //   cy.get(".nav-1 > .level0").should("have.class", "level0").click();
  //   cy.get("#search").click().type("IPHONE").clear().type("IPHONE 6");
  //   cy.get("#search_autocomplete > ul").first().click();
  //   cy.get("#product-collection-image-2").click();
  //   cy.get("a").contains("Add to Wishlist").click();
  //   cy.get("span")
  //     .contains(
  //       "IPhone has been added to your wishlist. Click here to continue shopping"
  //     )
  //     .and(
  //       "have.text",
  //       "IPhone has been added to your wishlist. Click here to continue shopping."
  //     );

  //   cy.get("#header > div > div.skip-links > div > a")
  //     .should("have.class", "skip-link skip-account")
  //     .click();
  //   cy.get("#header-account > div > ul > li.last > a").click();
  // });

  // it("Test to purchase items", () => {
  //   cy.get("#header > div > div.skip-links > div > a")
  //     .should("have.class", "skip-link skip-account")
  //     .click();
  //   cy.get("#header-account > div > ul > li.last > a")
  //     .should("contain", "Log In")
  //     .click();
  //   cy.get("#email")
  //     .should("have.id", "email")
  //     .type(email)
  //     .should("have.value", email);
  //   cy.get("#pass")
  //     .should("have.class", "input-text required-entry validate-password")
  //     .type(password)
  //     .should("have.value", password);
  //   cy.get("#send2").should("contain", "Login").click();
  //   cy.get(".nav-1 > .level0").should("have.class", "level0").click();
  //   cy.get("#search").click().type("IPHONE").clear().type("IPHONE 6");
  //   cy.get("#search_autocomplete > ul").first().click();
  //   cy.get(":nth-child(2) > .product-info > .actions > .button").click();
  //   cy.get("li > span").should(
  //     "have.text",
  //     "IPhone was added to your shopping cart."
  //   );
  //   cy.get(".a-center > .btn-remove").click();
  //   cy.get("h1").should("have.text", "Shopping Cart is Empty");
  //   cy.get(".nav-1 > .level0").should("have.class", "level0").click();
  //   cy.get("#search").click().type("IPHONE").clear().type("IPHONE 6");
  //   cy.get("#search_autocomplete > ul").first().click();
  //   cy.get(":nth-child(2) > .product-info > .actions > .button").click();
  //   cy.get("li > span").should(
  //     "have.text",
  //     "IPhone was added to your shopping cart."
  //   );
  //   cy.get(".method-checkout-cart-methods-onepage-bottom").click();
  //   cy.get("#billing-address-select").select("New Address");
  //   cy.get("#billing\\:company")
  //     .should("have.id", "billing:company")
  //     .clear()
  //     .type("TescComany SA")
  //     .should("have.value", "TescComany SA");
  //   cy.get("#billing\\:street1")
  //     .should("have.id", "billing:street1")
  //     .clear()
  //     .type("The street of freedom")
  //     .should("have.value", "The street of freedom");
  //   cy.get("#billing\\:street2")
  //     .should("have.id", "billing:street2")
  //     .clear()
  //     .type("the new way nr.1")
  //     .should("have.value", "the new way nr.1");
  //   cy.get("#billing\\:city")
  //     .clear()
  //     .type("Desperado")
  //     .should("have.value", "Desperado");
  //   cy.get("#billing\\:region")
  //     .should("have.class", "input-text")
  //     .clear()
  //     .type("Dominicana's Country")
  //     .should("have.value", "Dominicana's Country");
  //   cy.get("#billing\\:postcode")
  //     .clear()
  //     .type("2277745")
  //     .should("have.value", "2277745");
  //   cy.get("#billing\\:country_id").select("Togo").should("have.value", "TG");
  //   cy.get("#billing\\:telephone")
  //     .clear()
  //     .type("252-379-7411")
  //     .should("have.value", "252-379-7411");
  //   cy.get("#billing\\:fax").clear().type("none").should("have.value", "none");
  //   cy.get("#billing-buttons-container > .button").click();
  //   cy.get("#shipping-method-buttons-container > .button").click();
  //   cy.get("#p_method_checkmo")
  //     .should("not.be.checked")
  //     .check()
  //     .should("be.checked");
  //   cy.get("#payment-buttons-container > .button").click();
  //   cy.get("#review-buttons-container > .button").click();
  //   cy.get("#header > div > div.skip-links > div > a")
  //     .should("have.class", "skip-link skip-account")
  //     .click();

  //   cy.get("h1").should("have.text", "Your order has been received.");
  //   cy.get("#header > div > div.skip-links > div > a")
  //     .should("have.class", "skip-link skip-account")
  //     .click();
  //   cy.get("#header-account > div > ul > li.last > a").click();
  // });

  // it("Test cypress to check order status", () => {
  //   cy.get("#header > div > div.skip-links > div > a")
  //     .should("have.class", "skip-link skip-account")
  //     .click();
  //   cy.get("#header-account > div > ul > li.last > a")
  //     .should("contain", "Log In")
  //     .click();
  //   cy.get("#email")
  //     .should("have.id", "email")
  //     .type(email)
  //     .should("have.value", email);
  //   cy.get("#pass")
  //     .should("have.class", "input-text required-entry validate-password")
  //     .type(password)
  //     .should("have.value", password);
  //   cy.get("#send2").should("contain", "Login").click();
  //   cy.get("a").contains("View Order").first().click();
  //   cy.get("#order-info-tabs > .current").should(
  //     "have.text",
  //     "Order Information"
  //   );
  //   cy.get("#header > div > div.skip-links > div > a")
  //     .should("have.class", "skip-link skip-account")
  //     .click();
  //   cy.get("#header-account > div > ul > li.last > a").click();
  // });
});
