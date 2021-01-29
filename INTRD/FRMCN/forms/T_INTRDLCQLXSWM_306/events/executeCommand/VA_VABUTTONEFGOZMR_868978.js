

//Entity: CuentaOrigen
//CuentaOrigen. (Button) View: TransferenciaBancaria
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONEFGOZMR_868978 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = false;
    
    if(entities.CuentaOrigen.valorTransferir<=entities.CuentaOrigen.saldo && entities.CuentaOrigen.valorTransferir>0){
        //valores a trasnferir
        entities.CuentaDestino.saldo += entities.CuentaOrigen.valorTransferir;
        entities.CuentaOrigen.saldo -= entities.CuentaOrigen.valorTransferir;
        entities.CuentaOrigen.valorTransferir = 0;
        
        //Mensaje exitoso
        executeCommandEventArgs.commons.messageHandler.showMessagesSuccess("TRANSACCION EXITOSA");
        
    }else{
        
        //mensaje error
        executeCommandEventArgs.commons.messageHandler.showMessagesError("TRANSACCION FALLIDA");
    }
    
    if(entities.CuentaOrigen.saldo == 0){
        //deshabilitar boton cuando el saldo sea 0
        executeCommandEventArgs.commons.api.viewState.disable('VA_VABUTTONEFGOZMR_868978');
    }
};