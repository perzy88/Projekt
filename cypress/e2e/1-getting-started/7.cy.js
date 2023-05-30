describe.only("pomagam", ()  => {
    it("wejście na stronę rejestracji", () =>{
        cy.visit("https://pomagam.pl/");
        cy.url().should('contain', 'pomagam');
        cy.get('[data-target="/auth/signup-intro/"]').click();
        cy.get('.form-group > .socialaccount_provider').should('be.visible');


        
       
        
    

    })
})