import React from 'react'
import { LogoHIS } from '../LogoHIS/LogoHIS'
import { useRouter } from 'next/router'
import LearningProgramStyle from '@/styles/LearningProgram.module.css'

function LearningProgram () {
    const router = useRouter()

    const handleRouter = () => {
        router.push("/Register/register")
    }
    return (
        <main className={LearningProgramStyle.containerLearning__program}>
            <section className={LearningProgramStyle.containersLP}>
                <LogoHIS />
                <h2 className={LearningProgramStyle.titleHIS__LP}>Habla inglés seguro</h2>
            </section>
            <section className={LearningProgramStyle.containersLP}>
                <div className={LearningProgramStyle.titleLP}>
                    <h3>Programa de aprendizaje <strong>HIS.</strong></h3>
                </div>
                <img
                    className={LearningProgramStyle.imageTeacherClass}
                    src="https://i.imgur.com/JjV2coX.jpg"
                    alt="Teacher teaching a class"
                />
                <p className={LearningProgramStyle.textLP}>Nuestro programa consiste en generar experiencias interactivas atravez de ejercicios sencillos para practicar.</p>
                <p className={LearningProgramStyle.textLP}>Nuestro enfoque se basa en eschcuar, observar, imitar, aplicar lo aprendido y por último disfrutar la experiencia.</p>
                <p className={LearningProgramStyle.textLP}>Practica con nuestra plataforma multimedia como:</p>
            </section>
            <section className={LearningProgramStyle.containersLP}>
                <p className={LearningProgramStyle.textActvities}>Videos</p>
                <p className={LearningProgramStyle.textActvities}>Imagenes</p>
                <p className={LearningProgramStyle.textActvities}>Prácticas en vivo</p>
            </section>
            {/* <section className={LearningProgramStyle.containersLP}>
                <p className={LearningProgramStyle.textLP}>Mejora tu escritura atraves de ejercicios dinámicos como: Juego de palabras, Dictados, sopa de letras.</p>
                <p className={LearningProgramStyle.textLP}>Práctica tu lectura con nuestro club de lectura.</p>
                <p className={LearningProgramStyle.textLP}>Refuerza tu gramática llevandolo un paso más para dar una estructura y coherencia de tu comunicaión efectiva.</p>
            </section> */}
            <section className={LearningProgramStyle.containersLP}>
                <button className={LearningProgramStyle.buttonRouter} onClick={handleRouter}>
                    Registrate aquí
                </button> 
            </section>
        </main>
    )
}

export { LearningProgram }