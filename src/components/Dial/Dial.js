import React from 'react';

const Dial = (props) => {
    console.log(props);
    return (
        <div>
            <p>Dial Count :{props.data}</p>
        </div>
    );
};

export default Dial;