

//Entity: Persona
//Persona. (Button) View: EventosCliente
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONYRTUJNP_383116 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = false;
    entities.Persona.nombre = "";
    entities.Persona.apellido = "";
    entities.Persona.nombreCompleto = "";
    
    executeCommandEventArgs.commons.api.viewState.enable('VA_VABUTTONYRTUJNP_383116');

};