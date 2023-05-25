import StaticMath from '../../../StaticMath/StaticMath'

const StandardSolutions = ({
    coefficientOne,
    equationOneTotal,
    coefficientTwo,
    equationTwoTotal,
    eq1Constant,
    eq1y,
    eq2Constant,
    eq2y,
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
            <StaticMath latex={`\\text{rearrange both equations to equal the same variable, either x or y}`}/>
            <br />
            <StaticMath latex={`\\text{x =  ${equationOneTotal}/${coefficientOne[0]} - ${coefficientOne[1]}/${coefficientOne[0]}y}`} />
            <StaticMath latex={`\\text{x =  ${equationTwoTotal}/${coefficientTwo[0]} - ${coefficientTwo[1]}/${coefficientTwo[0]}y}`} />
            <br />
            <StaticMath latex={`\\text{if possible refactor the equations to remove the fractions}`}/>
            <StaticMath latex={`\\text{x =  ${eq1Constant} - ${eq1y}y}`} />
            <StaticMath latex={`\\text{x =  ${eq2Constant} - ${eq2y}y}`} />
            <br />
            <StaticMath latex={`\\text{make the two equations equal to each other}`}/>
            <StaticMath latex={`\\text{${equationOneTotal / coefficientOne[0]} - ${eq1y}y = ${equationTwoTotal / coefficientTwo[0]} - ${eq2y}y}`} />
            <br />
            <StaticMath latex={`\\text{rearrange the equation to find the y variable}`}/>
            <StaticMath latex={`\\text{${-(coefficientOne[1] / coefficientOne[0]) + (coefficientTwo[1] / coefficientTwo[0])} y= ${(equationTwoTotal / coefficientTwo[0]) - (equationOneTotal / coefficientOne[0])}}`} />
            <StaticMath latex={`\\text{y= ${answerTwo}}`} />
            <br />
            <StaticMath latex={`\\text{add this variable back into the first equation}`}/>
            <StaticMath latex={`\\text{${coefficientOne[0]}x + (${coefficientOne[1]} * ${answerTwo}) = ${equationOneTotal}}`} />
            <StaticMath latex={`\\text{${coefficientOne[0]}x + ${coefficientOne[1] * answerTwo} = ${equationOneTotal}}`} />
            <StaticMath latex={`\\text{${coefficientOne[0]}x = ${equationOneTotal - (coefficientOne[1] * answerTwo)}}`} />
            <StaticMath latex={`\\text{x = ${answerOne}}`} />
            <br />
            <StaticMath latex={`\\text{the final answer is:}`}/>
            <StaticMath latex={`\\text{${variableNameOne} = ${answerOne} and ${variableNameTwo} = ${answerTwo}}`} />
        </>
    )
}

export default StandardSolutions