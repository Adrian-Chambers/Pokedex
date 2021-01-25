import React from 'react';
import Abilities from './components/Abilities';
import Moves from './components/Moves';
import Stats from './components/Stats';
import Types from './components/Types';

const Pokemon = ({pokemon}) => {
    if(!pokemon.id){
        return (<p className="tc">No pokemon found.</p>);
    }
    else{
        const {name, id, sprites, height, weight, types, stats, moves, abilities} = pokemon;
        return(
            <div>
                <div className="flex">
                    <h1>{name}</h1>
                    <p>(#{id})</p>
                </div>
                <div className="flex">
                    <img src={sprites.front_default} alt="sprite" />
                    <p>Height: {height}</p>
                    <p>Weight: {weight}</p>
                    <Types types={types} />
                </div>
                <Stats stats={stats} />
                <Moves moves={moves} />
                <Abilities abilities={abilities}/>
            </div>
        );
    }
}

export default Pokemon;