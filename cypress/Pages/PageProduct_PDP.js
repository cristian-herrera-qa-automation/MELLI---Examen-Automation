export class PDP_Product{
    // ELEMENTS //
       title_class = '.ui-pdp-title'
       price_class = '.andes-money-amount__fraction'
       img_class = '.ui-pdp-image.ui-pdp-gallery__figure__image'

     // FUNCTIONS // METHODS // 
       title_pdp(){return cy.get(this.title_class,{timeout:3000})}
       price_pdp(){return cy.get(this.price_class)}
       img_pdp(){return cy.get(this.img_class)}
};