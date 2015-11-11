var jugador1;
var jugador2;
var jugador3;
var jugador4;
var turnoJugador1;
var turnoJugador2;
var turnoJugador3;
var turnoJugador4;
var fichasDisponibles;
var mover;
var jug301=false;
var jug302=false;
var jug303=false;
var jug304 = false;
var uso1=0;
var uso2=0;
var uso3=0;
var uso4=0;
var arreglo1;
var arreglo2;
var arreglo3;
var arreglo4;
var arrayMovimientosJugador1;
var arrayMovimientosJugador2;
var arrayMovimientosJugador3;
var arrayMovimientosJugador4;
var usoCarta=false;
var usoCartaCombinar=false;
var acumulado=new Array(0,0,0,0);
var cantidadPartidas=0;
var puntuacionJugador1=new Array();
var puntuacionJugador2=new Array();
var puntuacionJugador3=new Array();
var puntuacionJugador4=new Array();
var cantidadJugadores=0;
var nombresJugadores=new Array(4);
//------------------------------------------------------------------------------
//Método Inicial que al cargar la pantalla genera las fichas y reparte 14 fichas a cada jugador
function iniciarJuego(){
    turnoJugador1=false;
    turnoJugador2=false;
    turnoJugador3=false;
    turnoJugador4=false;
    fichasDisponibles=new Array();
    jugador1=new Array();
    jugador2=new Array();
    jugador3=new Array();
    jugador4=new Array();
    arreglo1=new Array(4);
    arreglo2=new Array(4);
    arreglo3=new Array(4);
    arreglo4=new Array(4);
    mover=new Array(1);
    arrayMovimientosJugador1=new Array(52);
    arrayMovimientosJugador2=new Array(52);
    arrayMovimientosJugador3=new Array(52);
    arrayMovimientosJugador4=new Array(52);
    usoCarta=false;
    usoCartaCombinar=false;
    cantidadPartidas++;
    document.getElementById("tabla1").style.display="none";
    document.getElementById("tabla2").style.display="none";
    document.getElementById("btnPuntuaciones").style.display="none";
    document.getElementById("tablaResultados").style.display="none";
    document.getElementById("btnPuntuaciones").style.display="none";
    document.getElementById("jugadortxt").style.display="none";
    seleccionarJugadores();
    solicitarNombres();
    crearTableroJuego();
    generarFichas();
    mostrarFichasJugador1();
    crearTablaPuntuaciones();     
}
//------------------------------------------------------------------------------
//Método para seleccionar la cantidad de jugadores 
function seleccionarJugadores(){
    cantidadJugadores = prompt("Por favor, ingrese la cantidad de Jugadores:");
    //Valida que como mínimo debe haber 2 jugadores y como máximo 4
    while(cantidadJugadores<2||cantidadJugadores>4){
        alert("Solamente es permitido como mínimo 2 y máximo 4 jugadores ");
        seleccionarJugadores();
    }
    
}
//------------------------------------------------------------------------------
//Función para solicitar los nombres a los diferentes jugadores
function solicitarNombres(){
    if(cantidadJugadores==="2"){
            nombre1=prompt("Jugador 1, favor ingrese su nombre:");
            while(nombre1===""){
                nombre1=prompt("Jugador 1, favor ingrese su nombre:");
            }
            nombresJugadores[0]=nombre1;
            nombre2=prompt("Jugador 2, favor ingrese su nombre:");
            while(nombre2===""){
                nombre2=prompt("Jugador 2, favor ingrese su nombre:");
            }
            nombresJugadores[1]=nombre2; 
    }
    if(cantidadJugadores==="3"){
            nombre1=prompt("Jugador 1, favor ingrese su nombre:");
            while(nombre1===""){
                nombre1=prompt("Jugador 1, favor ingrese su nombre:");
            }
            nombresJugadores[0]=nombre1;
            nombre2=prompt("Jugador 2, favor ingrese su nombre:");
            while(nombre2===""){
                nombre2=prompt("Jugador 2, favor ingrese su nombre:");
            }
            nombresJugadores[1]=nombre2; 
            nombre3=prompt("Jugador 3, favor ingrese su nombre:");
            while(nombre3===""){
                nombre3=prompt("Jugador 3, favor ingrese su nombre:");
            }
            nombresJugadores[2]=nombre3; 
    }
    if(cantidadJugadores==="4"){
            nombre1=prompt("Jugador 1, favor ingrese su nombre:");
            while(nombre1===""){
                nombre1=prompt("Jugador 1, favor ingrese su nombre:");
            }
            nombresJugadores[0]=nombre1;
            nombre2=prompt("Jugador 2, favor ingrese su nombre:");
            while(nombre2===""){
                nombre2=prompt("Jugador 2, favor ingrese su nombre:");
            }
            nombresJugadores[1]=nombre2; 
            nombre3=prompt("Jugador 3, favor ingrese su nombre:");
            while(nombre3===""){
                nombre3=prompt("Jugador 3, favor ingrese su nombre:");
            }
            nombresJugadores[2]=nombre3; 
            nombre4=prompt("Jugador 4, favor ingrese su nombre:");
            while(nombre4===""){
                nombre4=prompt("Jugador 4, favor ingrese su nombre:");
            }
            nombresJugadores[3]=nombre4; 
    }
}
//------------------------------------------------------------------------------
//Establece el tablero inicial del juego con imágenes de color café
function crearTableroJuego(){
    document.getElementById("tabla1").style.display="table";
    document.getElementById("btnPuntuaciones").style.display="block";
    document.getElementById("tabla2").style.display="table";
    document.getElementById("btnPuntuaciones").style.display="block";
    document.getElementById("jugadortxt").style.display="block";
    
    //Recorre la tabla 1 e inserta en cada celda una imagen de color café
    for(var fila=0;fila<6;fila++){
        for(var columna=0; columna<26; columna++){
            document.getElementById('tabla1').rows[fila].cells[columna].innerHTML='<img src="Imagenes/cafe.PNG">';  
        }
    } 
}
//------------------------------------------------------------------------------
//Método que almacena en un arreglo las 106 fichas que se utilizarán en el juego
function generarFichas(){
    var totalFichas=new Array(106);
    var union = new Array(104);
    //Almacena en el arreglo los números del 1 al 13 (8 veces por cada dígito)
    var numeros=new Array(104);
    numeros=generarArrayNumeros();
    //Almacena en el arreglo los colores del método generarArrayColores
    var colores=new Array(104);
    colores=generarArrayColores();
    //Une el array de los números con el array de los colores para posteriormente utilizar las imágenes
    for(i=0;i<104;i++){
         union[i]=numeros[i]+""+colores[i]+"";
    }
    //Almacena en el arreglo de totalFichas las fichas de manera aleatoria (sin orden)
    var posicion=0;
    while(posicion < 104) {
        var contador = 0;
        var aleatorio= Math.floor(Math.random()*104); //Genera un número aleatorio entre el 0 y el 104
        //Cuenta la cantidad de veces que se repite la ficha en el array
        for (i=0;i<104;i++) {
            if(totalFichas[i] === union[aleatorio]) {
                contador++;
            }
        }
        //Si solamente se repite una vez se agrega en el arreglo
        if(contador < 2) { 
           totalFichas[posicion] = union[aleatorio];
            posicion++;
        }
    }
    totalFichas[104]='comodin1';
    totalFichas[105]='comodin2';
    if(cantidadJugadores==="2"){
        for(p=0;p<14;p++){
        jugador1[p]=totalFichas[p];
        }
        //Se reparte 14 fichas al segundo jugador
        posicion=14;
        for(p=0;p<14;p++){
            jugador2[p]=totalFichas[posicion];
            posicion++;
        }
        posicion=28;
        for(p=0;p<78;p++){
            fichasDisponibles[p]=totalFichas[posicion];
            posicion++;
        }
    }
    if(cantidadJugadores==="3"){
        //Se reparte 14 fichas al primer jugador
        for(p=0;p<14;p++){
            jugador1[p]=totalFichas[p];
        }
        //Se reparte 14 fichas al segundo jugador
        posicion=14;
        for(p=0;p<14;p++){
            jugador2[p]=totalFichas[posicion];
            posicion++;
        }
        //Se reparte 14 fichas al tercer jugador
        posicion=28;
        for(p=0;p<14;p++){
            jugador3[p]=totalFichas[posicion];
            posicion++;
        }
        posicion=42;
        for(p=0;p<64;p++){
            fichasDisponibles[p]=totalFichas[posicion];
            posicion++;
        }
    }
    if(cantidadJugadores==="4"){
        //Se reparte 14 fichas al primer jugador
        for(p=0;p<14;p++){
            jugador1[p]=totalFichas[p];
        }
        //Se reparte 14 fichas al segundo jugador
        posicion=14;
        for(p=0;p<14;p++){
            jugador2[p]=totalFichas[posicion];
            posicion++;
        }
        //Se reparte 14 fichas al tercer jugador
        posicion=28;
        for(p=0;p<14;p++){
            jugador3[p]=totalFichas[posicion];
            posicion++;
        }
        //Se reparte 14 fichas al cuarto jugador
        posicion=42;
        for(p=0;p<14;p++){
            jugador4[p]=totalFichas[posicion];
            posicion++;
        }
        //Las fichas restantes se almacenan en el array fichasDisponibles
        posicion=56;
        for(p=0;p<50;p++){
            fichasDisponibles[p]=totalFichas[posicion];
            posicion++;
        }
    }
    return totalFichas;
}
 //------------------------------------------------------------------------------
//Método que genera un arreglo de 104 números (8 de cada dígito del 1 al 13) 1111111 2222222 3333333
function generarArrayNumeros(){
    var numeros=new Array(104);
    //Posición del array
    var posicion = 0; 
    for (digito = 1; digito < 14; digito++) { //Del 1 al 13
        for(i=0;i<8;i++){
            numeros[posicion] = digito;
            posicion++;
        }
    }
    return numeros;
}
 //------------------------------------------------------------------------------
 //Método que almacena 104 colores (8 de cada color (Negro, Azul, Rojo, Amarillo))
function generarArrayColores(){
    var color=new Array(104);
    var colores=new Array("black","blue","red","yellow","black","blue","red","yellow");
    var posicion= 0;
    for (i=0; i < 14; i++) { //8 colores por cada ficha
        for(j=0;j<8;j++){
            color[posicion] = colores[j];
            posicion++;
        }
    }
   return color;
}
//------------------------------------------------------------------------------
//Método que permite crear la Tabla de las puntuaciones generales según el número de partidas
function crearTablaPuntuaciones(){
    var idTabla = document.getElementById("tablaResultados");
    var fila = idTabla.insertRow(cantidadPartidas);
    var celda1=fila.insertCell(0);
    celda1.innerHTML="Partida"+cantidadPartidas;
    fila.insertCell(1);
    fila.insertCell(2);
    fila.insertCell(3);
    fila.insertCell(4);
    document.getElementById("tablaResultados").rows[0].cells[0].style.background="#07E743";
    document.getElementById("tablaResultados").rows[cantidadPartidas].cells[0].style.background="white";
    document.getElementById("tablaResultados").rows[cantidadPartidas].cells[1].style.background="white";
    document.getElementById("tablaResultados").rows[cantidadPartidas].cells[2].style.background="white";
    document.getElementById("tablaResultados").rows[cantidadPartidas].cells[3].style.background="white";
    document.getElementById("tablaResultados").rows[cantidadPartidas].cells[4].style.background="white";
    document.getElementById("tablaResultados").rows[cantidadPartidas+1].cells[0].style.background="#07E743";
    if(cantidadJugadores==="2"){
        document.getElementById("tablaResultados").rows[0].cells[1].innerHTML=nombresJugadores[0];
        document.getElementById("tablaResultados").rows[0].cells[2].innerHTML=nombresJugadores[1];
        document.getElementById("tablaResultados").rows[0].cells[3].style.display="none";
        document.getElementById("tablaResultados").rows[0].cells[4].style.display="none";
        document.getElementById("tablaResultados").rows[cantidadPartidas].cells[3].style.display="none";
        document.getElementById("tablaResultados").rows[cantidadPartidas].cells[4].style.display="none";
        document.getElementById("tablaResultados").rows[cantidadPartidas+1].cells[3].style.display="none";
        document.getElementById("tablaResultados").rows[cantidadPartidas+1].cells[4].style.display="none";
    }
    if(cantidadJugadores==="3"){
        document.getElementById("tablaResultados").rows[0].cells[1].innerHTML=nombresJugadores[0];
        document.getElementById("tablaResultados").rows[0].cells[2].innerHTML=nombresJugadores[1];
        document.getElementById("tablaResultados").rows[0].cells[3].innerHTML=nombresJugadores[2];
        document.getElementById("tablaResultados").rows[0].cells[4].style.display="none";
        document.getElementById("tablaResultados").rows[cantidadPartidas].cells[4].style.display="none";
        document.getElementById("tablaResultados").rows[cantidadPartidas+1].cells[4].style.display="none";
    }
    if(cantidadJugadores==="4"){
        document.getElementById("tablaResultados").rows[0].cells[1].innerHTML=nombresJugadores[0];
        document.getElementById("tablaResultados").rows[0].cells[2].innerHTML=nombresJugadores[1];
        document.getElementById("tablaResultados").rows[0].cells[3].innerHTML=nombresJugadores[2];
        document.getElementById("tablaResultados").rows[0].cells[4].innerHTML=nombresJugadores[3];
    }
    ganadorAcumulado();
}
//------------------------------------------------------------------------------
//Método que se invoca al solicitar una ficha
function solicitarCarta(){
    if(cantidadJugadores==="2"){
      //Si es el turno del primer jugador
        if(!turnoJugador1){
            //Si no ha colocado una ficha en el tablero si es posible solicitar una ficha
            if(usoCarta===false){ 
                if(fichasDisponibles.length===0){
                    alert("La partida ha finalizado!. No hay fichas disponibles");
                    resultados2();
                }
                else{
                    insertarFichaJug1();
                    mostrarFichasJugador2();
                    turnoJugador1=true;
                    //Establece el turno al segundo jugador
                    turnoJugador2=false;
                }
            }
            else{
                alert("No es permitido solicitar una ficha mientras se haya colocado una ficha en el tablero del juego");
            }          
        }
        else{
            //Si es el turno del segundo jugador
            if(!turnoJugador2){
                //Si no ha colocado una ficha en el tablero si es posible solicitar una ficha
                if(usoCarta===false){
                    if(fichasDisponibles.length===0){
                        alert("La partida ha finalizado!. No hay fichas disponibles");
                        resultados2();
                    }
                    else{
                        insertarFichaJug2();
                        mostrarFichasJugador1();
                        turnoJugador2=true;
                        //Establece el turno al tercer jugador
                        turnoJugador1=false;
                    }
                }
                else{
                    alert("No es permitido solicitar una ficha mientras se haya colocado una ficha en el tablero del juego");
                }
            }  
        }
    }
    if(cantidadJugadores==="3"){
        //Si es el turno del primer jugador
        if(!turnoJugador1){
            //Si no ha colocado una ficha en el tablero si es posible solicitar una ficha
            if(usoCarta===false){ 
                if(fichasDisponibles.length===0){
                    alert("La partida ha finalizado!. No hay fichas disponibles");
                    resultados2();
                }
                else{
                    insertarFichaJug1();
                    mostrarFichasJugador2();
                    turnoJugador1=true;
                    //Establece el turno al segundo jugador
                    turnoJugador2=false;
                }
            }
            else{
                alert("No es permitido solicitar una ficha mientras se haya colocado una ficha en el tablero del juego");
            }          
        }
        else{
            //Si es el turno del segundo jugador
            if(!turnoJugador2){
                //Si no ha colocado una ficha en el tablero si es posible solicitar una ficha
                if(usoCarta===false){
                    if(fichasDisponibles.length===0){
                        alert("La partida ha finalizado!. No hay fichas disponibles");
                        resultados2();
                    }
                    else{
                        insertarFichaJug2();
                        mostrarFichasJugador3();
                        turnoJugador2=true;
                        //Establece el turno al tercer jugador
                        turnoJugador3=false;
                    }
                }
                else{
                    alert("No es permitido solicitar una ficha mientras se haya colocado una ficha en el tablero del juego");
                }
            }
            else{
                //Si es el turno del tercer jugador
                if(!turnoJugador3){
                    //Si no ha colocado una ficha en el tablero si es posible solicitar una ficha
                    if(usoCarta===false){
                        if(fichasDisponibles.length===0){
                            alert("La partida ha finalizado!. No hay fichas disponibles");
                            resultados2();
                        }
                        else{
                            insertarFichaJug3();
                            mostrarFichasJugador1();
                            turnoJugador3=true;
                            //Establece el turno al cuarto jugador
                            turnoJugador1=false;
                        }
                    }
                    else{
                        alert("No es permitido solicitar una ficha mientras se haya colocado una ficha en el tablero del juego");
                    }
                }
            }
        }
    }
    if(cantidadJugadores==="4"){
       //Si es el turno del primer jugador
        if(!turnoJugador1){
            //Si no ha colocado una ficha en el tablero si es posible solicitar una ficha
            if(usoCarta===false){ 
                if(fichasDisponibles.length===0){
                    alert("La partida ha finalizado!. No hay fichas disponibles");
                    resultados2();
                }
                else{
                    insertarFichaJug1();
                    mostrarFichasJugador2();
                    turnoJugador1=true;
                    //Establece el turno al segundo jugador
                    turnoJugador2=false;
                }
            }
            else{
                alert("No es permitido solicitar una ficha mientras se haya colocado una ficha en el tablero del juego");
            }          
        }
        else{
            //Si es el turno del segundo jugador
            if(!turnoJugador2){
                //Si no ha colocado una ficha en el tablero si es posible solicitar una ficha
                if(usoCarta===false){
                    if(fichasDisponibles.length===0){
                        alert("La partida ha finalizado!. No hay fichas disponibles");
                        resultados2();
                    }
                    else{
                        insertarFichaJug2();
                        mostrarFichasJugador3();
                        turnoJugador2=true;
                        //Establece el turno al tercer jugador
                        turnoJugador3=false;
                    }
                }
                else{
                    alert("No es permitido solicitar una ficha mientras se haya colocado una ficha en el tablero del juego");
                }
            }
            else{
                //Si es el turno del tercer jugador
                if(!turnoJugador3){
                    //Si no ha colocado una ficha en el tablero si es posible solicitar una ficha
                    if(usoCarta===false){
                        if(fichasDisponibles.length===0){
                            alert("La partida ha finalizado!. No hay fichas disponibles");
                            resultados2();
                        }
                        else{
                            insertarFichaJug3();
                            mostrarFichasJugador4();
                            turnoJugador3=true;
                            //Establece el turno al cuarto jugador
                            turnoJugador4=false;
                        }
                    }
                    else{
                        alert("No es permitido solicitar una ficha mientras se haya colocado una ficha en el tablero del juego");
                    }
                }
                //Si es el turno del cuarto jugador
                else{
                    //Si no ha colocado una ficha en el tablero si es posible solicitar una ficha
                    if(usoCarta===false){
                        if(fichasDisponibles.length===0){
                        alert("La partida ha finalizado!. No hay fichas disponibles");
                        resultados2();
                        }
                        else{
                           insertarFichaJug4();
                            mostrarFichasJugador1();
                            turnoJugador4=true;
                            //Vuelve el turno al primer jugador
                            turnoJugador1=false; 
                        }
                    }
                    else{
                        alert("No es permitido solicitar una ficha mientras se haya colocado una ficha en el tablero del juego");
                    }
                } 
            }
        } 
    } 
     
}
//------------------------------------------------------------------------------
//Método que inserta una nueva ficha al primer jugador
 function insertarFichaJug1(){
    var longitud=jugador1.length;
    var longitudDisponibles=fichasDisponibles.length-1;
    jugador1[longitud]=fichasDisponibles[longitudDisponibles]; //Agrega la ficha al jugador 1 en la última posición
    fichasDisponibles.splice(longitudDisponibles,1); //Elimina la ficha del arreglo fichasDisponibles 
 }  
 //------------------------------------------------------------------------------
 //Método que inserta una nueva ficha al segundo jugador
  function insertarFichaJug2(){
    var longitud=jugador2.length;
    var longitudDisponibles=fichasDisponibles.length-1;
    jugador2[longitud]=fichasDisponibles[longitudDisponibles];//Agrega la ficha al jugador 2 en la última posición
    fichasDisponibles.splice(longitudDisponibles,1);//Elimina la ficha del arreglo fichasDisponibles
 }  
 //------------------------------------------------------------------------------
  //Método que inserta una nueva ficha al tercer jugador
  function insertarFichaJug3(){
    var longitud=jugador3.length;
    var longitudDisponibles=fichasDisponibles.length-1;
    jugador3[longitud]=fichasDisponibles[longitudDisponibles];//Agrega la ficha al jugador 3 en la última posición
    fichasDisponibles.splice(longitudDisponibles,1);//Elimina la ficha del arreglo fichasDisponibles
 }  
 //------------------------------------------------------------------------------
   //Método que agrega una nueva carta al cuarto jugador
  function insertarFichaJug4(){
    var longitud=jugador4.length;
    var longitudDisponibles=fichasDisponibles.length-1;
    jugador4[longitud]=fichasDisponibles[longitudDisponibles];//Agrega la ficha al jugador 4 en la última posición
    fichasDisponibles.splice(longitudDisponibles,1);//Elimina la ficha del arreglo fichasDisponibles
 }  
//------------------------------------------------------------------------------
//Método que permite mostrar la tabla con las fichas del Jugador 1
function mostrarFichasJugador1(){
    document.formulario1.nombre.value="Turno de "+nombresJugadores[0];
    var imagenes=new Array;
    //Crea un array llamado imagenes que almacenará las fichas del jugador 1 en formato de imagen
    for(k=0;k<106;k++){
       imagenes[k]="Imagenes/"+jugador1[k]+".png";
       if(imagenes[k]==="Imagenes/undefined.png"){
           imagenes[k]="Imagenes/cafe.PNG";
       }
    }
    //Recorre la tabla 2 y añade las imágenes de las fichas que posee el jugador 1
    var posicion=0;
    for(var i=0;i < document.getElementById('tabla2').rows.length; i++){
        for(var j=0; j<26; j++){
            document.getElementById('tabla2').rows[i].cells[j].innerHTML="<img src="+imagenes[posicion]+">";
            if(document.getElementById('tabla2').rows[i].cells[j].innerHTML==='<img src="undefined">'){
                document.getElementById('tabla2').rows[i].cells[j].innerHTML='<img src="Imagenes/cafe.PNG">';
            }
            posicion++;  
        }
    } 
}
//------------------------------------------------------------------------------
//Método que permite mostrar la tabla con las fichas del Jugador 2
function mostrarFichasJugador2(){
    document.formulario1.nombre.value="Turno de "+nombresJugadores[1];
    var imagenes=new Array;
    //Crea un array llamado imagenes que almacenará las fichas del jugador 2 en formato de imagen
    for(k=0;k<106;k++){
       imagenes[k]="Imagenes/"+jugador2[k]+".png";
       if(imagenes[k]==="Imagenes/undefined.png"){
           imagenes[k]="Imagenes/cafe.PNG";
       }
    }
    //Recorre la tabla 2 y añade las imágenes de las fichas que posee el jugador 2
    var posicion=0;
    for(var i=0;i < document.getElementById('tabla2').rows.length; i++){
        for(var j=0; j<26; j++){
            document.getElementById('tabla2').rows[i].cells[j].innerHTML="<img src="+imagenes[posicion]+">";
            if(document.getElementById('tabla2').rows[i].cells[j].innerHTML==='<img src="undefined">'){
                document.getElementById('tabla2').rows[i].cells[j].innerHTML='<img src="Imagenes/cafe.PNG">';
            }
            posicion++;  
        }
    } 
}
//------------------------------------------------------------------------------
//Método que permite mostrar la tabla con las fichas del Jugador 3
function mostrarFichasJugador3(){
    document.formulario1.nombre.value="Turno de "+nombresJugadores[2];
    var imagenes=new Array;
    //Crea un array llamado imagenes que almacenará las fichas del jugador 3 en formato de imagen
    for(k=0;k<106;k++){
       imagenes[k]="Imagenes/"+jugador3[k]+".png";
       if(imagenes[k]==="Imagenes/undefined.png"){
           imagenes[k]="Imagenes/cafe.PNG";
       }
    }
    //Recorre la tabla 2 y añade las imágenes de las fichas que posee el jugador 3
    var posicion=0;
    for(var i=0;i < document.getElementById('tabla2').rows.length; i++){
        for(var j=0; j<26; j++){
            document.getElementById('tabla2').rows[i].cells[j].innerHTML="<img src="+imagenes[posicion]+">";
            if(document.getElementById('tabla2').rows[i].cells[j].innerHTML==='<img src="undefined">'){
                document.getElementById('tabla2').rows[i].cells[j].innerHTML='<img src="Imagenes/cafe.PNG">';
            }
            posicion++;  
        }
    } 
}
//------------------------------------------------------------------------------
//Método que permite mostrar la tabla con las fichas del Jugador 4
function mostrarFichasJugador4(){
    document.formulario1.nombre.value="Turno de "+nombresJugadores[3];
    var imagenes=new Array;
    //Crea un array llamado imagenes que almacenará las fichas del jugador 4 en formato de imagen
    for(k=0;k<106;k++){
       imagenes[k]="Imagenes/"+jugador4[k]+".png";
       if(imagenes[k]==="Imagenes/undefined.png"){
           imagenes[k]="Imagenes/cafe.PNG";
       }
    }
    //Recorre la tabla 2 y añade las imágenes de las fichas que posee el jugador 4
    var posicion=0;
    for(var i=0;i < document.getElementById('tabla2').rows.length; i++){
        for(var j=0; j<26; j++){
            document.getElementById('tabla2').rows[i].cells[j].innerHTML="<img src="+imagenes[posicion]+">";
            if(document.getElementById('tabla2').rows[i].cells[j].innerHTML==='<img src="undefined">'){
                document.getElementById('tabla2').rows[i].cells[j].innerHTML='<img src="Imagenes/cafe.PNG">';
            }
            posicion++;  
        }
    } 
}
//------------------------------------------------------------------------------
function movimientos(elemento){
    var id=elemento.id;
    if(!turnoJugador1){
        //Cuando ya hay una carta
        if(document.getElementById(id).innerHTML!=='<img src="Imagenes/cafe.PNG">'){
            mover[0]=document.getElementById(id).innerHTML; //Obtiene el nombre de la ficha
            document.getElementById(id).innerHTML='<img src="Imagenes/cafe.PNG">'; //La pone café;
        }
        //Cuando es una carta café
        else{
            document.getElementById(id).innerHTML=mover[0]; //undefined
            mover[0]='<img src="Imagenes/cafe.PNG">';
            usoCarta=false;
            usoCartaCombinar=false;    
        }
    }
    else{
        if(!turnoJugador2){
            //Cuando ya hay una carta
            if(document.getElementById(id).innerHTML!=='<img src="Imagenes/cafe.PNG">'){
                mover[0]=document.getElementById(id).innerHTML; //Obtiene la carta
                document.getElementById(id).innerHTML='<img src="Imagenes/cafe.PNG">'; //La pone café;
            }
            //Cuando es una carta café
            else{
                    document.getElementById(id).innerHTML=mover[0]; //undefined
                    mover[0]='<img src="Imagenes/cafe.PNG">';
                    usoCarta=false;
                    usoCartaCombinar=false;
            } 
        }
        else{
            if(!turnoJugador3){
                //Cuando ya hay una carta
                if(document.getElementById(id).innerHTML!=='<img src="Imagenes/cafe.PNG">'){
                    mover[0]=document.getElementById(id).innerHTML; //Obtiene la carta
                    document.getElementById(id).innerHTML='<img src="Imagenes/cafe.PNG">'; //La pone café;
                }
                //Cuando es una carta café
                else{
                        document.getElementById(id).innerHTML=mover[0]; //undefined
                        mover[0]='<img src="Imagenes/cafe.PNG">';
                        usoCarta=false;
                        usoCartaCombinar=false;
                }
                
            }
            else{
                if(!turnoJugador4){
                    //Cuando ya hay una carta
                    if(document.getElementById(id).innerHTML!=='<img src="Imagenes/cafe.PNG">'){
                        mover[0]=document.getElementById(id).innerHTML; //Obtiene la carta
                        document.getElementById(id).innerHTML='<img src="Imagenes/cafe.PNG">'; //La pone café;
                    }
                    //Cuando es una carta café
                    else{
                            document.getElementById(id).innerHTML=mover[0]; //undefined
                            mover[0]='<img src="Imagenes/cafe.PNG">';
                            usoCarta=false;
                            usoCartaCombinar=false;
                    }
                    
                }
            }
        }
    }
}
function movimientos1(elemento){
    var id=elemento.id;
    if(!turnoJugador1){
          //Cuando no hay carta
        if(document.getElementById(id).innerHTML==='<img src="Imagenes/cafe.PNG">'){
            document.getElementById(id).innerHTML=mover[0];    //Se pone la carta anterior 
            if(mover[0]!=='<img src="Imagenes/cafe.PNG">'){
               arreglo1[uso1]=mover[0];
                arrayMovimientosJugador1[uso1]=mover[0];
                mover[0]='<img src="Imagenes/cafe.PNG">'; 
            }
            else{
                uso1--;
            }
            uso1++;
            usoCarta=true;
            usoCartaCombinar=true;
            if((arreglo1[0]!=='<img src="Imagenes/cafe.PNG">'&&arreglo1[1]!=='<img src="Imagenes/cafe.PNG">'&&arreglo1[2]!=='<img src="Imagenes/cafe.PNG">')||(arreglo1[0]!=='<img src="Imagenes/cafe.PNG">'&&arreglo1[1]!=='<img src="Imagenes/cafe.PNG">'&&arreglo1[2]!=='<img src="Imagenes/cafe.PNG">'&&arreglo1[3]!=='<img src="Imagenes/cafe.PNG">')){
                var sum30=validar30(arreglo1[0],arreglo1[1],arreglo1[2],arreglo1[3]);
                if(sum30===true){
                    jug301=true;
                    for(var i=0;i < jugador1.length; i++){
                        for(j=0;j<4;j++){
                             if(arreglo1[j]==='<img src="Imagenes/'+jugador1[i]+'.png">'){
                                 jugador1.splice(i,1);
                             }
                        }
                    }
                }
                else{
                }
            }
            else{
                arreglo1=new Array(4);
            }
        }
        //Cuando no hay una carta
        else{
            if(mover[0]!=='<img src="Imagenes/cafe.PNG">'){
               alert("Espacio ya utilizado"); 
            }
            else{
               mover[0]=document.getElementById(id).innerHTML;
               document.getElementById(id).innerHTML='<img src="Imagenes/cafe.PNG">'; 
            }
        }
    }
    else{
        if(!turnoJugador2){
            
            //Cuando no hay carta
            if(document.getElementById(id).innerHTML==='<img src="Imagenes/cafe.PNG">'){  
                document.getElementById(id).innerHTML=mover[0];
                if(mover[0]!=='<img src="Imagenes/cafe.PNG">'){
                   arreglo2[uso2]=mover[0];
                   arrayMovimientosJugador2[uso2]=mover[0];
                   mover[0]='<img src="Imagenes/cafe.PNG">'; 
                }
                else{
                    uso2--;
                }
                uso2++;
                usoCarta=true;
                usoCartaCombinar=true;
                if((arreglo2[0]!=='<img src="Imagenes/cafe.PNG">'&&arreglo2[1]!=='<img src="Imagenes/cafe.PNG">'&&arreglo2[2]!=='<img src="Imagenes/cafe.PNG">')||(arreglo2[0]!=='<img src="Imagenes/cafe.PNG">'&&arreglo2[1]!=='<img src="Imagenes/cafe.PNG">'&&arreglo2[2]!=='<img src="Imagenes/cafe.PNG">'&&arreglo2[3]!=='<img src="Imagenes/cafe.PNG">')){
                    var sum30=validar30(arreglo2[0],arreglo2[1],arreglo2[2],arreglo2[3]);
                    if(sum30===true){
                        jug302=true;
                        for(var i=0;i < jugador2.length; i++){
                            for(j=0;j<4;j++){
                                if(arreglo2[j]==='<img src="Imagenes/'+jugador2[i]+'.png">'){
                                    jugador2.splice(i,1);
                                }
                            }
                        }
                    }
                    else{
                    }
                }
                else{
                    arreglo2=new Array(4);
                }
            }
            //Cuando no hay una carta
            else{
                 if(mover[0]!=='<img src="Imagenes/cafe.PNG">'){
                   alert("Espacio ya utilizado"); 
                }
                else{
                   mover[0]=document.getElementById(id).innerHTML;
                   document.getElementById(id).innerHTML='<img src="Imagenes/cafe.PNG">'; 
                } 
            }
        }
        else{
            if(!turnoJugador3){
                //Cuando no hay carta
                if(document.getElementById(id).innerHTML==='<img src="Imagenes/cafe.PNG">'){
                    document.getElementById(id).innerHTML=mover[0];    //Se pone la carta anterior
                    if(mover[0]!=='<img src="Imagenes/cafe.PNG">'){
                       arreglo3[uso3]=mover[0];
                       arrayMovimientosJugador3[uso3]=mover[0];
                       mover[0]='<img src="Imagenes/cafe.PNG">'; 
                    }
                    else{
                        uso3--;
                    }
                    
                    uso3++;
                    usoCarta=true;
                    usoCartaCombinar=true;
                    if((arreglo3[0]!=='<img src="Imagenes/cafe.PNG">'&&arreglo3[1]!=='<img src="Imagenes/cafe.PNG">'&&arreglo3[2]!=='<img src="Imagenes/cafe.PNG">')||(arreglo3[0]!=='<img src="Imagenes/cafe.PNG">'&&arreglo3[1]!=='<img src="Imagenes/cafe.PNG">'&&arreglo3[2]!=='<img src="Imagenes/cafe.PNG">'&&arreglo3[3]!=='<img src="Imagenes/cafe.PNG">')){
                        var sum30=validar30(arreglo3[0],arreglo3[1],arreglo3[2],arreglo3[3]);
                        if(sum30===true){
                            jug303=true;
                            for(var i=0;i < jugador3.length; i++){
                                for(j=0;j<4;j++){
                                    if(arreglo3[j]==='<img src="Imagenes/'+jugador3[i]+'.png">'){
                                        jugador3.splice(i,1);
                                    }
                                }
                            }
                        }   
                    else{
                        }
                    }
                    else{
                        arreglo3=new Array(4);
                    }
                }
                //Cuando no hay una carta
                else{
                     if(mover[0]!=='<img src="Imagenes/cafe.PNG">'){
                       alert("Espacio ya utilizado"); 
                    }
                    else{
                       mover[0]=document.getElementById(id).innerHTML;
                       document.getElementById(id).innerHTML='<img src="Imagenes/cafe.PNG">'; 
                    } 
                }            
            }
            else{
                if(!turnoJugador4){
                     //Cuando no hay carta
                    if(document.getElementById(id).innerHTML==='<img src="Imagenes/cafe.PNG">'){ 
                        document.getElementById(id).innerHTML=mover[0];    //Se pone la carta anterior 
                        if(mover[0]!=='<img src="Imagenes/cafe.PNG">'){
                           arreglo4[uso4]=mover[0];
                           arrayMovimientosJugador4[uso4]=mover[0];
                           mover[0]='<img src="Imagenes/cafe.PNG">'; 
                        }
                        else{
                            uso4--;
                        }
                        uso4++;
                        usoCarta=true;
                        usoCartaCombinar=true;
                        if((arreglo4[0]!=='<img src="Imagenes/cafe.PNG">'&&arreglo4[1]!=='<img src="Imagenes/cafe.PNG">'&&arreglo4[2]!=='<img src="Imagenes/cafe.PNG">')||(arreglo4[0]!=='<img src="Imagenes/cafe.PNG">'&&arreglo4[1]!=='<img src="Imagenes/cafe.PNG">'&&arreglo4[2]!=='<img src="Imagenes/cafe.PNG">'&&arreglo4[3]!=='<img src="Imagenes/cafe.PNG">')){
                            var sum30=validar30(arreglo4[0],arreglo4[1],arreglo4[2],arreglo4[3]);
                            if(sum30===true){
                                jug304=true;
                                for(var i=0;i < jugador4.length; i++){
                                    for(j=0;j<4;j++){
                                        if(arreglo4[j]==='<img src="Imagenes/'+jugador4[i]+'.png">'){
                                            jugador4.splice(i,1);
                                        }
                                    }
                                 }
                            }
                            else{
                            }
                        }
                        else{
                           arreglo3=new Array(4); 
                        }
                    }
                    //Cuando no hay una carta
                    else{
                         if(mover[0]!=='<img src="Imagenes/cafe.PNG">'){
                           alert("Espacio ya utilizado"); 
                        }
                        else{
                           mover[0]=document.getElementById(id).innerHTML;
                           document.getElementById(id).innerHTML='<img src="Imagenes/cafe.PNG">'; 
                        }    
                    }
                }
            }
        }
    }
}
//------------------------------------------------------------------------------
//Método que valida si la suma de las fichas es 30
function validar30(valor1,valor2,valor3,valor4) {
    var bandera = false; 
    //Escaleras de 4 fichas o más que sumen 30
    for(i=6;i<=13;i++){
        if (valor1 === '<img src="Imagenes/'+i+'red.png">' && valor2 === '<img src="Imagenes/'+(i+1)+'red.png">' && valor3 === '<img src="Imagenes/'+(i+2)+'red.png">' && valor4 === '<img src="Imagenes/'+(i+3)+'red.png">') {
           bandera = true;
        }
        if (valor1 === '<img src="Imagenes/'+i+'blue.png">' && valor2 === '<img src="Imagenes/'+(i+1)+'blue.png">' && valor3 === '<img src="Imagenes/'+(i+2)+'blue.png">' && valor4 === '<img src="Imagenes/'+(i+3)+'blue.png">') {
           bandera = true;
        }
        if (valor1 === '<img src="Imagenes/'+i+'yellow.png">' && valor2 === '<img src="Imagenes/'+(i+1)+'yellow.png">' && valor3 === '<img src="Imagenes/'+(i+2)+'yellow.png">' && valor4 === '<img src="Imagenes/'+(i+3)+'yellow.png">') {
           bandera = true;
        }
        if (valor1 === '<img src="Imagenes/'+i+'black.png">' && valor2 === '<img src="Imagenes/'+(i+1)+'black.png">' && valor3 === '<img src="Imagenes/'+(i+2)+'black.png">' && valor4 === '<img src="Imagenes/'+(i+3)+'black.png">') {
           bandera = true;
        } 
    }
    //Escaleras de 3 fichas que sumen 30
    for(i=9;i<=13;i++){
        if (valor1 === '<img src="Imagenes/'+i+'red.png">' && valor2 === '<img src="Imagenes/'+(i+1)+'red.png">' && valor3 === '<img src="Imagenes/'+(i+2)+'red.png">') {
           bandera = true;
        }
        if (valor1 === '<img src="Imagenes/'+i+'blue.png">' && valor2 === '<img src="Imagenes/'+(i+1)+'blue.png">' && valor3 === '<img src="Imagenes/'+(i+2)+'blue.png">') {
           bandera = true;
        }
        if (valor1 === '<img src="Imagenes/'+i+'yellow.png">' && valor2 === '<img src="Imagenes/'+(i+1)+'yellow.png">' && valor3 === '<img src="Imagenes/'+(i+2)+'yellow.png">') {
           bandera = true;
        }
        if (valor1 === '<img src="Imagenes/'+i+'black.png">' && valor2 === '<img src="Imagenes/'+(i+1)+'black.png">' && valor3 === '<img src="Imagenes/'+(i+2)+'black.png">') {
           bandera = true;
        } 
    }
    //Tríos de fichas que sumen 30
    for(i=10;i<=13;i++){
        if ((valor1 === '<img src="Imagenes/'+i+'red.png">' && valor2 === '<img src="Imagenes/'+i+'blue.png">' && valor3 === '<img src="Imagenes/'+i+'yellow.png">') ||
                (valor1 === '<img src="Imagenes/'+i+'red.png">' && valor2 === '<img src="Imagenes/'+i+'yellow.png">' && valor3 === '<img src="Imagenes/'+i+'blue.png">') ||
                (valor1 === '<img src="Imagenes/'+i+'blue.png">' && valor2 === '<img src="Imagenes/'+i+'red.png">' && valor3 === '<img src="Imagenes/'+i+'yellow.png">') ||
                (valor1 === '<img src="Imagenes/'+i+'blue.png">' && valor2 === '<img src="Imagenes/'+i+'yellow.png">' && valor3 === '<img src="Imagenes/'+i+'red.png">') ||
                (valor1 === '<img src="Imagenes/'+i+'yellow.png">' && valor2 === '<img src="Imagenes/'+i+'red.png">' && valor3 === '<img src="Imagenes/'+i+'blue.png">') ||
                (valor1 === '<img src="Imagenes/'+i+'yellow.png">' && valor2 === '<img src="Imagenes/'+i+'blue.png">' && valor3 === '<img src="Imagenes/'+i+'red.png">')) {
            bandera = true;
        }
        //--------------------------------------------------------------------
        if ((valor1 === '<img src="Imagenes/'+i+'red.png">' && valor2 === '<img src="Imagenes/'+i+'blue.png">' && valor3 === '<img src="Imagenes/'+i+'black.png">') ||
                (valor1 === '<img src="Imagenes/'+i+'red.png">' && valor2 === '<img src="Imagenes/'+i+'black.png">' && valor3 === '<img src="Imagenes/'+i+'blue.png">') ||
                (valor1 === '<img src="Imagenes/'+i+'blue.png">' && valor2 === '<img src="Imagenes/'+i+'red.png">' && valor3 === '<img src="Imagenes/'+i+'black.png">') ||
                (valor1 === '<img src="Imagenes/'+i+'blue.png">' && valor2 === '<img src="Imagenes/'+i+'black.png">' && valor3 === '<img src="Imagenes/'+i+'red.png">') ||
                (valor1 === '<img src="Imagenes/'+i+'black.png">' && valor2 === '<img src="Imagenes/'+i+'red.png">' && valor3 === '<img src="Imagenes/'+i+'blue.png">') ||
                (valor1 === '<img src="Imagenes/'+i+'black.png">' && valor2 === '<img src="Imagenes/'+i+'blue.png">' && valor3 === '<img src="Imagenes/'+i+'red.png">')) {
            bandera = true;
        }

        //--------------------------------------------------------------------
        if ((valor1 === '<img src="Imagenes/'+i+'red.png">' && valor2 === '<img src="Imagenes/'+i+'yellow.png">' && valor3 === '<img src="Imagenes/'+i+'black.png">') ||
                (valor1 === '<img src="Imagenes/'+i+'red.png">' && valor2 === '<img src="Imagenes/'+i+'black.png">' && valor3 === '<img src="Imagenes/'+i+'yellow.png">') ||
                (valor1 === '<img src="Imagenes/'+i+'yellow.png">' && valor2 === '<img src="Imagenes/'+i+'red.png">' && valor3 === '<img src="Imagenes/'+i+'black.png">') ||
                (valor1 === '<img src="Imagenes/'+i+'yellow.png">' && valor2 === '<img src="Imagenes/'+i+'black.png">' && valor3 === '<img src="Imagenes/'+i+'red.png">') ||
                (valor1 === '<img src="Imagenes/'+i+'black.png">' && valor2 === '<img src="Imagenes/'+i+'red.png">' && valor3 === '<img src="Imagenes/'+i+'yellow.png">') ||
                (valor1 === '<img src="Imagenes/'+i+'black.png">' && valor2 === '<img src="Imagenes/'+i+'yellow.png">' && valor3 === '<img src="Imagenes/'+i+'red.png">')) {
            bandera = true;
        }
        //--------------------------------------------------------------------
        if ((valor1 === '<img src="Imagenes/'+i+'blue.png">' && valor2 === '<img src="Imagenes/'+i+'yellow.png">' && valor3 === '<img src="Imagenes/'+i+'black.png">') ||
                (valor1 === '<img src="Imagenes/'+i+'blue.png">' && valor2 === '<img src="Imagenes/'+i+'black.png">' && valor3 === '<img src="Imagenes/'+i+'yellow.png">') ||
                (valor1 === '<img src="Imagenes/'+i+'yellow.png">' && valor2 === '<img src="Imagenes/'+i+'blue.png">' && valor3 === '<img src="Imagenes/'+i+'black.png">') ||
                (valor1 === '<img src="Imagenes/'+i+'yellow.png">' && valor2 === '<img src="Imagenes/'+i+'black.png">' && valor3 === '<img src="Imagenes/'+i+'blue.png">') ||
                (valor1 === '<img src="Imagenes/'+i+'black.png">' && valor2 === '<img src="Imagenes/'+i+'blue.png">' && valor3 === '<img src="Imagenes/'+i+'yellow.png">') ||
                (valor1 === '<img src="Imagenes/'+i+'black.png">' && valor2 === '<img src="Imagenes/'+i+'yellow.png">' && valor3 === '<img src="Imagenes/'+i+'blue.png">')) {
            bandera = true;
        }  
    }
    //Cuartetos de fichas que sumen 30
    for(i=8;i<=13;i++){
       //--------------------------------------------------------------------
        if ((valor1 === '<img src="Imagenes/'+i+'red.png">' && valor2 === '<img src="Imagenes/'+i+'blue.png">' && valor3 === '<img src="Imagenes/'+i+'yellow.png">' &&valor4==='<img src="Imagenes/'+i+'black.png">')||
            (valor1 === '<img src="Imagenes/'+i+'red.png">' && valor2 === '<img src="Imagenes/'+i+'blue.png">' && valor3 === '<img src="Imagenes/'+i+'black.png">' &&valor4==='<img src="Imagenes/'+i+'yellow.png">')||
            (valor1 === '<img src="Imagenes/'+i+'red.png">' && valor2 === '<img src="Imagenes/'+i+'yellow.png">' && valor3 === '<img src="Imagenes/'+i+'blue.png">' &&valor4==='<img src="Imagenes/'+i+'black.png">')||
            (valor1 === '<img src="Imagenes/'+i+'red.png">' && valor2 === '<img src="Imagenes/'+i+'yellow.png">' && valor3 === '<img src="Imagenes/'+i+'black.png">' &&valor4==='<img src="Imagenes/'+i+'blue.png">')||
            (valor1 === '<img src="Imagenes/'+i+'red.png">' && valor2 === '<img src="Imagenes/'+i+'black.png">' && valor3 === '<img src="Imagenes/'+i+'blue.png">' &&valor4==='<img src="Imagenes/'+i+'yellow.png">')||
            (valor1 === '<img src="Imagenes/'+i+'red.png">' && valor2 === '<img src="Imagenes/'+i+'black.png">' && valor3 === '<img src="Imagenes/'+i+'yellow.png">' &&valor4==='<img src="Imagenes/'+i+'blue.png">')){
            bandera = true;
        }
        //--------------------------------------------------------------------
        if ((valor1 === '<img src="Imagenes/'+i+'yellow.png">' && valor2 === '<img src="Imagenes/'+i+'red.png">' && valor3 === '<img src="Imagenes/'+i+'blue.png">' &&valor4==='<img src="Imagenes/'+i+'black.png">')||
            (valor1 === '<img src="Imagenes/'+i+'yellow.png">' && valor2 === '<img src="Imagenes/'+i+'red.png">' && valor3 === '<img src="Imagenes/'+i+'black.png">' &&valor4==='<img src="Imagenes/'+i+'blue.png">')||
            (valor1 === '<img src="Imagenes/'+i+'yellow.png">' && valor2 === '<img src="Imagenes/'+i+'blue.png">' && valor3 === '<img src="Imagenes/'+i+'red.png">' &&valor4==='<img src="Imagenes/'+i+'black.png">')||
            (valor1 === '<img src="Imagenes/'+i+'yellow.png">' && valor2 === '<img src="Imagenes/'+i+'blue.png">' && valor3 === '<img src="Imagenes/'+i+'black.png">' &&valor4==='<img src="Imagenes/'+i+'red.png">')||
            (valor1 === '<img src="Imagenes/'+i+'yellow.png">' && valor2 === '<img src="Imagenes/'+i+'black.png">' && valor3 === '<img src="Imagenes/'+i+'red.png">' &&valor4==='<img src="Imagenes/'+i+'blue.png">')||
            (valor1 === '<img src="Imagenes/'+i+'yellow.png">' && valor2 === '<img src="Imagenes/'+i+'black.png">' && valor3 === '<img src="Imagenes/'+i+'blue.png">' &&valor4==='<img src="Imagenes/'+i+'red.png">')){
            bandera = true;
        }
        //--------------------------------------------------------------------
        if ((valor1 === '<img src="Imagenes/'+i+'blue.png">' && valor2 === '<img src="Imagenes/'+i+'red.png">' && valor3 === '<img src="Imagenes/'+i+'yellow.png">' &&valor4==='<img src="Imagenes/'+i+'black.png">')||
            (valor1 === '<img src="Imagenes/'+i+'blue.png">' && valor2 === '<img src="Imagenes/'+i+'red.png">' && valor3 === '<img src="Imagenes/'+i+'black.png">' &&valor4==='<img src="Imagenes/'+i+'yellow.png">')||
            (valor1 === '<img src="Imagenes/'+i+'blue.png">' && valor2 === '<img src="Imagenes/'+i+'yellow.png">' && valor3 === '<img src="Imagenes/'+i+'red.png">' &&valor4==='<img src="Imagenes/'+i+'black.png">')||
            (valor1 === '<img src="Imagenes/'+i+'blue.png">' && valor2 === '<img src="Imagenes/'+i+'yellow.png">' && valor3 === '<img src="Imagenes/'+i+'black.png">' &&valor4==='<img src="Imagenes/'+i+'red.png">')||
            (valor1 === '<img src="Imagenes/'+i+'blue.png">' && valor2 === '<img src="Imagenes/'+i+'black.png">' && valor3 === '<img src="Imagenes/'+i+'red.png">' &&valor4==='<img src="Imagenes/'+i+'yellow.png">')||
            (valor1 === '<img src="Imagenes/'+i+'blue.png">' && valor2 === '<img src="Imagenes/'+i+'black.png">' && valor3 === '<img src="Imagenes/'+i+'yellow.png">' &&valor4==='<img src="Imagenes/'+i+'red.png">')){
            bandera = true;
        }
        //--------------------------------------------------------------------
        if ((valor1 === '<img src="Imagenes/'+i+'black.png">' && valor2 === '<img src="Imagenes/'+i+'red.png">' && valor3 === '<img src="Imagenes/'+i+'blue.png">' &&valor4==='<img src="Imagenes/'+i+'yellow.png">')||
            (valor1 === '<img src="Imagenes/'+i+'black.png">' && valor2 === '<img src="Imagenes/'+i+'red.png">' && valor3 === '<img src="Imagenes/'+i+'yellow.png">' &&valor4==='<img src="Imagenes/'+i+'blue.png">')||
            (valor1 === '<img src="Imagenes/'+i+'black.png">' && valor2 === '<img src="Imagenes/'+i+'blue.png">' && valor3 === '<img src="Imagenes/'+i+'red.png">' &&valor4==='<img src="Imagenes/'+i+'yellow.png">')||
            (valor1 === '<img src="Imagenes/'+i+'black.png">' && valor2 === '<img src="Imagenes/'+i+'blue.png">' && valor3 === '<img src="Imagenes/'+i+'yellow.png">' &&valor4==='<img src="Imagenes/'+i+'red.png">')||
            (valor1 === '<img src="Imagenes/'+i+'black.png">' && valor2 === '<img src="Imagenes/'+i+'yellow.png">' && valor3 === '<img src="Imagenes/'+i+'red.png">' &&valor4==='<img src="Imagenes/'+i+'blue.png">')||
            (valor1 === '<img src="Imagenes/'+i+'black.png">' && valor2 === '<img src="Imagenes/'+i+'yellow.png">' && valor3 === '<img src="Imagenes/'+i+'blue.png">' &&valor4==='<img src="Imagenes/'+i+'red.png">')){
            bandera = true;
        } 
    }
    return bandera;
}
//------------------------------------------------------------------------------
//Método encargado de validar que haya un espacio vacío entre cada jugada
function validarEspacios(){
    for (var i = 0; i <= 5; i++) { //Filas
        for (var j = 0; j < 25; j++) { //Columnas
            if ((document.getElementById('tabla1').rows[i].cells[0].innerHTML !== '<img src="Imagenes/cafe.PNG">') && (document.getElementById('tabla1').rows[i].cells[1].innerHTML === '<img src="Imagenes/cafe.PNG">')) {
                alert("Error, Hay una carta mal colocada");
                usoCarta=true;
                usoCartaCombinar=true;
                return false; 
            }
            if ((document.getElementById('tabla1').rows[i].cells[19].innerHTML !== '<img src="Imagenes/cafe.PNG">') && (document.getElementById('tabla1').rows[i].cells[18].innerHTML === '<img src="Imagenes/cafe.PNG">')) {
                alert("Error, Hay una carta mal colocada");
                usoCarta=true;
                usoCartaCombinar=true;
                return false;
            }
            //Una ficha sola
            if ((document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/cafe.PNG">') && (document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/cafe.PNG">') && (document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/cafe.PNG">')) {
                alert("Error, Hay una carta mal colocada");
                usoCarta=true;
                usoCartaCombinar=true;
                return false;
            }
            
            for(k=1;k<=13;k++){
                //Combinaciones iguales de 4 cartas
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'red.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+k+'blue.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML==='<img src="Imagenes/'+k+'black.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/cafe.PNG">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/'+k+'yellow.png">')){
                    alert("Error, Hay fichas mal colocadas!");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'red.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+k+'blue.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML==='<img src="Imagenes/'+k+'yellow.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/cafe.PNG">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/'+k+'black.png">')){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'red.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+k+'yellow.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML==='<img src="Imagenes/'+k+'blue.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/cafe.PNG">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/'+k+'black.png">')){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'red.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+k+'yellow.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML==='<img src="Imagenes/'+k+'black.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/cafe.PNG">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/'+k+'blue.png">')){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'red.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+k+'black.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML==='<img src="Imagenes/'+k+'blue.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/cafe.PNG">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/'+k+'yellow.png">')){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'red.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+k+'black.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML==='<img src="Imagenes/'+k+'yellow.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/cafe.PNG">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/'+k+'blue.png">')){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'blue.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+k+'red.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML==='<img src="Imagenes/'+k+'yellow.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/cafe.PNG">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/'+k+'black.png">')){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'blue.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+k+'red.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML==='<img src="Imagenes/'+k+'black.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/cafe.PNG">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/'+k+'yellow.png">')){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'blue.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+k+'black.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML==='<img src="Imagenes/'+k+'yellow.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/cafe.PNG">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/'+k+'red.png">')){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'blue.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+k+'black.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML==='<img src="Imagenes/'+k+'red.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/cafe.PNG">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/'+k+'yellow.png">')){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'blue.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+k+'yellow.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML==='<img src="Imagenes/'+k+'black.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/cafe.PNG">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/'+k+'red.png">')){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'blue.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+k+'yellow.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML==='<img src="Imagenes/'+k+'red.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/cafe.PNG">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/'+k+'black.png">')){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'yellow.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+k+'red.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML==='<img src="Imagenes/'+k+'blue.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/cafe.PNG">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/'+k+'black.png">')){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'yellow.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+k+'red.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML==='<img src="Imagenes/'+k+'black.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/cafe.PNG">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/'+k+'blue.png">')){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'yellow.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+k+'black.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML==='<img src="Imagenes/'+k+'red.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/cafe.PNG">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/'+k+'blue.png">')){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'yellow.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+k+'black.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML==='<img src="Imagenes/'+k+'blue.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/cafe.PNG">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/'+k+'red.png">')){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'yellow.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+k+'blue.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML==='<img src="Imagenes/'+k+'red.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/cafe.PNG">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/'+k+'black.png">')){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'yellow.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+k+'blue.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML==='<img src="Imagenes/'+k+'black.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/cafe.PNG">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/'+k+'red.png">')){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'black.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+k+'red.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML==='<img src="Imagenes/'+k+'blue.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/cafe.PNG">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/'+k+'yellow.png">')){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'black.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+k+'red.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML==='<img src="Imagenes/'+k+'yellow.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/cafe.PNG">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/'+k+'blue.png">')){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'black.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+k+'blue.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML==='<img src="Imagenes/'+k+'red.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/cafe.PNG">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/'+k+'yellow.png">')){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'black.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+k+'blue.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML==='<img src="Imagenes/'+k+'yellow.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/cafe.PNG">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/'+k+'red.png">')){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'black.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+k+'yellow.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML==='<img src="Imagenes/'+k+'red.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/cafe.PNG">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/'+k+'blue.png">')){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'black.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+k+'yellow.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML==='<img src="Imagenes/'+k+'blue.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/cafe.PNG">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/'+k+'red.png">')){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                //Combinaciones de escaleras 4 cartas
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'red.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+(k+1)+'red.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML==='<img src="Imagenes/'+(k+2)+'red.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/cafe.PNG">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/'+(k+3)+'red.png">')){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'blue.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+(k+1)+'blue.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML==='<img src="Imagenes/'+(k+2)+'blue.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/cafe.PNG">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/'+(k+3)+'blue.png">')){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'yellow.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+(k+1)+'yellow.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML==='<img src="Imagenes/'+(k+2)+'yellow.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/cafe.PNG">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/'+(k+3)+'yellow.png">')){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'black.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+(k+1)+'black.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML==='<img src="Imagenes/'+(k+2)+'black.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/cafe.PNG">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML!=='<img src="Imagenes/'+(k+3)+'black.png">')){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                //Combinaciones de escaleras 3 cartas
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'red.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+(k+1)+'red.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin1.png">'&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin2.png">')&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+(k+2)+'red.png">'&&document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/cafe.PNG">'){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'blue.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+(k+1)+'blue.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin1.png">'&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin2.png">')&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+(k+2)+'blue.png">'&&document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/cafe.PNG">'){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'yellow.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+(k+1)+'yellow.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin1.png">'&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin2.png">')&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+(k+2)+'yellow.png">' &&document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/cafe.PNG">'){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/'+k+'black.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+(k+1)+'black.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin1.png">'&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin2.png">')&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+(k+2)+'black.png">'&&document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/cafe.PNG">'){
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                
                //Combinaciones de 3 cartas
                if ((document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML !=='<img src="Imagenes/comodin1.png">'&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin2.png">')&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+k+'yellow.png">'&&document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/cafe.PNG">' &&
                    (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML !== '<img src="Imagenes/comodin1.png">'&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin2.png">')&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+k+'blue.png">'&&document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/cafe.PNG">' &&
                    (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML !== '<img src="Imagenes/comodin1.png">'&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin2.png">')&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+k+'yellow.png">'&&document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/cafe.PNG">' &&
                    (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML !== '<img src="Imagenes/comodin1.png">'&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin2.png">')&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+k+'red.png">'&&document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/cafe.PNG">' &&
                    (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML !== '<img src="Imagenes/comodin1.png">'&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin2.png">')&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+k+'blue.png">'&&document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/cafe.PNG">' &&
                    (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML !== '<img src="Imagenes/comodin1.png">'&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin2.png">')&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+k+'red.png">'&&document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/cafe.PNG">') {
                     alert("Error, Hay fichas mal colocadas");
                     usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if ((document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML !== '<img src="Imagenes/comodin1.png">'&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin2.png">')&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+k+'black.png">'&&document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/cafe.PNG">' &&
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML !== '<img src="Imagenes/comodin1.png">'&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin2.png">')&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+k+'blue.png">'&&document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/cafe.PNG">' &&
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML !== '<img src="Imagenes/comodin1.png">'&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin2.png">')&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+k+'black.png">'&&document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/cafe.PNG">' &&
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML !== '<img src="Imagenes/comodin1.png">'&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin2.png">')&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+k+'red.png">'&&document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/cafe.PNG">' &&
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML !== '<img src="Imagenes/comodin1.png">'&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin2.png">')&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+k+'blue.png">'&&document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/cafe.PNG">' &&
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML !== '<img src="Imagenes/comodin1.png">'&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin2.png">')&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+k+'red.png">'&&document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/cafe.PNG">') {
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if ((document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML !== '<img src="Imagenes/comodin1.png">'&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin2.png">')&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+k+'black.png">'&&document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/cafe.PNG">' &&
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML !== '<img src="Imagenes/comodin1.png">'&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin2.png">')&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+k+'yellow.png">'&&document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/cafe.PNG">' &&
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML !== '<img src="Imagenes/comodin1.png">'&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin2.png">')&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+k+'black.png">'&&document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/cafe.PNG">' &&
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML !== '<img src="Imagenes/comodin1.png">'&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin2.png">')&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+k+'red.png">'&&document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/cafe.PNG">' &&
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML !== '<img src="Imagenes/comodin1.png">'&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin2.png">')&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+k+'yellow.png">'&&document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/cafe.PNG">' &&
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML !== '<img src="Imagenes/comodin1.png">'&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin2.png">')&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+k+'red.png">'&&document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/cafe.PNG">') {
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if ((document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML !== '<img src="Imagenes/comodin1.png">'&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin2.png">')&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+k+'black.png">'&&document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/cafe.PNG">' &&
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML !== '<img src="Imagenes/comodin1.png">'&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin2.png">')&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+k+'yellow.png">'&&document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/cafe.PNG">' &&
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML !== '<img src="Imagenes/comodin1.png">'&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin2.png">')&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+k+'black.png">'&&document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/cafe.PNG">' &&
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML !== '<img src="Imagenes/comodin1.png">'&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin2.png">')&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+k+'blue.png">'&&document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/cafe.PNG">' &&
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML !== '<img src="Imagenes/comodin1.png">'&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin2.png">')&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+k+'yellow.png">'&&document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/cafe.PNG">' &&
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML !== '<img src="Imagenes/comodin1.png">'&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/comodin2.png">')&& document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+k+'blue.png">'&&document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/cafe.PNG">') {
                    alert("Error, Hay fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                //Combinaciones comodines 3 cartas
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML==='<img src="Imagenes/comodin1.png">')||(document.getElementById('tabla1').rows[i].cells[j].innerHTML=== '<img src="Imagenes/comodin2.png">')){
                    if(document.getElementById('tabla1').rows[i].cells[j-1].innerHTML=== '<img src="Imagenes/cafe.PNG">'){
                        if(((document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+(k+1)+'red.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+(k+2)+'red.png">'))&&
                           ((document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+(k)+'red.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+(k)+'red.png">'))){
                            alert("Error, Hay fichas mal colocadas");
                            usoCarta=true;
                            usoCartaCombinar=true;
                            return false;
                        }
                        if(((document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+(k+1)+'blue.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+(k+2)+'blue.png">'))&&
                                ((document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+(k)+'blue.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+(k)+'blue.png">'))){
                            alert("Error, Hay fichas mal colocadas");
                            usoCarta=true;
                            usoCartaCombinar=true;
                            return false;
                        }
                        if(((document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+(k+1)+'yellow.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+(k+2)+'yellow.png">'))&&
                                ((document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+(k)+'yellow.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+(k)+'yellow.png">'))){
                            alert("Error, Hay fichas mal colocadas");
                            usoCarta=true;
                            usoCartaCombinar=true;
                            return false;
                        }
                        if(((document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+(k+1)+'black.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML!=='<img src="Imagenes/'+(k+2)+'black.png">'))&&
                                ((document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+(k)+'black.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML==='<img src="Imagenes/'+(k)+'black.png">'))){
                            alert("Error, Hay fichas mal colocadas");
                            usoCarta=true;
                            usoCartaCombinar=true;
                            return false;
                        } 
                    }
                    if((document.getElementById('tabla1').rows[i].cells[j-1].innerHTML!== '<img src="Imagenes/cafe.PNG">')&&(document.getElementById('tabla1').rows[i].cells[j+1].innerHTML!== '<img src="Imagenes/cafe.PNG">')){
                        if((document.getElementById('tabla1').rows[i].cells[j - 1].innerHTML==='<img src="Imagenes/'+(k-1)+'red.png">')&&(document.getElementById('tabla1').rows[i].cells[j+1].innerHTML!=='<img src="Imagenes/'+(k+1)+'red.png">')){
                            alert("Error, Hay fichas mal colocadas");
                            usoCarta=true;
                            usoCartaCombinar=true;
                            return false;
                        }
                        if((document.getElementById('tabla1').rows[i].cells[j - 1].innerHTML==='<img src="Imagenes/'+(k-1)+'blue.png">')&&(document.getElementById('tabla1').rows[i].cells[j+1].innerHTML!=='<img src="Imagenes/'+(k+1)+'blue.png">')){
                            alert("Error, Hay fichas mal colocadas");
                            usoCarta=true;
                            usoCartaCombinar=true;
                            return false;
                        }
                        if((document.getElementById('tabla1').rows[i].cells[j - 1].innerHTML==='<img src="Imagenes/'+(k-1)+'yellow.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML!=='<img src="Imagenes/'+(k+1)+'yellow.png">')){
                            alert("Error, Hay fichas mal colocadas");
                            usoCarta=true;
                            usoCartaCombinar=true;
                            return false;
                        }
                        if((document.getElementById('tabla1').rows[i].cells[j - 1].innerHTML==='<img src="Imagenes/'+(k-1)+'black.png">')&&(document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML!=='<img src="Imagenes/'+(k+1)+'black.png">')){
                            alert("Error, Hay fichas mal colocadas");
                            usoCarta=true;
                            usoCartaCombinar=true;
                            return false;
                        } 
                    }
                    if((document.getElementById('tabla1').rows[i].cells[j+1].innerHTML=== '<img src="Imagenes/cafe.PNG">')){
                        if(((document.getElementById('tabla1').rows[i].cells[j - 1].innerHTML==='<img src="Imagenes/'+(k-1)+'red.png">')&&(document.getElementById('tabla1').rows[i].cells[j-2].innerHTML!=='<img src="Imagenes/'+(k-2)+'red.png">'))&&
                           ((document.getElementById('tabla1').rows[i].cells[j - 1].innerHTML==='<img src="Imagenes/'+(k)+'red.png">')&&(document.getElementById('tabla1').rows[i].cells[j - 1].innerHTML==='<img src="Imagenes/'+(k)+'red.png">'))){
                            alert("Error, Hay fichas mal colocadas");
                            usoCarta=true;
                            usoCartaCombinar=true;
                            return false;
                        }
                        if(((document.getElementById('tabla1').rows[i].cells[j - 1].innerHTML==='<img src="Imagenes/'+(k-1)+'blue.png">')&&(document.getElementById('tabla1').rows[i].cells[j-2].innerHTML!=='<img src="Imagenes/'+(k-2)+'blue.png">'))&&
                           ((document.getElementById('tabla1').rows[i].cells[j - 1].innerHTML==='<img src="Imagenes/'+(k)+'blue.png">')&&(document.getElementById('tabla1').rows[i].cells[j - 1].innerHTML==='<img src="Imagenes/'+(k)+'blue.png">'))){
                            alert("Error, Hay fichas mal colocadas");
                            usoCarta=true;
                            usoCartaCombinar=true;
                            return false;
                        }
                        if(((document.getElementById('tabla1').rows[i].cells[j - 1].innerHTML==='<img src="Imagenes/'+(k-1)+'yellow.png">')&&(document.getElementById('tabla1').rows[i].cells[j-2].innerHTML!=='<img src="Imagenes/'+(k-2)+'yellow.png">'))&&
                           ((document.getElementById('tabla1').rows[i].cells[j - 1].innerHTML==='<img src="Imagenes/'+(k)+'yellow.png">')&&(document.getElementById('tabla1').rows[i].cells[j - 1].innerHTML==='<img src="Imagenes/'+(k)+'yellow.png">'))){
                            alert("Error, Hay fichas mal colocadas");
                            usoCarta=true;
                            usoCartaCombinar=true;
                            return false;
                        }
                        if(((document.getElementById('tabla1').rows[i].cells[j - 1].innerHTML==='<img src="Imagenes/'+(k-1)+'black.png">')&&(document.getElementById('tabla1').rows[i].cells[j-2].innerHTML!=='<img src="Imagenes/'+(k-2)+'black.png">'))&&
                           ((document.getElementById('tabla1').rows[i].cells[j - 1].innerHTML==='<img src="Imagenes/'+(k)+'black.png">')&&(document.getElementById('tabla1').rows[i].cells[j - 1].innerHTML==='<img src="Imagenes/'+(k)+'black.png">'))){
                            alert("Error, Hay fichas mal colocadas");
                            usoCarta=true;
                            usoCartaCombinar=true;
                            return false;
                        }
                    }
                }
            }
        }
    }
    return true;
}
function validar(){
    if(cantidadJugadores==="2"){
        if(!turnoJugador1){
            if(jug301===true){
                if(validarEspacios()===true && validarErrores()===true){
                    if(usoCartaCombinar===true){
                        var validacion=validarJuego();
                        if(validacion===true){
                            turnoJugador2=false;
                            turnoJugador1=true;
                            for(var i=0;i < jugador1.length; i++){
                                for(j=0;j<52;j++){
                                     if(arrayMovimientosJugador1[j]==='<img src="Imagenes/'+jugador1[i]+'.png">'){
                                         jugador1.splice(i,1);
                                     }
                                }
                            }
                            if(resultados()===true){

                            }
                            else{
                               mostrarFichasJugador2();
                                usoCarta=false;
                                usoCartaCombinar=false; 
                            }   
                        }
                        else{
                            alert("Hay fichas mal colocadas");
                        }               
                    }
                    else{
                        alert("Es necesario realizar una jugada para poder combinar");
                    }
                }
            }
            else{
                alert("Jugada inválida, la primer jugada debe ser de 30 puntos");
                uso1=0;
                arreglo1=new Array(4); 
            }
        }
        else{
            if(!turnoJugador2){
                if(jug302===true){
                    if(validarEspacios()===true && validarErrores()===true){
                        if(usoCartaCombinar===true){
                          var validacion=validarJuego();
                            if(validacion===true){
                               turnoJugador1=false;
                                turnoJugador2=true;
                                for(var i=0;i < jugador2.length; i++){
                                    for(j=0;j<52;j++){
                                         if(arrayMovimientosJugador2[j]==='<img src="Imagenes/'+jugador2[i]+'.png">'){
                                             jugador2.splice(i,1);
                                         }
                                    }
                                }
                                if(resultados()===true){

                                }
                                else{
                                    mostrarFichasJugador1();
                                    usoCarta=false;
                                    usoCartaCombinar=false; 
                                }  
                            }
                            else{
                                 alert("Hay fichas mal colocadas");
                            }  
                        }
                        else{
                            alert("Es necesario realizar una jugada para poder combinar");
                        }
                    }
                }
                else{
                    alert("Jugada inválida, la primer jugada debe ser de 30 puntos");
                    uso2=0;
                    arreglo2=new Array(4);
                }
            }
        }
    }
    if(cantidadJugadores==="3"){
        if(!turnoJugador1){
            if(jug301===true){
                if(validarEspacios()===true && validarErrores()===true){
                    if(usoCartaCombinar===true){
                        var validacion=validarJuego();
                        if(validacion===true){
                            turnoJugador2=false;
                            turnoJugador1=true;
                            for(var i=0;i < jugador1.length; i++){
                                for(j=0;j<52;j++){
                                     if(arrayMovimientosJugador1[j]==='<img src="Imagenes/'+jugador1[i]+'.png">'){
                                         jugador1.splice(i,1);
                                     }
                                }
                            }
                            if(resultados()===true){

                            }
                            else{
                               mostrarFichasJugador2();
                                usoCarta=false;
                                usoCartaCombinar=false; 
                            }   
                        }
                        else{
                            alert("Hay fichas mal colocadas");
                        }               
                    }
                    else{
                        alert("Es necesario realizar una jugada para poder combinar");
                    }
                }
            }
            else{
                alert("Jugada inválida, la primer jugada debe ser de 30 puntos");
                uso3=0;
                arreglo3=new Array(4);
            }
        }
        else{
            if(!turnoJugador2){
                if(jug302===true){
                    if(validarEspacios()===true && validarErrores()===true){
                        if(usoCartaCombinar===true){
                          var validacion=validarJuego();
                            if(validacion===true){
                               turnoJugador3=false;
                                turnoJugador2=true;
                                for(var i=0;i < jugador2.length; i++){
                                    for(j=0;j<52;j++){
                                         if(arrayMovimientosJugador2[j]==='<img src="Imagenes/'+jugador2[i]+'.png">'){
                                             jugador2.splice(i,1);
                                         }
                                    }
                                }
                                if(resultados()===true){

                                }
                                else{
                                    mostrarFichasJugador3();
                                    usoCarta=false;
                                    usoCartaCombinar=false; 
                                }  
                            }
                            else{
                                 alert("Hay fichas mal colocadas");
                            }  
                        }
                        else{
                            alert("Es necesario realizar una jugada para poder combinar");
                        }
                    }
                }
                else{
                    alert("Jugada inválida, la primer jugada debe ser de 30 puntos");
                    uso4=0;
                arreglo4=new Array(4);
                }
            }
            else{
                if(!turnoJugador3){
                    if(jug303===true){
                        if(validarEspacios()===true && validarErrores()===true){
                            if(usoCartaCombinar===true){
                               var validacion=validarJuego();
                                if(validacion===true){
                                    turnoJugador1=false;
                                    turnoJugador3=true;
                                    for(var i=0;i < jugador3.length; i++){
                                        for(j=0;j<52;j++){
                                            if(arrayMovimientosJugador3[j]==='<img src="Imagenes/'+jugador3[i]+'.png">'){
                                             jugador3.splice(i,1);
                                            }
                                        }
                                    }
                                    if(resultados()===true){

                                    }
                                    else{
                                        mostrarFichasJugador1();
                                        usoCarta=false;
                                        usoCartaCombinar=false; 
                                    }  
                                }
                                else{
                                    alert("Hay fichas mal colocadas");
                                } 
                            }
                            else{
                                alert("Es necesario realizar una jugada para poder combinar");
                            }
                        }
                    }
                    else{
                        alert("Jugada inválida, la primer jugada debe ser de 30 puntos");
                    }
                    
                }
            }
        }
    }
    if(cantidadJugadores==="4"){
        if(!turnoJugador1){
            if(jug301===true){
                if(validarEspacios()===true  && validarErrores()===true){
                    if(usoCartaCombinar===true){
                        var validacion=validarJuego();
                        if(validacion===true){
                            turnoJugador2=false;
                            turnoJugador1=true;
                            for(var i=0;i < jugador1.length; i++){
                                for(j=0;j<52;j++){
                                     if(arrayMovimientosJugador1[j]==='<img src="Imagenes/'+jugador1[i]+'.png">'){
                                         jugador1.splice(i,1);
                                     }
                                }
                            }
                            if(resultados()===true){

                            }
                            else{
                               mostrarFichasJugador2();
                                usoCarta=false;
                                usoCartaCombinar=false; 
                            }   
                        }
                        else{
                            alert("Hay fichas mal colocadas");
                        }               
                    }
                    else{
                        alert("Es necesario realizar una jugada para poder combinar");
                    }
                }
            }
            else{
                alert("Jugada inválida, la primer jugada debe ser de 30 puntos");
            }
        }
        else{
            if(!turnoJugador2){
                if(jug302===true){
                    if(validarEspacios()===true  && validarErrores()===true){
                        if(usoCartaCombinar===true){
                          var validacion=validarJuego();
                            if(validacion===true){
                               turnoJugador3=false;
                                turnoJugador2=true;
                                for(var i=0;i < jugador2.length; i++){
                                    for(j=0;j<52;j++){
                                         if(arrayMovimientosJugador2[j]==='<img src="Imagenes/'+jugador2[i]+'.png">'){
                                             jugador2.splice(i,1);
                                         }
                                    }
                                }
                                if(resultados()===true){

                                }
                                else{
                                    mostrarFichasJugador3();
                                    usoCarta=false;
                                    usoCartaCombinar=false; 
                                }  
                            }
                            else{
                                 alert("Hay fichas mal colocadas");
                            }  
                        }
                        else{
                            alert("Es necesario realizar una jugada para poder combinar");
                        }
                    }
                }
                else{
                    alert("Jugada inválida, la primer jugada debe ser de 30 puntos");
                }
            }
            else{
                if(!turnoJugador3){
                    if(jug303===true){
                        if(validarEspacios()===true && validarErrores()===true){
                            if(usoCartaCombinar===true){
                               var validacion=validarJuego();
                                if(validacion===true){
                                    turnoJugador4=false;
                                    turnoJugador3=true;
                                    for(var i=0;i < jugador3.length; i++){
                                        for(j=0;j<52;j++){
                                            if(arrayMovimientosJugador3[j]==='<img src="Imagenes/'+jugador3[i]+'.png">'){
                                             jugador3.splice(i,1);
                                            }
                                        }
                                    }
                                    if(resultados()===true){

                                    }
                                    else{
                                        mostrarFichasJugador4();
                                        usoCarta=false;
                                        usoCartaCombinar=false; 
                                    }  
                                }
                                else{
                                    alert("Hay fichas mal colocadas");
                                } 
                            }
                            else{
                                alert("Es necesario realizar una jugada para poder combinar");
                            }
                        }
                    }
                    else{
                        alert("Jugada inválida, la primer jugada debe ser de 30 puntos");
                    }
                }
                else{
                    if(jug304===true){
                        if(validarEspacios()===true && validarErrores()===true){
                            if(usoCartaCombinar===true){
                                var validacion=validarJuego();
                                if(validacion===true){
                                    turnoJugador1=false;
                                    turnoJugador4=true;
                                    for(var i=0;i < jugador4.length; i++){
                                        for(j=0;j<52;j++){
                                            if(arrayMovimientosJugador4[j]==='<img src="Imagenes/'+jugador4[i]+'.png">'){
                                             jugador4.splice(i,1);
                                            }
                                        }
                                    }
                                    if(resultados()===true){

                                    }
                                    else{
                                       mostrarFichasJugador1();
                                        usoCarta=false;
                                        usoCartaCombinar=false; 
                                    }  
                                }
                                else{
                                    alert("Hay fichas mal colocadas");
                                }
                            }
                            else{
                                alert("Es necesario realizar una jugada para poder combinar");
                            }
                        }

                    }
                    else{
                        alert("Jugada inválida, la primer jugada debe ser de 30 puntos");
                    } 
                }
            }
        }
    }
}
//------------------------------------------------------------------------------
//Método que permite validar todas las combinaciones pósibles en el tabero de juego
// Escaleras- Combinaciones de 3 o 4 fichas
function validarJuego() {
    var bandera = false;
    for (var i = 0; i <= 5; i++) {
        for (var j = 0; j < 25; j++) {
            if ((document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/cafe.PNG">') && (document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/cafe.PNG">') && (document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/cafe.PNG">')) {
                return false;
            }
            //---------------------------------------------------------------------------------------------------
            //Escaleras de 3 fichas
            for(k=1;k<=13;k++){
                if (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+(k+1)+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+(k+2)+'red.png">') {
                bandera = true;
                }
                if (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+(k+1)+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+(k+2)+'blue.png">') {
                    bandera = true;
                }
                if (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+(k+1)+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+(k+2)+'yellow.png">') {
                    bandera = true;
                }
                if (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+(k+1)+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+(k+2)+'black.png">') {
                    bandera = true;
                }
            }
            //Escaleras de 4 o más fichas
            for(k=1;k<=13;k++){
                if (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+(k+1)+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+(k+2)+'red.png">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML === '<img src="Imagenes/'+(k+3)+'red.png">') {
                bandera = true;
                }
                if (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+(k+1)+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+(k+2)+'blue.png">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML === '<img src="Imagenes/'+(k+3)+'blue.png">') {
                    bandera = true;
                }
                if (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+(k+1)+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+(k+2)+'yellow.png">'&& document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML === '<img src="Imagenes/'+(k+3)+'yellow.png">') {
                    bandera = true;
                }
                if (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+(k+1)+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+(k+2)+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML === '<img src="Imagenes/'+(k+3)+'black.png">') {
                    bandera = true;
                }
            }
            //Tres fichas del mismo valor
            for(k=1;k<=13;k++){
               if ((document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'yellow.png">') ||
                    (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'blue.png">') ||
                    (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'yellow.png">') ||
                    (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'red.png">') ||
                    (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'blue.png">') ||
                    (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'red.png">')) {
                     bandera = true;
                }
                //--------------------------------------------------------------------
                if ((document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'black.png">') ||
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'blue.png">') ||
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'black.png">') ||
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'red.png">') ||
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'blue.png">') ||
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'red.png">')) {
                    bandera = true;
                }
                //--------------------------------------------------------------------
                if ((document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'black.png">') ||
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'yellow.png">') ||
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'black.png">') ||
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'red.png">') ||
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'yellow.png">') ||
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'red.png">')) {
                    bandera = true;
                }
                //--------------------------------------------------------------------
                if ((document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'black.png">') ||
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'yellow.png">') ||
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'black.png">') ||
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'blue.png">') ||
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'yellow.png">') ||
                        (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'blue.png">')) {
                    bandera = true;
                }
                //--------------------------------------------------------------------
                //Cuatro fichas del mismo valor
                if((document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' &&document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML==='<img src="Imagenes/'+k+'black.png">')||
                (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'black.png">' &&document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML==='<img src="Imagenes/'+k+'yellow.png">')||
                (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'blue.png">' &&document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML==='<img src="Imagenes/'+k+'black.png">')||
                (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'black.png">' &&document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML==='<img src="Imagenes/'+k+'blue.png">')||
                (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'blue.png">' &&document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML==='<img src="Imagenes/'+k+'yellow.png">')||
                (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' &&document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML==='<img src="Imagenes/'+k+'blue.png">')){
                    bandera = true;
                }
                //--------------------------------------------------------------------
                if ((document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'blue.png">' &&document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML==='<img src="Imagenes/'+k+'black.png">')||
                (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'black.png">' &&document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML==='<img src="Imagenes/'+k+'blue.png">')||
                (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'red.png">' &&document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML==='<img src="Imagenes/'+k+'black.png">')||
                (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'black.png">' &&document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML==='<img src="Imagenes/'+k+'red.png">')||
                (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'red.png">' &&document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML==='<img src="Imagenes/'+k+'blue.png">')||
                (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'blue.png">' &&document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML==='<img src="Imagenes/'+k+'red.png">')){
                    bandera = true;
                }
                //--------------------------------------------------------------------
                if ((document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' &&document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML==='<img src="Imagenes/'+k+'black.png">')||
                (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'black.png">' &&document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML==='<img src="Imagenes/'+k+'yellow.png">')||
                (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'red.png">' &&document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML==='<img src="Imagenes/'+k+'black.png">')||
                (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'black.png">' &&document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML==='<img src="Imagenes/'+k+'red.png">')||
                (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'red.png">' &&document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML==='<img src="Imagenes/'+k+'yellow.png">')||
                (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' &&document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML==='<img src="Imagenes/'+k+'red.png">')){
                    bandera = true;
                }
                //--------------------------------------------------------------------
                if ((document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'blue.png">' &&document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML==='<img src="Imagenes/'+k+'yellow.png">')||
                (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'red.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' &&document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML==='<img src="Imagenes/'+k+'blue.png">')||
                (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'red.png">' &&document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML==='<img src="Imagenes/'+k+'yellow.png">')||
                (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' &&document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML==='<img src="Imagenes/'+k+'red.png">')||
                (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'red.png">' &&document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML==='<img src="Imagenes/'+k+'blue.png">')||
                (document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'black.png">' && document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && document.getElementById('tabla1').rows[i].cells[j + 2].innerHTML === '<img src="Imagenes/'+k+'blue.png">' &&document.getElementById('tabla1').rows[i].cells[j + 3].innerHTML==='<img src="Imagenes/'+k+'red.png">')){
                    bandera = true;
                } 
            }
        }
    }
    return bandera;
}
//------------------------------------------------------------------------------
//Método que permite validar posibles errores en una jugada
function validarErrores(){
    for (var i = 0; i <= 5; i++) {
        for (var j = 0; j < 25; j++) {
            for(k=1;k<=13;k++){
                if(document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'red.png">' && 
                   document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/'+(k+1)+'red.png">'&&
                   document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/'+k+'blue.png">'&&
                   document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/'+k+'yellow.png">'&&
                   document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/'+k+'black.png">'&&
                   document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/cafe.PNG">'&&
                   document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/comodin1.png">'&&
                   document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/comodin2.png">'){
                alert("Error, Hay una carta mal colocada");
                usoCarta=true;
                usoCartaCombinar=true;
                return false;
                }
                if(document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'blue.png">' && 
                   document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/'+(k+1)+'blue.png">'&&
                   document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/'+k+'red.png">'&&
                   document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/'+k+'yellow.png">'&&
                   document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/'+k+'black.png">'&&
                   document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/cafe.PNG">'&&
                   document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/comodin1.png">'&&
                   document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/comodin2.png">'){
                alert("Error, Hay una carta mal colocada");
                usoCarta=true;
                usoCartaCombinar=true;
                return false;
                }
                if(document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'yellow.png">' && 
                   document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/'+(k+1)+'yellow.png">'&&
                   document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/'+k+'red.png">'&&
                   document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/'+k+'blue.png">'&&
                   document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/'+k+'black.png">'&&
                   document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/cafe.PNG">'&&
                   document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/comodin1.png">'&&
                   document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/comodin2.png">'){
                alert("Error, Hay una carta mal colocada");
                usoCarta=true;
                usoCartaCombinar=true;
                return false;
                }
                if(document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'black.png">' && 
                   document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/'+(k+1)+'black.png">'&&
                   document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/'+k+'red.png">'&&
                   document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/'+k+'blue.png">'&&
                   document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/'+k+'yellow.png">'&&
                   document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/cafe.PNG">'&&
                   document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/comodin1.png">'&&
                   document.getElementById('tabla1').rows[i].cells[j + 1].innerHTML !== '<img src="Imagenes/comodin2.png">'){
                alert("Error, Hay una carta mal colocada");
                usoCarta=true;
                usoCartaCombinar=true;
                return false;
                }
                if(document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/cafe.PNG">' &&
                   document.getElementById('tabla1').rows[i].cells[j+1].innerHTML !== '<img src="Imagenes/cafe.PNG">'&&
                   document.getElementById('tabla1').rows[i].cells[j+2].innerHTML !== '<img src="Imagenes/cafe.PNG">'&&
                   document.getElementById('tabla1').rows[i].cells[j+3].innerHTML === '<img src="Imagenes/cafe.PNG">'){
                    alert("Error, Hay dos fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if(document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'red.png">'&&document.getElementById('tabla1').rows[i].cells[j+2].innerHTML === '<img src="Imagenes/'+k+'red.png">'){
                    alert("Error, Hay dos fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if(document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'blue.png">'&&document.getElementById('tabla1').rows[i].cells[j+2].innerHTML === '<img src="Imagenes/'+k+'blue.png">'){
                    alert("Error, Hay dos fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if(document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'yellow.png">'&&document.getElementById('tabla1').rows[i].cells[j+2].innerHTML === '<img src="Imagenes/'+k+'yellow.png">'){
                    alert("Error, Hay dos fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
                if(document.getElementById('tabla1').rows[i].cells[j].innerHTML === '<img src="Imagenes/'+k+'black.png">'&&document.getElementById('tabla1').rows[i].cells[j+2].innerHTML === '<img src="Imagenes/'+k+'black.png">'){
                    alert("Error, Hay dos fichas mal colocadas");
                    usoCarta=true;
                    usoCartaCombinar=true;
                    return false;
                }
            }
        }
    }
    return true;
}
//------------------------------------------------------------------------------
//Metodo que establece las puntuaciones de cada jugador cuando alguno no tenga mas fichas
function resultados(){
var partida=0;
var puntuacion1=0;
var puntuacion2=0;
var puntuacion3=0;
var puntuacion4=0;
if(cantidadJugadores==="2"){
    if(jugador1.length===0){
        alert(nombresJugadores[0]+" ha ganado la partida");
        for(i=0;i<jugador2.length;i++){
            for(k=1;k<=13;k++){
                if(jugador2[i]===k+"red"||jugador2[i]===k+"blue"||jugador2[i]===k+"yellow"||jugador2[i]===k+"black"){
                    partida=partida+i;
                    puntuacion2=puntuacion2+i;
                } 
            }
            if(jugador2[i]==="comodin1"||jugador2[i]==="comodin2"){
                    partida=partida+30;
                    puntuacion2=puntuacion2+30;
            } 
        }
        resultadoPartidaActual(partida, puntuacion2,puntuacion3,puntuacion4);
        return true;
     }     
    if(jugador2.length===0){
        alert(nombresJugadores[1]+" ha ganado la partida");
        for(i=0;i<jugador1.length;i++){
            for(k=1;k<=13;k++){
                if(jugador1[i]===k+"red"||jugador1[i]===k+"blue"||jugador1[i]===k+"yellow"||jugador1[i]===k+"black"){
                    partida=partida+i;
                    puntuacion1=puntuacion1+i;
                } 
            }
            if(jugador1[i]==="comodin1"||jugador1[i]==="comodin2"){
                    partida=partida+30;
                    puntuacion1=puntuacion1+30;
            } 
        }
        resultadoPartidaActual(partida, puntuacion1,puntuacion3,puntuacion4);
        return true;
    }
}
if(cantidadJugadores==="3"){
   if(jugador1.length===0){
        alert(nombresJugadores[0]+" ha ganado la partida");
        for(i=0;i<jugador2.length;i++){
            for(k=1;k<=13;k++){
                if(jugador2[i]===k+"red"||jugador2[i]===k+"blue"||jugador2[i]===k+"yellow"||jugador2[i]===k+"black"){
                    partida=partida+i;
                    puntuacion2=puntuacion2+i;
                } 
            }
            if(jugador2[i]==="comodin1"||jugador2[i]==="comodin2"){
                    partida=partida+30;
                    puntuacion2=puntuacion2+30;
            } 
        }
        for(i=0;i<jugador3.length;i++){
            for(k=1;k<=13;k++){
                if(jugador3[i]===k+"red"||jugador3[i]===k+"blue"||jugador3[i]===k+"yellow"||jugador3[i]===k+"black"){
                    partida=partida+i;
                    puntuacion3=puntuacion3+i;
                } 
            }
            if(jugador3[i]==="comodin1"||jugador3[i]==="comodin2"){
                    partida=partida+30;
                    puntuacion3=puntuacion3+30;
            } 
        }
        resultadoPartidaActual(partida, puntuacion2,puntuacion3,puntuacion4);
        return true;
        
    } 
    if(jugador2.length===0){
        alert(nombresJugadores[1]+" ha ganado la partida");
        for(i=0;i<jugador1.length;i++){
            for(k=1;k<=13;k++){
                if(jugador1[i]===k+"red"||jugador1[i]===k+"blue"||jugador1[i]===k+"yellow"||jugador1[i]===k+"black"){
                    partida=partida+i;
                    puntuacion1=puntuacion1+i;
                } 
            }
            if(jugador1[i]==="comodin1"||jugador1[i]==="comodin2"){
                    partida=partida+30;
                    puntuacion1=puntuacion1+30;
            } 
        }
        for(i=0;i<jugador3.length;i++){
            for(k=1;k<=13;k++){
                if(jugador3[i]===k+"red"||jugador3[i]===k+"blue"||jugador3[i]===k+"yellow"||jugador3[i]===k+"black"){
                    partida=partida+i;
                    puntuacion3=puntuacion3+i;
                } 
            }
            if(jugador3[i]==="comodin1"||jugador3[i]==="comodin2"){
                    partida=partida+30;
                    puntuacion3=puntuacion3+30;
            } 
        } 
        resultadoPartidaActual(partida, puntuacion1,puntuacion3,puntuacion4);
        return true;
    }
    if(jugador3.length===0){
        alert(nombresJugadores[2]+" ha ganado la partida");
        for(i=0;i<jugador1.length;i++){
            for(k=1;k<=13;k++){
                if(jugador1[i]===k+"red"||jugador1[i]===k+"blue"||jugador1[i]===k+"yellow"||jugador1[i]===k+"black"){
                    partida=partida+i;
                    puntuacion1=puntuacion1+i;
                } 
            }
            if(jugador1[i]==="comodin1"||jugador1[i]==="comodin2"){
                    partida=partida+30;
                    puntuacion1=puntuacion1+30;
            } 
        }
        for(i=0;i<jugador2.length;i++){
            for(k=1;k<=13;k++){
                if(jugador2[i]===k+"red"||jugador2[i]===k+"blue"||jugador2[i]===k+"yellow"||jugador2[i]===k+"black"){
                    partida=partida+i;
                    puntuacion2=puntuacion2+i;
                } 
            }
            if(jugador2[i]==="comodin1"||jugador2[i]==="comodin2"){
                    partida=partida+30;
                    puntuacion2=puntuacion2+30;
            } 
        }
        resultadoPartidaActual(partida, puntuacion1,puntuacion2,puntuacion4);
        return true;
    } 
}
if(cantidadJugadores==="4"){
    if(jugador1.length===0){
        alert(nombresJugadores[3]+" ha ganado la partida");
        for(i=0;i<jugador2.length;i++){
            for(k=1;k<=13;k++){
                if(jugador2[i]===k+"red"||jugador2[i]===k+"blue"||jugador2[i]===k+"yellow"||jugador2[i]===k+"black"){
                    partida=partida+i;
                    puntuacion2=puntuacion2+i;
                } 
            }
            if(jugador2[i]==="comodin1"||jugador2[i]==="comodin2"){
                    partida=partida+30;
                    puntuacion2=puntuacion2+30;
            } 
        }
        for(i=0;i<jugador3.length;i++){
            for(k=1;k<=13;k++){
                if(jugador3[i]===k+"red"||jugador3[i]===k+"blue"||jugador3[i]===k+"yellow"||jugador3[i]===k+"black"){
                    partida=partida+i;
                    puntuacion3=puntuacion3+i;
                } 
            }
            if(jugador3[i]==="comodin1"||jugador3[i]==="comodin2"){
                    partida=partida+30;
                    puntuacion3=puntuacion3+30;
            } 
        }
        for(i=0;i<jugador4.length;i++){
            for(k=1;k<=13;k++){
                if(jugador4[i]===k+"red"||jugador4[i]===k+"blue"||jugador4[i]===k+"yellow"||jugador4[i]===k+"black"){
                    partida=partida+i;
                    puntuacion4=puntuacion4+i;
                } 
            }
            if(jugador4[i]==="comodin1"||jugador4[i]==="comodin2"){
                    partida=partida+30;
                    puntuacion4=puntuacion4+30;
            } 
        }
        resultadoPartidaActual(partida, puntuacion2,puntuacion3,puntuacion4);
        return true;
    }     
    if(jugador2.length===0){
        alert(nombresJugadores[1]+" ha ganado la partida");
        for(i=0;i<jugador1.length;i++){
            for(k=1;k<=13;k++){
                if(jugador1[i]===k+"red"||jugador1[i]===k+"blue"||jugador1[i]===k+"yellow"||jugador1[i]===k+"black"){
                    partida=partida+i;
                    puntuacion1=puntuacion1+i;
                } 
            }
            if(jugador1[i]==="comodin1"||jugador1[i]==="comodin2"){
                    partida=partida+30;
                    puntuacion1=puntuacion1+30;
            } 
        }
        for(i=0;i<jugador3.length;i++){
            for(k=1;k<=13;k++){
                if(jugador3[i]===k+"red"||jugador3[i]===k+"blue"||jugador3[i]===k+"yellow"||jugador3[i]===k+"black"){
                    partida=partida+i;
                    puntuacion3=puntuacion3+i;
                } 
            }
            if(jugador3[i]==="comodin1"||jugador3[i]==="comodin2"){
                    partida=partida+30;
                    puntuacion3=puntuacion3+30;
            } 
        }
        for(i=0;i<jugador4.length;i++){
            for(k=1;k<=13;k++){
                if(jugador4[i]===k+"red"||jugador4[i]===k+"blue"||jugador4[i]===k+"yellow"||jugador4[i]===k+"black"){
                    partida=partida+i;
                    puntuacion4=puntuacion4+i;
                } 
            }
            if(jugador4[i]==="comodin1"||jugador4[i]==="comodin2"){
                    partida=partida+30;
                    puntuacion4=puntuacion4+30;
            } 
        }
        resultadoPartidaActual(partida, puntuacion1,puntuacion3,puntuacion4);
        return true;
    }
    if(jugador3.length===0){
        alert(nombresJugadores[2]+" ha ganado la partida");
        for(i=0;i<jugador1.length;i++){
            for(k=1;k<=13;k++){
                if(jugador1[i]===k+"red"||jugador1[i]===k+"blue"||jugador1[i]===k+"yellow"||jugador1[i]===k+"black"){
                    partida=partida+i;
                    puntuacion1=puntuacion1+i;
                } 
            }
            if(jugador1[i]==="comodin1"||jugador1[i]==="comodin2"){
                    partida=partida+30;
                    puntuacion1=puntuacion1+30;
            } 
        }
        for(i=0;i<jugador2.length;i++){
            for(k=1;k<=13;k++){
                if(jugador2[i]===k+"red"||jugador2[i]===k+"blue"||jugador2[i]===k+"yellow"||jugador2[i]===k+"black"){
                    partida=partida+i;
                    puntuacion2=puntuacion2+i;
                } 
            }
            if(jugador2[i]==="comodin1"||jugador2[i]==="comodin2"){
                    partida=partida+30;
                    puntuacion2=puntuacion2+30;
            } 
        }
        for(i=0;i<jugador4.length;i++){
            for(k=1;k<=13;k++){
                if(jugador4[i]===k+"red"||jugador4[i]===k+"blue"||jugador4[i]===k+"yellow"||jugador4[i]===k+"black"){
                    partida=partida+i;
                    puntuacion4=puntuacion4+i;
                } 
            }
            if(jugador4[i]==="comodin1"||jugador4[i]==="comodin2"){
                    partida=partida+30;
                    puntuacion4=puntuacion4+30;
            } 
        }
        resultadoPartidaActual(partida, puntuacion1,puntuacion2,puntuacion4);
        return true;
    }
    if(jugador4.length===0){
        alert(nombresJugadores[3]+" ha ganado la partida");
        for(i=0;i<jugador1.length;i++){
            for(k=1;k<=13;k++){
                if(jugador1[i]===k+"red"||jugador1[i]===k+"blue"||jugador1[i]===k+"yellow"||jugador1[i]===k+"black"){
                    partida=partida+i;
                    puntuacion1=puntuacion1+i;
                } 
            }
            if(jugador1[i]==="comodin1"||jugador1[i]==="comodin2"){
                    partida=partida+30;
                    puntuacion1=puntuacion1+30;
            } 
        }
        for(i=0;i<jugador2.length;i++){
            for(k=1;k<=13;k++){
                if(jugador2[i]===k+"red"||jugador2[i]===k+"blue"||jugador2[i]===k+"yellow"||jugador2[i]===k+"black"){
                    partida=partida+i;
                    puntuacion2=puntuacion2+i;
                } 
            }
            if(jugador2[i]==="comodin1"||jugador2[i]==="comodin2"){
                    partida=partida+30;
                    puntuacion2=puntuacion2+30;
            } 
        }
        for(i=0;i<jugador3.length;i++){
            for(k=1;k<=13;k++){
                if(jugador3[i]===k+"red"||jugador3[i]===k+"blue"||jugador3[i]===k+"yellow"||jugador3[i]===k+"black"){
                    partida=partida+i;
                    puntuacion3=puntuacion3+i;
                } 
            }
            if(jugador3[i]==="comodin1"||jugador3[i]==="comodin2"){
                    partida=partida+30;
                    puntuacion3=puntuacion3+30;
            } 
        }
        resultadoPartidaActual(partida, puntuacion1,puntuacion2,puntuacion3);
        return true;
    }
}
}
//------------------------------------------------------------------------------
//Método que imprime los resultados de la partida actual cuando algún jugaro no tenga más fichas
function resultadoPartidaActual(result1,result2,result3,result4){
    if((cantidadJugadores==="2")){
       if(jugador1.length===0){
            ganadorJugador1(result1,result2,result3,result4);
        }
        else{
            if(jugador2.length===0){
                ganadorJugador2(result1,result2,result3,result4);
            } 
        }
    }
    if(cantidadJugadores==="3"){
        if(jugador1.length===0){
            ganadorJugador1(result1,result2,result3,result4);
        }
        else{
            if(jugador2.length===0){
                ganadorJugador2(result1,result2,result3,result4);
            }
            else{
               if(jugador3.length===0){
                    ganadorJugador3(result1,result2,result3,result4);
                } 
            }
        }
    }
    if(cantidadJugadores==="4"){
        if(jugador1.length===0){
            ganadorJugador1(result1,result2,result3,result4);
        }
        else{
            if(jugador2.length===0){
                ganadorJugador2(result1,result2,result3,result4);
            }
            else{
               if(jugador3.length===0){
                    ganadorJugador3(result1,result2,result3,result4);
                } 
                else{
                    ganadorJugador4(result1,result2,result3,result4);
                }
            }
        }
    }
} 
//-------------------------------------------------------------------------------
//Método que permite imprimir las puntuaciones en la tabla de posiciones generales
function mostrarPuntuacionesTotal(){
    var posicion=0;
    if(cantidadJugadores==="2"){
      //Imprime las puntuaciones del jugador 1
        for(var i=1;i < document.getElementById('tablaResultados').rows.length-1; i++){
            document.getElementById('tablaResultados').rows[i].cells[1].innerHTML=puntuacionJugador1[posicion];
            posicion++;
        }
        //Imprime las puntuaciones del jugador 2
        var posicion=0;
        for(var i=1;i < document.getElementById('tablaResultados').rows.length-1; i++){
            document.getElementById('tablaResultados').rows[i].cells[2].innerHTML=puntuacionJugador2[posicion];
            posicion++;
        } 
        //Imprime la puntuacion total de las partidas
        var posicion=0;
        for(var i=1;i<=4;i++){
            document.getElementById('tablaResultados').rows[cantidadPartidas+1].cells[i].innerHTML=acumulado[posicion];
            posicion++;
        } 
    }
    if(cantidadJugadores==="3"){
       //Imprime las puntuaciones del jugador 1
        for(var i=1;i < document.getElementById('tablaResultados').rows.length-1; i++){
            document.getElementById('tablaResultados').rows[i].cells[1].innerHTML=puntuacionJugador1[posicion];
            posicion++;
        }
        //Imprime las puntuaciones del jugador 2
        var posicion=0;
        for(var i=1;i < document.getElementById('tablaResultados').rows.length-1; i++){
            document.getElementById('tablaResultados').rows[i].cells[2].innerHTML=puntuacionJugador2[posicion];
            posicion++;
        }
        //Imprime las puntuaciones del jugador 3
        var posicion=0;
        for(var i=1;i < document.getElementById('tablaResultados').rows.length-1; i++){
            document.getElementById('tablaResultados').rows[i].cells[3].innerHTML=puntuacionJugador3[posicion];
            posicion++;
        }
        //Imprime la puntuacion total de las partidas
        var posicion=0;
        for(var i=1;i<=4;i++){
            document.getElementById('tablaResultados').rows[cantidadPartidas+1].cells[i].innerHTML=acumulado[posicion];
            posicion++;
        } 
    }
    if(cantidadJugadores==="4"){
       //Imprime las puntuaciones del jugador 1
        for(var i=1;i < document.getElementById('tablaResultados').rows.length-1; i++){
            document.getElementById('tablaResultados').rows[i].cells[1].innerHTML=puntuacionJugador1[posicion];
            posicion++;
        }
        //Imprime las puntuaciones del jugador 2
        var posicion=0;
        for(var i=1;i < document.getElementById('tablaResultados').rows.length-1; i++){
            document.getElementById('tablaResultados').rows[i].cells[2].innerHTML=puntuacionJugador2[posicion];
            posicion++;
        }
        //Imprime las puntuaciones del jugador 3
        var posicion=0;
        for(var i=1;i < document.getElementById('tablaResultados').rows.length-1; i++){
            document.getElementById('tablaResultados').rows[i].cells[3].innerHTML=puntuacionJugador3[posicion];
            posicion++;
        }
        //Imprime las puntuaciones del jugador 4
        var posicion=0;
        for(var i=1;i < document.getElementById('tablaResultados').rows.length-1; i++){
            document.getElementById('tablaResultados').rows[i].cells[4].innerHTML=puntuacionJugador4[posicion];
            posicion++;
        }
        //Imprime la puntuacion total de las partidas
        var posicion=0;
        for(var i=1;i<=4;i++){
            document.getElementById('tablaResultados').rows[cantidadPartidas+1].cells[i].innerHTML=acumulado[posicion];
            posicion++;
        } 
    }
    
}
//------------------------------------------------------------------------------
//Método para preguntar a los participantes si desean volver a jugar una nueva partida
function volverJugar(){
    var pregunta=window.confirm("¿Desea Volver a Jugar?");
    if(pregunta===true){
        cargarJuego();
    }
    else{ 
        GanadorFinal();
       window.location.href = 'index.html';
    }
}
//------------------------------------------------------------------------------
//Método para  cargar de nuevo el juego
function cargarJuego(){
    turnoJugador1=false;
    turnoJugador2=false;
    turnoJugador3=false;
    turnoJugador4=false;
    fichasDisponibles=new Array();
    jugador1=new Array();
    jugador2=new Array();
    jugador3=new Array();
    jugador4=new Array();
    arreglo1=new Array(4);
    arreglo2=new Array(4);
    arreglo3=new Array(4);
    arreglo4=new Array(4);
    mover=new Array(1);
    arrayMovimientosJugador1=new Array(52);
    arrayMovimientosJugador2=new Array(52);
    arrayMovimientosJugador3=new Array(52);
    arrayMovimientosJugador4=new Array(52);
    usoCarta=false;
    usoCartaCombinar=false;
    cantidadPartidas++;
    crearTableroJuego();
    generarFichas();
    mostrarFichasJugador1();
    crearTablaPuntuaciones();
}
//------------------------------------------------------------------------------
//Método que muestra el ganador de la tabla acumulada en caso de seleccionar "Salir del Juego"
function GanadorFinal(){
    var generalJug1= parseInt(document.getElementById("tablaResultados").rows[cantidadPartidas+1].cells[1].innerHTML);
    var generalJug2= parseInt(document.getElementById("tablaResultados").rows[cantidadPartidas+1].cells[2].innerHTML);
    var generalJug3= parseInt(document.getElementById("tablaResultados").rows[cantidadPartidas+1].cells[3].innerHTML);
    var generalJug4= parseInt(document.getElementById("tablaResultados").rows[cantidadPartidas+1].cells[4].innerHTML);
    if(generalJug1>generalJug2&&generalJug1>generalJug3&&generalJug1>generalJug4){
        window.alert("Ganador del Juego es "+nombresJugadores[0]+" con: "+ generalJug1+" puntos. ¡Felicidades!" );
    }
    if(generalJug2>generalJug1&&generalJug2>generalJug3&&generalJug2>generalJug4){
        window.alert("Ganador del Juego es "+nombresJugadores[1]+" con: "+ generalJug2+" puntos. ¡Felicidades!" );
    }
    if(generalJug3>generalJug1&&generalJug3>generalJug2&&generalJug3>generalJug4){
        window.alert("Ganador del Juego es "+nombresJugadores[2]+" con: "+ generalJug3+" puntos. ¡Felicidades!" );
    }
    if(generalJug4>generalJug1&&generalJug4>generalJug2&&generalJug4>generalJug3){
        window.alert("Ganador del Juego es "+nombresJugadores[3]+" con: "+ generalJug4+" puntos. ¡Felicidades!" );
    }
}
//Méto que calcula las puntuaciones de cada jugador cuando ya no hayan más fichas disponibles
function resultados2(){
    var puntuacion1=0;
    var puntuacion2=0;
    var puntuacion3=0;
    var puntuacion4=0;
    if(cantidadJugadores==="2"){
        for(i=0;i<jugador1.length;i++){
            for(j=1;j<=13;j++){
                if(jugador1[i]===j+"red"||jugador1[i]===j+"blue"||jugador1[i]===j+"yellow"||jugador1[i]===j+"black"){
                    puntuacion1=puntuacion1+j;
                }
            }
            if(jugador1[i]==="comodin1"||jugador1[i]==="comodin2"){
                puntuacion1=puntuacion1+30;
            }  
        }
        for(i=0;i<jugador2.length;i++){
            for(j=1;j<=13;j++){
                if(jugador2[i]===j+"red"||jugador2[i]===j+"blue"||jugador2[i]===j+"yellow"||jugador2[i]===j+"black"){
                    puntuacion2=puntuacion2+j;
                } 
            } 
            if(jugador2[i]==="comodin1"||jugador2[i]==="comodin2"){
                puntuacion2=puntuacion2+30;
            }
        } 
        resultadoPartidaActual2(puntuacion1,puntuacion2,puntuacion3,puntuacion4);
    }
    if(cantidadJugadores==="3"){
        for(i=0;i<jugador1.length;i++){
            for(j=1;j<=13;j++){
                if(jugador1[i]===j+"red"||jugador1[i]===j+"blue"||jugador1[i]===j+"yellow"||jugador1[i]===j+"black"){
                    puntuacion1=puntuacion1+j;
                }
            }
            if(jugador1[i]==="comodin1"||jugador1[i]==="comodin2"){
                puntuacion1=puntuacion1+30;
            }  
        }
        for(i=0;i<jugador2.length;i++){
            for(j=1;j<=13;j++){
                if(jugador2[i]===j+"red"||jugador2[i]===j+"blue"||jugador2[i]===j+"yellow"||jugador2[i]===j+"black"){
                    puntuacion2=puntuacion2+j;
                } 
            } 
            if(jugador2[i]==="comodin1"||jugador2[i]==="comodin2"){
                puntuacion2=puntuacion2+30;
            }
        }
        for(i=0;i<jugador3.length;i++){
            for(j=1;j<=13;j++){
                if(jugador3[i]===j+"red"||jugador3[i]===j+"blue"||jugador3[i]===j+"yellow"||jugador3[i]===j+"black"){
                    puntuacion3=puntuacion3+j;
                }
            }
            if(jugador3[i]==="comodin1"||jugador3[i]==="comodin2"){
                puntuacion3=puntuacion3+30;
            }  
        }
        resultadoPartidaActual2(puntuacion1,puntuacion2,puntuacion3,puntuacion4);
    }
    if(cantidadJugadores==="4"){
        for(i=0;i<jugador1.length;i++){
            for(j=1;j<=13;j++){
                if(jugador1[i]===j+"red"||jugador1[i]===j+"blue"||jugador1[i]===j+"yellow"||jugador1[i]===j+"black"){
                    puntuacion1=puntuacion1+j;
                }
            }
            if(jugador1[i]==="comodin1"||jugador1[i]==="comodin2"){
                puntuacion1=puntuacion1+30;
            }  
        }
        for(i=0;i<jugador2.length;i++){
            for(j=1;j<=13;j++){
                if(jugador2[i]===j+"red"||jugador2[i]===j+"blue"||jugador2[i]===j+"yellow"||jugador2[i]===j+"black"){
                    puntuacion2=puntuacion2+j;
                } 
            } 
            if(jugador2[i]==="comodin1"||jugador2[i]==="comodin2"){
                puntuacion2=puntuacion2+30;
            }
        }
        for(i=0;i<jugador3.length;i++){
            for(j=1;j<=13;j++){
                if(jugador3[i]===j+"red"||jugador3[i]===j+"blue"||jugador3[i]===j+"yellow"||jugador3[i]===j+"black"){
                    puntuacion3=puntuacion3+j;
                }
            }
            if(jugador3[i]==="comodin1"||jugador3[i]==="comodin2"){
                puntuacion3=puntuacion3+30;
            }  
        }
        for(i=0;i<jugador4.length;i++){
            for(j=1;j<=13;j++){
                if(jugador4[i]===j+"red"||jugador4[i]===j+"blue"||jugador4[i]===j+"yellow"||jugador4[i]===j+"black"){
                    puntuacion4=puntuacion4+j;
                }
            }
            if(jugador4[i]==="comodin1"||jugador4[i]==="comodin2"){
                puntuacion4=puntuacion4+30;
            }
        }
    resultadoPartidaActual2(puntuacion1,puntuacion2,puntuacion3,puntuacion4);
    }
}
//------------------------------------------------------------------------------
//Método que imprime los resultados de la partida actual cuando ya no hayan más fichas disponibles
function resultadoPartidaActual2(result1,result2,result3,result4){
    if(cantidadJugadores==="2"){
       if(result1<result2){
         alert(nombresJugadores[0]+" ha ganado la partida");
         ganadorJugador1(result1,result2,result3,result4);
        }
        else{
            if(result2<result1){
                alert(nombresJugadores[1]+" ha ganado la partida");
                ganadorJugador2(result1,result2,result3,result4);
            } 
        }
    }
    if(cantidadJugadores==="3"){
        if(result1<result2&&result1<result3){
            alert(nombresJugadores[0]+" ha ganado la partida");
            ganadorJugador1(result1,result2,result3,result4);
        }
        else{
            if(result2<result1&&result2<result3){
                alert(nombresJugadores[1]+" ha ganado la partida");
                ganadorJugador2(result1,result2,result3,result4);
            }
            else{
                if(result3<result1&&result3<result2){
                    alert(nombresJugadores[2]+" ha ganado la partida");
                    ganadorJugador3(result1,result2,result3,result4);
                }  
            }
        }
    }
    if(cantidadJugadores==="4"){
       if(result1<result2&&result1<result3&&result1<result4){
            alert(nombresJugadores[0]+" ha ganado la partida");
            ganadorJugador1(result1,result2,result3,result4);
        }
        else{
            if(result2<result1&&result2<result3&&result2<result4){
                alert(nombresJugadores[1]+" ha ganado la partida");
                ganadorJugador2(result1,result2,result3,result4);
            }
            else{
                if(result3<result1&&result3<result2&&result3<result4){
                    alert(nombresJugadores[2]+" ha ganado la partida");
                    ganadorJugador3(result1,result2,result3,result4);
                }
                else{
                    alert(nombresJugadores[3]+" ha ganado la partida");
                    ganadorJugador4(result1,result2,result3,result4);
                }
            }
        } 
    }
}
//------------------------------------------------------------------------------
//Método para mostrar los resultados cuando gana el Jugador 1
function ganadorJugador1(result1,result2,result3,result4){
    if(cantidadJugadores==="2"){ 
        alert('          Resultados de la Partida '+cantidadPartidas+'!'+'\n\
        ----------------------------------\n\
        '+nombresJugadores[0]+':  '+(result1)+'\n\
        '+nombresJugadores[1]+':  '+(-result2));
    }
    if(cantidadJugadores==="3"){ 
        alert('          Resultados de la Partida '+cantidadPartidas+'!'+'\n\
        ----------------------------------\n\
        '+nombresJugadores[0]+':  '+(result1)+'\n\
        '+nombresJugadores[1]+':  '+(-result2)+'\n\
        '+nombresJugadores[2]+':  '+(-result3));
    }
    if(cantidadJugadores==="4"){ 
        alert('          Resultados de la Partida '+cantidadPartidas+'!'+'\n\
        ----------------------------------\n\
        '+nombresJugadores[0]+':  '+(result1)+'\n\
        '+nombresJugadores[1]+':  '+(-result2)+'\n\
        '+nombresJugadores[2]+':  '+(-result3)+'\n\
        '+nombresJugadores[3]+':  '+(-result4));
    }
    puntuacionJugador1[cantidadPartidas-1]=result1;
    puntuacionJugador2[cantidadPartidas-1]=(-result2);
    puntuacionJugador3[cantidadPartidas-1]=(-result3);
    puntuacionJugador4[cantidadPartidas-1]=(-result4);
    acumulado[0]+=result1;
    acumulado[1]+=(-result2);
    acumulado[2]+=(-result3);
    acumulado[3]+=(-result4);
    document.getElementById("tablaResultados").rows[cantidadPartidas].cells[1].style.background="#2818DA";
    document.getElementById("tablaResultados").rows[cantidadPartidas].cells[4].style.background="#E70716";
    document.getElementById("tablaResultados").rows[cantidadPartidas].cells[2].style.background="#E70716";
    document.getElementById("tablaResultados").rows[cantidadPartidas].cells[3].style.background="#E70716";
    mostrarPuntuacionesTotal();
    volverJugar();
}
//------------------------------------------------------------------------------
//Método para mostrar los resultados cuando gana el Jugador 2
function ganadorJugador2(result1,result2,result3,result4){
    if(cantidadJugadores==="2"){ 
        alert('          Resultados de la Partida '+cantidadPartidas+'!'+'\n\
        ----------------------------------\n\
        '+nombresJugadores[0]+':  '+(-result1)+'\n\
        '+nombresJugadores[1]+':  '+(result2));
    }
    if(cantidadJugadores==="3"){ 
        alert('          Resultados de la Partida '+cantidadPartidas+'!'+'\n\
        ----------------------------------\n\
        '+nombresJugadores[0]+':  '+(-result1)+'\n\
        '+nombresJugadores[1]+':  '+(result2)+'\n\
        '+nombresJugadores[2]+':  '+(-result3));
    }
    if(cantidadJugadores==="4"){ 
        alert('          Resultados de la Partida '+cantidadPartidas+'!'+'\n\
        ----------------------------------\n\
        '+nombresJugadores[0]+':  '+(-result1)+'\n\
        '+nombresJugadores[1]+':  '+(result2)+'\n\
        '+nombresJugadores[2]+':  '+(-result3)+'\n\
        '+nombresJugadores[3]+':  '+(-result4));
    }
        puntuacionJugador1[cantidadPartidas-1]=(-result1);
        puntuacionJugador2[cantidadPartidas-1]=(result2);
        puntuacionJugador3[cantidadPartidas-1]=(-result3);
        puntuacionJugador4[cantidadPartidas-1]=(-result4);
        acumulado[0]+=(-result1);
        acumulado[1]+=(result2);
        acumulado[2]+=(-result3);
        acumulado[3]+=(-result4);
        document.getElementById("tablaResultados").rows[cantidadPartidas].cells[2].style.background="#2818DA";
        document.getElementById("tablaResultados").rows[cantidadPartidas].cells[1].style.background="#E70716";
        document.getElementById("tablaResultados").rows[cantidadPartidas].cells[4].style.background="#E70716";
        document.getElementById("tablaResultados").rows[cantidadPartidas].cells[3].style.background="#E70716";
        mostrarPuntuacionesTotal();
        volverJugar();
}
//------------------------------------------------------------------------------
//Método para mostrar los resultados cuando gana el Jugador 3
function ganadorJugador3(result1,result2,result3,result4){
    if(cantidadJugadores==="3"){ 
        alert('          Resultados de la Partida '+cantidadPartidas+'!'+'\n\
        ----------------------------------\n\
        '+nombresJugadores[0]+':  '+(-result1)+'\n\
        '+nombresJugadores[1]+':  '+(-result2)+'\n\
        '+nombresJugadores[2]+':  '+(+result3));
    }
    if(cantidadJugadores==="4"){ 
        alert('          Resultados de la Partida '+cantidadPartidas+'!'+'\n\
        ----------------------------------\n\
        '+nombresJugadores[0]+':  '+(-result1)+'\n\
        '+nombresJugadores[1]+':  '+(-result2)+'\n\
        '+nombresJugadores[2]+':  '+(+result3)+'\n\
        '+nombresJugadores[3]+':  '+(-result4));
    }
    puntuacionJugador1[cantidadPartidas-1]=(-result1);
    puntuacionJugador2[cantidadPartidas-1]=(-result2);
    puntuacionJugador3[cantidadPartidas-1]=(result3);
    puntuacionJugador4[cantidadPartidas-1]=(-result4);
    acumulado[0]+=(-result1);
    acumulado[1]+=(-result2);
    acumulado[2]+=(result3);
    acumulado[3]+=(-result4);
    document.getElementById("tablaResultados").rows[cantidadPartidas].cells[3].style.background="#2818DA";
    document.getElementById("tablaResultados").rows[cantidadPartidas].cells[1].style.background="#E70716";
    document.getElementById("tablaResultados").rows[cantidadPartidas].cells[2].style.background="#E70716";
    document.getElementById("tablaResultados").rows[cantidadPartidas].cells[4].style.background="#E70716";
    mostrarPuntuacionesTotal();
    volverJugar();
}
//------------------------------------------------------------------------------
//Método para mostrar los resultados cuando gana el Jugador 4
function ganadorJugador4(result1,result2,result3,result4){
    if(cantidadJugadores==="4"){ 
        alert('          Resultados de la Partida '+cantidadPartidas+'!'+'\n\
        ----------------------------------\n\
        '+nombresJugadores[0]+':  '+(-result1)+'\n\
        '+nombresJugadores[1]+':  '+(-result2)+'\n\
        '+nombresJugadores[2]+':  '+(-result3)+'\n\
        '+nombresJugadores[3]+':  '+(result4));
    }
    puntuacionJugador1[cantidadPartidas-1]=(-result1);
    puntuacionJugador2[cantidadPartidas-1]=(-result2);
    puntuacionJugador3[cantidadPartidas-1]=(-result3);
    puntuacionJugador4[cantidadPartidas-1]=(result4);
    acumulado[0]+=(-result1);
    acumulado[1]+=(-result2);
    acumulado[2]+=(-result3);
    acumulado[3]+=(result4);
    document.getElementById("tablaResultados").rows[cantidadPartidas].cells[4].style.background="#2818DA";
    document.getElementById("tablaResultados").rows[cantidadPartidas].cells[1].style.background="#E70716";
    document.getElementById("tablaResultados").rows[cantidadPartidas].cells[2].style.background="#E70716";
    document.getElementById("tablaResultados").rows[cantidadPartidas].cells[3].style.background="#E70716";
    mostrarPuntuacionesTotal();
    volverJugar();
}
//------------------------------------------------------------------------------
//Efecto Acordeón para la tabla de Puntuaciones Generales (Mostrar/Ocultar)
function acordeon(tabla) {
   var idElemento=document.getElementById(tabla);
   //Si está abierta la oculta
   if(idElemento.style.display === 'table') {
      idElemento.style.display = 'none';
   } 
   //Si esta Oculta la muestra
   else{
      idElemento.style.display = 'table';
   }
}
//------------------------------------------------------------------------------
function ganadorAcumulado(){
    var generalJug1= parseInt(document.getElementById("tablaResultados").rows[cantidadPartidas+1].cells[1].innerHTML);
    var generalJug2= parseInt(document.getElementById("tablaResultados").rows[cantidadPartidas+1].cells[2].innerHTML);
    var generalJug3= parseInt(document.getElementById("tablaResultados").rows[cantidadPartidas+1].cells[3].innerHTML);
    var generalJug4= parseInt(document.getElementById("tablaResultados").rows[cantidadPartidas+1].cells[4].innerHTML);
    if(generalJug1>generalJug2&&generalJug1>generalJug3&&generalJug1>generalJug4){
        document.getElementById("tablaResultados").rows[cantidadPartidas+1].cells[1].style.background="#2818DA";
        document.getElementById("tablaResultados").rows[0].cells[1].style.background="#2818DA";
        document.getElementById("tablaResultados").rows[0].cells[2].style.background="#E70716";
        document.getElementById("tablaResultados").rows[0].cells[3].style.background="#E70716";
        document.getElementById("tablaResultados").rows[0].cells[4].style.background="#E70716";
        document.getElementById("tablaResultados").rows[cantidadPartidas+1].cells[4].style.background="#E70716";
        document.getElementById("tablaResultados").rows[cantidadPartidas+1].cells[2].style.background="#E70716";
        document.getElementById("tablaResultados").rows[cantidadPartidas+1].cells[3].style.background="#E70716"; 
    }
    if(generalJug2>generalJug1&&generalJug2>generalJug3&&generalJug2>generalJug4){
         document.getElementById("tablaResultados").rows[0].cells[1].style.background="#E70716";
        document.getElementById("tablaResultados").rows[0].cells[2].style.background="#2818DA";
        document.getElementById("tablaResultados").rows[0].cells[3].style.background="#E70716";
        document.getElementById("tablaResultados").rows[0].cells[4].style.background="#E70716";
        document.getElementById("tablaResultados").rows[cantidadPartidas+1].cells[2].style.background="#2818DA";
        document.getElementById("tablaResultados").rows[cantidadPartidas+1].cells[1].style.background="#E70716";
        document.getElementById("tablaResultados").rows[cantidadPartidas+1].cells[4].style.background="#E70716";
        document.getElementById("tablaResultados").rows[cantidadPartidas+1].cells[3].style.background="#E70716";
    }
    if(generalJug3>generalJug1&&generalJug3>generalJug2&&generalJug3>generalJug4){
        document.getElementById("tablaResultados").rows[0].cells[1].style.background="#E70716";
        document.getElementById("tablaResultados").rows[0].cells[2].style.background="#E70716";
        document.getElementById("tablaResultados").rows[0].cells[3].style.background="#2818DA";
        document.getElementById("tablaResultados").rows[0].cells[4].style.background="#E70716";
        document.getElementById("tablaResultados").rows[cantidadPartidas+1].cells[3].style.background="#2818DA";
        document.getElementById("tablaResultados").rows[cantidadPartidas+1].cells[1].style.background="#E70716";
        document.getElementById("tablaResultados").rows[cantidadPartidas+1].cells[2].style.background="#E70716";
        document.getElementById("tablaResultados").rows[cantidadPartidas+1].cells[4].style.background="#E70716";
    }
    if(generalJug4>generalJug1&&generalJug4>generalJug2&&generalJug4>generalJug3){
        document.getElementById("tablaResultados").rows[0].cells[1].style.background="#E70716";
        document.getElementById("tablaResultados").rows[0].cells[2].style.background="#E70716";
        document.getElementById("tablaResultados").rows[0].cells[3].style.background="#E70716";
        document.getElementById("tablaResultados").rows[0].cells[4].style.background="#2818DA";
        document.getElementById("tablaResultados").rows[cantidadPartidas+1].cells[4].style.background="#2818DA";
        document.getElementById("tablaResultados").rows[cantidadPartidas+1].cells[1].style.background="#E70716";
        document.getElementById("tablaResultados").rows[cantidadPartidas+1].cells[2].style.background="#E70716";
        document.getElementById("tablaResultados").rows[cantidadPartidas+1].cells[3].style.background="#E70716";
    }
}   
window.onload=iniciarJuego;

