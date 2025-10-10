function imc(weight, hight) {
    const index = new Promise(((resolve, rejected) => {
        if (weight !== Number(weight) || hight !== Number(hight) || weight <= 0 || hight <= 0) {
            rejected('Weight or hight invalids.') // Reject the promise with an error message
        } else {
            const imc = weight / (hight * hight)
            resolve(imc.toFixed(2)); // Resolve the promise with the IMC value
        }
    })) 
    return index // Return the promise
}

function classifyImc(weight, hight) {
    imc(weight, hight) // Call the imc function which returns a promise
    .then((result) => {
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
    }) .catch((error) => { // Handle any errors that occurred during the IMC calculation
        console.log(error)
    }) 

    console.log('Calculating IMC...')
}

classifyImc(56, 1.64) // Example usage