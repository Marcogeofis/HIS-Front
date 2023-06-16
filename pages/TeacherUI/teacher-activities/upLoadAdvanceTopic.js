import React, { useState, useContext } from "react";
import Link from "next/link";
import Context from "@/context/userContext";
import upLoadFileAdvanceTopic from "@/services/teacherServices/upLoadAdvanceTopic";
import { Button } from "@/components/Button/Button";
import advanceTopicStyles from '@/styles/UpLoadAdvanceTopic.module.css'
import { useRouter } from "next/router";

export default function UpLoadAdvanceTopic(){

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



    const handleEnterCourse = (e) => {
        e.preventDefault()
        upLoadFileAdvanceTopic({
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
        <section className={advanceTopicStyles.containerAdvanceTopic}>
            <div className={advanceTopicStyles.titleAdvanceTopic}>
                <h3>Upload Advance Topic</h3>
                <Link className={advanceTopicStyles.linkBack} href="/TeacherUI/teacherUI/">Back</Link>
            </div>
            <div className={advanceTopicStyles.instructionsAdvanceTopic}>
                <p className={advanceTopicStyles.textAdvanceTopic}>This part you can upload Chapters, please fill all the fields.</p>
            </div>
            <form className={advanceTopicStyles.formAdvanceTopic} onSubmit={handleEnterCourse}>
                <div className={advanceTopicStyles.containerInputLabel__AdvanceTopic}>
                    <label className={advanceTopicStyles.labelAdvanceTopic} htmlFor="course">Course:</label>
                    <input className={advanceTopicStyles.inputAdvanceTopic} onChange={(e)=>setCourse(e.target.value)} id="course" text="type" value={course} />
                </div>
                <div className={advanceTopicStyles.containerInputLabel__AdvanceTopic}>
                    <label className={advanceTopicStyles.labelAdvanceTopic} htmlFor="section">Section:</label>
                    <input className={advanceTopicStyles.inputAdvanceTopic} onChange={(e)=>setSection(e.target.value)} id="section" text="type" value={section} />
                </div>
                <div className={advanceTopicStyles.containerInputLabel__AdvanceTopic}>
                    <label className={advanceTopicStyles.labelAdvanceTopic} htmlFor="chapter">Chapter:</label>
                    <input className={advanceTopicStyles.inputAdvanceTopic} onChange={(e)=>setChapter(e.target.value)} id="chapter" text="type" value={chapter} />
                </div>
                <div className={advanceTopicStyles.containerInputLabel__AdvanceTopic}>
                    <label className={advanceTopicStyles.labelAdvanceTopic} htmlFor="video-path">Video path:</label>
                    <input className={advanceTopicStyles.inputAdvanceTopic} onChange={(e)=>setVideo(e.target.value)} id="video-path" text="type" value={video} />
                </div>
                <div className={advanceTopicStyles.containerInputLabel__AdvanceTopic}>
                    <label className={advanceTopicStyles.labelAdvanceTopic} htmlFor="point1">Example1:</label>
                    <input className={advanceTopicStyles.inputAdvanceTopic} onChange={(e)=>setPoint1(e.target.value)} id="point1" text="type" value={point1} />
                </div>
                <div className={advanceTopicStyles.containerInputLabel__AdvanceTopic}>
                    <label className={advanceTopicStyles.labelAdvanceTopic} htmlFor="point2">Example2:</label>
                    <input className={advanceTopicStyles.inputAdvanceTopic} onChange={(e)=>setPoint2(e.target.value)} id="point2" text="type" value={point2} />
                </div>
                <div className={advanceTopicStyles.containerInputLabel__AdvanceTopic}>
                    <label className={advanceTopicStyles.labelAdvanceTopic} htmlFor="point3">Example3:</label>
                    <input className={advanceTopicStyles.inputAdvanceTopic} onChange={(e)=>setPoint3(e.target.value)} id="point3" text="type" value={point3} />
                </div>
                <div className={advanceTopicStyles.containerInputLabel__AdvanceTopic}>
                    <label className={advanceTopicStyles.labelAdvanceTopic} htmlFor="point4">Example4:</label>
                    <input className={advanceTopicStyles.inputAdvanceTopic} onChange={(e)=>setPoint4(e.target.value)} id="point4" text="type" value={point4} />
                </div>
                <div className={advanceTopicStyles.containerInputLabel__AdvanceTopic}>
                    <label className={advanceTopicStyles.labelAdvanceTopic} htmlFor="point5">Example5:</label>
                    <input className={advanceTopicStyles.inputAdvanceTopic} onChange={(e)=>setPoint5(e.target.value)} id="point5" text="type" value={point5} />
                </div>
                <div className={advanceTopicStyles.containerInputLabel__AdvanceTopic}>
                    <label className={advanceTopicStyles.labelAdvanceTopic} htmlFor="context">Context:</label>
                    <textarea className={advanceTopicStyles.inputAdvanceTopic} onChange={(e)=>setContext(e.target.value)} id="context" text="type" value={context} />
                </div>
                <Button nameButton="enter" />
            </form>
        </section>
    );
}