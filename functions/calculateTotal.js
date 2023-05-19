const calculateTotal = (variableOne, variableTwo, equationRandomCoefficient, randomMultiplier) => {
    const valueOne = (variableOne.coefficient * (equationRandomCoefficient[0] + 1) * randomMultiplier[0])
    const valueTwo = (variableTwo.coefficient * (equationRandomCoefficient[1] + 1) * randomMultiplier[1])
    return valueOne + valueTwo
}

export default calculateTotal