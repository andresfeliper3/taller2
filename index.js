const {cons,first,rest,isEmpty,isList,append,length} = require('functional-light');
//PARTE 1: LISTAS
//1. Encuentre el mayor valor de una lista de números

/* maxList:list->number
Hallar el número de mayor valor de una lista de números
maxList([1,2,3])->3
maxList([-1,-2,-3])->-1
maxList([1,1])->1*/
function maxList(list) {
    if(length(list) == 1) {
        return first(list);
    } else {
        return Math.max(first(list),maxList(rest(list)));
    }
}

//2. Encuentre el promedio de los valores de la lista
/*sumAll:list->number 
Sumar todos los elementos de una lista
function sumAll(list)
sumAll([1,2,3])->6
sumAll([0,1])->1
sumAll([1,-1])->0
*/
function sumAll(list) {
    if(length(list) == 1) {
        return first(list);
    } else {
        return first(list) + sumAll(rest(list));
    }
}

/*average:list->number
Hallar el average de una lista de números
function average(list)
average([1,2,3])->2
average([1,2,3,4,5])->3
*/
function average(list) {
    return sumAll(list) / length(list);
}

//3. Invierta el orden de una lista

/*last:list->number
Halla el último elemento de una lista
last([1,2,3])->3
last([5,8,1,3,0])->0
*/
function last(list) {
    if(length(list) ==1) {
        return first(list);
    } else {
        return last(rest(list));
    }
}

/*pop:list->list
Quita el último elemento de una lista
pop([1,2,3])->[1,2]
pop([4,0,5,9,7])->[4,0,5,9]
*/
function pop(list) {
    if(length(list)==1) {
        return [];
    } else {
        return cons(first(list),pop(rest(list)));
    }
}

/*invert:list->list
Invierte los elementos de una lista
invert([1,2,3])->[3,2,1]
invert([3,2,1])->[1,2,3]
*/
function invert(list) {
    if(length(list)==0) {
        return [];
    } else {
        return cons(last(list),invert(pop(list)));
    }
}

//4. Ordene de manera ascendente una lista

/*removeX:list,number->list
Remueve sólo el primer elemento X que se encuentre  en una lista 
removeX([1,2,3],2)-> [1,3]
removeX([0,2,9,7,1,0], 9) -> [0,2,7,1,0] 
removeX([1,1,2,2,2,3],2) -> [1,1,2,2,3]
*/
function removeX(list,x) {
    if(isEmpty(list)) {
        return [];
    } else if(first(list)==x) {
        return removeX(rest(list));
    } else {
        return cons(first(list),removeX(rest(list),x));
    }
}

/*minList:list->number
Hallar el número de menor valor de una lista de números
function minList(list)
minList([1,2,3]->1)
minList([-7,-3,0]->-7)
minList([1,1,2,2])->1
*/
function minList (list) {
    if(length(list) == 1) {
        return first(list);
    } else {
        return Math.min(first(list),minList(rest(list)));
    }
}

/*up:list->list
Ordena ascendemente una lista de números
up[4,3,1,2] -> [1,2,3,4]
up[2,1,0,3] -> [0,1,2,3]
*/

function up(list) {
    if(isEmpty(list)) {
        return [];
    } else {
        return cons(minList(list),up(removeX(list,minList(list))));
    }
}

//5. Genere una lista de los n primeros términos de la serie de Fibonacci

/*push:number,list->list
Añade un elemento X al final de la lista
push(3,[1,2])->[1,2,3]
push(0,[5,7,4,1])->[5,7,4,1,0]
*/
function push(x,list) {
    if(isEmpty(list)) {
        return cons(x,[]);
    } else{
        return cons(first(list),push(x,rest(list)));
    }
}

/*nthFibo: number->number
Dada una posición, indica el número que ocupa la posición indicada en la serie de Fibonacci 
nthFibo(0)->0
nthFibo(1)->1
nthFibo(2)->1
nthFibo(3)->2
*/
function nthFibo(n) {
    if(n==1) {
        return 1;
    } else if(n==0) {
        return 0;
    }
    else {
        return nthFibo(n-1) + nthFibo(n-2);
    }
}

/*fiboList:number->list
Genera una lista con la cantidad de términos de la sucesión ingresados 
fiboList(3)->[0,1,1]
fiboList(5)->[0,1,1,2,3]
*/
function fiboList(n) {
    if(n<=0) {
        return [];
    } else {
        return push(nthFibo(n-1),fiboList(n-1));
    }
}

//6. Dada una lista, eliminar todos los elementos que no sean números

/*preserveNumbers:list->list
Eliminar todos los elementos que no sean números de una lista
preserveNumbers([1,"a","b",2])->[1,2]
preserveNumbers([5,1,2,true])->[5,1,2]
*/
function preserveNumbers(list) {
    if(isEmpty(list)) {
        return [];
    }else if(typeof first(list)=='number') {
        return cons(first(list),preserveNumbers(rest(list)));
    } else {
        return preserveNumbers(rest(list));
    }
}

/*7. Implemente una función que inserta un elemento x en la posición n de la lista,
 si n está entre 0 y el (longitud lista). No hace nada en caso contrario. */

/*insert:list,number,number->list
Inserta un elemento X en la posición N de una lista, si N está entre cero y la longitud de la lista
insert([1,2,3],4,0)->[4,1,2,3]
insert([1,2,3],4,1)->[1,4,2,3]
insert([1,2,3],4,3)->[1,2,3,4]
insert([1,2,3],4,4)->undefined
*/
function insert(list,x,n) {
    if(n>=0 && n<=length(list)) {
        if(n==0) {
            return cons(x,list);
        } else{
            return cons(first(list),insert(rest(list),x,n-1));
        }
    }
} 

/*8.Dada una lista ordenada, implementar una función que retorna el índice n de dónde se encuentra un número x dado,
 si existe, o -(n + 1 ), donde n es la posición en la cual se debería insertar x para mantener la lista ordenada. */

 /*existsIn:list,number->boolean
Retorna true si un elemento está en una una lista, en caso contrario retorna false
existsIn([1,2,3],2)->true
existsIn([1,2,3],0)->false
*/
function existsIn(list,x) {
    if(isEmpty(list)) {
        return false;
    } else if(first(list)==x) {
        return true;
    } else {
        return existsIn(rest(list),x);
    }
}

/*searchPlace: list,number,number->number
Retorna el índice que debe tener un número para no desordenar una lista ascendente, el tercer parámetro debe ser cero.
searchPlace([1,3,5],0,0)->0
searchPlace([1,3,5],6,0)->3
searchPlace([1,3,5],3,0)->1
*/
function searchPlace(list,x,i) {
    if(isEmpty(list)) {
        return i;
    }else if(x>first(list)) {
        return searchPlace(rest(list),x,i+1);
    } else {
        return i;
    }
}

/*orderIndex:list,number-> number
Recibe una lista (si no está ordenada, la ordena ascendentemente) y retorna el índice del número x en la lista,
o la posición n que debería ocupar para no desordenar la lista.
orderIndex([1,2,3],3)->2
orderIndex([3,2,1],3)->2
orderIndex([1,2,3],2)->1
orderIndex([3,2,1],2)->1
orderIndex([3,2,1],4)->3
*/
function orderIndex(list,x) {
    if(existsIn(list,x)) {
        return index(up(list),x);
    } else {
        return searchPlace(up(list),x,0);
    }
}

//9. Implemente una función que inserta datos en una lista que siempre está ordenada.

/*orderInsert:list,number->list
Recibe una lista (si está desorganizada, la organiza ascendentemente) e inserta al elemento x en la posición 
correcta para que conserve el orden.
orderInsert([1,2,4],3)->[1,2,3,4]
orderInsert([4,1,2],3)->[1,2,3,4]
orderInsert([1,2],0)->[0,1,2]
*/
function orderInsert(list,x) {
    return insert(up(list),x,orderIndex(list,x));
}

//10. Implemente una función que busca un elemento en una lista desordenada.

/*index:list,number->number
Hallar el índice de un dato (el primer X) en una lista 
index([1,2,3],2)->1
index([1,0,0,2,2,3],0)->1
index([0,0,0,3],3)->3
*/
function index(list,x) {
    if(isEmpty(list)) {
        return undefined;
    }
    else if(first(list)==x) {
        return 0;
    } else {
        return 1 + index(rest(list),x);
    }
}

//11. Implemente una función que elimina el elemento n de la lista

/*removeN:list,number->list 
Elimina el enésimo elemento de una lista
removeN([1,2,3],0)->[2,3]
removeN([1,2,3],1)->[1,3]
removeN([1,2,3],2)->[1,2]
removeN([1,2,3],5)->[1,2,3]
*/
function removeN(list,n){
    if(n<length(list) && n>=0) {
        if(n==0) {
            return rest(list);
        } else {
            return cons(first(list),removeN(rest(list),n-1));
        }
    }
    return list;
}

//12. Implemente la función de búsqueda sobre una lista ordenada

/*
indexUp:list,number->number
Hallar el índice de un dato (el primer X) en una lista ordenada (si no está ordenada, la ordena ascendentemente).
indexUp([1,2,3],2)->1
indexUp([1,0,2,3],0)->0
indexUp([0,0,3],3)->2
*/

function indexUp(list,x) {
    return index(up(list),x);
}

/*13. Implemente una función que busca todos los números mayores que un cierto valor x. 
La función debe retornar una lista con los elementos encontrados */

/*greaterThan:list,number->list
Retornar una lista con los números mayores que x. Los elementos son retornados en el mismo orden que tienen en la lista
greaterThan([1,2,3,4,5],2)->[3,4,5]
greaterThan([10,20,30,40,50],15)->[20,30,40,50]
*/
function greaterThan(list,x) {
    if(isEmpty(list)){
        return [];
    } else if(x>=first(list)){
        return greaterThan(rest(list),x);
    } else {
        return cons(first(list),greaterThan(rest(list),x));
    }
}

/*14. Implemente una función que busca todos los elementos de una lista que cumplen una cierta condición, 
por ejemplo, los números que sean pares. La función debe retornar una lista con los elementos encontrados */

/*even:number->booleam
Retorna true si el número ingresado es par, es caso contrario retorna false.
even(4)->true
even(7)->false
*/
function even(x) {
    return x % 2 ==0;
}

/*search:list,function->list
Arma una lista con todos los elementos de una lista que cumplen una condición que se indica en la función ingresada. La función debe retornarun booleano
search([0,1,2,3,4],even)->[0,2,4]
search([1,1,10,10],even)->[10,10]
*/

function search(list,fx) {
    if(isEmpty(list)) {
        return [];
    } else if(fx(first(list))) {
        return cons(first(list),search(rest(list),fx));
    } else {
        return search(rest(list),fx);
    }
}

/*15. Implemente una función que aplica una función data a todos los elementos de una lista(map). 
Por ejemplo, la función debe ser capaz de elevar todos los elementos de la lista al cuadrado. Ejemplo:
map([1,2,3,4], (x) => x*x)
*/

/* square:number->number
Eleva un número al cuadrado
square(-1)->1
square(5)->25
*/
function square(x) {
    return x*x;
}

/*mapeo:list,function->list
Aplica una función a todos los elementos de una lista
mapeo([1,2,3,4],square)->[1,4,9,16]
mapeo([-1,-10],square)->[1,100]
*/
function mapeo(list,fx) {
    if(isEmpty(list)) {
        return [];
    } else {
        return cons(fx(first(list)),mapeo(rest(list),fx));
    }
}

//PARTE 2: LISTAS CON ESTRUCTURAS
const playlist =
[{name:"Paranoid",          artist:"Black Sabbath",     album:"Live at last",       duration:172,   rating:4},
{name:"Du hast",            artist:"Rammstein",         album:"Sehnsucht",          duration:260,   rating:5},
{name:"Steel",              artist:"Pegboard nerds",    album:"Full hearts",        duration:258,   rating:3},
{name:"Head of Nasa",       artist:"Infected mushroom", album:"Head of Nasa",       duration:465,   rating:2},
{name:"Conquer or die",     artist:"Megadeth",          album:"Dystopia",           duration:314,   rating:4},
{name:"Somebody to love",   artist:"Queen",             album:"A day at the Races", duration:309,   rating:5},
{name:"Blues boys tune",    artist:"B.B King",          album:"Blus on the Bayau",  duration:442,   rating:1},
{name:"Like a stone",       artist:"Audioslave",        album:"Like a stone",       duration:308,   rating:5},
{name:"One",                artist:"Metallica",         album:"Justice for all",    duration:446,   rating:2},
{name:"We will rock you",   artist:"Queen",             album:"News of the World",  duration:124,   rating:3} 

];

//1. Búsqueda de canciones por nombre de canción. Debe retornar una canción o vacío en caso de no encontrarla

/*searchByName: list,string->Object
Busca por nombre una canción en la lista 
searchByName(playlist,"One")-> {name:"One",artist:"Metallica",album:"Justice for all",duration:446,rating:2}
searchByName(playlist,"Du hast")->{name:"Du hast",artist:"Rammstein",album:"Sehnsucht",duration:260,rating:5}
*/
function searchByName(list,name) {
    if(isEmpty(list)) {
        return [];
    } else if(first(list).name==name) {
        return first(list);
    } else {
        return searchByName(rest(list),name);
    }
}

//2. Búsqueda de canciones por artista. Debe retornar una lista de canciones o empty

/*searchByArtist:list,string->list
Busca por artista en una playlist. Retorna la lista de canciones del artista
searchByArtist(playlist,"Queen")->[ { name: 'Somebody to love',
    artist: 'Queen',
    album: 'A day at the Races',
    duration: 309,
    rating: 5 },
  { name: 'We will rock you',
    artist: 'Queen',
    album: 'News of the World',
    duration: 124,
    rating: 3 } ]
*/
function searchByArtist(list,artist) {
    if(isEmpty(list)) {
        return [];
    } else if(first(list).artist==artist) {
        return cons(first(list),searchByArtist(rest(list),artist));
    } else {
        return searchByArtist(rest(list),artist);
    }
}
 

//3. Duración de la lista de reproducción en el formato "horas:minutos:segundos"

/*sumSeconds:list->number
Hace la sumatoria en segundos de todas las duraciones de las canciones de la lista
sumSeconds(playlist)->3098
*/
function sumSeconds(list) {
    if(isEmpty(list)) {
        return 0;
    } else {
        return first(list).duration + sumSeconds(rest(list));
    }
}

/*toMinutes:number->number
Saca la cantidad de minutos de una cantidad de segundos
 */
function toMinutes(seconds) {
    return Math.floor(seconds / 60);
}
/*toSeconds:number->number
Saca los segundos restantes de una cantidad grande de segundos
*/
function toSeconds(seconds) {
    return seconds % 60;
}
/*toHours:number->number
Saca la cantidad de horas de una cantidad de segundos
*/
function toHours(seconds) {
    return Math.floor(toMinutes(seconds) / 60);
}
/*playlistDuration:list->string
Devuelve la duración de una lista de reproducción en el formato "horas:minutos:segundos"
playlistDuration(playlist)-> 0:51:38
*/
function playlistDuration(list){
    return toHours(sumSeconds(list)) + ":" + toMinutes(sumSeconds(list)) + ":" + toSeconds(sumSeconds(list));
}

//4. Todas las canciones con al menos menos de 2 estrellas
/*badSongs:list->list 
Encuentra todas las canciones con menos de 2 estrellas
badSongs(playlist)-> [ { name: 'Blues boys tune',
    artist: 'B.B King',
    album: 'Blus on the Bayau',
    duration: 442,
    rating: 1 } ]
*/
function badSongs(list) {
    if(isEmpty(list)) {
        return [];
    } else if(first(list).rating<2) {
        return cons(first(list),badSongs(rest(list)));
    } else {
        return badSongs(rest(list));
    }
}

//5. Todas las canciones con 5 estrellas
/*bestSongs:list->list
Halla todas las canciones con 5 estrellas de una playlist
bestSongs(playlist)->[ { name: 'Du hast',
    artist: 'Rammstein',
    album: 'Sehnsucht',
    duration: 260,
    rating: 5 },
  { name: 'Somebody to love',
    artist: 'Queen',
    album: 'A day at the Races',
    duration: 309,
    rating: 5 },
  { name: 'Like a stone',
    artist: 'Audioslave',
    album: 'Like a stone',
    duration: 308,
    rating: 5 } ]
*/
function bestSongs(list) {
    if(isEmpty(list)) {
        return [];
    } else if(first(list).rating==5) {
        return cons(first(list),bestSongs(rest(list)));
    } else {
        return bestSongs(rest(list));
    }
}

//6. Imprima los títulos de las canciones y su duración
/*namesDurations:list->list
Imprime una lista con los títulos de las canciones y su duración organizadas como objetos
namesDurations(playlist)-> [ { name: 'Paranoid', duration: 172 },
  { name: 'Du hast', duration: 260 },
  { name: 'Steel', duration: 258 },
  { name: 'Head of Nasa', duration: 465 },
  { name: 'Conquer or die', duration: 314 },
  { name: 'Somebody to love', duration: 309 },
  { name: 'Blues boys tune', duration: 442 },
  { name: 'Like a stone', duration: 308 },
  { name: 'One', duration: 446 },
  { name: 'We will rock you', duration: 124 } ]
*/
function namesDurations(list) {
    if(isEmpty(list)) {
        return [];
    } else {
        return cons({name:first(list).name, duration:first(list).duration},namesDurations(rest(list)));
    }
}

//7. Crear la lista de mejor a peor canción

/*maxRating:list->Object
Devuelve el máximo rating que hay en la lista
*/
function maxRating(list) {
    if(length(list)==1) {
        return first(list).rating;
    } else {
        return Math.max(first(list).rating,maxRating(rest(list)));
    }
}

/*searchByRating:list,number->list
Devuelve las canciones con el rating ingresado
*/
function searchByRating(list,rating) {
    if(isEmpty(list)) {
        return [];
    } else if(first(list).rating==rating) {
        return cons(first(list),searchByRating(rest(list),rating));
    } else {
        return searchByRating(rest(list),rating);
    }
}

/*deleteByRating:list,number->list
Elimina todos los elementos de una lista que comparten un mismo rating
*/
function deleteByRating(list,rating) {
    if(isEmpty(list)) {
        return [];
    } else if(first(list).rating==rating) {
        return deleteByRating(rest(list),rating);
    } else {
        return cons(first(list),deleteByRating(rest(list),rating));
    }
}

/*bestToWorst:list->list
Organiza al lista de canciones (objetos) según su rating en orden descendente.
//Hacer que searchByRating reciba el maxRating de una lista
bestToWorst(playlist)->[ { name: 'Du hast',
    artist: 'Rammstein',
    album: 'Sehnsucht',
    duration: 260,
    rating: 5 },
  { name: 'Somebody to love',
    artist: 'Queen',
    album: 'A day at the Races',
    duration: 309,
    rating: 5 },
  { name: 'Like a stone',
    artist: 'Audioslave',
    album: 'Like a stone',
    duration: 308,
    rating: 5 },
  { name: 'Paranoid',
    artist: 'Black Sabbath',
    album: 'Live at last',
    duration: 172,
    rating: 4 },
  { name: 'Conquer or die',
    artist: 'Megadeth',
    album: 'Dystopia',
    duration: 314,
    rating: 4 },
  { name: 'Steel',
    artist: 'Pegboard nerds',
    album: 'Full hearts',
    duration: 258,
    rating: 3 },
  { name: 'We will rock you',
    artist: 'Queen',
    album: 'News of the World',
    duration: 124,
    rating: 3 },
  { name: 'Head of Nasa',
    artist: 'Infected mushroom',
    album: 'Head of Nasa',
    duration: 465,
    rating: 2 },
  { name: 'One',
    artist: 'Metallica',
    album: 'Justice for all',
    duration: 446,
    rating: 2 },
  { name: 'Blues boys tune',
    artist: 'B.B King',
    album: 'Blus on the Bayau',
    duration: 442,
    rating: 1 } ]
*/
function bestToWorst(list) {
    if(isEmpty(list)) {
        return [];
    } else{
        return append(searchByRating(list,maxRating(list)),bestToWorst(deleteByRating(list,maxRating(list))));
    }
}


//8. Eliminar la enésima canción
/*deleteSongN:list,number->list
Elimina la enésima canción de una lista (de 1 a n).
deleteSongN(playlist,5) -> [ { name: 'Paranoid',
    artist: 'Black Sabbath',
    album: 'Live at last',
    duration: 172,
    rating: 4 },
  { name: 'Du hast',
    artist: 'Rammstein',
    album: 'Sehnsucht',
    duration: 260,
    rating: 5 },
  { name: 'Steel',
    artist: 'Pegboard nerds',
    album: 'Full hearts',
    duration: 258,
    rating: 3 },
  { name: 'Head of Nasa',
    artist: 'Infected mushroom',
    album: 'Head of Nasa',
    duration: 465,
    rating: 2 },
  { name: 'Somebody to love',
    artist: 'Queen',
    album: 'A day at the Races',
    duration: 309,
    rating: 5 },
  { name: 'Blues boys tune',
    artist: 'B.B King',
    album: 'Blus on the Bayau',
    duration: 442,
    rating: 1 },
  { name: 'Like a stone',
    artist: 'Audioslave',
    album: 'Like a stone',
    duration: 308,
    rating: 5 },
  { name: 'One',
    artist: 'Metallica',
    album: 'Justice for all',
    duration: 446,
    rating: 2 },
  { name: 'We will rock you',
    artist: 'Queen',
    album: 'News of the World',
    duration: 124,
    rating: 3 } ]
*/
function deleteSongN(list,n) {
    if(isEmpty(list)) {
        return [];
    } else if(n==0) {
        return list;
    } else if(n==1) {
        return rest(list);
    } else {
        return cons(first(list),deleteSongN(rest(list),n-1));
    }
}





module.exports = {maxList,minList,sumAll,average,last,pop,invert,up,push,nthFibo,fiboList,preserveNumbers, insert,existsIn,removeX,greaterThan,mapeo,search,removeN,searchPlace,orderIndex,orderInsert,index,even,square};