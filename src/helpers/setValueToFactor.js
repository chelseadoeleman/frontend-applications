export const setValueToFactor = (inputName, factor) => {
    const factors = window.factors || []

    // look factor for index or an object with inputName (like a loop)
    const factorByName = factors[factors.findIndex(factor => factor.name === inputName)]
    console.log(factorByName)
    factorByName.factor = factor
    // set value to factor
}