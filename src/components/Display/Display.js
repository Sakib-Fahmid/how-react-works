import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
   
    return (
        <div style={{border: '2px solid navy', margin:'5px'}}>
           <p>Display Count :{props.stepsCount}</p> 
           <Dial data={props.stepsCount}></Dial>
        </div>
    );
};

export default Display;