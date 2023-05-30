describe.only("pomagam", ()  => {
    it("nie można stworzyć zbiórki bez rejestracji", () =>{
        cy.visit("https://pomagam.pl/");
        cy.url().should('contain', 'pomagam');
        cy.get('.buttons > .btn-red').click();
        cy.get('#id_goal').type('222');
        cy.get('#id_name').type('pomocpomoc123456');
        cy.get('.d-flex > .btn-red').click();
        cy.get('.form-group > .socialaccount_provider').should('be.visible');



        
    

    })
})