async function imc(weight, hight) {
    if (weight !== Number(weight) || hight !== Number(hight) || weight <= 0 || hight <= 0) {
        return Promise.reject('Weight or hight invalids.') // Reject the promise with an error message
    } else {
        const imc = weight / (hight * hight)
        return Promise.resolve(imc.toFixed(2)); // Resolve the promise with the IMC value
    }
}

async function classifyImc(weight, hight) {
    try {
        const result = await imc(weight, hight)

        console.log('Calculating IMC...')
        
        if (result < 18.5) {
            console.log(`Your IMC is ${result}, you are underweight.`)
        } else if (result >= 18.5 && result < 24.9) {
            console.log(`Your IMC is ${result}, you are at a normal weight.`)
        } else if (result >= 25 && result < 29.9) {
            console.log(`Your IMC is ${result}, you are overweight.`)
        } else if (result >= 30 && result < 39.9) {
            console.log(`Your IMC is ${result}, you are obese.`)
        } else {
            console.log(`Your IMC is ${result}, you are in morbid obesity.`)
        }
    } catch(error) {
        console.log(error)
    } 
}

classifyImc(56, 1.64)
classifyImc('karina', 1.80)
