import React from 'react';

const Types = ({types}) => {
    var str = '';
    for(var i = 0; i < types.length; i++){
        str += types[i].type.name;
        if(types.length > 1 && i === 0) str += " / "
    }
    return <p><strong>Types: </strong>{str}</p>
}

export default Types;