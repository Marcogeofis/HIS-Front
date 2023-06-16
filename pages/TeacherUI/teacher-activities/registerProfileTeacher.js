import React, { useState, useContext } from "react";
import Link from "next/link";
import Context from "@/context/userContext";
import registerTeacherStyles from '@/styles/RegisterTeacher.module.css';
import upLoadTeacherData from '@/services/teacherServices/upLoadTeacherData'
import { Button } from '@/components/Button/Button';

// NOTA IMPORTANTE
// me falta conectar el usecontext y mandar los datos a la api 
export default function RegisterTeacher(){

    const {jwt} = useContext(Context);
    const [ name, setName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ classes, setClasses] = useState('');
    const [ start, setStart ] = useState('');
    const [ end, setEnd ] = useState('');
    const clases = Number(classes);
    
    const handleEnterCourse = (e) => {
        upLoadTeacherData({ name, lastName, email, clases, start, end, jwt });
    }


    return (
        <section className={registerTeacherStyles.containerRegisterTeacher}>
            <div className={registerTeacherStyles.containerTitleRT}>
                <h3>Upload Teacher</h3>
                <Link className={registerTeacherStyles.linkBack} href="/TeacherUI/teacherUI/">Back</Link>
            </div>
            <div className={registerTeacherStyles.containerInstructionsRT}>
                <p className={registerTeacherStyles.textRT}>Please register your information.</p>
            </div>
            <form className={registerTeacherStyles.containerForm_RT} onSubmit={handleEnterCourse}>
                <div className={registerTeacherStyles.containerLabelInput}>
                    <label className={registerTeacherStyles.labelRegisterTeacher} htmlFor="name">Name:</label>
                    <input className={registerTeacherStyles.inputRegisterTeacher} onChange={(e)=>setName(e.target.value)} id="name" text="type" value={name} />
                </div>
                <div className={registerTeacherStyles.containerLabelInput}>
                    <label className={registerTeacherStyles.labelRegisterTeacher} htmlFor="lastname">Last Name:</label>
                    <input className={registerTeacherStyles.inputRegisterTeacher} onChange={(e)=>setLastName(e.target.value)} id="lastname" text="type" value={lastName} />
                </div>
                <div className={registerTeacherStyles.containerLabelInput}>
                    <label className={registerTeacherStyles.labelRegisterTeacher} htmlFor="email">Email:</label>
                    <input className={registerTeacherStyles.inputRegisterTeacher} onChange={(e)=>setEmail(e.target.value)} id="email" text="type" value={email} />
                </div>
                <div className={registerTeacherStyles.containerLabelInput}>
                    <label className={registerTeacherStyles.labelRegisterTeacher} htmlFor="classes">No. classes:</label>
                    <input className={registerTeacherStyles.inputRegisterTeacher} onChange={(e)=>setClasses(e.target.value)} id="classes" text="type" value={classes} />
                </div>
                <div className={registerTeacherStyles.containerLabelInput}>
                    <label className={registerTeacherStyles.labelRegisterTeacher} htmlFor="start">Start:</label>
                    <input className={registerTeacherStyles.inputRegisterTeacher} onChange={(e)=>setStart(e.target.value)} id="start" text="type" value={start} />
                </div>
                <div className={registerTeacherStyles.containerLabelInput}>
                    <label className={registerTeacherStyles.labelRegisterTeacher} htmlFor="end">End:</label>
                    <input className={registerTeacherStyles.inputRegisterTeacher} onChange={(e)=>setEnd(e.target.value)} id="end" text="type" value={end} />
                </div>
                <Button nameButton="Register data"/>
            </form>
        </section>
    );
}