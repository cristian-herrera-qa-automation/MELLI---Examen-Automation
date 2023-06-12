export class Navegacion_Herramientas_Manuales{
    Category_MouseOver = 'Categorías'
    Herramientas_txt = 'Herramientas'
    Class_Card_Manuales = '.title'
    Txt_Card_Manuales = 'MANUALES'
    Class_Title_Seccion_Herramientas_Manuales = '.ui-search-breadcrumb__title'
    Txt_Title='Herramientas Manuales'

    Mouse_Over_Category(){return cy.contains(this.Category_MouseOver)};
    Herramientas(){return cy.contains(this.Herramientas_txt)};
    Card_Manuales(){return cy.get(this.Class_Card_Manuales).contains(this.Txt_Card_Manuales);}
    Title_Herramientas_Manuales(){return cy.get(this.Class_Title_Seccion_Herramientas_Manuales).contains(this.Txt_Title)};
};