describe('Colleague Portal', function() {
	

  
  it("Login Test", function() {
	      
    cy.visit("/login");
	cy.title().should('eql', 'Careem Colleague Portal');
	//cy.get('input[name="username"]').type ('abc')
	//cy.get('input[name="password"]').type ('abc')
		
	cy
      .get('input[name="username"]')
      .type(this.colleague_cred.username)
      .should("have.value", this.colleague_cred.username);
	  
	  cy
      .get('input[name="password"]')
      .type(this.colleague_cred.password)
      .should("have.value", this.colleague_cred.password);
  
	cy.get('form').submit();
	//cy.wait(5000);
	cy.location("pathname").should("eq","/auth");
	
	})
	

 
})
