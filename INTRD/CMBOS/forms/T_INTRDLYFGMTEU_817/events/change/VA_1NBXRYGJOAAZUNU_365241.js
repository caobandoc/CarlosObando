

//Entity: Entity1
//Entity1.attribute1 (ComboBox) View: FormEstadoCivil
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_1NBXRYGJOAAZUNU_365241 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
    
    const deshabilitar = function(){
        //Deshabilitar el seleccionar
        changedEventArgs.commons.api.viewState.disable('VA_1NBXRYGJOAAZUNU_365241');
        
        //Habilitar el boton
        changedEventArgs.commons.api.viewState.enable('VA_VABUTTONODQUDYS_512241');
        
        //Mostrar grupo2
        changedEventArgs.commons.api.viewState.show('G_ESTADOCVIV_524241');
    }
    
    switch(entities.Estado.estado){   
           case '2':
            //soltero
            deshabilitar();
            
            //Asignar valores
            entities.Estado.estadoCivil = "Soltero";
            entities.Estado.actividadActual = "Listo para la farra";
           break;
        
           case '3':
            //casado
            deshabilitar();
            
            //Asignar valores
            entities.Estado.estadoCivil = "Casado";
            entities.Estado.actividadActual = "Lavando los platos";
           break;
    }    
};