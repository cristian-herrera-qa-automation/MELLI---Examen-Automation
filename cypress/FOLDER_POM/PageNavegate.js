export class Navegate_Tecnology_CelularesAndSmarphone{
        MouseOver_Category(){cy.contains('Categorías').trigger("mouseover").click();}
        MouseOver_Tecnologia(){cy.contains("Tecnología").trigger("mouseover");}
        Celulares_Smarphones(){cy.contains("Celulares y Smartphones").click();}
        Title_Celulares_Smarphones(){cy.get('.ui-search-breadcrumb__title').contains("Celulares y Smartphones").should("be.visible");}
};

export class Navegate_Electrodomesticos_Calefaccion{
    MouseOver_Category(){cy.contains('Categorías').trigger("mouseover").click();}
    Electrodomesticos(){cy.contains("Electrodomésticos").click();}
    Calefaccion(text){cy.get(".title").contains(text).click();}
    Title_EstufasCalefactores(){cy.get('.ui-search-breadcrumb__title').should("have.text","Estufas calefactores").should("be.visible");}
};

export class Navegate_HogaryMuebles_Jardin{
    MouseOver_Category(){cy.contains('Categorías').trigger("mouseover").click();}
    HogaryMuebles(){ cy.contains("Hogar y Muebles").click();}
    Jardin(text){cy.get(".title").contains(text).click();}
    Title_Jardin_AireLibreNuevo(){cy.get('.ui-search-breadcrumb__title').should("have.text","Jardin y Aire Libre Nuevo").should("be.visible");}
};

export class Navegate_Herramientas_Manuales{
    MouseOver_Category(){cy.contains('Categorías').trigger("mouseover").click();}
    Herramientas(){cy.contains("Herramientas").click();}
    Manuales(text){cy.get(".title").contains(text).click();}
    Title_Herramientas_Manuales(){cy.get('.ui-search-breadcrumb__title').should("have.text","Herramientas Manuales").should("be.visible");}
};

export class Navegate_DeportesyFitness_RopaDeportiva{
    MouseOver_Category(){cy.contains('Categorías').trigger("mouseover").click();}
    DeportesyFitness(){cy.contains("Deportes y Fitness").click();}
    RopaDeportiva(){cy.get(".carousel__item-title").contains("Ropa deportiva").click();}
    Title_RopaDeportiva(){cy.contains("Ropa Deportiva").should("be.visible");}
};