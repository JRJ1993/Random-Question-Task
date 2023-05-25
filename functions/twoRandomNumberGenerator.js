const twoRandomNumberGenerator = (maxNumber) => {
    let randomNumberOne = Math.ceil(Math.random() * maxNumber)

    let randomNumberTwo = Math.ceil(Math.random() * maxNumber)

    if (randomNumberOne === randomNumberTwo) {
        return { randomNumberOne, randomNumberTwo } = twoRandomNumberGenerator(maxNumber);
    }

    return [randomNumberOne, randomNumberTwo]
}

export default twoRandomNumberGenerator