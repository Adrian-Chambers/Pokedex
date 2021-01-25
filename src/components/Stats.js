import React from 'react';
import './Components.css'

const Stats = ({stats}) => {
    return (
        <div>
            <p><strong>HP:</strong> {stats[0].base_stat}</p>
            <p><strong>Attack:</strong> {stats[1].base_stat}</p>
            <p><strong>Defense:</strong> {stats[2].base_stat}</p>
            <p><strong>Special Attack:</strong> {stats[3].base_stat}</p>
            <p><strong>Special Defense:</strong> {stats[4].base_stat}</p>
            <p><strong>Speed:</strong> {stats[5].base_stat}</p>
        </div>
    )
}

export default Stats;