import React from 'react';
import Abilities from './components/Abilities';
import Moves from './components/Moves';
import Stats from './components/Stats';
import Types from './components/Types';
import Profile from './components/Profile';

const Pokemon = ({pokemon}) => {
    if(!pokemon.id){
        return (<p>No pokemon found.</p>);
    }
    else{
        const {types, stats, moves, abilities} = pokemon;
        return(
            <div>
                <Profile pokemon={pokemon} />
                <Types types={types} />
                <Stats stats={stats} />
                <Moves moves={moves} />
                <Abilities abilities={abilities}/>
            </div>
        );
    }
}

export default Pokemon;