import React from 'react';

const AlphabetItem = ({letters}) => {
    console.log(letters[0].aleph)
    return (
        <div>
            {letters.map(letter => 
                <h1>{letter.letter}</h1>    
            )}
        </div>
    );
};

export default AlphabetItem;