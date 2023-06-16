import React from "react";
import Link from "next/link";
import getScheduleOfTeacher from "@/services/userServices/getScheduleOfTeacher";
import { MyScheduleClause } from "@/components/User/myScheduleClause";
import scheduleOfClauseStyles from '@/styles/scheduleOfClause.module.css';


export default function ScheduleOfClause ({response}) {
    
    return (
        <div className={scheduleOfClauseStyles.containerScheduleClause}>
            <div className={scheduleOfClauseStyles.containerScheduleClause__title}>
                <h3 className={scheduleOfClauseStyles.scheduleClause__title}>Agenda de las clases.</h3>
                <Link className={scheduleOfClauseStyles.backUser} href='/UserUI/userUI'>Back</Link>
            </div>
            <div className={scheduleOfClauseStyles.containerSchedule__instruction}>
                <p className={scheduleOfClauseStyles.scheduleOfClause__text}>Revisa cuando inicia el periodo de la clase que te interesa, como también su horario y los días de las practicas en vivo.</p>
                <p className={scheduleOfClauseStyles.scheduleOfClause__text}>Registrate a la clase del profesor con su respectivo periodo y horario. No olvides que el cupo es limitado.</p>
            </div>
            <div className={scheduleOfClauseStyles.containerScheduleTeacher}>
                { response.map(res => {
                    return <MyScheduleClause
                        key = {res.id}
                        nivel = {res.nivel}
                        seccion = {res.seccion}
                        teacherId = {res.teacherId}
                        teacherName = {res.teacherName}
                        periodo = {res.periodo}
                        clasesEnVivo = {res.clasesEnVivo}
                        horario = {res.horario}
                        dayExam = {res.dayExam}
                        hourExam = {res.hourExam}
                    />
                })}
            </div>
        </div>
    );
}

export async function getStaticProps () {
    try {
        const response = await getScheduleOfTeacher();
        console.log(response)

        return {
            props: {response: response}
        }
    } catch (error) {
        return {
            props: {}
        }
    }
}