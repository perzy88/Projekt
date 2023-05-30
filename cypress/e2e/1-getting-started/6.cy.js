describe.only("pomagam", ()  => {
    it("wejście na stronę logowania", () =>{
        cy.visit("https://pomagam.pl/");
        cy.url().should('contain', 'pomagam');
        cy.get('[data-target="/auth/login-popup/?next=/"]').click();
        cy.get('.popup-title').should('be.visible');


        
    

    })
})