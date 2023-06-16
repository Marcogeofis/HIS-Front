import React, { useState } from "react";
import choseClassStyles from '@/styles/Chose_class.module.css';
import Link from "next/link";
import { Button } from "@/components/Button/Button";


export default function ChoseClass () {
    const [ nameTeacher, setNameTeacher ] = useState('');
    const [ teacherId, setTeacherId] = useState('');
    const [ hr, setHr] = useState('');
    const [ start, setStart] = useState('');
    const [ end, setEnd] = useState('');


    return (
        <section className={choseClassStyles.containerChoseClass}>
            <div className={choseClassStyles.titleChoseClass}>
                <h3>Clase del profesor</h3>
                <Link className={choseClassStyles.linkBack} href='/UserUI/userUI'>Back</Link>
            </div>
            <div className={choseClassStyles.containerIntructions_choseClass}>
                    <p className={choseClassStyles.textChoseClass}>Ya sabes con que profesor quieres tomar la clase y revisaste si hay cupo, registra la a quí. Escribe el nombre del profesor, su id y horario.
                    </p>
            </div>
            <form className={choseClassStyles.formChoseClass} onSubmit={"#"}>
                <div className={choseClassStyles.containerfield_choseClass}>
                    <label className={choseClassStyles.labelChoseClass} htmlFor="nameTeacherBB">Nombre del profesor:</label>
                    <input className={choseClassStyles.inputChoseClass} onChange={()=>setNameTeacher} id="nameTeacherBB" text="type" value={nameTeacher} />
                </div>
                <div className={choseClassStyles.containerfield_choseClass}>
                    <label className={choseClassStyles.labelChoseClass} htmlFor="teacherId">Profesor Id:</label>
                    <input className={choseClassStyles.inputChoseClass} onChange={()=>setTeacherId} id="teacherId" text="type" value={teacherId} />
                </div>
                <div className={choseClassStyles.containerfield_choseClass}>
                    <label className={choseClassStyles.labelChoseClass} htmlFor="hr">Hr:</label>
                    <input className={choseClassStyles.inputChoseClass} onChange={()=>setHr} id="hr" text="type" value={hr} />
                </div>
                <div className={choseClassStyles.containerfield_choseClass}>
                    <label className={choseClassStyles.labelChoseClass} htmlFor="start">Inicia:</label>
                    <input className={choseClassStyles.inputChoseClass} onChange={()=>setStart} id="start" text="type" value={start} />
                </div>
                <div className={choseClassStyles.containerfield_choseClass}>
                    <label className={choseClassStyles.labelChoseClass} htmlFor="end">Termina:</label>
                    <input className={choseClassStyles.inputChoseClass} onChange={()=>setEnd} id="end" text="type" value={end} />
                </div>
                <Button nameButton="Registrar clase"/>
            </form>
        </section>
    )
}