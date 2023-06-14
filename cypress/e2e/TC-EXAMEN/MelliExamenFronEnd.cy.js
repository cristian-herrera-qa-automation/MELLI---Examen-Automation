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

    it('NAVEGABILIDAD: Categorías > Hojar y Muebles > Jardin', () => {
        cy.NAVEGABILIDAD_HogaryMuebles_Jardin();
    });
   
    it(' NAVEGABILIDAD: Categorías > Herramientas > Manuales ', () => {
         cy.NAVEGABILIDAD_Herramientas_Manuales();
    });
   
    it('NAVEGABILIDAD: Categorías >Deportes y Fitness > Ropa Deportiva', () => {
          cy.wait(2000);
          cy.NAVEGABILIDAD_DeportesyFitness_RopaDeportiva();
    });
});


describe('EJERCICIO 2 - ELEGIR UNA CATEGORIA -FILTRAR POR UBICACION Y VERIFICAR DATOS !! ', () => {
    const elementos_PLP = new PLP_Product();
    const elementos_PDP= new PDP_Product();  

    before (" Acceder el home page- Filtrar por Ubicacion- Verificar en el datos PLP",()=>{
    cy.VISIT_BASEURL_MELLI("https://www.mercadolibre.com.ar");
    cy.clearAllCookies();
    cy.NAVEGABILIDAD_Electrodomesticos_Calefaccion();
    elementos_PLP.Filter_Ubicacion().click();
    cy.wait(2000)
    elementos_PLP.Title_And_Price_Verification().siblings(()=>{
        elementos_PLP.Price_Calefactor().should("exist");
    });
    elementos_PLP.Acceder_PDP().click({force:true});
   });

    it('Verificar que los datos coincidan en el PDP del producto', () => {
        cy.wait(3000);
        elementos_PDP.Path_Product_PDP();
        elementos_PDP.Verification_PDP().siblings(()=>{
            elementos_PDP.Title().should("exist");
            elementos_PDP.Price().should("exist");

    });
    });
    });

//NOTA: PLP : 'PRODUCT LIST PAGE' (PAGE LISTA DE PRODUCTOS)
// PDP : 'PRODUCT DETAILS PAGE' (PAGE DETALLES DEL PRODUCTO)
// PRODUCTO ELEGIDO :"Caloventor eléctrico Liliana CFH400 negro 220V-240V"   



