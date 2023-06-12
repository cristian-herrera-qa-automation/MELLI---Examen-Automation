export class PDP_Product{
    // ELEMENTS //
       Card_Class= '.mr-32';
       title_product = "Calefactor eléctrico Magiclick C1007";
       price_product = "5599 pesos";
       path_PDP_product= '/calefactor-electrico-magiclick-c1007';

     // FUNCTIONS // METHODS // 

       Verification_PDP(){return cy.get(this.Card_Class)}
       Title(){return cy.contains(this.title_product)};
       Price(){return cy.contains(this.price_product)};
       Path_Product_PDP(){return cy.url().should("include",this.path_PDP_product)};
};