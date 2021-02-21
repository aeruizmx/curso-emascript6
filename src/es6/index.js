// ANTES 
function newFunction( name, age, country){
  var name = name || 'andres'
  var age = age || 33
  var country = country || 'mx'
  console.log(name, age, country)
}
//ES6
function newFunctionES6(name = 'andres', age=32, country = 'MX'){
  console.log(name, age, country)
}
newFunctionES6()
newFunctionES6('jose', 25, 'AR')

//ANTES
let hello = "Hello"
let world = "World"
let epicPhrase = hello + ' ' + world
console.log(epicPhrase)
//ES6
let epicPhrase2 = `${hello} ${world}!`
console.log(epicPhrase2)

//ANTES MUTILINEA
let lorem = "lorem assdshfsaf  fasfsafsaf  fasfsafsaf \n"
+ " otra frase epica que necesitamos"
console.log(lorem)
//ES6
let lorem2 = `OTRA FRASE EPICA QUE NECESITAMOS
aqui va otra linea de template literales`
console.log(lorem2)

//DESTRUCTURACION DE ELEMENTOS
let person = {
  'name': 'andres',
  'age': 33,
  'country': 'MX'
}
console.log(person.name, person.age, person.country)
//ES6
let {name, age, country} = person
console.log(name, age, country)

//OPERADOR DE PROPAGACION
let team1 = ['Andres','Jose','Maria']
let team2 = ['Paola','Rosa','Ramiro']
//ES6
let education = ['David', ...team1, ...team2]
console.log(education)

//ASIGNACIONES VAR Y LET
var hola = 'hola'
//ES6
{
  var globalVar = 'Global var'
}
{
  let globalLet = "Global let" 
  console.log(globalLet)
}
console.log(globalVar)
console.log(globalLet) //ReferenceError: globalLet is not defined

//CONST
const a = 'b'
a = 'c' //TypeError: Assignment to constant variable.
console.log(a)