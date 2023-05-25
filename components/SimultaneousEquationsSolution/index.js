import EqualXValuesSolutions from './components/EqualXValuesSolutions'
import EqualYValuesSolutions from './components/EqualYValuesSolutions'
import StandardSolutions from './components/StandardSolutions'
import fractionRefactor from '../../functions/fractionRefactor'

const SimultaneousEquationsSolution = ({ answerOne, answerTwo, variableNameOne, variableNameTwo, coefficientOne, coefficientTwo, equationOneTotal, equationTwoTotal }) => {

    const eq1Constant = fractionRefactor(equationOneTotal,coefficientOne[0])
    const eq1y = fractionRefactor(coefficientOne[1],coefficientOne[0])
    const eq2Constant = fractionRefactor(equationTwoTotal,coefficientTwo[0])
    const eq2y = fractionRefactor(coefficientTwo[1],coefficientTwo[0])

    let solution;

    if(coefficientOne[1] === coefficientTwo[1]) {
    solution = <EqualYValuesSolutions 
        coefficientOne={coefficientOne} 
        equationOneTotal={equationOneTotal} 
        coefficientTwo={coefficientTwo} 
        equationTwoTotal={equationTwoTotal}
        answerOne={answerOne}
        answerTwo={answerTwo}
        variableNameOne={variableNameOne}
        variableNameTwo={variableNameTwo}   
        />
    } else if(coefficientOne[0] === coefficientTwo[0]) {
    solution = <EqualXValuesSolutions 
        coefficientOne={coefficientOne} 
        equationOneTotal={equationOneTotal} 
        coefficientTwo={coefficientTwo} 
        equationTwoTotal={equationTwoTotal}
        answerOne={answerOne}
        answerTwo={answerTwo}
        variableNameOne={variableNameOne}
        variableNameTwo={variableNameTwo}   
        />
    } else {
    solution = <StandardSolutions 
        coefficientOne={coefficientOne} 
        equationOneTotal={equationOneTotal} 
        coefficientTwo={coefficientTwo} 
        equationTwoTotal={equationTwoTotal}
        eq1Constant={eq1Constant}
        eq1y={eq1y}
        eq2Constant={eq2Constant}
        eq2y={eq2y}
        answerOne={answerOne}
        answerTwo={answerTwo}
        variableNameOne={variableNameOne}
        variableNameTwo={variableNameTwo}
    />

    }
    console.log(solution)

    return (
        <>
        {solution}
        </>
    )
}

export default SimultaneousEquationsSolution