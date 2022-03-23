import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = () => {
        const newStepCount = steps + 1;
        setSteps(newStepCount);
        console.log(steps);
    }

    useEffect(() => {
        console.log(steps);
    }, [steps]);
    return (
        <div style={{
            border: '2px solid red',
            backgroundColor: 'aqua',
            margin: '5px'
        }}>
            <h2>I must work Hard</h2>
            <p>Count : {steps} </p>
            <button onClick={increaseSteps}> De Dour .....</button>
            <Display stepsCount={steps}></Display>
        </div>
    );
};

export default Watch;