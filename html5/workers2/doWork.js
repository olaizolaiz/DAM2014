this.addEventListener('message', function(e) {
    var data = e.data.numero;
    var arrPrimos =[];

    function numPrimos(){
//inicia contador temporal
var start = new Date().getTime();
// obtenemos los valores escritos y nos
// aseguramos de que son números.
var q=data.value;
q = parseInt(q);
for (i = 0; i <= q ; i++){
// todo primo tiene solo 2 divisores
var divisores = 2;
// buscamos otros divisores
for ( j = 2; j<i ; j++){
// si encontramos más de dos divisores
// no es primo y pasamos a otro posible divisor
if (i%j == 0){
divisores++;
break;
}
}
// si tiene 2 divisores es primo
// lo añadimos al array mediante el método push()
if (divisores == 2){
arrPrimos.push(i);
}
}
// finalizamos el contador temporal
var finish = new Date().getTime();
var tiempoEmpleado = finish - start;
// presentamos los resultados
}
this.postMessage(JSON.stringify(arrPrimos));

}, false);


