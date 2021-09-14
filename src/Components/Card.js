import React from 'react';

const Card = (props) => { //const Card = ({ id, name, email })
    const { id, name, email } = props; 
    return (
        <div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadows-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;