export class Navegacion_Electrodomesticos_Calefaccion{

        Category_MouseOver = 'Categorías'
        Mouse_Over_Electrodomesticos = 'Electrodomésticos'
        Card_Calefaccion = '.carousel__item-title'
        Txt_Card_Calefaccion = 'Calefacción'
        Class_Title_seccion_Estufas_Calefactores = '.ui-search-breadcrumb__title'
        Txt_Title= 'Estufas calefactores'

        Mouse_Over_Category(){return cy.contains(this.Category_MouseOver)};
        Electrodomesticos(){return cy.contains(this.Mouse_Over_Electrodomesticos)};
        Calefaccion(){return cy.get(this.Card_Calefaccion,{timeout:1000}).contains(this.Txt_Card_Calefaccion)};
        Title_Estufas_Calefactores(){return cy.get(this.Class_Title_seccion_Estufas_Calefactores,{timeout:1000}).contains(this.Txt_Title)};

};