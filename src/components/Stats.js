import React from 'react';

const Stats = ({stats}) => {
    return (
        stats.map(i => 
            <p>{i.stat.name}: {i.base_stat}</p>
        )
    )
}

export default Stats;