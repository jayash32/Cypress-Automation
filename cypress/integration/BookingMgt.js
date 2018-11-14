describe('testing', function() {
	beforeEach(function() {
		cy.login('colleague', 'colleague');
	});
   
   it("Search a Booking", function() {
		
		cy.get('input[name="bookingId"]').type('551560')
		
		cy.window().then((win) => {
		win.document.querySelector("[tabindex='0'][type='submit']").click({force:true})
		})
		
		cy.wait(3000)
		cy.get("a[href= \'/auth/booking/551560\']").should('be.visible')
		
		cy.window().then((win) => {
		win.document.querySelector("[tabindex='0'][role='button'][href= \'/auth/booking/551560\']").click({force:true})
		})
		
		cy.wait(3000)
		cy.location("pathname").should("eq","/auth/booking/551560");
	
		});
		
		
	
		
		
})