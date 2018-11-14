// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", (user, pass) => { 
	cy.visit("/login");
	cy
      .get('input[name="username"]')
      .type(user)
      .should("have.value", user);
	cy
      .get('input[name="password"]')
      .type(pass)
      .should("have.value", pass);
	cy.get('form').submit();
			cy.location("pathname").should("eq", "/auth");	

	
});
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
