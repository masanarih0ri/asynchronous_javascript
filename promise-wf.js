function asyncFunc () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ age: 34 })
    }, 1000)
  })
}

asyncFunc().then((value) => {
  console.log(value)
}).catch((error) => {
  console.error(error)
})
