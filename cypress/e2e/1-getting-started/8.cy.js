describe.only("pomagam", ()  => {
    it("nazwa zbiórki już istnieje", () =>{
        cy.visit("https://pomagam.pl/");
        cy.url().should('contain', 'pomagam');
        cy.get('.buttons > .btn-red').click();
        cy.get('#id_goal').type('222');
        cy.get('#id_name').type('test');
        cy.get('.d-flex > .btn-red').click();
        cy.get('.error-msg').should('be.visible');



        
    

    })
})