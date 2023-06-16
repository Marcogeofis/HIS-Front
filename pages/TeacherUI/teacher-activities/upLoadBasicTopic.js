import React, { useState, useContext } from "react";
import Context from "@/context/userContext";
import Link from "next/link";
import upLoadBasicTopicClass from "@/services/teacherServices/upLoadBasicTopic";
import { Button } from "@/components/Button/Button";
import basicTopicStyles from '@/styles/UpLoadBasicTopic.module.css'
import { useRouter } from "next/router";

export default function UpLoadBasicTopic(){

    const router = useRouter();
    const { jwt } = useContext(Context)
    const [ course, setCourse ] = useState('');
    const [ section, setSection ] = useState('');
    const [ chapter, setChapter ] = useState('');
    const [ video, setVideo ] = useState('');
    const [ point1, setPoint1 ] = useState('')
    const [ point2, setPoint2 ] = useState('')
    const [ point3, setPoint3 ] = useState('')
    const [ point4, setPoint4 ] = useState('')
    const [ point5, setPoint5 ] = useState('')
    const [ context, setContext ] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleEnterCourse = (e) => {
        e.preventDefault()
        upLoadBasicTopicClass({
            course,
            section,
            chapter,
            video,
            point1,
            point2,
            point3,
            point4,
            point5,
            context,
            jwt,
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
        <section className={basicTopicStyles.containerBasicTopic}>
            <div className={basicTopicStyles.titleBasicTopic}>
                <h3>Upload Chapter</h3>
                <Link className={basicTopicStyles.linkBack} href="/TeacherUI/teacherUI/">Back</Link>
            </div>
            <div className={basicTopicStyles.instructionsAdioFiles}>
                <p className={basicTopicStyles.textBasicTopic}>Upload Basic topic.</p>
            </div>
            <form className={basicTopicStyles.formBasicTopic} onSubmit={handleEnterCourse}>
                <div className={basicTopicStyles.containerInputLabel__BasicTopic}>
                    <label className={basicTopicStyles.labelBasicTopic} htmlFor="course">Course:</label>
                    <input className={basicTopicStyles.inputBasicTopic} onChange={(e)=>setCourse(e.target.value)} id="course" text="type" value={course} />
                </div>
                <div className={basicTopicStyles.containerInputLabel__BasicTopic}>
                    <label className={basicTopicStyles.labelBasicTopic} htmlFor="section">Section:</label>
                    <input className={basicTopicStyles.inputBasicTopic} onChange={(e)=>setSection(e.target.value)} id="section" text="type" value={section} />
                </div>
                <div className={basicTopicStyles.containerInputLabel__BasicTopic}>
                    <label className={basicTopicStyles.labelBasicTopic} htmlFor="chapter">Chapter:</label>
                    <input className={basicTopicStyles.inputBasicTopic} onChange={(e)=>setChapter(e.target.value)} id="chapter" text="type" value={chapter} />
                </div>
                <div className={basicTopicStyles.containerInputLabel__BasicTopic}>
                    <label className={basicTopicStyles.labelBasicTopic} htmlFor="video-path">Video path:</label>
                    <input className={basicTopicStyles.inputBasicTopic} onChange={(e)=>setVideo(e.target.value)} id="video-path" text="type" value={video} />
                </div>
                <div className={basicTopicStyles.containerInputLabel__BasicTopic}>
                    <label className={basicTopicStyles.labelBasicTopic} htmlFor="point1">Example1:</label>
                    <input className={basicTopicStyles.inputBasicTopic} onChange={(e)=>setPoint1(e.target.value)} id="point1" text="type" value={point1} />
                </div>
                <div className={basicTopicStyles.containerInputLabel__BasicTopic}>
                    <label className={basicTopicStyles.labelBasicTopic} htmlFor="point2">Example2:</label>
                    <input className={basicTopicStyles.inputBasicTopic} onChange={(e)=>setPoint2(e.target.value)} id="point2" text="type" value={point2} />
                </div>
                <div className={basicTopicStyles.containerInputLabel__BasicTopic}>
                    <label className={basicTopicStyles.labelBasicTopic} htmlFor="point3">Example3:</label>
                    <input className={basicTopicStyles.inputBasicTopic} onChange={(e)=>setPoint3(e.target.value)} id="point3" text="type" value={point3} />
                </div>
                <div className={basicTopicStyles.containerInputLabel__BasicTopic}>
                    <label className={basicTopicStyles.labelBasicTopic} htmlFor="point4">Example4:</label>
                    <input className={basicTopicStyles.inputBasicTopic} onChange={(e)=>setPoint4(e.target.value)} id="point4" text="type" value={point4} />
                </div>
                <div className={basicTopicStyles.containerInputLabel__BasicTopic}>
                    <label className={basicTopicStyles.labelBasicTopic} htmlFor="point5">Example5:</label>
                    <input className={basicTopicStyles.inputBasicTopic} onChange={(e)=>setPoint5(e.target.value)} id="point5" text="type" value={point5} />
                </div>
                <div className={basicTopicStyles.containerInputLabel__BasicTopic}>
                    <label className={basicTopicStyles.labelBasicTopic} htmlFor="context">Context:</label>
                    <textarea className={basicTopicStyles.inputBasicTopic} onChange={(e)=>setContext(e.target.value)} id="context" text="type" value={context} />
                </div>
                <Button nameButton="Enter"/>
            </form>
            <div>
                {errorMessage}
            </div>
        </section>
    );
}
