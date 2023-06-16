import React, { useEffect, useState } from "react";
import Link from "next/link";
import { StartMyClase } from "@/components/User/startMyclase";
import { LogoHIS } from "@/components/LogoHIS/LogoHIS"; 
import useHisUser from "@/hook/useHIS";
import loadMyClaseStyles from '@/styles/LoadMyClase.module.css';
import getAccesStudentCourse from "@/services/userServices/getAccesStudentCourse";
import { useRouter } from "next/router";

export default function LoadMyClase () {

    const router = useRouter()
    const {userHis} = useHisUser()
    const section = "Section A1"

    const student = userHis
    const handleAcces = () => {
        getAccesStudentCourse(student, section)
        .then(uA => uA.map(rs => {
                    const course = rs.curso
                    const status = rs.status
                    const blocke = rs.blocke
                    console.log(course, blocke, status)
            if (blocke === section & status === 'pagado' ){
                router.push(`/myClass/basic/${section}`)
            } else {
                console.log('No tienes acceso')
            }
        }))
    }

    return (
        <section className={loadMyClaseStyles.containerMy_clases}>
            <div className={loadMyClaseStyles.sectionTitle_myClases}>
                <LogoHIS />
                <h3 className={loadMyClaseStyles.titlePageClases}>Cursos de HIS</h3>
                <Link className={loadMyClaseStyles.linkBack__user} href="/UserUI/userUI">Back</Link>
            </div>
            <div className={loadMyClaseStyles.sectionMyclase_info}>
                <h3 className={loadMyClaseStyles.titleInfo}>Mi clase</h3>
                <p className={loadMyClaseStyles.textMyClases}>Seleciona el apartado en el que estas estudiando.</p>
            </div>
            <div className={loadMyClaseStyles.sectionLevel_clases}>
                <h3>Basic Level</h3>
                <div className={loadMyClaseStyles.wrapLevel_clases}>
                <StartMyClase
                        section="Section A1"
                        handleAcces={handleAcces}
                    />
                    {/* <StartMyClase
                        section="Section A2"
                    />
                    <StartMyClase
                        section="Section A3"
                    />
                    <StartMyClase
                        section="Section A4"
                    />
                    <StartMyClase
                        section="Section A5"
                    />
                    <StartMyClase
                        section="Section A6"
                    />
                    <StartMyClase
                        section="Section A7"
                    />
                    <StartMyClase
                        section="Section A8"
                    />
                    <StartMyClase
                        section="Section A9"
                    />
                    <StartMyClase
                        section="Section A10"
                    />
                    <StartMyClase
                        section="Section A11"
                    />
                    <StartMyClase
                        section="Section A12"
                        hola mundo
                        git status
                    /> */}
                </div>
            </div>
            <div className={loadMyClaseStyles.sectionLevel_clases}>
                <h3>Intermediate Level</h3>
                <div className={loadMyClaseStyles.wrapLevel_clases}>
                    {/* <StartMyClase
                        section="Section C1"
                    />
                    <StartMyClase
                        section="Section C2"
                    />
                    <StartMyClase
                        section="Section C3"
                    />
                    <StartMyClase
                        section="Section C4"
                    />
                    <StartMyClase
                        section="Section C5"
                    />
                    <StartMyClase
                        section="Section C6"
                    />
                    <StartMyClase
                        section="Section C7"
                    />
                    <StartMyClase
                        section="Section C8"
                    />
                    <StartMyClase
                        section="Section C9"
                    />
                    <StartMyClase
                        section="Section C10"
                    />
                    <StartMyClase
                        section="Section C11"
                    />
                    <StartMyClase
                        section="Section C12"
                    /> */}
                </div>
            </div>
            <div className={loadMyClaseStyles.sectionLevel_clases}>
                <h3>Advance Level</h3>
                <div className={loadMyClaseStyles.wrapLevel_clases}>
                {/* <StartMyClase
                        section="Section B1"
                    />
                    <StartMyClase
                        section="Section B2"
                    />
                    <StartMyClase
                        section="Section B3"
                    />
                    <StartMyClase
                        section="Section B4"
                    />
                    <StartMyClase
                        section="Section B5"
                    />
                    <StartMyClase
                        section="Section B6"
                    />
                    <StartMyClase
                        section="Section B7"
                    />
                    <StartMyClase
                        section="Section B8"
                    />
                    <StartMyClase
                        section="Section B9"
                    />
                    <StartMyClase
                        section="Section B10"
                    />
                    <StartMyClase
                        section="Section B11"
                    />
                    <StartMyClase
                        section="Section B12"
                    /> */}
                </div>
            </div>
        </section>
    )
}

