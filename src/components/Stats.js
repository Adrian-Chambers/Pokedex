import React from 'react';

const Stats = ({stats}) => {
    return (
        <div className="">
            <p>HP: {stats[0].base_stat}</p>
            <p>Attack: {stats[1].base_stat}</p>
            <p>Defense: {stats[2].base_stat}</p>
            <p>Special Attack: {stats[3].base_stat}</p>
            <p>Special Defense: {stats[4].base_stat}</p>
            <p>Speed: {stats[5].base_stat}</p>
        </div>
    )
}

export default Stats;