//APLANAR
let array = [1,2,3, [1,2,3], [1,2,3]]
console.log(array.flat(2))

let array = [1,2,3,4,5]
console.log(array.flatMap(value => [value, value * 2]))

//ELIMINAR ESPACIOS
let hello = '    hello   world   '
console.log(hello)
console.log(hello.trimStart())
console.log(hello.trimEnd())

//ERROR DIRECTO DEL CATCH
try {
  
} catch {
  error
}

let entries = [["name","oscar"], ["age", 32]]
console.log(Object.fromEntries(entries))

//SYMBOL
let mySymbol = `My symbol`
let symbol = Symbol(mySymbol)
console.log(symbol.description)