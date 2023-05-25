const fractionRefactor = ( numerator,denominator) => {
    let newDenominator = denominator;
    let newNumerator= numerator

    const loopLength = denominator > numerator ? denominator : numerator

    for (let index = loopLength; index >= 1; index--) {
        const denominatorInteger = denominator%index
        const numeratorInteger = numerator%index

        if(denominatorInteger ===0&&numeratorInteger===0){
            newDenominator = denominator/index
            newNumerator = numerator/index
            console.log(newDenominator,newNumerator)
            break
        }
    }

    if(newDenominator === 1) {
        return newNumerator
    }

    return `${newNumerator}/${newDenominator}`
}

export default fractionRefactor