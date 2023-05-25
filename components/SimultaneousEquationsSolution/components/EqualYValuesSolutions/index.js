import StaticMath from '../../../StaticMath/StaticMath'

const EqualYValuesSolutions = ({
    coefficientOne,
    equationOneTotal,
    coefficientTwo,
    equationTwoTotal,
    answerOne,
    answerTwo,
    variableNameOne,
    variableNameTwo}) => {
        return(
            <>
                <StaticMath latex={`\\text{Change the variables to x and y}`}/>
                <br />
                <StaticMath latex={`\\text{${coefficientOne[0]}x + ${coefficientOne[1]}y = ${equationOneTotal}}`} />
                <StaticMath latex={`\\text{${coefficientTwo[0]}x + ${coefficientTwo[1]}y = ${equationTwoTotal}}`} />
                <br />
                <StaticMath latex={`\\text{As the y value is the same we can rearrange the equations to equal the y values}`} />
                <br />
                <StaticMath latex={`\\text{${coefficientOne[1]}y =  ${equationOneTotal} - ${coefficientOne[0]}x}`} />
                <StaticMath latex={`\\text{${coefficientTwo[1]}y =  ${equationTwoTotal} - ${coefficientTwo[0]}x}`} />
                <br />
                <StaticMath latex={`\\text{make the two equations equal to each other}`}/>
                <StaticMath latex={`\\text{${equationOneTotal} - ${coefficientOne[0]}x = ${equationTwoTotal} - ${coefficientTwo[0]}x}`} />
                <br />
                <StaticMath latex={`\\text{rearrange the equation to find the x variable}`} />
                <StaticMath latex={`\\text{${-(coefficientOne[0]) + (coefficientTwo[0])}y= ${(equationTwoTotal) - (equationOneTotal)}}`} />
                <StaticMath latex={`\\text{y = ${answerOne}}`} />
                <br />
                <StaticMath latex={`\\text{add this variable back into the first equation}`} />
                <StaticMath latex={`\\text{${coefficientOne[1]}x + (${coefficientOne[0]} * ${answerOne}) = ${equationOneTotal}}`} />
                <StaticMath latex={`\\text{${coefficientOne[1]}x + ${coefficientOne[0] * answerOne} = ${equationOneTotal}}`} />
                <StaticMath latex={`\\text{${coefficientOne[1]}x = ${equationOneTotal - (coefficientOne[0] * answerOne)}}`} />
                <StaticMath latex={`\\text{x = ${answerTwo}}`} />
                <br />
                <StaticMath latex={`\\text{the final answer is:}`} />
                <StaticMath latex={`\\text{${variableNameOne} = ${answerTwo} and ${variableNameTwo} = ${answerOne}}`} />
            </>
        )
}

export default EqualYValuesSolutions