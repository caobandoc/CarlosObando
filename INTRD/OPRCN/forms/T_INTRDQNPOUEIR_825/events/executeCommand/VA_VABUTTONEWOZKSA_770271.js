

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