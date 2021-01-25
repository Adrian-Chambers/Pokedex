import React from 'react';
import './Components.css';

const Moves = ({moves}) => {
    return(
        <>
        <p>Moves:</p>
        <div className="flex flex-wrap scroll-moves">
            {moves.map(i => 
                <p className="w-25">{i.move.name}</p>
            )}
        </div>
        </>
    )
}

export default Moves;