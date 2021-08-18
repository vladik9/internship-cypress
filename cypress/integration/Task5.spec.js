describe("Test REST api", () => {
  beforeEach(() => {});

  it("Test a GET request", () => {
    cy.request(
      "GET",
      "https://petstore.swagger.io/v2/pet/findByStatus?status=sold"
    ).then((response) => {
      const name = response.body[0].name;
      alert(`The name was: ${name}`);
    });
  });

  it("Test a POST request", () => {
    cy.request("POST", "https://petstore.swagger.io/v2/store/order", {
      id: 5,
      petId: 2,
      quantity: 1,
      shipDate: "2021-08-20T19:00:00.000Z",
      status: "placed",
      complete: true,
    }).then((response) => {
      console.log(response.body);
      if (response.body.status === "placed") alert("The order is placed!");
    });
  });

  it("Test a Login GET request", () => {
    cy.request(
      "GET",
      " https://petstore.swagger.io/v2/user/login?username=Ann&password=1234"
    ).then((response) => {
      if (response.status === 200) alert("The user has successfully login!");
    });
  });
});
