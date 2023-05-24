import { Navegate_Tecnology_CelularesAndSmarphone } from "../../FOLDER_POM/PageNavegate";
const Navegate_Celulares_Smarphone= new Navegate_Tecnology_CelularesAndSmarphone();
import { Navegate_Electrodomesticos_Calefaccion } from "../../FOLDER_POM/PageNavegate";
const Navegate_Electro_Calefaccion= new Navegate_Electrodomesticos_Calefaccion();
import { Navegate_HogaryMuebles_Jardin } from "../../FOLDER_POM/PageNavegate";
const Navegate_HYM_Jardin= new Navegate_HogaryMuebles_Jardin();
import { Navegate_Herramientas_Manuales } from "../../FOLDER_POM/PageNavegate";
const Navegate_HerramientasManules= new Navegate_Herramientas_Manuales();
import { Navegate_DeportesyFitness_RopaDeportiva } from "../../FOLDER_POM/PageNavegate";
const Navegate_DeportesyFitness_ROPADEPORTIVA= new Navegate_DeportesyFitness_RopaDeportiva();


Cypress.Commands.add("VISIT_BASEURL_MELLI",(url)=>{
    cy.visit(url);
    cy.url().should("include","mercadolibre.com.ar");
});

Cypress.Commands.add("NAVEGABILIDAD_TEC_CELULARES_SMARPHONES",()=>{
    Navegate_Celulares_Smarphone.MouseOver_Category();
    Navegate_Celulares_Smarphone.MouseOver_Tecnologia();
    Navegate_Celulares_Smarphone.Celulares_Smarphones();
    cy.wait(3000)
    Navegate_Celulares_Smarphone.Title_Celulares_Smarphones();
});

Cypress.Commands.add("NAVEGABILIDAD_Electrodomesticos_Calefaccion",(text)=>{
    cy.wait(2000);
    Navegate_Electro_Calefaccion.MouseOver_Category();
    Navegate_Electro_Calefaccion.Electrodomesticos();
    cy.wait(1000);
    Navegate_Electro_Calefaccion.Calefaccion(text);
    cy.wait(3000);
    Navegate_Electro_Calefaccion.Title_EstufasCalefactores();
    cy.wait(2000); 
});

Cypress.Commands.add("NAVEGABILIDAD_HogaryMuebles_Jardin",(text)=>{
    cy.wait(2000);
    Navegate_HYM_Jardin. MouseOver_Category();
    Navegate_HYM_Jardin.HogaryMuebles();
    cy.wait(1000);
    Navegate_HYM_Jardin.Jardin(text);
    cy.wait(3000);
    Navegate_HYM_Jardin.Title_Jardin_AireLibreNuevo();
    cy.wait(2000); 
});

Cypress.Commands.add("NAVEGABILIDAD_Herramientas_Manuales",(text)=>{
    cy.wait(2000);
    Navegate_HerramientasManules.MouseOver_Category();
    Navegate_HerramientasManules.Herramientas();
    cy.wait(1000);
    Navegate_HerramientasManules.Manuales(text);
    cy.wait(3000);
    Navegate_HerramientasManules.Title_Herramientas_Manuales();
});

Cypress.Commands.add("NAVEGABILIDAD_DeportesyFitness_RopaDeportiva",()=>{
    cy.wait(2000);
    Navegate_DeportesyFitness_ROPADEPORTIVA.MouseOver_Category();
    Navegate_DeportesyFitness_ROPADEPORTIVA.DeportesyFitness();
    cy.wait(1000);
    Navegate_DeportesyFitness_ROPADEPORTIVA.RopaDeportiva();
    cy.wait(3000);
    Navegate_DeportesyFitness_ROPADEPORTIVA.Title_RopaDeportiva();
});
