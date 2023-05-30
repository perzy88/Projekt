describe.only("pomagam", ()  => {
    it("wejście na stronę nowej zbiórki", () =>{
        cy.visit("https://pomagam.pl/");
        cy.url().should('contain', 'pomagam');
        cy.get('.buttons > .btn-red').click();
        cy.url().should('contain', 'zbiorka');
    

    })
})