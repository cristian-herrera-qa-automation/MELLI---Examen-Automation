/// <reference types="cypress" />
import { PLP_Product} from "../../FOLDER_POM/PageProduct";
import { PDP_Product } from "../../FOLDER_POM/PageProduct";

  //NOTA: PLP : 'PRODUCT LIST PAGE' (PAGE LISTA DE PRODUCTOS)
    // PDP : 'PRODUCT DETAILS PAGE' (PAGE DETALLES DEL PRODUCTO)
    // PRODUCTO ELEGIDO :"Caloventor eléctrico Liliana CFH400 negro 220V-240V"
    
describe('Ejercicio 1 - Automatización de Front End - NAVEGABILIDAD MELLI !! ', () => {
    beforeEach (" -- ACCEDER AL HOME PAGE --",()=>{
    cy.VISIT_BASEURL_MELLI("https://www.mercadolibre.com.ar");
    
    });
    it('NAVEGABILIDAD: Categorías > Tecnologia > Celulares&Smarphones', () => {
        cy.NAVEGABILIDAD_TEC_CELULARES_SMARPHONES();
    });

    it('NAVEGABILIDAD: Categorías > ELECTRODOMESTICOS > CALEFACCION', () => {
    cy.NAVEGABILIDAD_Electrodomesticos_Calefaccion("CALEFACCIÓN");      
    });

    it('NAVEGABILIDAD: Categorías > Hojar y Muebles > Jardin', () => {
        cy.NAVEGABILIDAD_HogaryMuebles_Jardin("JARDÍN");
    });
   
    it(' NAVEGABILIDAD: Categorías > Herramientas > Manuales ', () => {
         cy.NAVEGABILIDAD_Herramientas_Manuales("MANUALES");
    });
   
    it('NAVEGABILIDAD: Categorías >Deportes y Fitness > Ropa Deportiva', () => {
          cy.NAVEGABILIDAD_DeportesyFitness_RopaDeportiva();
    });

});

describe('EJERCICIO 2 - ELEGIR UNA CATEGORIA -FILTRAR POR UBICACION Y VERIFICAR DATOS !! ', () => {
    const elementos_PLP_Caloventor = new PLP_Product();
    const elementos_PDP_Caloventor= new PDP_Product();  

    before (" Acceder el home page- Filtrar por Ubicacion- Verificar en el datos PLP",()=>{
    cy.VISIT_BASEURL_MELLI("https://www.mercadolibre.com.ar");
    cy.NAVEGABILIDAD_Electrodomesticos_Calefaccion("CALEFACCIÓN");
    elementos_PLP_Caloventor.Filter_Ubicacion_CAPITALFEDERAL();
    cy.wait(2000)
    elementos_PLP_Caloventor.Title_And_Price_Verification();
    elementos_PLP_Caloventor.Acceder_PDP();
});

    it('Verificar que los datos coincidan en el PDP del producto', () => {
        cy.wait(1000)
        elementos_PDP_Caloventor.Path_Product_PDP();
        elementos_PDP_Caloventor.Verification_PDP();
    });

});

   



