import React from 'react';
import './Components.css'

const Abilities = ({abilities}) => {
    return(
        <div className="container flex flex-wrap">
            <p className="w-25"><strong>Abilities: </strong></p>
            {abilities.map(i => 
                <p className="w-25">{i.ability.name}</p>
            )}
        </div>
    )
}

export default Abilities;