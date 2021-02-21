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

//ASYNC Y AWAIT
const helloWorld = () => {
  return new Promise((resolve, reject)=>{
    (true)
      ? setTimeout(()=>resolve('Hello world'), 3000)
      : reject(new Error('Test error'))
  })
}
const helloAsync = async() =>{
  const hello = await helloWorld()
  console.log(hello)
}

helloAsync()

const anotherFunction = async () => {
  try {
    const hello = await helloWorld()
    console.log(hello)
  } catch (error) {
    console.log(error)
  }
}