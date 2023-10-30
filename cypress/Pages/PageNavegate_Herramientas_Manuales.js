export class Navegacion_Herramientas_Manuales{
    Category_MouseOver = 'Categorías'
    Herramientas_txt = 'Herramientas'
    alt_manuales  = '[alt="Herramientas manuales"]'
    Class_Title_Seccion_Herramientas_Manuales = '.ui-search-breadcrumb__title'
    Txt_Title='Herramientas Manuales'

    Mouse_Over_Category(){return cy.contains(this.Category_MouseOver)};
    Herramientas(){return cy.contains(this.Herramientas_txt)};
    Card_Manuales(){return cy.get(this.alt_manuales,{timeout:1000})}
    Title_Herramientas_Manuales(){return cy.get(this.Class_Title_Seccion_Herramientas_Manuales,{timeout:2000}).contains(this.Txt_Title)};
};