const obj = {
  name: 'Andres',
  age: 33,
  country: 'MX'
}
let { name, ...all } = obj
console.log(name, all)

//UNIR ELEMENTOS A UN OBJETO
const obj1 = {
  name: 'Andres',
  age: 33,
  country: 'MX'
}
const obj2 = {
  ...obj1,
  country: 'MX'
}
console.log(obj2)

//PROMISE FINALLY
const helloWorld = () =>{
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(()=> resolve('Hello world!'), 3000)
      : reject(new Error('Test error'))
  })
}
helloWorld()
  .then(resp => console.log(resp))
  .catch(err => console.error(err))
  .finally(()=> console.log('Finalizó'))

//REGEX
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20')
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year, month, day, match)