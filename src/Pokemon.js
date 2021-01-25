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
                    <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
                    <p>(#{id})</p>
                </div>
                <div className="flex">
                    <div className="w-25">
                        <img className="sprite" src={sprites.front_default} alt="sprite" />
                    </div>
                    <div className="w-25">
                        <p><strong>Height:</strong> {height}</p>
                        <p><strong>Weight:</strong> {weight}</p>
                        <Types types={types} />
                    </div>
                    <Stats className="w-50" stats={stats} />
                </div>
                <Abilities abilities={abilities}/>
                <Moves moves={moves} />
            </div>
        );
    }
}

export default Pokemon;