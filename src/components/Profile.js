import React from 'react';

const Profile = ({pokemon}) => {
    const {name, id, height, weight, sprites} = pokemon;
    return(
        <>
            <h1>{name}</h1>
            <p>(#{id})</p>
            <img src={sprites.front_default} />
            <p>height: {height}</p>
            <p>weight: {weight}</p>
        </>
    )
}

export default Profile;