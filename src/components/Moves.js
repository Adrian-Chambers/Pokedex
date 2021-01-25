import React from 'react';
import './Components.css'

const Moves = ({moves}) => {
    return(
        <div className="container">
            <p><strong>Moves:</strong></p>
            <div className="flex flex-wrap scroll-moves">
                {moves.map(i => 
                    <p className="w-25">{i.move.name}</p>
                )}
            </div>
        </div>
    )
}

export default Moves;