//*ciclo-bucles-interacciones*//
/* console.log (" Numero de 1 a 10")

console.log (1);
console.log (2);
console.log (3);
console.log (4);
console.log (5);
console.log (6);
console.log (7);

console.log ("Ej 1 ciclo de For")
for(let i=0;i <10; i=i+1){
    console.log("Hola lukisss - Ej For");
}
console.log ("Ej 2 - Del  1 al 10 inclusive ")
for( let i=1; i<=10; i=i+1){
    console.log (i);
}
console.log (" Ej. 3 - Numeros del 1 al 10 en decreciente")
for( let i=10; i>=0; i= i-1){
    console.log (i);
}
console.log ("Ej. 4 - Numeros pares del 2 al 10 ")
for(let i=0; i<=20; i=i+2){
    console.log (i);
}
console.log ("Ej. 5 - usar claves" ) 

let passworDUsuario=parseInt(prompt("ingrese su contraseña")) 
const passworDAuth = 1234;
for(let i=0; i<2;i++){
    if(passworDUsuario==passworDAuth){
        console.log ("contraseña correcta");
        break;
    } else {
        passworDUsuario=parseInt(prompt("su contraseña es incorrecta, intente de nuevo"));
    }
}
console.log ("Ej 6 de continue"  )

for(let i=0; i<=10; i=i+1){
    if (i%2==0){
        continue;
    }
    console.log (i)
}
console.log (" ciclo wile..")

let nombre= prompt("ingrese un nombre: ( para salir, ingrese salir)");
while (nombre!="salir"){
    console.log(nombre);
    nombre=prompt("ingrese un nombre: ( para salir, ingrese salir");
}
*/
/*/for (let x = 1; x > 3; x++) {
    console.log (" usted pidio turnos" + x);
}
let Hola = "Bienvenidos a turnos online "
console.log (Hola)
let Especialista =prompt('Por favor elija la opcion que necesita \n A Pediatra \n B Medico clinico \n C Odontologia \n Puede solicitar hasta 3 turnos')
let nombre = prompt (" decime tu nombre")
let Apellido = prompt ("Decime tu apellito")
let prepaga = prompt ("Tenes Obra social o Prepaga")
let Edad = prompt  ("ingrese su edad")
    if  (Edad >=18){
        alert ("Puedes ingresar al sitio"); }
    else {
        alert ("No puedes solicitar turnos, solo mayores de 18 años")}
let datosUser = ` 
Bienvenido 
${nombre}  ${Apellido}
Posee Obra social o Prepaga: ${prepaga} 
Años ${Edad} ` 
console.log (datosUser) */
//let turnosCreados = 0 
//while (turnosCreados < 3){
for ( let turnosCreados = 0; turnosCreados<3; turnosCreados++){ 
    let Hola = "Bienvenidos a turnos online "
    console.log (Hola)
    let Especialista =prompt('Por favor elija la opcion que necesita \n A Pediatra \n B Medico clinico \n C Odontologia \n Puede solicitar hasta 3 turnos')
    let nombre = prompt (" decime tu nombre")
    let Apellido = prompt ("Decime tu apellito")
    let prepaga = prompt ("Tenes Obra social o Prepaga")
    let Edad = prompt  ("ingrese su edad")
    if  (Edad >=18){
        alert ("Puedes ingresar al sitio"); }
    else {
        alert ("No puedes solicitar turnos, solo mayores de 18 años")}
    let datosUser = ` 
    Bienvenido 
    ${nombre}  ${Apellido}
    Posee Obra social o Prepaga: ${prepaga} 
    Años ${Edad} ` 
    console.log (datosUser) 
    //turnosCreados = turnosCreados + 1
    let otroTurno = prompt("Necesita otro turno, si / no ?"); 
    if (otroTurno == "si"){ 
        console.log (" Puede solicitar el turno");
    }
    else if (otroTurno == "no" ){
        console.log ("Gracias por utilizar nuestros servicios");
        break; 
    }
    console.log ("turnoscreados = " + turnosCreados)
    }