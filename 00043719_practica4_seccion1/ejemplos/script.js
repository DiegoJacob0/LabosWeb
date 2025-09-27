//comprueba que si asercion es verdadera
console.assert("Legolas"> "Gimli")

//limpia consola
console.clear();

//lista de forma interactiva las propiedades de un objetivo
console.dir(window);

//Muestra una representacion HTML del objetivo
console.dirxml(document.body)

const marvel = ['Spider Man', 'Iron Man', 'Capitan America', 'Lobezno'];
//permite agrupar diferentes valores
console.group('Superheroes  de marvel'); //. groupcollapsed
marvel.forEach(superhero => console.log(superhero));
//indica el fin del grupo
console.groupEnd();