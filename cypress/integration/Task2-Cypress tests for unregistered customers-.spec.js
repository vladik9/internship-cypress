let orderId = "100014858";
let email = "my_email@email.com";
let lastName = "Ann";
describe("Test funtionality for unregistred user", () => {
  beforeEach(() => {
    cy.visit("http://live.demoguru99.com");
  });

  it("Test search an item", () => {
    cy.get(".nav-1 > .level0").should("have.class", "level0").click();
    cy.get("#search").click().type("IPHONE").clear().type("IPHONE 6");
    cy.get("h1").should("have.text", "Mobile");
    cy.get("a").contains("IPhone").and("have.text", "IPhone");
  });

  it("Test add an item to shoping cart", () => {
    cy.get(".nav-1 > .level0").should("have.class", "level0").click();
    cy.get("#search").click().type("IPHONE").clear().type("IPHONE 6");
    cy.get("#search_autocomplete > ul").first().click();
    cy.get(":nth-child(2) > .product-info > .actions > .button").click();
    cy.get("li > span").should(
      "have.text",
      "IPhone was added to your shopping cart."
    );
    cy.get("input[type=text]")
      .should("have.class", "input-text qty")
      .and("have.value", "1");
    cy.get(".a-center > .btn-remove").click();
    cy.get("h1").should("have.text", "Shopping Cart is Empty");
  });

  it("Test cypress to finalize a purchase", () => {
    cy.get(".nav-1 > .level0").should("have.class", "level0").click();
    cy.get("#search").click().type("IPHONE").clear().type("IPHONE 6");

    cy.get("#search_autocomplete > ul").first().click();

    cy.get(":nth-child(2) > .product-info > .actions > .button").click();

    cy.get("li > span").should(
      "have.text",
      "IPhone was added to your shopping cart."
    );
    cy.get(".method-checkout-cart-methods-onepage-bottom").click();
    cy.get("#onepage-guest-register-button").should("be.visible").click();
    cy.get("#billing\\:firstname")
      .type("Nomane")
      .should("have.value", "Nomane");
    cy.get("#billing\\:middlename").type("A").should("have.value", "A");
    cy.get("#billing\\:lastname").type("Ann").should("have.value", "Ann");
    cy.get("#billing\\:company")
      .should("have.id", "billing:company")
      .clear()
      .type("Unregistred SA")
      .should("have.value", "Unregistred SA");
    cy.get("#billing\\:email").type(email).should("have.value", email);
    cy.get("#billing\\:street1")
      .should("have.id", "billing:street1")
      .clear()
      .type("The street of freedom")
      .should("have.value", "The street of freedom");
    cy.get("#billing\\:street2")
      .should("have.id", "billing:street2")
      .clear()
      .type("the new way nr.1")
      .should("have.value", "the new way nr.1");
    cy.get("#billing\\:city")
      .clear()
      .type("Desperado")
      .should("have.value", "Desperado");
    cy.get("#billing\\:country_id").select("Togo").should("have.value", "TG");
    cy.get("#billing\\:postcode")
      .clear()
      .type("2277745")
      .should("have.value", "2277745");
    cy.get("#billing\\:telephone")
      .clear()
      .type("252-379-7411")
      .should("have.value", "252-379-7411");
    cy.get("#billing\\:fax").clear().type("none").should("have.value", "none");
    cy.get("#billing-buttons-container > .button").click();
    cy.get("#shipping-method-buttons-container > .button").click();
    cy.get("#p_method_checkmo")
      .should("not.be.checked")
      .check()
      .should("be.checked");
    cy.get("#payment-buttons-container > .button").click();
    cy.get("#review-buttons-container > .button").click();
    cy.get(".sub-title").should("have.text", "Thank you for your purchase!");
    cy.get(".col-main > :nth-child(3)").each(($el, index, $list) => {
      const data = $el[0].childNodes[0].data;
      let array = [];
      for (let i = 0; i < data.length; i++) {
        if (!isNaN(data[i])) {
          if (data[i] != " ") {
            array.push(parseInt(data[i], 10));
          }
        }
      }
      orderId = +array.join("");
    });
  });

  it("Test for checking the order status", () => {
    cy.get("a").contains("Orders and Returns").first().click();
    cy.get("#oar_order_id").type(orderId).should("have.value", orderId);
    cy.get("#oar_billing_lastname")
      .type(lastName)
      .should("have.value", lastName);
    cy.get("#oar_email").type(email).should("have.value", email);
    cy.get(".buttons-set > .button").should("be.visible", true).click();
    cy.get(".current").should("have.text", "Order Information");
    cy.get("h1").should("have.text", `Order #${orderId} - Pending`);
    cy.get(".product-name").should("have.text", "IPhone");
  });
});
