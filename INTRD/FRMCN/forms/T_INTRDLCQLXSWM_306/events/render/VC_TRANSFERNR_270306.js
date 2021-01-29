
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: TransferenciaBancaria
task.render = function (entities, renderEventArgs){

    renderEventArgs.commons.execServer = false;
    //Desactivar datos
    renderEventArgs.commons.api.viewState.disable('VA_6461GARVWLOYQHZ_394978');
    renderEventArgs.commons.api.viewState.disable('VA_4089MKSPCKHOMED_541978');
    renderEventArgs.commons.api.viewState.disable('VA_2333UHTXEFSUVWO_378978');
    renderEventArgs.commons.api.viewState.disable('VA_6714ANJGBGQFPHS_819978');
    

};