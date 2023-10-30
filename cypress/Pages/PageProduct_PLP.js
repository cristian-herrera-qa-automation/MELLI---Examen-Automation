export class PLP_Product{   
           // ELEMENTS //
            Filter_Ubicacion_Class = '.ui-search-filter-name'
            Name_Ubicacion = "Capital Federal";
            Class_Price = ".price-tag-text-sr-only"
            class_1_product = '.ui-search-layout__item'
            classtitle= '.ui-search-item__title'
            class_price = '.andes-money-amount__fraction'
            
        // FUNCTIONS // METHODS //
        Filter_Ubicacion(){return cy.get(this.Filter_Ubicacion_Class).contains(this.Name_Ubicacion)};
        first_product(){return cy.get(this.class_1_product,{timeout:2000})}
        first_title(){return cy.get(this.classtitle)}
        firts_price(){return cy.get(this.class_price)}
};
