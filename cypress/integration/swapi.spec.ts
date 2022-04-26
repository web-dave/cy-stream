/// <reference types="cypress" />

const swapi = "https://swapi.dev/api/starships/10";

describe("swapi api tests", () => {
  it("check the status of the millenium falcon", () => {
    cy.fixture("millennium-falcon.json").as("theFalcon");

    cy.request(swapi).then((response) => {
      cy.get("@theFalcon").then((falcon) => {
        cy.screenshot("foobar");
        cy.log(response.body);
        expect(response.status).to.eq(200);
        expect(response.headers["content-type"]).to.eq("application/json");
        expect(response.body.name).to.eq("Millennium Falcon");
        expect(response.body).to.deep.equal(
          falcon,
          "The falcon is not the millennium"
        );
      });
    });
  });
});

//.its("status").should("be.equal", 200);
//   .and("include", "application/json");
