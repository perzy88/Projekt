describe.only("alpan", ()  => {
    it("wejście w zakładkę kontakt", () =>{
        cy.visit("https://alpan.pl/");
        cy.url().should('contain', 'alpan');
        cy.get('#menu-item-25 > a').click();
        cy.url().should('contain', 'kontakt');


    

    })
})