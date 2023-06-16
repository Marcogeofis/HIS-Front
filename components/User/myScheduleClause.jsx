import React from "react";
import myScheduleClaseStyle from '@/styles/MyScheduleClase.module.css'

function MyScheduleClause (
    {
        nivel,
        seccion,
        teacherId,
        teacherName,
        periodo,
        clasesEnVivo,
        horario,
        dayExam,
        hourExam
    }){
    return (
        <div className={myScheduleClaseStyle.containerClassPeriod}>
            <div className={myScheduleClaseStyle.containerTitle__schedule}>
                <h2 className={myScheduleClaseStyle.title__schedule}>Teacher's Schedule</h2>
            </div>
            <figure className={myScheduleClaseStyle.containerPhoto__teacherClass}>
                    <img className={myScheduleClaseStyle.image__teacherClass} src="https://i.imgur.com/iKAywhE.png" alt="foto del profesor" />
            </figure>
            <p className={myScheduleClaseStyle.teacherPeriod__text}>Nivel: { nivel }</p>
            <p className={myScheduleClaseStyle.teacherPeriod__text}>Seccion: { seccion }</p>
            <p className={myScheduleClaseStyle.teacherPeriod__text}>Id del Teacher: { teacherId }</p>
            <p className={myScheduleClaseStyle.teacherPeriod__text}>Nombre del Teacher: { teacherName }</p>
            <p className={myScheduleClaseStyle.teacherPeriod__text}>Periodo: { periodo }</p>
            <p className={myScheduleClaseStyle.teacherPeriod__text}>Practicas en vivo { clasesEnVivo }</p>
            <p className={myScheduleClaseStyle.teacherPeriod__text}>Horario: { horario }</p>
            <p className={myScheduleClaseStyle.teacherPeriod__text}>Dia del examén: { dayExam }</p>
            <p className={myScheduleClaseStyle.teacherPeriod__text}>Hora del examén: { hourExam }</p>
        </div>
    );
}

export { MyScheduleClause }