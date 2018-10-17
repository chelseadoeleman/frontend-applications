export const calculateRiskAssessment = (values) => {
    if(!values) {
        return null
    }

    const totalValue = values 
        // loop over obj, so it only returns the values in the array instead of obj and it's values.
        .map(obj => obj.factor)
        // 0 is startvalue
        .reduce((calculator, currentValue) => calculator + currentValue, 0)

    return Number((1 / (1 + Math.exp(-1 * (-8.57219 + totalValue))) * 100).toFixed(2))
}