import React, { useState, useContext } from "react";
import Link from "next/link";
import Context from "@/context/userContext";
import upLoadRollPlayAudio from "@/services/teacherServices/upLoadRollPlayAudio";
import { Button } from "@/components/Button/Button";
import audiosFilesStyles from '@/styles/UpLoadAudioFiles.module.css'
import { useRouter } from "next/router";

export default function UpLoadAudioFiles () {

    const router = useRouter();
    const { jwt } = useContext(Context);
    const [course, setCourse] = useState('');
    const [section, setSection] = useState('');
    const [audio1, setAudio1] = useState('');
    const [audio2, setAudio2] = useState('');
    const [audio3, setAudio3] = useState('');
    const [audio4, setAudio4] = useState('');
    const [audio5, setAudio5] = useState('');
    const [chapter, setChapter] = useState('');
    const [context, setContext] = useState('');
    const [fillAllfields, setFillAllfields] = useState(true);
    

    const handleEnterCourse = (e) => {
        e.preventDefault();
        if(
            course === "" &&
            section === "" &&
            chapter === "" &&
            audio1 === "" &&
            audio2 === "" &&
            audio3 === "" &&
            audio4 === "" &&
            audio5 === "" &&
            context === ""
        ){
            console.log("LLena todos los campos")
            setFillAllfields(false)
        } else {
            upLoadRollPlayAudio({
                course,
                section,
                chapter,
                audio1,
                audio2,
                audio3,
                audio4,
                audio5,
                context,
                jwt,
            })
            router.push('/DoneWell/doneWellLoadData')
        }
    }

    return (
        <section className={audiosFilesStyles.containerAdioFiles}>
            <div className={audiosFilesStyles.titleAdioFiles}>
                <h3>Upload Roll plays</h3>
                <Link className={audiosFilesStyles.linkBack} href="/TeacherUI/teacherUI/">Back</Link>
            </div>
            <div className={audiosFilesStyles.instructionsAdioFiles}>
                <p className={audiosFilesStyles.textAdioFile}>Upload audios Files. Each audio has a topic and explanation of the audio.</p>
            </div>
            <form className={audiosFilesStyles.formAdioFiles} onSubmit={handleEnterCourse}>
                <div className={audiosFilesStyles.containerInputLabel__AudioFiles}>
                    <label className={audiosFilesStyles.labelAudioFiles} htmlFor="course">Course:</label>
                    <input className={audiosFilesStyles.inputAudioFiles} onChange={(e)=>setCourse(e.target.value)} id="course" text="type" value={course} />
                </div>
                <div className={audiosFilesStyles.containerInputLabel__AudioFiles}>
                    <label className={audiosFilesStyles.labelAudioFiles} htmlFor="section">Section:</label>
                    <input className={audiosFilesStyles.inputAudioFiles} onChange={(e)=>setSection(e.target.value)} id="section" text="type" value={section} />
                </div>
                <div className={audiosFilesStyles.containerInputLabel__AudioFiles}>
                    <label className={audiosFilesStyles.labelAudioFiles} htmlFor="chapter">Chapter:</label>
                    <input className={audiosFilesStyles.inputAudioFiles} onChange={(e)=>setChapter(e.target.value)} id="chapter" text="type" value={chapter} />
                </div>
                <div className={audiosFilesStyles.containerInputLabel__AudioFiles}>
                    <label className={audiosFilesStyles.labelAudioFiles} htmlFor="audio1">Audio1:</label>
                    <input className={audiosFilesStyles.inputAudioFiles} onChange={(e)=>setAudio1(e.target.value)} id="audio1" text="type" value={audio1} />
                </div>
                <div className={audiosFilesStyles.containerInputLabel__AudioFiles}>
                    <label className={audiosFilesStyles.labelAudioFiles} htmlFor="audio2">Audio2:</label>
                    <input className={audiosFilesStyles.inputAudioFiles} onChange={(e)=>setAudio2(e.target.value)} id="audio2" text="type" value={audio2} />
                </div>
                <div className={audiosFilesStyles.containerInputLabel__AudioFiles}>
                    <label className={audiosFilesStyles.labelAudioFiles} htmlFor="audio3">Audio3:</label>
                    <input className={audiosFilesStyles.inputAudioFiles} onChange={(e)=>setAudio3(e.target.value)} id="audio3" text="type" value={audio3} />
                </div>
                <div className={audiosFilesStyles.containerInputLabel__AudioFiles}>
                    <label className={audiosFilesStyles.labelAudioFiles} htmlFor="audio4">Audio4:</label>
                    <input className={audiosFilesStyles.inputAudioFiles} onChange={(e)=>setAudio4(e.target.value)} id="audio4" text="type" value={audio4} />
                </div>
                <div className={audiosFilesStyles.containerInputLabel__AudioFiles}>
                    <label className={audiosFilesStyles.labelAudioFiles} htmlFor="audio5">Audio5:</label>
                    <input className={audiosFilesStyles.inputAudioFiles} onChange={(e)=>setAudio5(e.target.value)} id="audio5" text="type" value={audio5} />
                </div>
                <div className={audiosFilesStyles.containerInputLabel__AudioFiles}>
                    <label className={audiosFilesStyles.labelAudioFiles} htmlFor="context">Context:</label>
                    <textarea className={audiosFilesStyles.inputAudioFiles} onChange={(e)=>setContext(e.target.value)} id="context" text="type" value={context} />
                </div>
                <Button 
                    nameButton="Enter"
                />
            </form>
            {!fillAllfields && <span>Llena todos los campos</span>}
        </section>
    );
}

