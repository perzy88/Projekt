describe.only("pomagam", ()  => {
    it("wejście na stronę", () =>{
        cy.visit("https://pomagam.pl/");
        cy.url().should('contain', 'pomagam');
        
    

    })
})