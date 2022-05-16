import React, {useState} from 'react';
import AlphabetItem from './alphabetItem/AlphabetItem';
import './Alphabet.css'

const Alphabet = () => {
    const [letters, setLetters] = useState([
        { aleph: 'ℵ', html: '&#8501;', letter: 'אָלֶף', translit: 'ʾ', prononc: 'алеф', number: 1 },
        { beth: 'ℶ', html: '&#8502;', letter: 'בֵּית', translit: ['b', 'ḇ'], number: 2 },
        { beth: 'ℷ', html: '&#8503;', letter: 'גִימֶל', translit: ['g', 'ḡ'], number: 3 }
    ]);

    return (
        <div>
            <AlphabetItem letters={letters}/>
        </div>
    );
};

export default Alphabet;