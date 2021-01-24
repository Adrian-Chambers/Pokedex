import React from 'react';

const Types = ({types}) => {
    return(
        types.map(i => 
            <p>{i.type.name}</p>
        )
    )
}

export default Types;