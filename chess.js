const columnaC5 = document.querySelector('#columnaC5'),
columnaD4 = document.querySelector('#columnaD4'),
columnaE4 = document.querySelector('#columnaE4'),
columnaD2 = document.querySelector('#columnaD2'),
columnaE2 = document.querySelector('#columnaE2'),
columnaF4 = document.querySelector('#columnaF4'),
columnaE3 = document.querySelector('#columnaE3'),
columnaF3 = document.querySelector('#columnaF3'),
reyBlanco = document.querySelector('#reyBlanco'),
reyNegro = document.querySelector('#reyNegro'),
peonNegro = document.querySelector('#peonNegro'),
peonBlanco = document.querySelector('#peonBlanco'),
tablas = document.querySelector('#tablas');

//---------------Permite señalar la ubicación del rey blanco en la casillaD4-----------------
function casillaD4(){
    columnaD4.classList.toggle('styleCasilla'); 
}
reyBlanco.addEventListener('click', casillaD4);


//---------------Permite señalar la ubicación del rey blanco en la casillaE4-------------------
function casillaE4(){
    columnaE4.classList.toggle('styleCasilla');
}

//---------------Permite señalar la ubicación del rey blanco en la casillaF4-------------------
function casillaF4(){
    columnaF4.classList.toggle('styleCasilla');
}

//---------------Permite señalar la ubicación del peon blanco en la casillaE3-------------------
function casillaE3(){
    columnaE3.classList.toggle('styleCasilla');
}

//---------------Permite señalar la ubicación del peon blanco en la casillaF3-------------------
function casillaF3(){
    columnaF3.classList.toggle('styleCasilla');
}

//---------------Permite señalar la ubicación del peon blanco en la casillaE2-------------------
function casillaE2(){
    columnaE2.classList.toggle('styleCasilla');
}

//---------------------------------------------- desplazamiento1 ---------------------------------------------------------------------------

function desplazamiento1(){
    if(columnaD4.classList.contains('styleCasilla')){
        reyBlanco.classList.add('movimientoReyBlanco') //--------------- Permite mover el rey -----------------
        columnaD4.classList.remove('styleCasilla'); //----------------- permite eliminar la selección de casilla --------------
        reyBlanco.removeEventListener('click', casillaD4);  //-------------- eliminar evento del reyBlanco --> casillaD4 -------------- 

        reyBlanco.addEventListener('click', casillaE4);  //------------ Activa el evento de la casilla E4 -------------
        

        //--------------------- Desplazamiento automática de rey negro --------------------
        function desplazamientoReyNegro(){
            if(reyBlanco.classList.contains('movimientoReyBlanco')){
                reyNegro.classList.add('movimientoReyNegro');
            }
        }
        setTimeout(desplazamientoReyNegro, 500);   //---------- Permite establecer un tiempo de espera --------
    }

}
columnaD4.addEventListener('click', desplazamiento1);

//------------------------------------------------- desplazamiento2 ------------------------------------------------------------------------

function desplazamiento2(){
    if(columnaE4.classList.contains('styleCasilla')){
        reyBlanco.classList.add('movimientoReyBlanco2')
        columnaE4.classList.remove('styleCasilla')
        peonNegro.style.display = 'none';
        reyBlanco.removeEventListener('click', casillaE4);

        reyBlanco.addEventListener('click', casillaF4); //------------Activa el evento de la casilla F4-------------
        columnaD4.removeEventListener('click', desplazamiento1);  //---------------Elimina el evento de la columnaD4(desplazamiento1)--------

        function desplazamientoReyNegro2(){
            if(reyBlanco.classList.contains('movimientoReyBlanco2')){  
                reyNegro.classList.add('movimientoReyNegro2');
            }    
        }
        setTimeout(desplazamientoReyNegro2, 500);

    }    
}
columnaE4.addEventListener('click', desplazamiento2);

//----------------------------------------------------- desplazamiento3 --------------------------------------------------------------------

function desplazamiento3(){
    if(columnaF4.classList.contains('styleCasilla')){
        reyBlanco.classList.add('movimientoReyBlanco3');
        columnaF4.classList.remove('styleCasilla');
        reyBlanco.removeEventListener('click', casillaF4);
        
        peonBlanco.addEventListener('click', casillaE4);  //------------Activa el evento de la casilla E4-------------
        columnaE4.removeEventListener('click', desplazamiento2); //---------------Elimina el evento de la columnaE4(desplazamiento2)--------

        function desplazamientoReyNegro3(){
            if(reyBlanco.classList.contains('movimientoReyBlanco3')){
                reyNegro.classList.add('movimientoReyNegro3');
            }
        }
        setTimeout(desplazamientoReyNegro3, 500);

    }    
}
columnaF4.addEventListener('click', desplazamiento3);

//----------------------------------------------------- desplazamiento4 ----------------------------------------------------------------------

function desplazamiento4(){
        if(columnaE4.classList.contains('styleCasilla')){  //--------- Permite que el peon se desplaze después del rey Blanco --------
            peonBlanco.classList.add('movimientoPeonBlanco');
            columnaE4.classList.remove('styleCasilla');      
            peonBlanco.removeEventListener('click', casillaE4);
            
            peonBlanco.addEventListener('click', casillaE3); //------------Activa el evento de la casilla E3-------------
            columnaF4.removeEventListener('click', desplazamiento3); //---------------Elimina el evento de la columnaF4(desplazamiento3)------

            function desplazamientoReyNegro4(){
                if(peonBlanco.classList.contains('movimientoPeonBlanco')){
                    reyNegro.classList.add('movimientoReyNegro4');
                }
            }
            setTimeout(desplazamientoReyNegro4, 500);
        }    

}
columnaE4.addEventListener('click', desplazamiento4);

//----------------------------------------------------- desplazamiento5 ----------------------------------------------------------------------

function desplazamiento5(){
    if(columnaE3.classList.contains('styleCasilla')){
        peonBlanco.classList.add('movimientoPeonBlanco2');
        columnaE3.classList.remove('styleCasilla');
        peonBlanco.removeEventListener('click', casillaE3)

        reyBlanco.addEventListener('click', casillaF3); //------------Activa el evento de la casilla F3------------- 
        columnaE4.removeEventListener('click', desplazamiento4);  //---------------Elimina el evento de la columnaE4(desplazamiento4)--------
        
        function desplazamientoReyNegro5(){
            if(peonBlanco.classList.contains('movimientoPeonBlanco2')){
                reyNegro.classList.add('movimientoReyNegro5');
            }    
        }
        setTimeout(desplazamientoReyNegro5, 500);    
    }   
    
}
columnaE3.addEventListener('click', desplazamiento5);

//----------------------------------------------------- desplazamiento6 ----------------------------------------------------------------------

function desplazamiento6(){
    if(columnaF3.classList.contains('styleCasilla')){
        reyBlanco.classList.add('movimientoReyBlanco4');
        columnaF3.classList.remove('styleCasilla');
        reyBlanco.removeEventListener('click', casillaF3);

        peonBlanco.addEventListener('click', casillaE2); //------------Activa el evento de la casilla E2-------------
        columnaE3.removeEventListener('click', desplazamiento5); //---------------Elimina el evento de la columnaE3(desplazamiento5)--------

        function desplazamientoReyNegro6(){
            if(reyBlanco.classList.contains('movimientoReyBlanco4')){
                reyNegro.classList.add('movimientoReyNegro6');
            }    
        }
        setTimeout(desplazamientoReyNegro6, 500);    

    }    

}
columnaF3.addEventListener('click', desplazamiento6);

//----------------------------------------------------- desplazamiento7 ----------------------------------------------------------------------
function desplazamiento7(){
    if(columnaE2.classList.contains('styleCasilla')){
        peonBlanco.classList.add('movimientoPeonBlanco3');
        columnaE2.classList.remove('styleCasilla');
        peonBlanco.removeEventListener('click', casillaE2);
        
        reyBlanco.addEventListener('click', casillaE3); //---------------Activa el evento de la casilla E3--------
        columnaF3.removeEventListener('click', desplazamiento6); //---------------Elimina el evento de la columnaF3(desplazamiento6)--------

        function desplazamientoReyNegro7(){
            if(peonBlanco.classList.contains('movimientoPeonBlanco3')){
                reyNegro.classList.add('movimientoReyNegro7');
            }    
        }
        setTimeout(desplazamientoReyNegro7, 500);
    }    

}
columnaE2.addEventListener('click', desplazamiento7);

//----------------------------------------------------- desplazamiento8 ----------------------------------------------------------------------
function desplazamiento8(){
    if(columnaE3.classList.contains('styleCasilla')){
        reyBlanco.classList.add('movimientoReyBlanco5');
        columnaE3.classList.remove('styleCasilla');
        reyBlanco.removeEventListener('click', casillaE3); 
        
        columnaE2.removeEventListener('click', desplazamiento7); //---------------Elimina el evento de la columnaE2(desplazamiento7)--------
        
        function aparicionTabla(){
            tablas.style.display = 'block';
        }
        setTimeout(aparicionTabla, 500);    
    }    
}

columnaE3.addEventListener('click', desplazamiento8);

