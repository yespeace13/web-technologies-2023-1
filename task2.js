function createCounter() {
    let counter = 0
  
    return function () {
      console.log(++counter)
    }
  }
  
  const counter1 = createCounter()
  counter1() // 2
  counter1() // 1
  
  const counter2 = createCounter()
  counter2() // 1
  counter2() // 2
  