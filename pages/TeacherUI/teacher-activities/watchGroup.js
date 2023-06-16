import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/Button/Button';
import viewStudentGroupstyle from '@/styles/ViewStudentGroup.module.css';

export default function ViewStudentGroup(){
    return (
        <section className={viewStudentGroupstyle.containerVSGroup}>
            <div className={viewStudentGroupstyle.titleVSGroup}>
                <h3>Your Group</h3>
                <Link className={viewStudentGroupstyle.linkBack} href="/TeacherUI/teacherUI">Back</Link>
            </div>
            <div className={viewStudentGroupstyle.instructionsVSGroup}>
                <p className={viewStudentGroupstyle.textVSGroup}>If you want to see your group, you need to fill this field: Your teacher's Id, period and time.</p>
            </div>
            <form className={viewStudentGroupstyle.formVSGroup}>
                <div className={viewStudentGroupstyle.containerInputLabel__VSGroup}>
                    <label className={viewStudentGroupstyle.labelVSGroup} htmlFor="idteacher">Teacher's Id</label>
                    <input className={viewStudentGroupstyle.inputVSGroup} type="text" id="idteacher" />
                </div>
                <div className={viewStudentGroupstyle.containerInputLabel__VSGroup}>
                    <label className={viewStudentGroupstyle.labelVSGroup} htmlFor="period">Period</label>
                    <input className={viewStudentGroupstyle.inputVSGroup} type="text" id="period" />
                </div>
                <div className={viewStudentGroupstyle.containerInputLabel__VSGroup}>
                    <label className={viewStudentGroupstyle.labelVSGroup} htmlFor="time">Time</label>
                    <input className={viewStudentGroupstyle.inputVSGroup} type="text" id="time" />
                </div>
                <Button nameButton="Enter" />
            </form>
        </section>
    );
}

