/* variables locales de T_INTRDQNPOUEIR_825*/

(function (root, factory) {
    factory();
} (this, function() {

    "use strict";

    /*global designerEvents, console */

        //*********** COMENTARIOS DE AYUDA **************
        //  Para imprimir mensajes en consola
        //  console.log("executeCommand");

        //  Para enviar mensaje use
        //  eventArgs.commons.messageHandler.showMessagesInformation('Ejecutando comando personalizado');

        //  Para evitar que se continue con la validación a nivel de servidor
        //  eventArgs.commons.execServer = false;

        //**********************************************************
        //  Eventos de VISUAL ATTRIBUTES
        //**********************************************************

    
        var task = designerEvents.api.calculadora;
    

    //"TaskId": "T_INTRDQNPOUEIR_825"


    	

//Entity: Calc
//Calc. (Button) View: Calculadora
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
//Limpiar
task.executeCommand.VA_VABUTTONEWOZKSA_770271 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = false;
    entities.Calc.numeroUno = 0;
    entities.Calc.numeroDos = 0;
    entities.Calc.resultado = 0;
    executeCommandEventArgs.commons.api.viewState.disable('VA_VABUTTONEWOZKSA_770271');
    executeCommandEventArgs.commons.api.viewState.enable('VA_VABUTTONXNWGEUK_661271');

};

	

//Entity: Calc
//Calc. (Button) View: Calculadora
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
//Sumar
task.executeCommand.VA_VABUTTONXNWGEUK_661271 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = false;
    entities.Calc.resultado = entities.Calc.numeroUno + entities.Calc.numeroDos;
    executeCommandEventArgs.commons.api.viewState.enable('VA_VABUTTONEWOZKSA_770271');
    executeCommandEventArgs.commons.api.viewState.disable('VA_VABUTTONXNWGEUK_661271');

};

	
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: Calculadora
task.initData.VC_CALCULADOA_564825 = function (entities, initDataEventArgs){

    initDataEventArgs.commons.execServer = false;
    initDataEventArgs.commons.api.viewState.disable('VA_VABUTTONEWOZKSA_770271');
};

	
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: Calculadora
task.render = function (entities, renderEventArgs){

    renderEventArgs.commons.execServer = false;
    renderEventArgs.commons.api.viewState.disable('VA_3185AGFZVMOSAII_964271');

};



}));
