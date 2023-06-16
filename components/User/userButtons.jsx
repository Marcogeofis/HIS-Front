import React from 'react'
import Link from 'next/link';
import userButtonsStyles from '@/styles/UserButtons.module.css'

function InterfaceUser(){
    return (
        <div className={userButtonsStyles.containerInterface__user}>
            <div className={userButtonsStyles.containerStartClass}>
                <Link href="/UserUI/user-activities/load_my_clase" className={userButtonsStyles.linkStartClass}>Iniciar clase</Link>
            </div>
            <div className={userButtonsStyles.containerButtons__App}>
                <Link className={userButtonsStyles.linkItemOptions} href="/UserUI/user-activities/chapters">Contenido</Link>
                <Link className={userButtonsStyles.linkItemOptions} href="/UserUI/user-activities/teacher">Teachers</Link>
                <Link className={userButtonsStyles.linkItemOptions} href="/UserUI/user-activities/schedule">Agenda</Link>
                <Link className={userButtonsStyles.linkItemOptions} href="/UserUI/user-activities/tap">TAP</Link>
                <Link className={userButtonsStyles.linkItemOptions} href="/UserUI/user-activities/chose_class">SELEC</Link>
                <Link className={userButtonsStyles.linkItemOptions} href="#">MiP</Link>
            </div>
        </div>
    );
}
export { InterfaceUser };