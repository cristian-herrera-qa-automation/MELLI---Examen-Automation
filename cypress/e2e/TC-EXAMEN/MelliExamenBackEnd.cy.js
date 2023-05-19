/// <reference types="cypress" />

describe('-- AUTOMATIZACION BACK END --', () => {

    it('Elegi la query number: 10 ', () => {
        cy.api("https://api.mercadolibre.com/sites/MLA/search?q=10").as('MELLI')
        cy.get('@MELLI').should((response) => {         
         expect(response.headers).to.have.property('date')
         expect(response.headers).to.have.property("content-type")
         expect(response.headers).to.have.property("access-control-allow-methods").eq("PUT, GET, POST, DELETE, OPTIONS")    
         expect(response.body.paging.primary_results).to.eq(1000);  
         expect(response.body.paging.offset).to.eq(0);    
         expect(response.body.paging.limit).to.eq(50);     
      });
    });
});

      it(' Elegi el Producto con el ID: MLA1411360540', () => {
        cy.api("https://api.mercadolibre.com/items/MLA1411360540").as('MELLI')
        cy.get('@MELLI').should((response) => {   
        
        expect(response.body).to.have.property('title').eq("Scania  113 320hp ")
        expect(response.body).to.have.property('price').to.eq(17000000)
        expect(response.body).to.have.property("base_price").to.eq(17000000)
        expect(response.body).to.have.property("accepts_mercadopago").to.eq(true)
        expect(response.body).to.have.property('currency_id').to.eq("ARS")
        
      });
    });  