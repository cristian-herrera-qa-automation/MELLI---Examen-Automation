export class Navegacion_Supermercados_Almacen{
          Category_MouseOver = 'Categorías'
          Supermercado_Categoria = 'Supermercado'
          Class_Carousel_Almacen = '.carousel__item-title'
          Txt_Class_Carousel_Almacen = 'ALMACÉN'
          Class_Title_Almacen = '.ui-search-breadcrumb__title'
          Txt_Title = 'Almacén en Supermercado'
          
         Mouse_Over_Category(){return cy.contains(this.Category_MouseOver)};
         Supermercado_Category(){return cy.contains(this.Supermercado_Categoria)};
         Almacen_Session(){return cy.get(this.Class_Carousel_Almacen).contains(this.Txt_Class_Carousel_Almacen)};
         Title_Almacen_Supermercado(){return cy.get(this.Class_Title_Almacen).contains(this.Txt_Title)};

};

