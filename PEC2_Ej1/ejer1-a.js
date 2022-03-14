// Función findOne donde se introduce la lista users, key que puede ser name o rol, 
// value que es el valor de estos campos, y las funciones onSucces y onError.
const findOne = (list, { key, value }, { onSuccess, onError }) => {
    // Se utiliza el método setTimeout() para limitar el tiempo de búsqueda a 2s.
    setTimeout(() => {
      // element tendrá el valor de la key
      const element = list.find(element => element[key] === value);
      // Si se encuentra el elemento se ejecuta onSuccess, si no, se ejecuta onError
      element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' });
    }, 2000);
  };
  
// Sí la búsqueda es exitosa, se muestra el texto "user: ${name}"
const onSuccess = ({ name }) => console.log(`user: ${name}`);
// Sí la búsqueda no encuentra el elemento, se muestra el texto "ERROR: Element Not Found"
const onError = ({ msg }) => console.log(msg);

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
findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });

// Muestra por pantalla "findOne error"
console.log('findOne error');
// Se llama a la función introduciendo como key el nombre del usuario y como valor "Fermin"
// Esto dará error ya que Fermin no es un user y mostrará por pantalla "ERROR: Element Not Found".
findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });
  
/*
findOne success
findOne error
//wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
