import React, { useEffect, useState } from "react";
import Link from "next/link";
import { SoundAP } from "@/components/Sound/SoundPA";
import tapStyles from "@/styles/Tap.module.css";
import getPhoneticSound from "@/services/userServices/getPhoneticSound";

export default function TableAlphabetPhonetic ({response}) {
    
    return (
        <div className={tapStyles.containerTAP}>
            <div className={tapStyles.phoneticSoundVowels}>
                <h3 className={tapStyles.titleTAP}>Alfabeto Fonético Inglés</h3>
                <Link className={tapStyles.backHome} href="/UserUI/userUI">Back</Link>
            </div>
            <div className={tapStyles.containerAllTAP}>
                <p className={tapStyles.titlePA}>Phonetic Alphabet</p>
                <div className={tapStyles.listPA}>
                    {
                        response.map(res => {
                            // ya funciona solo que para poner el adio requerimos del cdn y poner la image o audio
                            return <SoundAP 
                                    key={res.id}
                                    symbol={res.symbol}
                                    keysound={res.audio} 
                                    />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    try {
        const response = await getPhoneticSound();
        return {
            props: {response: response}
        }
    } catch (error) {
        console.log(error)
        return {
            props: {}
        }
    }
}



