import Link from "next/link";
import allChaptersStyles from '@/styles/AllChapters.module.css';


export default function AllChapters () {
    return (
        <div className={allChaptersStyles.containerChapters}>
            <div className={allChaptersStyles.containerChapters__title}>
                <h3>Programa HIS</h3>
                <Link className={allChaptersStyles.linkBack} href="/UserUI/userUI">Back</Link>
            </div>
            <section className={allChaptersStyles.containerLevelCourse}>
                <h3 className={allChaptersStyles.titleLevelCourse}>Curso Básico</h3>
                <div className={allChaptersStyles.topicsOfCourses}>
                    <p className={allChaptersStyles.textTopic}>Alfabeto Fonético inglés</p>
                    <p className={allChaptersStyles.textTopic}>Presente Simple</p>
                    <p className={allChaptersStyles.textTopic}>Presente Continuo</p>
                    <p className={allChaptersStyles.textTopic}>Pasado Simple</p>
                    <p className={allChaptersStyles.textTopic}>Pasado Continuo</p>
                    <p className={allChaptersStyles.textTopic}>Futuro Simple</p>
                    <p className={allChaptersStyles.textTopic}>Futuro Progresivo</p>
                    <p className={allChaptersStyles.textTopic}>Presente Perfecto</p>
                    <p className={allChaptersStyles.textTopic}>Presente Perfecto Progresivo</p>
                    <p className={allChaptersStyles.textTopic}>Pasado Perfecto</p>
                    <p className={allChaptersStyles.textTopic}>Pasado Perfecto Progresivo</p>
                    <p className={allChaptersStyles.textTopic}>Futuro Perfecto</p>
                    <p className={allChaptersStyles.textTopic}>Futuro Perfecto Progresivo</p>
                    <p className={allChaptersStyles.textTopic}>Comprender los Frases vervales</p>
                    <p className={allChaptersStyles.textTopic}>Conversaciones Básicas</p>
                </div>
            </section>
            <section className={allChaptersStyles.containerLevelCourse}>
                <h3 className={allChaptersStyles.titleLevelCourse}>Curso Intermedio</h3>
                <div className={allChaptersStyles.topicsOfCourses}>
                        <p className={allChaptersStyles.textTopic}>Aprendizaje de escritura y lectura</p>
                        <p className={allChaptersStyles.textTopic}>Aplicar la escritura en todo los tiempos vervales</p>
                        <p className={allChaptersStyles.textTopic}>Sesiones de lectura y escritura</p>
                        <p className={allChaptersStyles.textTopic}>Compresión del Pasive voice</p>
                        <p className={allChaptersStyles.textTopic}>Conversaciones de lecturas previas</p>
                </div>
            </section>
            <section className={allChaptersStyles.containerLevelCourse}>
                <h3 className={allChaptersStyles.titleLevelCourse}>Curso Avanzado</h3>
                <div className={allChaptersStyles.topicsOfCourses}>
                        <p className={allChaptersStyles.textTopic}>Compresión de la gramática inglesa</p>
                        <p className={allChaptersStyles.textTopic}>Ejercicos de escritura Avanzada</p>
                        <p className={allChaptersStyles.textTopic}>Ejercicos de Lectura Avanzada</p>
                        <p className={allChaptersStyles.textTopic}>Preparación para entrevista de trabajo</p>
                        <p className={allChaptersStyles.textTopic}>Redacciónn de un CV</p>
                        <p className={allChaptersStyles.textTopic}>Conversaciones avanzadas</p>
                </div>
            </section>
            <section className={allChaptersStyles.containerLevelCourse}>
                <h3 className={allChaptersStyles.titleLevelCourse}>Curso Técnico para geofísicos</h3>
                <div className={allChaptersStyles.topicsOfCourses}>
                        <p className={allChaptersStyles.textTopic}>Repaso de Geología básica</p>
                        <p className={allChaptersStyles.textTopic}>Creación de modelo Geológico</p>
                </div>
            </section>
        </div>
    );
}