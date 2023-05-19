const twoRandomNumberGenerator = (maxNumber) => {
    let randomNumberOne = Math.floor(Math.random() * maxNumber)

    let randomNumberTwo = Math.floor(Math.random() * maxNumber)

    if (randomNumberOne === randomNumberTwo) {
        console.log('here')
        return { randomNumberOne, randomNumberTwo } = twoRandomNumberGenerator(maxNumber);
    }

    return [randomNumberOne, randomNumberTwo]
}

export default twoRandomNumberGenerator