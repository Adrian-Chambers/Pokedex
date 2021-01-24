import React from 'react';

const Moves = ({moves}) => {
    return(
        moves.map(i => 
            <p>{i.move.name}</p>
        )
    )
}

export default Moves;