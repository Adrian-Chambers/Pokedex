import React from 'react';
import Abilities from './Abilities';
import Moves from './Moves';
import Stats from './Stats';
import Types from './Types';
import './Components.css'

const Pokemon = ({pokemon}) => {
    if(!pokemon.id){
        return (<p className="tc">No pokemon found.</p>);
    }
    else{
        const {name, id, sprites, height, weight, types, stats, moves, abilities} = pokemon;
        return(
            <div>
                <div className="flex container pl2 pr2">
                    <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
                    <p>(#{id})</p>
                </div>
                <div className="flex container pa2">
                    <div className="w-25">
                        <img className="sprite" src={sprites.front_default} alt="sprite" />
                    </div>
                    <div className="w-25">
                        <p><strong>Height:</strong> {height}</p>
                        <p><strong>Weight:</strong> {weight}</p>
                        <Types types={types} />
                    </div>
                    <Stats stats={stats} />
                </div>
                <Abilities abilities={abilities}/>
                <Moves moves={moves} />
            </div>
        );
    }
}

export default Pokemon;