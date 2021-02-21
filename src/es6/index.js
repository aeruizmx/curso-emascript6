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
