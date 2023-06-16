import React from 'react';
import doneWellStyles from '@/styles/DoneWellLoadDataAdmin.module.css'
import Link from 'next/link';
export default function DoneWellLoadDataAdmin(){
    return(
        <section className={doneWellStyles.containerDWDAdmin}>
            <div className={doneWellStyles.messageDWDAdmin}>
                <h3>Done well!!</h3>
                <p className={doneWellStyles.textDWDAdmin}>You have successfully uploaded your data.</p>
                <Link className={doneWellStyles.linkBack} href="/TeacherUI/teacherUI">Back</Link>
            </div>
        </section>
    )
}