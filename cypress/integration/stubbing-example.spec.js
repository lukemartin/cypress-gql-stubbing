/// <reference types="cypress" />

const SAMPLE_USERS = [
	{ id: 1, name: "Jeff", __typename: "User" },
	{ id: 2, name: "Mavis", __typename: "User" },
	{ id: 3, name: "Beryl", __typename: "User" },
	{ id: 4, name: "Shadow", __typename: "User" },
	{ id: 5, name: "Buzz", __typename: "User" },
];

describe("GraphQL Stubbing Example", () => {
	beforeEach(() => {
		cy.server();
		cy.route("POST", "/gql?operation=GetUsers", {
			data: { users: SAMPLE_USERS },
		});
		cy.visit("http://localhost:3810");
	});

	it("should display a list of users", () => {
		cy.get("ul li").should("exist");
	});
});
