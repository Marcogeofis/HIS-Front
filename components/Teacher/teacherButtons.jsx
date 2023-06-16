import React from "react";
import Link from "next/link";
import teacherButtonsStyles from '@/styles/TeacherButtons.module.css'

export function TeacherButtons () {
    return (
        <section  className={teacherButtonsStyles.containerTeacher__buttons}>
            <div className={teacherButtonsStyles.instructionSpace__work}>
                <p className={teacherButtonsStyles.textInstruction}>Welcome Teacher.</p>
                <p className={teacherButtonsStyles.textInstruction}>Pleas fill your profile and schedule.</p>
            </div>
            <ul className={teacherButtonsStyles.containerLink}>
                <Link className={teacherButtonsStyles.linkName} href="/TeacherUI/teacher-activities/registerProfileTeacher"><li className={teacherButtonsStyles.linkDirection}>Profile</li></Link>
                <Link className={teacherButtonsStyles.linkName} href="/TeacherUI/teacher-activities/upLoadTeacherSchedule"><li className={teacherButtonsStyles.linkDirection}>Schedule</li></Link>
            </ul>
            <div className={teacherButtonsStyles.instructionSpace__work}>
                <p className={teacherButtonsStyles.textInstruction}>To see your students who are registered.</p>
            </div>
            <ul className={teacherButtonsStyles.containerLink}>
                <Link className={teacherButtonsStyles.linkName} href="/TeacherUI/teacher-activities/watchGroup"><li className={teacherButtonsStyles.linkDirection}>My group</li></Link>
                <Link className={teacherButtonsStyles.linkName} href="/TeacherUI/teacher-activities/reviewClass"><li className={teacherButtonsStyles.linkDirection}>Review class</li></Link>
            </ul>
            <div className={teacherButtonsStyles.instructionSpace__work}>
                <p className={teacherButtonsStyles.textInstruction}>If you have permission, please fill the others filds.</p>
            </div>
            <ul className={teacherButtonsStyles.containerLink}>
                <Link className={teacherButtonsStyles.linkName} href="/TeacherUI/teacher-activities/upLoadBasicTopic"><li className={teacherButtonsStyles.linkDirection}>Basic Level</li></Link>
                <Link className={teacherButtonsStyles.linkName} href="/TeacherUI/teacher-activities/upLoadVocabulary"><li className={teacherButtonsStyles.linkDirection}>Vocabulary</li></Link>
                <Link className={teacherButtonsStyles.linkName} href="/TeacherUI/teacher-activities/upLoadAudio"><li className={teacherButtonsStyles.linkDirection}>Audios</li></Link>
                <Link className={teacherButtonsStyles.linkName} href="/TeacherUI/teacher-activities/upLoadAlphaPhone"><li className={teacherButtonsStyles.linkDirection}>Sounds Al-Pho</li></Link>
                <Link className={teacherButtonsStyles.linkName} href="/TeacherUI/teacher-activities/upLoadIntermediateTopic"><li className={teacherButtonsStyles.linkDirection}>Intermediate Lavel</li></Link>
                <Link className={teacherButtonsStyles.linkName} href="/TeacherUI/teacher-activities/upLoadAdvanceTopic"><li className={teacherButtonsStyles.linkDirection}>Advance Level</li></Link>
                <Link className={teacherButtonsStyles.linkName} href="/Payments/adminRights"><li className={teacherButtonsStyles.linkDirection}>Admin. processes</li></Link>
            </ul>
        </section>
    );
}