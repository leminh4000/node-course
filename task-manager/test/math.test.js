const {calculateTip, fahrenheitToCelsius, celsiusToFahrenheit, add} = require('../src/math');

test('Should calculate total with tip', ()=>{
    const total= calculateTip(10,.2)
    expect(total).toBe(12)
})

test('Should calculate total with default tip', ()=>{
    const total= calculateTip(10)
    expect(total).toBe(11)
})

test('Should convert 32 F to 0 C', ()=>{
    const celsius= fahrenheitToCelsius(32)
    expect(celsius).toBe(0)
})

test('Should convert 0 C to 32 F', ()=>{
    const celsius= celsiusToFahrenheit(0)
    expect(celsius).toBe(32)
})

// test('Async test demo', (done)=>{
//     setTimeout(()=>{
//         expect(1).toBe(1);
//         done()
//     }, 2000)
// })

test('Should add two number promise', (done)=>{
    add(1,2).then(sum=>{
        expect(sum).toBe(3);
        done()
    })
})

test('Should add two number promise Async/await', async () => {
    const sum = await add(1, 2)
    expect(sum).toBe(3)
})
