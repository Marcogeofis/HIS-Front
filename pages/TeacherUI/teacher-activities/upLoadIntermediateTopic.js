import React, { useState, useContext } from "react";
import Context from "@/context/userContext";
import Link from "next/link";
import upLoadIntermediateTopicClass from "@/services/teacherServices/upLoadIntermediateTopic";
import { Button } from "@/components/Button/Button";
import intermediateTopicStyles from '@/styles/UpLoadIntermediateTopic.module.css'
import { useRouter } from "next/router";

export default function UpLoadIntermediateTopic(){

    const router = useRouter();
    const { jwt } = useContext(Context);
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



    const handleEnterCourse = (e) => {
        e.preventDefault()
        upLoadIntermediateTopicClass({
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
        });
        router.push('/DoneWell/doneWellLoadData')
    }


    return (
        <section className={intermediateTopicStyles.containerItermediateTopic}>
            <div className={intermediateTopicStyles.titleItermediateTopic}>
                <h3>Upload Chapter</h3>
                <Link className={intermediateTopicStyles.linkBack} href="/TeacherUI/teacherUI/">Back</Link>
            </div>
            <div className={intermediateTopicStyles.instructionsItermediateTopic}>
                <p className={intermediateTopicStyles.textItermediateTopic}>This part you can upload Chapters, please fill all the fields.</p>
            </div>
            <form className={intermediateTopicStyles.formItermediateTopic} onSubmit={handleEnterCourse}>
                <div className={intermediateTopicStyles.containerInputLabel__ItermediateTopic}>
                    <label className={intermediateTopicStyles.labelItermediateTopic} htmlFor="course">Course:</label>
                    <input className={intermediateTopicStyles.inputItermediateTopic} onChange={(e)=>setCourse(e.target.value)} id="course" text="type" value={course} />
                </div>
                <div className={intermediateTopicStyles.containerInputLabel__ItermediateTopic}>
                    <label className={intermediateTopicStyles.labelItermediateTopic} htmlFor="section">Section:</label>
                    <input className={intermediateTopicStyles.inputItermediateTopic} onChange={(e)=>setSection(e.target.value)} id="section" text="type" value={section} />
                </div>
                <div className={intermediateTopicStyles.containerInputLabel__ItermediateTopic}>
                    <label className={intermediateTopicStyles.labelItermediateTopic} htmlFor="chapter">Chapter:</label>
                    <input className={intermediateTopicStyles.inputItermediateTopic} onChange={(e)=>setChapter(e.target.value)} id="chapter" text="type" value={chapter} />
                </div>
                <div className={intermediateTopicStyles.containerInputLabel__ItermediateTopic}>
                    <label className={intermediateTopicStyles.labelItermediateTopic} htmlFor="video-path">Video path:</label>
                    <input className={intermediateTopicStyles.inputItermediateTopic} onChange={(e)=>setVideo(e.target.value)} id="video-path" text="type" value={video} />
                </div>
                <div className={intermediateTopicStyles.containerInputLabel__ItermediateTopic}>
                    <label className={intermediateTopicStyles.labelItermediateTopic} htmlFor="point1">Example1:</label>
                    <input className={intermediateTopicStyles.inputItermediateTopic} onChange={(e)=>setPoint1(e.target.value)} id="point1" text="type" value={point1} />
                </div>
                <div className={intermediateTopicStyles.containerInputLabel__ItermediateTopic}>
                    <label className={intermediateTopicStyles.labelItermediateTopic} htmlFor="point2">Example2:</label>
                    <input className={intermediateTopicStyles.inputItermediateTopic} onChange={(e)=>setPoint2(e.target.value)} id="point2" text="type" value={point2} />
                </div>
                <div className={intermediateTopicStyles.containerInputLabel__ItermediateTopic}>
                    <label className={intermediateTopicStyles.labelItermediateTopic} htmlFor="point3">Example3:</label>
                    <input className={intermediateTopicStyles.inputItermediateTopic} onChange={(e)=>setPoint3(e.target.value)} id="point3" text="type" value={point3} />
                </div>
                <div className={intermediateTopicStyles.containerInputLabel__ItermediateTopic}>
                    <label className={intermediateTopicStyles.labelItermediateTopic} htmlFor="point4">Example4:</label>
                    <input className={intermediateTopicStyles.inputItermediateTopic} onChange={(e)=>setPoint4(e.target.value)} id="point4" text="type" value={point4} />
                </div>
                <div className={intermediateTopicStyles.containerInputLabel__ItermediateTopic}>
                    <label className={intermediateTopicStyles.labelItermediateTopic} htmlFor="point5">Example5:</label>
                    <input className={intermediateTopicStyles.inputItermediateTopic} onChange={(e)=>setPoint5(e.target.value)} id="point5" text="type" value={point5} />
                </div>
                <div className={intermediateTopicStyles.containerInputLabel__ItermediateTopic}>
                    <label className={intermediateTopicStyles.labelItermediateTopic} htmlFor="context">Context:</label>
                    <textarea className={intermediateTopicStyles.inputItermediateTopic} onChange={(e)=>setContext(e.target.value)} id="context" text="type" value={context} />
                </div>
                <Button nameButton="Enter" />
            </form>
        </section>
    );
}