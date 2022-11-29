const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}


const addAsync = async (a, b) => {
    if (a < 0 || b < 0) throw new Error('a and b must be positive')
    const sum = await add(a, b);
    return sum;

}

// add(-2, 3).then(result => {
//     console.log(result);
//     add(result, 5)
//     .then((sum2)=>{
//         console.log(sum2)
//      })
//     .catch((err) => {})
// }).catch(err => console.log(err))

addAsync(2, 3).then(result => {
    console.log(result);
    return addAsync(result, -5)
}).then(result => {
    console.log(result)
}).catch(err => {
        console.log(err)
    })
