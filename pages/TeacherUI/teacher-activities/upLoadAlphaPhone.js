import React, { useState, useContext } from "react";
import Context from "@/context/userContext";
import Link from "next/link";
import upLoadAPSound from "@/services/teacherServices/upLoadAPSound";
import { Button } from "@/components/Button/Button";
import alphabetPhoneticStyles from '@/styles/APSounds.module.css'
import { useRouter } from "next/router";

export default function APSounds(){

    const router = useRouter();
    const { jwt } = useContext(Context);
    const [symbol, setSymbol] = useState('');
    const [image, setImage] = useState('');
    const [audio, setAudio] = useState('');
    const [example1, setExample1] = useState('');
    const [example2, setExample2] = useState('');
    const [example3, setExample3] = useState('');
    const [example4, setExample4] = useState('');
    const [context, setContext] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleEnterCourse = (e) => {
        e.preventDefault();
        upLoadAPSound({
            symbol,
            image,
            audio,
            example1,
            example2,
            example3,
            example4,
            context,
            jwt
        })
        .then(res => {
            if(res.statusCode === 400) {
                setErrorMessage(res.message)
            } else {
                router.push('/DoneWell/doneWellLoadData')
            }
        })
    }


    return (
        <section className={alphabetPhoneticStyles.containerAP}>
        <div className={alphabetPhoneticStyles.titleAP}>
            <h3>Upload sounds PA</h3>
            <Link className={alphabetPhoneticStyles.linkBack} href="/TeacherUI/teacherUI/">Back</Link>
        </div>
        <div className={alphabetPhoneticStyles.instructionsAP}>
            <p className={alphabetPhoneticStyles.textAP}>This part you can upload Phonetic Alfabet, please fill all the fields.</p>
        </div>
        <form className={alphabetPhoneticStyles.formAP} onSubmit={handleEnterCourse}>
            <div className={alphabetPhoneticStyles.containerInputLabel__AP}>
                <label className={alphabetPhoneticStyles.labelAP} htmlFor="symbol">Symbol</label>
                <input className={alphabetPhoneticStyles.inputAP} onChange={(e)=>setSymbol(e.target.value)} id="symbol" text="type" value={symbol} />
            </div>
            <div className={alphabetPhoneticStyles.containerInputLabel__AP}>
                <label className={alphabetPhoneticStyles.labelAP} htmlFor="image">Image's symbol</label>
                <input className={alphabetPhoneticStyles.inputAP} onChange={(e)=>setImage(e.target.value)} id="image" text="type" value={image} />
            </div>
            <div className={alphabetPhoneticStyles.containerInputLabel__AP}>
                <label className={alphabetPhoneticStyles.labelAP} htmlFor="audio">Audio</label>
                <input className={alphabetPhoneticStyles.inputAP} onChange={(e)=>setAudio(e.target.value)} id="audio" text="type" value={audio} />
            </div>
            <div className={alphabetPhoneticStyles.containerInputLabel__AP}>
                <label className={alphabetPhoneticStyles.labelAP} htmlFor="example1">Example 1</label>
                <input className={alphabetPhoneticStyles.inputAP} onChange={(e)=>setExample1(e.target.value)} id="example1" text="type" value={example1} />
            </div>
            <div className={alphabetPhoneticStyles.containerInputLabel__AP}>
                <label className={alphabetPhoneticStyles.labelAP} htmlFor="example2">Example 2</label>
                <input className={alphabetPhoneticStyles.inputAP} onChange={(e)=>setExample2(e.target.value)} id="example2" text="type" value={example2} />
            </div>
            <div className={alphabetPhoneticStyles.containerInputLabel__AP}>
                <label className={alphabetPhoneticStyles.labelAP} htmlFor="example3">Example 3</label>
                <input className={alphabetPhoneticStyles.inputAP} onChange={(e)=>setExample3(e.target.value)} id="example3" text="type" value={example3} />
            </div>
            <div className={alphabetPhoneticStyles.containerInputLabel__AP}>
                <label className={alphabetPhoneticStyles.labelAP} htmlFor="example4">Example 4</label>
                <input className={alphabetPhoneticStyles.inputAP} onChange={(e)=>setExample4(e.target.value)} id="example4" text="type" value={example4} />
            </div>
            <div className={alphabetPhoneticStyles.containerInputLabel__AP}>
                <label className={alphabetPhoneticStyles.labelAP} htmlFor="context">Context:</label>
                <textarea className={alphabetPhoneticStyles.inputAP} onChange={(e)=>setContext(e.target.value)} id="context" text="type" value={context} />
            </div>
            <Button nameButton="Enter"/>
        </form>
        <div>
            {errorMessage}
        </div>
    </section>
    );
}
