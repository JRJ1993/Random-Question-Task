const calculateTotal = (variableOne, variableTwo, equationRandomCoefficient, randomMultiplier) => {
    const valueOne = Math.round(variableOne.coefficient * (equationRandomCoefficient[0]) * (randomMultiplier[0]) * 100) / 100
    const valueTwo = Math.round(variableTwo.coefficient * (equationRandomCoefficient[1]) * (randomMultiplier[1]) * 100) / 100
    return valueOne + valueTwo
}

export default calculateTotal