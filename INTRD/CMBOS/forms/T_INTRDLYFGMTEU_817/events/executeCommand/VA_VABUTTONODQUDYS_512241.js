

//Entity: Entity1
//Entity1. (Button) View: FormEstadoCivil
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONODQUDYS_512241 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = false;
    //Ocultar grupo 2
    executeCommandEventArgs.commons.api.viewState.hide('G_ESTADOCVIV_524241');
    
    //Activar seleccionar
    executeCommandEventArgs.commons.api.viewState.enable('VA_1NBXRYGJOAAZUNU_365241');
    
    //Desactivar boton
    executeCommandEventArgs.commons.api.viewState.disable('VA_VABUTTONODQUDYS_512241');
    entities.Estado.estadoCivil = "";
    entities.Estado.actividadActual = "";
    entities.Estado.estado = "";

};