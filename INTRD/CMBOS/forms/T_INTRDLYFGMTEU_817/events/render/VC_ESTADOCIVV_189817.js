
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: FormEstadoCivil
task.render = function (entities, renderEventArgs){

    renderEventArgs.commons.execServer = false;
    
    //Solo lectura grupo2
    renderEventArgs.commons.api.viewState.disable('VA_1SNYYUVGQTJSXEC_637241');
    renderEventArgs.commons.api.viewState.disable('VA_2ZYXETXXZFMWNRP_336241');
    
    //Ocultar grupo2
    renderEventArgs.commons.api.viewState.hide('G_ESTADOCVIV_524241');
    
    //Deshabilitar boton
    renderEventArgs.commons.api.viewState.disable('VA_VABUTTONODQUDYS_512241');

};