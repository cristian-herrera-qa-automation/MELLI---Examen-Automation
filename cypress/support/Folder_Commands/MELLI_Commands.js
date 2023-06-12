import { Navegacion_Supermercados_Almacen } from "../../Pages/PageNavegate_Supermercado_Almacen";
const elements_almacen_supermercado = new Navegacion_Supermercados_Almacen();

import { Navegacion_Electrodomesticos_Calefaccion } from "../../Pages/PageNavegate_Electrodomesticos_Calefaccion";
const elements_Navegate_Calefaccion= new Navegacion_Electrodomesticos_Calefaccion();

import { Navegacion_HogaryMuebles_Jardin } from "../../Pages/PageNavegate_HogarYMuebles_Jardin";
const elements_Navegate_Jardin= new Navegacion_HogaryMuebles_Jardin();

import { Navegacion_Herramientas_Manuales } from "../../Pages/PageNavegate_Herramientas_Manuales";
const elements_navegate_HerraManuales= new Navegacion_Herramientas_Manuales();

import { Navegacion_DeportesyFitness_RopaDeportiva } from "../../Pages/PageNavegate_DeportesFitness_RopaDeportiva";
const elements_navegate_RopaDeportiva= new Navegacion_DeportesyFitness_RopaDeportiva();


Cypress.Commands.add("VISIT_BASEURL_MELLI",(url)=>{
    cy.visit(url);
    cy.url().should("include","mercadolibre.com.ar");
});

Cypress.Commands.add("NAVEGABILIDAD_SUPERMERCADO_ALMACEN",()=>{
    cy.wait(3000);
    elements_almacen_supermercado.Mouse_Over_Category().trigger("mouseover").click();
    elements_almacen_supermercado.Supermercado_Category().click({force:true});
    cy.wait(2000);
    elements_almacen_supermercado.Almacen_Session().click({force:true});
    cy.wait(2000);
    elements_almacen_supermercado.Title_Almacen_Supermercado().should("be.visible");

});

Cypress.Commands.add("NAVEGABILIDAD_Electrodomesticos_Calefaccion",()=>{
    cy.wait(3000);
    elements_Navegate_Calefaccion.Mouse_Over_Category().trigger("mouseover").click();
    elements_Navegate_Calefaccion.Electrodomesticos().click({force:true});
    cy.wait(1000);
    elements_Navegate_Calefaccion.Calefaccion().click();
    cy.wait(1000);
    elements_Navegate_Calefaccion.Title_Estufas_Calefactores().should("be.visible");
});

Cypress.Commands.add("NAVEGABILIDAD_HogaryMuebles_Jardin",()=>{
    cy.wait(3000);
    elements_Navegate_Jardin.Mouse_Over_Category().trigger("mouseover").click();
    elements_Navegate_Jardin.Hogar_Muebles().click({force:true});
    cy.wait(1000);
    elements_Navegate_Jardin.Jardin_Card().click();
    cy.wait(2000);
    elements_Navegate_Jardin.Title_Jardin_AireLibre().should("be.visible");
});

Cypress.Commands.add("NAVEGABILIDAD_Herramientas_Manuales",()=>{
    cy.wait(3000);
    elements_navegate_HerraManuales.Mouse_Over_Category().trigger("mouseover").click();
    elements_navegate_HerraManuales.Herramientas().click({force:true});
    cy.wait(1000);
    elements_navegate_HerraManuales.Card_Manuales().click();
    cy.wait(2000);
    elements_navegate_HerraManuales.Title_Herramientas_Manuales().should("be.visible");
});

Cypress.Commands.add("NAVEGABILIDAD_DeportesyFitness_RopaDeportiva",()=>{
    cy.wait(3000);
    elements_navegate_RopaDeportiva.Mouse_Over_Category().trigger("mouseover").click();
    elements_navegate_RopaDeportiva.DeportesFitness().click({force:true});
    cy.wait(1000);
    elements_navegate_RopaDeportiva.Caroulse_RopaDeportiva().click();
    cy.wait(3000);
    elements_navegate_RopaDeportiva.Title_RopaDeportiva().should("be.visible");
});
