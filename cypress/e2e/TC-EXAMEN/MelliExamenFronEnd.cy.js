/// <reference types="cypress" />
import {PLP_Monky_loco_Ditoys_071} from "../../FOLDER_POM/POM_MELLI";
import { PDP_Monky_loco_Ditoys_071 } from "../../FOLDER_POM/POM_MELLI";

describe('Ejercicio 1 - Automatización de Front End - NAVEGABILIDAD MELLI !! ', () => {
    beforeEach (" -- ACCEDER AL HOME PAGE --",()=>{
    cy.VISIT_BASEURL_MELLI("https://www.mercadolibre.com.ar");
    
});
    it('NAVEGABILIDAD: Categorías > Tecnologia > Celulares&Smarphones', () => {
        cy.NAVEGABILIDAD_TEC_CELULARES_SMARPHONES("/celulares-smartphones");
    });

    it('NAVEGABILIDAD: Categorías > ELECTRODOMESTICOS > CALEFACCION', () => {
    cy.NAVEGABILIDAD_Electrodomesticos_Calefaccion('/estufas-calefactores');
       
    });

    it('NAVEGABILIDAD: Categorías > Hojar y Muebles > Jardin', () => {
        cy.NAVEGABILIDAD_HogaryMuebles_Jardin("JARDÍN");

    });
   
    it(' NAVEGABILIDAD: Categorías > Herramientas > Manuales ', () => {
         cy.NAVEGABILIDAD_Herramientas_Manuales("MANUALES");

    });
   
    it('NAVEGABILIDAD: Categorías >Deportes y Fitness > Ropa Deportiva', () => {
          cy.NAVEGABILIDAD_DeportesyFitness_RopaDeportiva("/ropa-deportiva");

    });

});

describe('EJERCICIO 2 - ELEGIR UNA CATEGORIA -FILTRAR POR UBICACION Y VERIFICAR DATOS !! ', () => {
    const elementos_PLP = new PLP_Monky_loco_Ditoys_071();
    const elementos_PDP= new PDP_Monky_loco_Ditoys_071();

    beforeEach (" -- ACCEDER AL HOME PAGE --",()=>{
    cy.VISIT_BASEURL_MELLI("https://www.mercadolibre.com.ar");
    cy.Categoria_JuegosyJuguetes_MenosDe2años("/nuevo");
});
    it('Filtrar>CapitalFederal. Verificar datos en PLP y PDP', () => {

        cy.get('.ui-search-filter-groups > :nth-child(12)').contains("Capital Federal").click();
        cy.wait(2000);
        elementos_PLP.ListPage_title_juegoDeMesa_MonkyLoco_071();
        elementos_PLP.ListPage_price_juegoDeMesa_MonkyLoco_071();
        cy.wait(1000)
        elementos_PLP.Acceder_PDP();
        cy.wait(1000)
        elementos_PDP.VERIFICAR_DETAILS_Juego_MONKY("4.699");
        elementos_PDP.path_enpoint('/juego-de-mesa-monky-loco-ditoys-071');
    });
});

   



