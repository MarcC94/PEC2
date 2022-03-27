const { mkdirSync } = require("fs");
const { prices, hours, animals } = require("./data");

function entryCalculator(entrants) {
  // Definición variables
  let priceAdult;
  let priceSenior;
  let priceChild;
  
  // Si tenemos argumentos introducidos a la función 
  if (entrants != undefined){
    // Precios entrada * tipo de entrada
    priceAdult = entrants.Adult * prices.Adult;
    priceSenior = entrants.Senior * prices.Senior;
    priceChild = entrants.Child * prices.Child;
    total = priceAdult + priceSenior + priceChild;

    // Devuelve el precio total
    return total; 
  }
  // Si no, se devuelve un 0
  else{
    return 0;
  }
}

function schedule(dayName) {
  // Definición variables
  let msgReturn;
  let Monday;
  let Tuesday;
  let Wednesday;
  let Thursday;
  let Friday;
  let Saturday;
  let Sunday;

  // Conversión hora formato 24h a a 12h con AM y PM
  hours.Tuesday.close = ((hours.Tuesday.close + 11) % 12 +1);
  hours.Wednesday.close = ((hours.Wednesday.close + 11) % 12 +1);
  hours.Thursday.close = ((hours.Thursday.close + 11) % 12 +1);
  hours.Friday.close = ((hours.Friday.close + 11) % 12 +1);
  hours.Saturday.close = ((hours.Saturday.close + 11) % 12 +1);
  hours.Sunday.close = ((hours.Sunday.close + 11) % 12 +1);

  // Devuelve el horario del día de la semana introducido en la función
  if (dayName != undefined){
    if (dayName == "Monday"){
      Monday = "CLOSED";
      msgReturn = {Monday};
    }
    else if (dayName == "Tuesday"){
      Tuesday = `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`;
      msgReturn = {Tuesday};
    }
    else if (dayName == "Wednesday"){
      Wednesday = `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`;
      msgReturn = {Wednesday};
    }
    else if (dayName == "Thursday"){
      Thursday = `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`;
      msgReturn = {Thursday};
    }
    else if (dayName == "Friday"){
      Friday = `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`;
      msgReturn = {Friday};
    }
    else if (dayName == "Saturday"){
      Saturday = `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`;
      msgReturn = {Saturday};
    }
    else{
      Sunday = `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`;
      msgReturn = {Sunday};
    }
    return msgReturn;
  }

  // Mensaje a mostrar si no se introduce ningún día de la semana en la función schedule
  else{
    Tuesday = `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`;
    Wednesday = `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`;
    Thursday = `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`;
    Friday = `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`;
    Saturday = `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`;
    Sunday = `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`;
    Monday = 'CLOSED';

    let scheduleReturn = {Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday,Monday};

    return scheduleReturn;
  }
}

function animalCount(species) {
  // Definición variables
  let msgReturn;
  let lions;
  let tigers;
  let bears;
  let penguins;
  let otters;
  let frogs;
  let snakes;
  let elephants;
  let giraffes;

  // Devuelve la cantidad del tipo de especie introducido en la función
  if (species != undefined){
    if (species == "lions"){
      msgReturn = animals[0].residents.length;
      return msgReturn;
    }
    else if (species == "tigers"){
      msgReturn = animals[1].residents.length;
      return msgReturn;
    }
    if (species == "bears"){
      msgReturn = animals[2].residents.length;
      return msgReturn;
    }
    if (species == "penguins"){
      msgReturn = animals[3].residents.length;
      return msgReturn;
    }
    if (species == "otters"){
      msgReturn = animals[4].residents.length;
      return msgReturn;
    }
    if (species == "frogs"){
      msgReturn = animals[5].residents.length;
      return msgReturn;
    }
    if (species == "snakes"){
      msgReturn = animals[6].residents.length;
      return msgReturn;
    }
    if (species == "elephants"){
      msgReturn = animals[7].residents.length;
      return msgReturn;
    }
    else{
      msgReturn = animals[8].residents.length;
      return msgReturn;
    }
  }

  // Mensaje a mostrar si no se introduce ningún animal en la función animalCount
  else{
    lions = animals[0].residents.length;
    tigers = animals[1].residents.length;
    bears = animals[2].residents.length;
    penguins = animals[3].residents.length;
    otters = animals[4].residents.length;
    frogs = animals[5].residents.length;
    snakes = animals[6].residents.length;
    elephants = animals[7].residents.length;
    giraffes = animals[8].residents.length;

    let animalsReturn = {lions,tigers,bears,penguins,otters,frogs,snakes,elephants,giraffes};

    return animalsReturn;
  }
}

function animalMap(options){
    let animalsNE = animals.filter(function(value){
      return value.location == "NE";
    });
    let animalsNW = animals.filter(function(value){
      return value.location == "NW";
    });  
    let animalsSE = animals.filter(function(value){
      return value.location == "SE";
    });
    let animalsSW = animals.filter(function(value){
      return value.location == "SW";
    });
    let NE = [animalsNE[0].name, animalsNE[1].name];
    let NW = [animalsNW[0].name, animalsNW[1].name,animalsNW[2].name];
    let SE = [animalsSE[0].name, animalsSE[1].name];
    let SW = [animalsSW[0].name, animalsSW[1].name];

    return {NE,NW,SE,SW};
}


function animalPopularity(rating) {
  let animalsPop = animals.filter(function(value){
    return value.popularity == rating;
  });
  let pop = [animalsPop.name];
  return pop;
}

function animalsByIds(ids) {
  // your code here
}

function animalByName(animalName) {
  // your code here
}

function employeesByIds(ids) {
  // your code here
}

function employeeByName(employeeName) {
  // your code here
}

function managersForEmployee(idOrName) {
  // your code here
}

function employeeCoverage(idOrName) {
  // your code here
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage
};
