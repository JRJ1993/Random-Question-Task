import { useState } from 'react';
import { evaluateTex } from 'tex-math-parser';
import '../public/styles/globals.css'

import MathInput from '../components/MathInput/MathInput';
import SimultaneousEquationsQuestion from '../components/SimultaneousEquationsQuestion'
import StaticMath from '../components/StaticMath/StaticMath'
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

    const randomNumbers = twoRandomNumberGenerator(simultaneousEquationsVariables.length)

    const variableOne = simultaneousEquationsVariables[randomNumbers[0]]
    const variableTwo = simultaneousEquationsVariables[randomNumbers[1]]

    const equationOneRandomCoefficient = twoRandomNumberGenerator(10);
    const equationTwoRandomCoefficient = twoRandomNumberGenerator(10);

    const randomMultiplier = twoRandomNumberGenerator(10)

    const equationOneTotal = calculateTotal(variableOne, variableTwo, equationOneRandomCoefficient, randomMultiplier)
    const equationTwoTotal = calculateTotal(variableOne, variableTwo, equationTwoRandomCoefficient, randomMultiplier)

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '800px', width: 'calc(100vw - 40px)', marginTop: '50px' }}>
                <StaticMath latex={`\\text{The <StaticMath /> component can be used to write text inline with latex equations: } x^2 + 3x - 2`} />
                <SimultaneousEquationsQuestion
                    variableOne={variableOne}
                    variableTwo={variableTwo}
                    equationOneRandomCoefficient={equationOneRandomCoefficient}
                    equationTwoRandomCoefficient={equationTwoRandomCoefficient}
                    equationOneTotal={equationOneTotal}
                    equationTwoTotal={equationTwoTotal}
                />
                <br />
                <br />
                {solutionShown ? <StaticMath latex={`\\text{Display the solution here}`} /> : ''}
                <br />
                <br />
                <MathInput buttons={['power', 'times']} markingFunction={markingFunction} memKey='mathinput1' memory={memory} setMemory={addToMemory} placeholder="Type your answer here!" />
                <br />
                <br />
                <button onClick={() => { setMemory((prev) => { return { ...prev, feedbackShown: true } }) }}>Check Answer</button>
                <br />
                {!solutionShown ? <button style={{ marginTop: '20px' }} onClick={() => { setSolutionShown(true) }}>Show Solution</button> : ''}
                {solutionShown ? <button style={{ marginTop: '20px' }} onClick={() => { setSolutionShown(false) }}>Hide Solution</button> : ''}
            </div>
        </div>
    );
}

function markingFunction(userInput) {
    let inputValue;
    try {
        //the evaluateTex function takes a latex string as an input and returns the evaluation as a javascript number
        inputValue = evaluateTex(userInput).evaluated;
    } catch {
        return 0;
    }
    if (inputValue === 5) {
        return 1
    } else {
        return 0;
    }
}