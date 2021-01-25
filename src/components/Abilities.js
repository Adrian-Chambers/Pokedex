import React from 'react';

const Abilities = ({abilities}) => {
    return(
        <div className="flex flex-wrap">
            {abilities.map(i => 
                <p className="w-25">{i.ability.name}</p>
            )}
        </div>
    )
}

export default Abilities;