export class PLP_Product{   
           // ELEMENTS //
            Filter_Ubicacion_Class = '.ui-search-filter-groups > :nth-child(10)';
            Name_Ubicacion = "Capital Federal";
            Class_Price = ".price-tag-text-sr-only"
            Price = "5149 pesos"
            Title_Product= "Calefactor eléctrico Eiffel E-501"
            
        // FUNCTIONS // METHODS //
        Filter_Ubicacion(){return cy.get(this.Filter_Ubicacion_Class).contains(this.Name_Ubicacion)};
        Price_Calefactor(){return cy.contains(this.Price)}
        Acceder_PDP(){return cy.contains(this.Title_Product)};   
        Title_And_Price_Verification(){return cy.contains(this.Title_Product)}
};
