import React from 'react';
import './Components.css'

const Moves = ({moves}) => {
    return(
        <div className="container pl2">
            <p><strong>Moves:</strong></p>
            <div className="flex flex-wrap scroll-moves pr2">
                {moves.map(i => 
                    <p className="w-25">{i.move.name}</p>
                )}
            </div>
        </div>
    )
}

export default Moves;