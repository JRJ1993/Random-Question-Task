import StaticMath from '../StaticMath/StaticMath'

const SimultaneousEquationsQuestion = ({ variableOne,
    variableTwo,
    equationOneRandomCoefficient,
    equationTwoRandomCoefficient,
    equationOneTotal,
    equationTwoTotal }) => {

    return (
        <>
            <StaticMath latex={`\\text{${equationOneRandomCoefficient[0]} ${variableOne.unit ? `${variableOne.unit} of` : ''} ${variableOne.name} and ${equationOneRandomCoefficient[1]} ${variableTwo.unit ? `${variableTwo.unit} of` : ''} ${variableTwo.name} have a total cost of £${equationOneTotal}}`} />
            <StaticMath latex={`\\text{${equationTwoRandomCoefficient[0]} ${variableOne.unit ? `${variableOne.unit} of` : ''} ${variableOne.name} and ${equationTwoRandomCoefficient[1]} ${variableTwo.unit ? `${variableTwo.unit} of` : ''} ${variableTwo.name} have a total cost of £${equationTwoTotal}}`} />
        </>
    )
}

export default SimultaneousEquationsQuestion

