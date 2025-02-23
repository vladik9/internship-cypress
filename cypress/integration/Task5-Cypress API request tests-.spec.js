describe("Test REST api", () => {
  beforeEach(() => {});

  it("Test a GET request", () => {
    cy.request(
      "GET",
      "https://petstore.swagger.io/v2/pet/findByStatus?status=sold"
    ).then((response) => {
      const name = response.body[1].name;
      expect(response.status).to.eq(200);
      alert(`The name was: ${name}`);
      console.log(response.body);
    });
  });

  it("Test a POST request Pet Store", () => {
    const jsBody = {
      id: 5,
      petId: 2,
      quantity: 1,
      shipDate: "2021-08-20T19:00:00.000Z",
      status: "placed",
      complete: true,
    };
    cy.request(
      "POST",
      "https://petstore.swagger.io/v2/store/order",jsBody
    ).then((response) => {
      if (response.body.status === "placed") alert("The order is placed!");
      expect(response.status).to.eq(200);
      console.log(response.body);
    });
  });

  it("Test a Login GET request", () => {
    const userName = "admin_test";
    const userPassword = "password1234";
    const url = `https://petstore.swagger.io/v2/user/login?username=${userName}&password=${userPassword}`;
    cy.request("GET", url).then((response) => {
      if (response.status === 200) alert("The user has successfully login!");
      expect(response.status).to.eq(200);
      console.log(response.body);
    });
  });

  it("Test a POST request Create a WhiteList", () => {
    const jsBody = [
      {
        id: 0,
        username: "NewUserForTest",
        firstName: "NameC",
        lastName: "NameV",
        email: "vv.add.email@email.com",
        password: "somePassword",
        phone: "0231465498",
        userStatus: 1,
      },
    ];
    cy.request(
      "POST",
      " https://petstore.swagger.io/v2/user/createWithList",
      jsBody
    ).then((response) => {
      if (response.body.message === "ok")
        alert("The new user is added successfully!");
      expect(response.status).to.eq(200);
      console.log(response.body);
    });
  });
});
