describe('testing', function() {
	beforeEach(function() {
		cy.login('colleague', 'colleague');
	});
   /* it("Assign Line to Bus", function(){
		cy.get('#supply-menu').click()
		cy.get("a[href= \'/auth/supply-management/bus\']").click()
		cy.wait(2000);
		cy.get('tbody>tr').eq(0).click();
		cy.wait(2000);
		cy.get('#assign-line').click()
		
		cy
			.get('input[id="Line"]')
			.type('Dilkusha Forum - Millenium Mall')
			.wait(1500)
			.type('{downarrow}')
			.type('{enter}')
		
		cy.get('#save-button').should('be.visible')
		cy.get('#save-button').click()
		cy.get('#snackbar').should('contain', 'Line Assigned Successfully')
	
		});
		*/
		
		
		
		it("Deleting a line from bus", function(){
		cy.get('#supply-menu').click()
		cy.get("a[href= \'/auth/supply-management/bus\']").click()
		cy.wait(2000)
		cy.get('tbody>tr').eq(0).click()
		cy.wait(3000)
		cy.get('#edit-button').should('be.visible')
		cy.get('#edit-button').click()
		cy.wait(2000)
		cy.get('#delete').should('be.visible')
		cy.get('#delete').click()
		//cy.get('#snackbar').should('contain','Assigned Bus deleted Successfully')
		});
		
		
})