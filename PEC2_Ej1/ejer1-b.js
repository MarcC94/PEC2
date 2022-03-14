// Función findOne donde se introduce la lista users, key que puede ser name o rol, 
// y value que es el valor de estos campos.
// Se han eliminado los argumentos onSuccess y onError en la función findOne
// ya que ahora utilizamos una promesa para devolver el resultado.
const findOne = (list, { key, value }) => {
  // Creo una promesa con los argumentos resolve y reject
  return new Promise((resolve,reject) => {
    // Se utiliza el método setTimeout() para limitar el tiempo de búsqueda a 2s.
    setTimeout(() => {
      // element tendrá el valor de la key
      const element = list.find(element => element[key] === value);
      // Si la búsqueda es exitosa ejecuto el resolve, si no, el reject
      element ? resolve(element[key]) : reject('ERROR: Element Not Found');
    }, 2000);
  });
};

// Array con el listado de usuarios, con los campos "name" y "rol"
const users = [
  {
    //User 0, de nombre Carlos y rol Teacher
    name: 'Carlos',
    rol: 'Teacher'
  },
  {
    //User 1, de nombre Ana y rol Boss
    name: 'Ana',
    rol: 'Boss'
  }
];
  
// Muestra por pantalla "findOne succes"
console.log('findOne success');
// Se llama a la función introduciendo como key el nombre del usuario y como valor "Carlos"
// Esto dará resultado correcto ya que Carlos es un user y mostrará por pantalla "user: Carlos".
// Se crea la primera promesa
const promise1 =   findOne(users, { key: 'name', value: 'Carlos' });
// Si la búsqueda es exitosa muestra "user: Carlos".
promise1.then((value) => {
  console.log(`user: ${value}`);
})
// Si no es exitosa, mostramos el mensaje de error.
.catch((err) => {
  console.log(err);
});
 
// Muestra por pantalla "findOne error"
console.log('findOne error');
// Se llama a la función introduciendo como key el nombre del usuario y como valor "Fermin"
// Esto dará error ya que Fermin no es un user y mostrará por pantalla "ERROR: Element Not Found".
// Se crea la segunda promesa
const promise2 =   findOne(users, { key: 'name', value: 'Fermin' });
// Si la búsqueda es exitosa muestra "user: Fermin".
promise2.then((value) => {
  console.log(`user: ${value}`);
})
// Si no es exitosa, mostramos el mensaje de error.
.catch((err) => {
  console.log(err);
});
  
/*
findOne success
findOne error
  //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/