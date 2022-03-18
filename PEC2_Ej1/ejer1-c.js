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
      // con el correspondiente mensaje de error
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

// Creo la función asyncCall(p1,p2) donde p1 es el nombre o rol y p2 es el valor de ese nombre o rol
async function asyncCall(p1,p2){
  // Si la promesa se resuelve muestro el resultado deseado por consola  
  try{
      const result = await findOne(users, { key: p1, value: p2 });
      console.log(`user: ${result}`);
  // Si la promesa es rechazada muestro el mensaje de error por consola
  }
  catch(error){
      console.log(error);
  }
}

// Muestra por pantalla "findOne success"
console.log('findOne success');
// Hago la llamada a la función asyncCall(p1,p2) introduciendo como key el nombre del usuario y como valor "Carlos"
// Esto dará resultado correcto ya que Carlos es un user y mostrará por pantalla "user: Carlos".
asyncCall('name','Carlos');
// Muestra por pantalla "findOne error"
console.log('findOne error');
// Hago la llamada a la función asyncCall(p1,p2) introduciendo como key el nombre del usuario y como valor "Fermin"
// Esto dará error ya que Fermin no es un user y mostrará por pantalla "ERROR: Element Not Found".
asyncCall('name','Fermin');

/* Por tanto, lo que se muestra por consola es lo siguiente:
findOne success
findOne error
//wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/