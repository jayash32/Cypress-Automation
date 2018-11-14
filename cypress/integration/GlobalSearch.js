describe('testing', function() {
	beforeEach(function() {
		cy.login('colleague', 'colleague');
	});
	
	/* ----------------1.Search a Booking------------------ */
	
	it("Find a booking", function(){
		cy.get('#toggle-search').click()
		cy.get('input[placeholder="Blink Search"]').type('#551560')
		cy.wait(1500)
		cy.get("a[href= \'/auth/booking/551560\']").should('be.visible')
		//cy.get("[tabindex='0'][role='button'][href= \'/auth/booking/551560\']").click()
		
		cy.window().then((win) => {
		win.document.querySelector("[tabindex='0'][role='button'][href= \'/auth/booking/551560\']").click({force:true})
		})
		
		cy.wait(3000)
		cy.location("pathname").should("eq","/auth/booking/551560");
		
		});
		
		/* ----------------2.Search a Captain------------------ */
		
		it("Find a captain", function(){
		cy.get('#toggle-search').click()
		cy.get('input[placeholder="Blink Search"]').type('$1150')
		cy.wait(1500)
		cy.get("a[href= \'/auth/booking/551560\']").should('be.visible')
		//cy.get("[tabindex='0'][role='button'][href= \'/auth/supply-management/captain/1150/edit\']").click()
		
		cy.window().then((win) => {
		win.document.querySelector("[tabindex='0'][role='button'][href= \'/auth/supply-management/captain/1150/edit\']").click({force:true})
		})
		
		cy.wait(3000)
		cy.location("pathname").should("eq","/auth/supply-management/captain/1150/edit");
		
		});
		
		/* ----------------3.Search a Bus with BusId------------------ */
		
		it("Find a bus", function(){
		cy.get('#toggle-search').click()
		cy.get('input[placeholder="Blink Search"]').type('%246')
		cy.wait(1500)
		cy.get("a[href= \'/auth/booking/551560\']").should('be.visible')
		
		cy.window().then((win) => {
		win.document.querySelector("[tabindex='0'][role='button'][href= \'/auth/supply-management/bus/item/246\']").click({force:true})
		})
		
		cy.wait(3000)
		cy.location("pathname").should("eq","/auth/supply-management/bus/item/246");
		
		});
		
		/* ----------------4.Search a Bus with Bus Plate Number------------------ */
		
		it("Find a bus with Plate number", function(){
		cy.get('#toggle-search').click()
		cy.get('input[placeholder="Blink Search"]').type('^BX 1232')
		cy.wait(1500)
		cy.get("a[href= \'/auth/booking/551560\']").should('be.visible')

		cy.window().then((win) => {
		win.document.querySelector("[tabindex='0'][role='button'][href= \'/auth/supply-management/bus/item/338\']").click({force:true})
		})
		
		cy.wait(3000)
		cy.location("pathname").should("eq","/auth/supply-management/bus/item/338");
		
		});
		
		/* ----------------5.Search a Customer------------------ */
		
	/*	it("Find a customer", function(){
		cy.get('#toggle-search').click()
		cy.get('input[placeholder="Blink Search"]').type('@----')
		cy.wait(1500)
		cy.get("a[href= \'/auth/booking/551560\']").should('be.visible')
		//cy.get("[tabindex='0'][role='button'][href= \'/auth/booking/551560\']").click()
		
		cy.window().then((win) => {
		win.document.querySelector("[tabindex='0'][role='button'][href= \'/auth/booking/551560\']").click({force:true})
		})
		
		cy.wait(3000)
		cy.location("pathname").should("eq","/auth/booking/551560");
		
		});   */
})