import React from 'react'
import myTeacherScheStyles from '@/styles/MyTeacherSchedule.module.css';

function MyTeacherSchedule({ id, name, lastName, email, start, end}){
    return (
        <div className={myTeacherScheStyles.containerTeacherBiography}>
            <span className={myTeacherScheStyles.teacherList__title}>Teacher</span>
            <div className={myTeacherScheStyles.teacherPhoto}>
                <figure>
                    <img className={myTeacherScheStyles.photo} src='https://i.imgur.com/iKAywhE.png' alt="teachers of HIS" />
                </figure>
                <div className={myTeacherScheStyles.containerTeacher__info}>
                    <span className={myTeacherScheStyles.AboutTeacher}>Id: {id}</span>
                    <span className={myTeacherScheStyles.AboutTeacher}>Nombre: {name}</span>
                    <span className={myTeacherScheStyles.AboutTeacher}>Apellido: {lastName}</span>
                    <span className={myTeacherScheStyles.AboutTeacher}>Correo: {email}</span>
                    <span className={myTeacherScheStyles.AboutTeacher}>Horario inicia: {start}</span>
                    <span className={myTeacherScheStyles.AboutTeacher}>Horario termina: {end}</span>
                </div>
            </div>
        </div>
    )
}

export { MyTeacherSchedule }