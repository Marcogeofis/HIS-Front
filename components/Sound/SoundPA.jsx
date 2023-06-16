import React from 'react';
import soundStyles from '@/styles/Sound.module.css';


export function SoundAP({symbol, keysound}){


    function handleSound(){
        const sound = new Audio();
        sound.src = keysound // con esto se soluciono 'https://drive.google.com/uc?id=15OWPOQ_Ko8wsryGvqI0fNnak7PILpR7o&export=download'
        sound.play()
    }


    return (
            <div className={soundStyles.containerVowel}>
                <button className={soundStyles.vowel} onClick={handleSound}>
                    {symbol}
                </button>
            </div>
    );
}