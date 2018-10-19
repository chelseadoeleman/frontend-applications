// Shoutout to Maikel van Veen
// overwrite factors in localStorage with the value of the factors
// i.e. ("support, 0.234394")
export const setValueToFactor = (inputName, factor) => {
    const factors = window.factors || []

    // look in factors for factor index or an object with inputName (like a loop)
    const factorByName = factors[factors.findIndex(factor => factor.name === inputName)]
    factorByName.factor = factor
    // set value to factor
}