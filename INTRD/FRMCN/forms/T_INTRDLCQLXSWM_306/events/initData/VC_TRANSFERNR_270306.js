
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: TransferenciaBancaria
task.initData.VC_TRANSFERNR_270306 = function (entities, initDataEventArgs){

    initDataEventArgs.commons.execServer = false;
    
    //Datos de las cuentas
    entities.CuentaOrigen.numeroCuenta = '123ABC';
    entities.CuentaOrigen.saldo = 2000;
    entities.CuentaDestino.numeroCuenta = '456CBA';
    entities.CuentaDestino.saldo = 1000;

};