import React from 'react';
import './Components.css'

const Types = ({types}) => {
    return(
        <div>
            <p className="di"><strong>Types: </strong></p>
            <br /><br />
            <div>
                {types.map(i => 
                    <p className={i.type.name + ' type di'}>{i.type.name}</p>
                )}
            </div>
            
        </div>
    )

    /*
    var str = '';
    for(var i = 0; i < types.length; i++){
        str += types[i].type.name;
        if(types.length > 1 && i === 0) str += " / "
    }
    return <p><strong>Types: </strong>{str}</p>
    */
}

export default Types;