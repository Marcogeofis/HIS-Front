import React, { useState, useContext } from "react";
import Context from "@/context/userContext";
import Link from "next/link";
import { useRouter } from "next/router";
import upLoadVocabularyService from "@/services/teacherServices/upLoadVocabulary";
import vocabularyStyles from '@/styles/UpLoadVocabulary.module.css'
import { Button } from "@/components/Button/Button";

export default function Vocabulary(){
    
    const router = useRouter()
    const {jwt} = useContext(Context);
    const [word, setWord] = useState('');
    const [wordImage, setWordImage] = useState('');
    const [wordAudio, setWordAudio] = useState('');
    const [exampleAudio, setExamAdio] = useState('');
    const [exampleWrited1, setExamWri1] = useState('');
    const [exampleWrited2, setExamWri2] = useState('');
    const [exampleWrited3, setExamWri3] = useState('');
    const [synonymous, setSyn] = useState('');
    const [antonyms, setAnto] = useState('');
    const [theoryOfWord, setTheory ] = useState('');

    const handleEnterCourse = (e) => {
        e.preventDefault()
        upLoadVocabularyService({
            word,
            wordImage,
            wordAudio,
            exampleAudio,
            exampleWrited1,
            exampleWrited2,
            exampleWrited3,
            synonymous,
            antonyms,
            theoryOfWord,
            jwt,
        });
        router.push('/DoneWell/doneWellLoadData')
    }


    return (
        <section className={vocabularyStyles.containerVocabulary}>
            <div className={vocabularyStyles.titleVocabulary}>
                <h3>Upload Vocabulary</h3>
                <Link className={vocabularyStyles.linkBack} href="/TeacherUI/teacherUI/">Back</Link>
            </div>
            <div className={vocabularyStyles.instructionsVocabulary}>
                <p className={vocabularyStyles.textVocabulary}>Upload Vocabulary and explanation.</p>
            </div>
            <form className={vocabularyStyles.formVocabulary} onSubmit={handleEnterCourse}>
                <div className={vocabularyStyles.containerInputLabel__Vocabulary}>
                    <label className={vocabularyStyles.labelVocabulary} htmlFor="word">Word:</label>
                    <input className={vocabularyStyles.inputVocabulary} onChange={(e)=>setWord(e.target.value)} id="word" text="type" value={word} />
                </div>
                <div className={vocabularyStyles.containerInputLabel__Vocabulary}>
                    <label className={vocabularyStyles.labelVocabulary} htmlFor="wordI">Word Image path:</label>
                    <input className={vocabularyStyles.inputVocabulary} onChange={(e)=>setWordImage(e.target.value)} id="wordI" text="type" value={wordImage} />
                </div>
                <div className={vocabularyStyles.containerInputLabel__Vocabulary}>
                    <label className={vocabularyStyles.labelVocabulary} htmlFor="audioW">Audio of the word:</label>
                    <input className={vocabularyStyles.inputVocabulary} onChange={(e)=>setWordAudio(e.target.value)} id="audioW" text="type" value={wordAudio} />
                </div>
                <div className={vocabularyStyles.containerInputLabel__Vocabulary}>
                    <label className={vocabularyStyles.labelVocabulary} htmlFor="audioE">Audios's Example of the word:</label>
                    <input className={vocabularyStyles.inputVocabulary} onChange={(e)=>setExamAdio(e.target.value)} id="audioE" text="type" value={exampleAudio} />
                </div>
                <div className={vocabularyStyles.containerInputLabel__Vocabulary}>
                    <label className={vocabularyStyles.labelVocabulary} htmlFor="example1">Example 1:</label>
                    <input className={vocabularyStyles.inputVocabulary} onChange={(e)=>setExamWri1(e.target.value)} id="example1" text="type" value={exampleWrited1} />
                </div>
                <div className={vocabularyStyles.containerInputLabel__Vocabulary}>
                    <label className={vocabularyStyles.labelVocabulary} htmlFor="example2">Example 2:</label>
                    <input className={vocabularyStyles.inputVocabulary} onChange={(e)=>setExamWri2(e.target.value)} id="example2" text="type" value={exampleWrited2} />
                </div>
                <div className={vocabularyStyles.containerInputLabel__Vocabulary}>
                    <label className={vocabularyStyles.labelVocabulary} htmlFor="example3">Example 3:</label>
                    <input className={vocabularyStyles.inputVocabulary} onChange={(e)=>setExamWri3(e.target.value)} id="example3" text="type" value={exampleWrited3} />
                </div>
                <div className={vocabularyStyles.containerInputLabel__Vocabulary}>
                    <label className={vocabularyStyles.labelVocabulary} htmlFor="example4">Synonymous:</label>
                    <input className={vocabularyStyles.inputVocabulary} onChange={(e)=>setSyn(e.target.value)} id="example4" text="type" value={synonymous} />
                </div>
                <div className={vocabularyStyles.containerInputLabel__Vocabulary}>
                    <label className={vocabularyStyles.labelVocabulary} htmlFor="example5">Antonyms:</label>
                    <input className={vocabularyStyles.inputVocabulary} onChange={(e)=>setAnto(e.target.value)} id="example5" text="type" value={antonyms} />
                </div>
                <div className={vocabularyStyles.containerInputLabel__Vocabulary}>
                    <label className={vocabularyStyles.labelVocabulary} htmlFor="theory">Theory of the word:</label>
                    <textarea className={vocabularyStyles.inputVocabulary} onChange={(e)=>setTheory(e.target.value)} id="theory" text="type" value={theoryOfWord} />
                </div>
                <Button nameButton="Enter" />
            </form>
        </section>
    );
}
