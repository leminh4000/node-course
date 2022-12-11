const calculateTip= (total, percentage=.1) => total + total*percentage

const fahrenheitToCelsius = (temp) => {
    return (temp - 32) / 1.8
}

const celsiusToFahrenheit = (temp) => {
    return (temp * 1.8) + 32
}

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        if (b<0) return reject("b must be positive")
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

module.exports={calculateTip, fahrenheitToCelsius, celsiusToFahrenheit, add}