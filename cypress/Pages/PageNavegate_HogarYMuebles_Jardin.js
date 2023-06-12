export class Navegacion_HogaryMuebles_Jardin{
    Category_MouseOver = 'Categorías'
    HogaryMuebles_txt = 'Hogar y Muebles'
    Class_Card_Jardin = '.title'
    Txt_Card_Jardin = 'JARDÍN'
    Class_Title_Seccion_Jardin = '.ui-search-breadcrumb__title'
    Txt_Title = 'Jardin y Aire Libre Nuevo'

    Mouse_Over_Category(){return cy.contains(this.Category_MouseOver)};
    Hogar_Muebles(){return cy.contains(this.HogaryMuebles_txt)};
    Jardin_Card(){return cy.get(this.Class_Card_Jardin).contains(this.Txt_Card_Jardin);}
    Title_Jardin_AireLibre(){return cy.get(this.Class_Title_Seccion_Jardin).contains(this.Txt_Title)};
};