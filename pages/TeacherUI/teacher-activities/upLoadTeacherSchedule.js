import React, { useState,useContext } from "react";
import Context from "@/context/userContext";
import Link from "next/link";
import { Button } from "@/components/Button/Button";
import teacherScheduleStyles from '@/styles/UpLoadTeacherSchedule.module.css'
import { useRouter } from "next/router";

export default function UpLoadTeacherSchedule(){

    const router = useRouter();
    const { jwt } = useContext(Context)
    const [ nivel, setNivel ] = useState('');
    const [ seccion, setSeccion ] = useState('');
    const [ teaId, setTeaId ] = useState('');
    const [ teacherName, setTeacherName] = useState('');
    const [ periodo, setPeriodo ] = useState('');
    const [ clasesEnVivo, setClasesEnVivo ] = useState('');
    const [ horario, setHorario ] = useState('');
    const [ dayExam, setDayExam ] = useState('');
    const [ hourExam, setHourExam ] = useState('');

    const teacherId = Number(teaId);
    //console.log(teacherId);
    const handleEnterCourse = (e) => {
        e.preventDefault();
        scheduleClass({
            nivel,
            seccion,
            teacherId,
            teacherName,
            periodo,
            clasesEnVivo,
            horario,
            dayExam,
            hourExam,
            jwt
        });
        router.push('/DoneWell/doneWellLoadData')
    }

    return (
        <section className={teacherScheduleStyles.containerTSchedule}>
            <div className={teacherScheduleStyles.titleTSchedule}>
                <h3>Upload Schedule</h3>
                <Link className={teacherScheduleStyles.linkBack} href="/TeacherUI/teacherUI/">Back</Link>
            </div>
            <div className={teacherScheduleStyles.instructionsTSchedule}>
                <p className={teacherScheduleStyles.textTSchedule}>Please register your schedule to job.</p>
            </div>
            <form className={teacherScheduleStyles.formTSchedule} onSubmit={handleEnterCourse}>
                <div className={teacherScheduleStyles.containerInputLabel__TSchedule}>
                    <label className={teacherScheduleStyles.labelTSchedule} htmlFor="nivel">Level</label>
                    <input className={teacherScheduleStyles.inputTSchedule} onChange={(e)=>setNivel(e.target.value)} id="nivel" text="type" value={nivel} />
                </div>
                <div className={teacherScheduleStyles.containerInputLabel__TSchedule}>
                    <label className={teacherScheduleStyles.labelTSchedule} htmlFor="seccion">Section</label>
                    <input className={teacherScheduleStyles.inputTSchedule} onChange={(e)=>setSeccion(e.target.value)} id="seccion" text="type" value={seccion} />
                </div>
                <div className={teacherScheduleStyles.containerInputLabel__TSchedule}>
                    <label className={teacherScheduleStyles.labelTSchedule} htmlFor="teacherId">Teacher Id</label>
                    <input className={teacherScheduleStyles.inputTSchedule} onChange={(e)=>setTeaId(e.target.value)} id="teacherId" text="type" value={teaId} />
                </div>
                <div className={teacherScheduleStyles.containerInputLabel__TSchedule}>
                    <label className={teacherScheduleStyles.labelTSchedule} htmlFor="teacherName">Teacher name</label>
                    <input className={teacherScheduleStyles.inputTSchedule} onChange={(e)=>setTeacherName(e.target.value)} id="teacherName" text="type" value={teacherName} />
                </div>
                <div className={teacherScheduleStyles.containerInputLabel__TSchedule}>
                    <label className={teacherScheduleStyles.labelTSchedule} htmlFor="period">Period</label>
                    <input className={teacherScheduleStyles.inputTSchedule} onChange={(e)=>setPeriodo(e.target.value)} id="period" text="type" value={periodo} />
                </div>
                <div className={teacherScheduleStyles.containerInputLabel__TSchedule}>
                    <label className={teacherScheduleStyles.labelTSchedule} htmlFor="clasesEnVivo">Class with teacher</label>
                    <input className={teacherScheduleStyles.inputTSchedule} onChange={(e)=>setClasesEnVivo(e.target.value)} id="clasesEnVivo" text="type" value={clasesEnVivo} />
                </div>
                <div className={teacherScheduleStyles.containerInputLabel__TSchedule}>
                    <label className={teacherScheduleStyles.labelTSchedule} htmlFor="horario">Schedule</label>
                    <input className={teacherScheduleStyles.inputTSchedule} onChange={(e)=>setHorario(e.target.value)} id="horario" text="type" value={horario} />
                </div>
                <div className={teacherScheduleStyles.containerInputLabel__TSchedule}>
                    <label className={teacherScheduleStyles.labelTSchedule} htmlFor="dayExam">Exam's day</label>
                    <input className={teacherScheduleStyles.inputTSchedule} onChange={(e)=>setDayExam(e.target.value)} id="dayExam" text="type" value={dayExam} />
                </div>
                <div className={teacherScheduleStyles.containerInputLabel__TSchedule}>
                    <label className={teacherScheduleStyles.labelTSchedule} htmlFor="hourExam">Exam's hour</label>
                    <input className={teacherScheduleStyles.inputTSchedule} onChange={(e)=>setHourExam(e.target.value)} id="hourExam" text="type" value={hourExam} />
                </div>
                <Button nameButton="Enter"/>
            </form>
        </section>
    );
}

