export const calculateRiskAssessment = (values) => {
    if(!values) {
        return 0
    }
    // console.log(values)

    const totalValue = values
    // const map = values.map(obj => obj.factor)
    // const reduce = values.reduce((calculator, currentValue) => calculator + currentValue, 0)
        // loop over obj, so it only returns the values in the array instead of obj and it's values.
        .map(obj => obj.factor)
        
        // 0 is startvalue
        .reduce((calculator, currentValue) => calculator + currentValue, 0)

    // console.log(totalValue)
    // console.log(map)

    return Number((1 / (1 + Math.exp(-1 * (-8.57219 + totalValue))) * 100).toFixed(2))
    
}
