describe('Supply Management', function() {
	beforeEach(function() {
		cy.login('colleague', 'colleague');
	});
			/* ----------------1.Add Bus------------------ */
  
	it("Add Bus", function() {
		
		cy.get('#supply-menu').click()
		cy.get("a[href= \'/auth/supply-management/bus\']").click()
		cy.wait(5000)
		cy.get('#add-bus').click()
		cy.location("pathname").should("eq", "/auth/supply-management/bus/add");
		
		cy.get('input[name="title"]').type('Aero Bus')
		cy.get('input[name="plateNumber"]').type('AB 0918')
		cy.get('input[name="vehicleModel"]').type('Honda')
		cy.get('input[name="vehicleMake"]').type('Honda')
		cy.get('input[name="modelYear"]').type('2010')
		cy.get('input[name="seatingCapacity"]').type('50')
		cy.get('#Line').type('Heliopolis-Maadi')
		.type('{downarrow}')
		.type('{enter}')
		cy.get('#Line').should('have.value', 'Heliopolis-Maadi')
		cy.get('#supplier-assigned').type('AL Hitham Group')
		.type('{downarrow}')
		.type('{enter}')
		cy.get('#supplier-assigned').should('have.value', 'AL Hitham Group')
		cy.get('#save-button').should('be.visible')
		//cy.get('#save-button').click()
		//cy.get('#snackbar').should('contain', 'Bus Added Successfully')
		
	});
	/* ----------------2.Edit Bus------------------ */
	
	it("Edit Bus", function() {
		cy.get('#supply-menu').click()
		cy.get("a[href= \'/auth/supply-management/bus\']").click()
		cy.wait(2000)
		cy.get('tbody>tr').eq(0).click()
		cy.wait(2000)
		cy.get('#edit-button').should('be.visible')
		cy.get('#edit-button').click()
		cy.get('#supplier-assigned').clear()
		cy.get('#supplier-assigned').type('Al Moddather')
		.type('{downarrow}')
		.type('{enter}')
		cy.get('#supplier-assigned').should('have.value', 'Al Moddather')
		cy.get('#save-button').click()
		cy.get('#snackbar').should('contain', 'Bus Supplier Updated Successfully')
		});
		
		/* ----------------3.Assign Line to Bus------------------ */
		
		it("Assign Line to Bus", function(){
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
		
		/* ----------------4.Deleting a Line from Bus------------------ */
		
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
		cy.get('#snackbar').should('contain','Bus line deleted Successfully')
		});
		
		/* ----------------5.Add Captain------------------ */
	
	it("Add Captain", function(){
		cy.get('#supply-menu').click()
		cy.get("a[href= \'/auth/supply-management/captain\']").click()
		cy.wait(5000)
		cy.get('#add-captain').click()
		cy.location("pathname").should("eq", "/auth/supply-management/captain/add");
		
		cy.get('input[name="firstName"]').type('Mahad')
		cy.get('input[name="lastName"]').type('Alvi')
		cy.get('input[name="phoneNumber"]').type('923323809848')   //Add a new number to add new captain
		cy.get('input[name="pin"]').type('1234')
		cy.get('input[name="cnic"]').type('1234567890123')
		cy.get('input[name="dateOfBirth"]').type('1989-02-01')
		cy.get('#supplier-assigned').type('AL Hitham Group')
		.type('{downarrow}')
		.type('{enter}')
		cy.get('#supplier-assigned').should('have.value', 'AL Hitham Group')
		cy.get('input[name="homeAddress"]').type('Dubai')
		cy.get('input[name="drivingLicenceNumber"]').type('2497009')
		cy.get('#save-button').click()
		cy.get('#snackbar').should('contain', 'Captain is Already Registered with Phone Number') //Adding redundant number
		//cy.get('#snackbar').should('contain', 'Captain Added Successfully')
		
	});
	
	/* ----------------6.Edit Captain------------------ */
	
	it("Edit Captain Information", function(){
		cy.get('#supply-menu').click()
		cy.get("a[href= \'/auth/supply-management/captain\']").click()
		cy.wait(2000)
		cy.get('tbody>tr').eq(0).click()
		cy.wait(2000)
		cy.get('#edit-button').should('be.visible')
		cy.get('#edit-button').click()
		cy.get('#supplier-assigned').clear()
		cy.get('#supplier-assigned').type('Al Moddather')
		.type('{downarrow}')
		.type('{enter}')
		cy.get('#supplier-assigned').should('have.value', 'Al Moddather')
		cy.get('input[name="phoneNumber"]').clear()
		cy.get('input[name="phoneNumber"]').type('923323809011') //Add a new number to edit captain 
		cy.get('#save-button').should('be.visible')
		cy.get('#save-button').click()
		cy.get('#snackbar').should('contain','Captain Updated Successfully')
		});
	
			/* ----------------7.Assign a Bus to captain------------------ */
			
		it("Assign Bus to Captain", function(){
		cy.get('#supply-menu').click()
		cy.get("a[href= \'/auth/supply-management/captain\']").click()
		cy.wait(2000);
		cy.get('tbody>tr').eq(0).click();
		cy.wait(2000);
		cy.get('#assign-bus').click()
		
		cy
			.get('input[id="busPlate#"]')
			.type('BX 2837')
			.wait(1500)
			.type('{downarrow}')
			.type('{enter}')
		
		cy.get('#save-button').should('be.visible')
		cy.get('#save-button').click()
		//cy.get('#snackbar').should('contain', 'Bus Assigned Successfully')
		cy.get('#snackbar').should('contain','Bus is already assigned to captain.')
		});
		
		/* ----------------8.Change Captain Status------------------ */
		
		it("Change Captain Status", function(){
		cy.get('#supply-menu').click()
		cy.get("a[href= \'/auth/supply-management/captain\']").click()
		cy.wait(2000)
		cy.get('tbody>tr').eq(0).click()
		cy.wait(3000)
		cy.get('#edit-button').should('be.visible')
		cy.get('#edit-button').click()
		cy.wait(2000)
		
		cy.get("[aria-haspopup='true'][role='button']").click()
		cy.get("[tabindex='-1'][role='option'][data-value='2']").click()
		cy.get('textarea[name="statusChangeReason"]').type("Blocking the captain")
		cy.get('#save-button').should('be.visible')
		
		cy.window().then((win) => {
		win.document.querySelector("[role='document'] #save-button").click({force:true})
		})
		
		cy.get('#save-button').should('be.visible')
		cy.get('#save-button').click()
		cy.get('#snackbar').should('contain','Captain Updated Successfully')
		});
		
		/* ----------------9.Deleting a bus from captain------------------ */
		
		it("Deleting a bus from captain", function(){
		cy.get('#supply-menu').click()
		cy.get("a[href= \'/auth/supply-management/captain\']").click()
		cy.wait(2000)
		cy.get('tbody>tr').eq(0).click()
		cy.wait(3000)
		cy.get('#edit-button').should('be.visible')
		cy.get('#edit-button').click()
		cy.wait(2000)
		cy.get('#delete-iconButton').should('be.visible')
		cy.get('#delete-iconButton').click()
		cy.get('#snackbar').should('contain','Assigned Bus deleted Successfully')
		});
		
		/* ----------------10.Edit a Supplier's Information------------------ */
		
		it("Edit Supplier Information", function(){
		cy.get('#supply-menu').click()
		cy.get("a[href= \'/auth/supply-management/supplier\']").click()
		cy.wait(2000)
		cy.get('tbody>tr').eq(0).click()
		cy.wait(3000)
		cy.get('#edit-button').should('be.visible')
		cy.get('#edit-button').click()
		cy.wait(2000)
		cy.get('input[name="email"]').clear()
		cy.get('input[name="email"]').type('new@gmail.com')
		cy.get('#save-button').should('be.visible')
		cy.get('#save-button').click()
		cy.get('#snackbar').should('contain','Supplier Updated Successfully')
		
		});
})
	

