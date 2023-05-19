export class PLP_Monky_loco_Ditoys_071{
          title_juego = 'Juego de mesa Monky loco Ditoys 071';
          price_juego = '4.699';
          
        ListPage_title_juegoDeMesa_MonkyLoco_071(){
           cy.contains(this.title_juego).should("be.visible");
         };
     
        ListPage_price_juegoDeMesa_MonkyLoco_071(){
            cy.contains(this.price_juego).should("be.visible")
         };

         Acceder_PDP(){
            cy.contains(this.title_juego).click();
         };     
};

export class PDP_Monky_loco_Ditoys_071{
           title= "Juego de mesa Monky loco Ditoys 071";
           price_class = ".ui-pdp-price__second-line";
           img_class = '.ui-pdp-gallery__figure';
 
          VERIFICAR_DETAILS_Juego_MONKY(text){
            cy.get('.ui-pdp-container__col.col-2.mr-32').within(()=>{
               cy.contains(this.title).contains("Juego de mesa Monky loco Ditoys 071")
               cy.get(this.price_class).contains(text);
            });
            cy.get(this.img_class).should("be.visible")
        };

        path_enpoint(texto){
           cy.url().should("include",texto)
        };

};