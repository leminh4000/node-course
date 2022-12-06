const add = (a, b) => {
    return new Promise((resolve, reject) => {
        if (b<0) return reject("b must be positive")
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}
const doWork = async () => {
   const sum= await add(1,3)
   const sum2= await add(sum,30)
   const sum3= await add(sum2,-300)
   return sum3
}

doWork().then((result) => {
    console.log(result)
}).catch((err) => console.log(err))