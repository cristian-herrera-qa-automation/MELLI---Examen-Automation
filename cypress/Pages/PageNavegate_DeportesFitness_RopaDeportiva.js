export class Navegacion_DeportesyFitness_RopaDeportiva{
    Category_MouseOver = 'Categorías'
    Deportes_Fitness_txt = 'Deportes y Fitness'
    Class_Carousel_RopaDeportiva = '.carousel__item-title'
    Txt_Carousel_RDeportiva = 'Ropa deportiva'
    Class_Title_Seccion_RopaDeportiva = '.ui-search-breadcrumb__title'
    Txt_Title= 'Ropa Deportiva'

    Mouse_Over_Category(){return cy.contains(this.Category_MouseOver)};
    DeportesFitness(){return cy.contains(this.Deportes_Fitness_txt)};
    Caroulse_RopaDeportiva(){return cy.get(this.Class_Carousel_RopaDeportiva).contains(this.Txt_Carousel_RDeportiva);}
    Title_RopaDeportiva(){return cy.get(this.Class_Title_Seccion_RopaDeportiva).contains(this.Txt_Title)};
};