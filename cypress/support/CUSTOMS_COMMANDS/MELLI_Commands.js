Cypress.Commands.add("VISIT_BASEURL_MELLI",(url)=>{
    cy.visit(url);
    cy.url().should("include","mercadolibre.com.ar");
});

Cypress.Commands.add("NAVEGABILIDAD_TEC_CELULARES_SMARPHONES",(texto)=>{
    cy.contains('Categorías').trigger("mouseover").click();
    cy.contains("Tecnología").trigger("mouseover");
    cy.contains("Celulares y Smartphones").click();  
    cy.wait(3000);
    cy.get('.ui-search-breadcrumb__title').contains("Celulares y Smartphones").should("be.visible");
    cy.url().should("include",texto);
});

Cypress.Commands.add("NAVEGABILIDAD_Electrodomesticos_Calefaccion",(text)=>{
    cy.wait(2000)
    cy.contains('Categorías').trigger("mouseover").click();
    cy.contains("Electrodomésticos").click();
    cy.wait(1000);
    cy.get(".title").contains("CALEFACCIÓN").click();
    cy.wait(3000);
    cy.get('.ui-search-breadcrumb__title').should("have.text","Estufas calefactores").should("be.visible");
    cy.wait(2000); 
    cy.url().should("include",text);
});

Cypress.Commands.add("NAVEGABILIDAD_HogaryMuebles_Jardin",(text)=>{
    cy.wait(2000)
    cy.contains('Categorías').trigger("mouseover").click();
    cy.contains("Hogar y Muebles").click();
    cy.wait(1000);
    cy.get(".title").contains(text).click();
    cy.wait(3000);
    cy.get('.ui-search-breadcrumb__title').should("have.text","Jardin y Aire Libre Nuevo").should("be.visible");
    cy.wait(2000); 
    cy.url().should("include","/hogar-muebles-jardin");
});

Cypress.Commands.add("NAVEGABILIDAD_Herramientas_Manuales",(text)=>{
    cy.wait(2000)
    cy.contains('Categorías').trigger("mouseover").click();
    cy.contains("Herramientas").click();
    cy.wait(1000);
    cy.get(".title").contains(text).click();
    cy.wait(3000);
    cy.get('.ui-search-breadcrumb__title').should("have.text","Herramientas Manuales").should("be.visible");
    cy.wait(2000); 
    cy.url().should("include","/herramientas-manuales");
});

Cypress.Commands.add("NAVEGABILIDAD_DeportesyFitness_RopaDeportiva",(text)=>{
    cy.wait(2000)
    cy.contains('Categorías').trigger("mouseover").click();
    cy.contains("Deportes y Fitness").click();
    cy.wait(1000);
    cy.get(".carousel__item-title").contains("Ropa deportiva").click();
    cy.wait(3000);
    cy.contains("Ropa Deportiva").should("be.visible");
    cy.wait(2000); 
    cy.url().should("include",text);
});

Cypress.Commands.add("Categoria_JuegosyJuguetes_MenosDe2años",(text)=>{
    cy.wait(2000)
    cy.contains('Categorías').trigger("mouseover").click();
    cy.contains("Juegos y Juguetes").click();
    cy.wait(1000);
    cy.get('.title').contains("0 A 24 MESES").click();
    cy.wait(2000)
    cy.url().should("include",text)
});
