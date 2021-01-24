import React from 'react';

const Abilities = ({abilities}) => {
    return(
        abilities.map(i => 
            <p>{i.ability.name}</p>
        )
    )
}

export default Abilities;