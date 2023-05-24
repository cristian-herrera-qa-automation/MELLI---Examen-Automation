export class PLP_Product{   
           // ELEMENTS
            Filter_Ubicacion_Class = '.ui-search-filter-groups > :nth-child(11)';
            Name_Ubicacion = "Capital Federal";
            Class_Price = ".price-tag-text-sr-only"
            Price = "8012 pesos"
            Title_Product= "Caloventor eléctrico Liliana CFH400 negro 220V-240V"
            
        // FUNCTIONS / METHODS    
        Filter_Ubicacion_CAPITALFEDERAL(){cy.get(this.Filter_Ubicacion_Class).contains(this.Name_Ubicacion).click()};
        Price_Product_Caloventor(){cy.get(this.Class_Price).contains(this.Price).should("exist")};
        Acceder_PDP(){cy.contains(this.Title_Product).click({force:true})};   
        Title_And_Price_Verification(){cy.contains(this.Title_Product).siblings(()=>{
         cy.get(this.Price)
        })}; 
};

export class PDP_Product{
        // ELEMENTS
           Card_Class= '.mr-32';
           title = "Caloventor eléctrico Liliana CFH400 negro 220V-240V ";
           price = "8012 pesos";
           path_PDP_product= '/caloventor-electrico-liliana-cfh400-negro-220v-240v/';

         // FUNCTIONS / METHODS    

           Verification_PDP(){cy.get(this.Card_Class).siblings(()=>{
               cy.contains(this.title).should("exist");
               cy.contains(this.price).should("exist");
           });}

           Path_Product_PDP(){cy.url().should("include",this.path_PDP_product)};

};