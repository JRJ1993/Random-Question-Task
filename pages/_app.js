import { evaluateTex } from 'tex-math-parser';
import { useState } from 'react';
import '../public/styles/globals.css'

import MathInput from '../components/MathInput/MathInput';
import SimultaneousEquationsSolution from '../components/SimultaneousEquationsSolution'
import SimultaneousEquationsQuestion from '../components/SimultaneousEquationsQuestion'
import calculateTotal from '../functions/calculateTotal'
import simultaneousEquationsVariables from '../assets/simultaneousEquationsVariables'
import twoRandomNumberGenerator from '../functions/twoRandomNumberGenerator'


export default function App({ }) {

    const [memory, setMemory] = useState({});
    const [solutionShown, setSolutionShown] = useState(false);

    function addToMemory(newValue) {
        setMemory((prev) => {
            return { ...prev, ...newValue }
        });
    }

    function markingFunction(userInput) {
        let inputValue;
        try {
            //the evaluateTex function takes a latex string as an input and returns the evaluation as a javascript number
            inputValue = evaluateTex(userInput).evaluated;
            answer1 = evaluateTex(memory?.mathinput1?.defaultValue).evaluated
            answer2 = evaluateTex(memory?.mathinput2?.defaultValue).evaluated
        } catch {
            return 0;
        }
        if (
            inputValue === memory?.simultaneousEquations?.answers?.x  || 
            inputValue === memory?.simultaneousEquations?.answers?.y ) 
            {
            return 1
        } else {
            return 0;
        }
    }

    if (!memory.simultaneousEquations) {
        const randomNumbers = twoRandomNumberGenerator(simultaneousEquationsVariables.length);
        const variableOne = simultaneousEquationsVariables[randomNumbers[0] - 1];
        const variableTwo = simultaneousEquationsVariables[randomNumbers[1] - 1];

        const equationOneRandomCoefficient = twoRandomNumberGenerator(10);
        const equationTwoRandomCoefficient = twoRandomNumberGenerator(10);

        const randomMultiplier = twoRandomNumberGenerator(20);

        const equationOneTotal = calculateTotal(variableOne, variableTwo, equationOneRandomCoefficient, randomMultiplier);
        const equationTwoTotal = calculateTotal(variableOne, variableTwo, equationTwoRandomCoefficient, randomMultiplier);

        const x = Math.round((variableOne.coefficient) * (randomMultiplier[0]) * 100) / 100;
        const y = Math.round((variableTwo.coefficient) * (randomMultiplier[1]) * 100) / 100;
        const variables = { variableOne, variableTwo }
        const coefficients = { equationOneRandomCoefficient, equationTwoRandomCoefficient }
        const equationTotals = { equationOneTotal, equationTwoTotal }
        const answers = { x, y }

        setMemory((prev) => {
            return { ...prev,  simultaneousEquations: { variables, coefficients, equationTotals, answers }  }
        });
    
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '800px', width: 'calc(100vw - 40px)', marginTop: '50px' }}>
                <SimultaneousEquationsQuestion
                    variableOne={memory?.simultaneousEquations?.variables?.variableOne}
                    variableTwo={memory?.simultaneousEquations?.variables?.variableTwo}
                    equationOneRandomCoefficient={memory?.simultaneousEquations?.coefficients?.equationOneRandomCoefficient}
                    equationTwoRandomCoefficient={memory?.simultaneousEquations?.coefficients?.equationTwoRandomCoefficient}
                    equationOneTotal={memory?.simultaneousEquations?.equationTotals?.equationOneTotal}
                    equationTwoTotal={memory?.simultaneousEquations?.equationTotals?.equationTwoTotal}
                />
                <br />
                <br />
                {solutionShown ? <SimultaneousEquationsSolution
                    answerOne={memory?.simultaneousEquations?.answers?.x}
                    answerTwo={memory?.simultaneousEquations?.answers?.y}
                    variableNameOne={memory?.simultaneousEquations?.variables?.variableOne?.name}
                    variableNameTwo={memory?.simultaneousEquations?.variables?.variableTwo?.name}
                    coefficientOne={memory?.simultaneousEquations?.coefficients?.equationOneRandomCoefficient}
                    coefficientTwo={memory?.simultaneousEquations?.coefficients?.equationTwoRandomCoefficient}
                    equationOneTotal={memory?.simultaneousEquations?.equationTotals?.equationOneTotal}
                    equationTwoTotal={memory?.simultaneousEquations?.equationTotals?.equationTwoTotal}
                /> : null}
                <br />
                <p>{memory?.simultaneousEquations?.variables?.variableOne.name}</p>
                <MathInput buttons={['power', 'times']} markingFunction={markingFunction} memKey='mathinput1' memory={memory} setMemory={addToMemory} placeholder={`Type the value of ${memory?.simultaneousEquations?.variables?.variableOne.name}`} />
                <br />
                <p>{memory?.simultaneousEquations?.variables?.variableTwo.name}</p>
                <MathInput buttons={['power', 'times']} markingFunction={markingFunction} memKey='mathinput2' memory={memory} setMemory={addToMemory} placeholder={`Type the value of ${memory?.simultaneousEquations?.variables?.variableTwo.name}`} />
                <br />
                <br />
                <button onClick={() => { setMemory((prev) => { return { ...prev, feedbackShown: true } }) }}>Check Answer</button>
                <br />
                <br />
                {!solutionShown ? <button style={{ marginTop: '20px' }} onClick={() => { setSolutionShown(true) }}>Show Solution</button> : ''}
                {solutionShown ? <button style={{ marginTop: '20px' }} onClick={() => { setSolutionShown(false) }}>Hide Solution</button> : ''}
            </div>
        </div>
    );
}

