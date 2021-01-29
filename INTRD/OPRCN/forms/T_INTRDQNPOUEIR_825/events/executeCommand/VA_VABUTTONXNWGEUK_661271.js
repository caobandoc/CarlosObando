

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