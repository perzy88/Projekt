describe.only("pomagam", ()  => {
    it("błędna kwota zbiórki", () =>{
        cy.visit("https://pomagam.pl/");
        cy.url().should('contain', 'pomagam');
        cy.get('.buttons > .btn-red').click();
        cy.get('#id_goal').type('000');
        cy.get('#id_name').type('pomocpomoc123456');
        cy.get('.d-flex > .btn-red').click();
        cy.get('.error-msg').should('be.visible');



        
    

    })
})