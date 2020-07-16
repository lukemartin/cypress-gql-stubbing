/// <reference types="cypress" />

describe("GraphQL Stubbing Example", () => {
	beforeEach(() => {
		cy.server();
		cy.route("POST", "/gql?operation=GetUsers", "fixture:users");
		cy.visit("http://localhost:3810");
	});

	it("should display a list of users", () => {
		cy.get("ul li").should("exist");
	});
});
