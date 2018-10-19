// Shoutout to Maikel van Veen
export const calculateRiskAssessment = (values) => {
    if(!values) {
        // always return 0 when there are no inputNames with factors
        return 0
    }

    const totalValue = values
        // loop over obj, so it only returns the values in the array instead of obj and it's values.
        .map(obj => obj.factor)        
        // 0 is startvalue 
        .reduce((calculator, currentValue) => calculator + currentValue, 0)

    // Shoutout to Folkert-Jan, Daniel 1 and Tim for configuring the formula to JS
    return Number((1 / (1 + Math.exp(-1 * (-8.57219 + totalValue))) * 100).toFixed(2))
    
}
