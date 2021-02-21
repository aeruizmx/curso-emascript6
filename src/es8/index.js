//OBJECT ENTRIES
const data = {
  fronted: 'Andres',
  bancked: 'Isabel',
  design: 'Ana'
}

const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

//OBJECT VALUES
const data = {
  fronted: 'Andres',
  bancked: 'Isabel',
  design: 'Ana'
}
const values = Object.values(data)
console.log(values)
console.log(values.length)

//TRANSFORMACIONES
const string = 'hello'
console.log(string.padStart(70,'hi'))
console.log(string.padEnd(123,'-'))
console.log('food'.padEnd(12, ' _'))
