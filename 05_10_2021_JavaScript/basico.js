//OJO! Aqui este archivo js esta en el mismo folder principal del html, PERO gralmente los archivos js van en 
//su propia carpeta js (igual que los css)

let carritoCompra = {
    items: [],
    itemCount: 0,
    total: 0.0
}
/*OJO!! Si carritoCompra fuera const en vez de let, no se podrían hacerle reasignaciones, es decir, si carritoCompra
fuera const no se podría hacer la operación de la linea 58.
*/

const productos = [
    {
        id: 1, 
        nombre: 'pc', 
        precio: 2.0,
        descripcion: 'Este es un pc gamer',
        foto: '/img/p1.png' //OJO! Se le puede agregar una dirección de archivo al componente de un objeto en JS!
    },
    {
        id: 2, 
        nombre: 'teclado', 
        precio: 1.0,
        descripcion: 'Este es un teclado mecánico',
        foto: '/img/p2.png' 
    },
    {
        id: 3, 
        nombre: 'escritorio', 
        precio: 4.0,
        descripcion: 'Escritorio ajustable en altura',
        foto: '/img/p3.png' 
    }
]

const contarItems = (itemList) => {
    const acumulador = itemList.reduce((acum, item) => acum + item.cantidad, 0);
    return acumulador;
}

/*La expresión de aqui abajo es igual a la expresión de aqui arriba, ya que despues de la flecha 
(itemList) => no se 
requieren llaves cuando la unica instrucción de la función es un retorno directo, y la función
.reduce() retorna directamente la acumulación.

const contarItems = (itemList) => itemList.reduce((acum, item) => acum + item.cantidad, 0);
*/

const sumaTotal = (itemList) => {
    const acumulador = itemList.reduce((acum, item) => acum + item.precio * item.cantidad, 0.0) ;
    return acumulador;
}

/*Alternativa:
const sumaTotal = (itemList) => itemList.reduce((acum, item) => acum + item.precio * item.cantidad, 0.0) ;
*/

function agregarCarroCompra(item){
    let encontrado = carritoCompra.items.find((p) => item.id === p.id);
    /*En la funcion que se le pasa a .find(), 'p' se refiere al elemento actual del array. El profe dice que 
    .find() devuelve true o false... Pero en realidad, segun la documentación, esta funcion devuelve el primer
    elemento del array que cumpla con la condición especificada en la funcion callback..... ¿Entonces porque
    funciona para este caso?... La funcion .find() esta optimizada para buscar en arrays, es mucho mejor que
    hacerlo con un for*/
    if(!encontrado){
        carritoCompra.items.push(
            {
                ...item,
                cantidad: 1
            }
        );
        /*OJO!!! A lo que acabamos de hacer aqui. A carritoCompra.items nole pusheamos simplemente item, TENEMOS
        que construir UN NUEVO OBJETO para pushearselo. Este nuevo objeto tendra un spread de item, es decir,
        tendrá todos los campos/atributos de item (con sus respectivos valores), y UN NUEVO campo/atributo
        llamado cantidad, el cual en este caso tendrá valor de 1, ya que estamos agregando al carrito este tipo
        de producto/item por primera vez.*/
    }
    else{
        carritoCompra = {
            ...carritoCompra,
            items: carritoCompra.items.map(elem => {
                if(elem.id === item.id){
                    return {...elem, cantidad: elem.cantidad + 1}
                }else{
                    return elem;
                }
            })
        }
        /*Si el item ingresado ya esta en la lista de items del carrito, entonces hay que aumentar la cantidad de
        ese item en 1. ¿Como? Volvemos a construir todo el objeto carritoCompra. A carritoCompra le reasignamos
        un nuevo objeto, dentro del cual irá un spread de carritoCompra, pero modificando el atributo items. 
        Ahora, tenemos que construir toda la lista items de nuevo. ¿Como? Con la función .map(). Si el elemento 
        procesado coincide con item, se retorna un nuevo objeto (bueno, se entiende, linea 59, misma logica
        de reconstruir el objeto usando un spread de el mismo excepto por el unico atributo que se va a alterar). 
        Si no coincide, se retorna el elemento procesado tal cual es. OJO!! En la función .map() SIEMPRE se debe
        retornar algo PARA CADA ELEMENTO procesado del array (linea 61). Si no se retorna algo, esa posición 
        quedará vacía en el array resultante.
        */
    }
    carritoCompra = {
        ...carritoCompra,
        itemCount: contarItems(carritoCompra.items),
        total: sumaTotal(carritoCompra.items)
        /*
        Basicamente, cada vez que insertamos (o eliminamos, ver eliminarItem()) un nuevo item al carrito,
        simplemente recalculamos itemCount y total.
        */
    }
 }

 function eliminarItem(item){
    carritoCompra = {
        ...carritoCompra,
        items: carritoCompra.items.filter(elem => elem.id !== item.id),
        //itemCount: contarItems(carritoCompra.items),
        //total: sumaTotal(carritoCompra.items)
    }
    /*OJO!! a como usamos .filter() para eliminar un elemento de un array. Reconstruimos el array, pero sin el
    elemento que queremos eliminar.
    */
    carritoCompra = {
        ...carritoCompra,
        itemCount: contarItems(carritoCompra.items),
        total: sumaTotal(carritoCompra.items)
    }
    /*
    OJO!! Notese la doble reasignación a carritoCompra en esta función. Inicialmente se podria pensar que todo se
    podria definir en una sola reasignación, pero el caso es que el carritoCompra al que se le ha eliminado
    uno de sus items TODAVIA NO EXISTE en las lineas 116 y 117, ese solo se crea al hacer la asignación a 
    carritoCompra, que es lo ultimo que se hace. Por eso toca hacer la segunda reasignación en la linea 122.   
    */
 }

 function mostrarCarrito(){
    console.log('Cantidad: '+carritoCompra.itemCount);
    console.log('Total: '+carritoCompra.total);
    carritoCompra.items.map(item => {console.log(item/*item.nombre+' '+item.descripcion*/)});
    /* OJO!! .map() también se puede usar de esta manera (sin retornar nada) para simplemente recorrer un array
    imprimiendo cada uno de sus componentes*/
 }