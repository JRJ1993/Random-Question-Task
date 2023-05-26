import StaticMath from '../../../StaticMath/StaticMath'

const EqualXValuesSolutions = ({
    coefficientOne,
    equationOneTotal,
    coefficientTwo,
    equationTwoTotal,
    answerOne,
    answerTwo,
    variableNameOne,
    variableNameTwo}) => {
        return (
            <>
                <StaticMath latex={`\\text{Change the variables to x and y}`}/>
                <br />
                <StaticMath latex={`\\text{${coefficientOne[0]}x + ${coefficientOne[1]}y = ${equationOneTotal}}`} />
                <StaticMath latex={`\\text{${coefficientTwo[0]}x + ${coefficientTwo[1]}y = ${equationTwoTotal}}`} />
                <br />
                <StaticMath latex={`\\text{As the y value is the same we can rearrange the equations to equal the x values}`} />
                <br />
                <StaticMath latex={`\\text{${coefficientOne[0]}x =  ${equationOneTotal} - ${coefficientOne[1]}y}`} />
                <StaticMath latex={`\\text{${coefficientTwo[0]}x =  ${equationTwoTotal} - ${coefficientTwo[1]}y}`} />
                <br />
                <StaticMath latex={`\\text{make the two equations equal to each other}`}/>
                <StaticMath latex={`\\text{${equationOneTotal} - ${coefficientOne[1]}y = ${equationTwoTotal} - ${coefficientTwo[1]}y}`} />
                <br />
                <StaticMath latex={`\\text{rearrange the equation to find the y variable}`} />
                <StaticMath latex={`\\text{${-(coefficientOne[1]) + (coefficientTwo[1])}x = ${(equationTwoTotal) - (equationOneTotal)}}`} />
                <StaticMath latex={`\\text{y= ${answerTwo}}`} />
                <br />
                <StaticMath latex={`\\text{add this variable back into the first equation}`} />
                <StaticMath latex={`\\text{${coefficientOne[0]}x + (${coefficientOne[1]} * ${answerTwo}) = ${equationOneTotal}}`} />
                <StaticMath latex={`\\text{${coefficientOne[0]}x + ${coefficientOne[1] * answerTwo} = ${equationOneTotal}}`} />
                <StaticMath latex={`\\text{${coefficientOne[0]}x = ${equationOneTotal - (coefficientOne[1] * answerTwo)}}`} />
                <StaticMath latex={`\\text{x = ${answerOne}}`} />
                <br />
                <StaticMath latex={`\\text{the final answer is:}`} />
                <StaticMath latex={`\\text{${variableNameOne} = ${answerOne} and ${variableNameTwo} = ${answerTwo}}`} />
            </>
        )
}

export default EqualXValuesSolutions