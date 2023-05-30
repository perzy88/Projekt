describe.only("alpan", ()  => {
    it("przejscie do zakładki odbiorcy", () =>{
        cy.visit("https://alpan.pl/");
        cy.url().should('contain', 'alpan');
        cy.get('#menu-item-21 > a').click();
        cy.url().should('contain', 'odbiorcy');


        

        
       


       
  



    

    })
})