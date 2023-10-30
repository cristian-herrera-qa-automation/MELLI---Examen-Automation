/// <reference types="cypress" />

import { PLP_Product} from "../../Pages/PageProduct_PLP";
import { PDP_Product } from "../../Pages/PageProduct_PDP";
    
describe('Ejercicio 1 - Automatización de Front End - NAVEGABILIDAD MELLI !! ', () => {

    beforeEach (" -- ACCEDER AL HOME PAGE --",()=>{
    cy.VISIT_BASEURL_MELLI("https://www.mercadolibre.com.ar");
    cy.clearAllCookies();
    
    });
    it('NAVEGABILIDAD: Categorías > Tecnologia > Celulares&Smarphones', () => {
        cy.NAVEGABILIDAD_SUPERMERCADO_ALMACEN();
    });

    it('NAVEGABILIDAD: Categorías > ELECTRODOMESTICOS > CALEFACCION', () => {
    cy.NAVEGABILIDAD_Electrodomesticos_Calefaccion();      
    });

    it.skip('NAVEGABILIDAD: Categorías > Hojar y Muebles > Jardin', () => {
        cy.NAVEGABILIDAD_HogaryMuebles_Jardin();
    });
   
    it.skip(' NAVEGABILIDAD: Categorías > Herramientas > Manuales ', () => {
         cy.NAVEGABILIDAD_Herramientas_Manuales();
    });
   
    it('NAVEGABILIDAD: Categorías >Deportes y Fitness > Ropa Deportiva', () => {
          cy.NAVEGABILIDAD_DeportesyFitness_RopaDeportiva();
    });
});


describe('EJERCICIO 2 - ELEGIR UNA CATEGORIA -FILTRAR POR UBICACION Y VERIFICAR DATOS !! ', () => {
    const elementos_PLP = new PLP_Product();
    const elementos_PDP= new PDP_Product();  

    before (" Acceder el home page- Filtrar por Ubicacion- Verificar en el datos PLP",()=>{
    cy.VISIT_BASEURL_MELLI("https://www.mercadolibre.com.ar");
    cy.NAVEGABILIDAD_Electrodomesticos_Calefaccion();
    elementos_PLP.Filter_Ubicacion().click();
    elementos_PLP.first_product().siblings(()=>{
            elementos_PLP.first_title().should("be.visible")
            elementos_PLP.firts_price().should("be.visible");
    });
    elementos_PLP.first_title().first().click({force:true});
   });

    it('Verificar que los datos coincidan en el PDP del producto', () => {
        elementos_PDP.title_pdp().should("exist");
        elementos_PDP.price_pdp().should("exist");
        elementos_PDP.img_pdp().should("exist");
    });

});

//NOTA: PLP : 'PRODUCT LIST PAGE' (PAGE LISTA DE PRODUCTOS)
// PDP : 'PRODUCT DETAILS PAGE' (PAGE DETALLES DEL PRODUCTO)   
