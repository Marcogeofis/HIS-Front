import { PageLayout } from '@/components/Pagelayout/PageLayout'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'



export default function Home() {
  return (
    <PageLayout title='HIS - Inicio'>
      <main>
        <section className={styles.containerHome}>
            <div className={styles.container_titleApp}>
              <div className={styles.titleApp}>
                  <h1>Aprende inglés con nuestro programa de enseñanza personalizado, mejora tus habilidades de comunicación, escucha y escritura. <strong>Habla inglés seguro.</strong></h1>
              </div>
              <img
                className={styles.imageHome}
                src="https://i.imgur.com/6OV88v2.jpg"
                alt="Personas charlando"
              />
            </div>
            <section className={styles.introductionApp}>
                <section className={styles.sectionVideo}>
                    <h3 className={styles.titleVideo__school}>HIS video</h3>
                    <video className={styles.containerVideo} controls>
                        <source src="" type="video/mp4"/>
                    </video>
                </section>
                <ul className={styles.examplesApp}>
                    <li className={styles.textExample}>Escucha</li>
                    <li className={styles.textExample}>Observa</li>
                    <li className={styles.textExample}>Emita y practica</li>
                </ul>
            </section>
            <section className={styles.freeTest__app}>
                <article className={styles.freeTest__text}>
                    <p className={styles.testText}>Aprender inglés no es complicado, solo requieres tiempo y practica gradual</p>
                    <p className={styles.testText}>
                      Conoce nuestro programa haz <Link className={styles.linkRegister} href="/Course/course">click aquí.</Link>
                    </p>
                    <p className={styles.testText__doit}>Do it!!</p>
                </article>
            </section>
        </section>
      </main>
    </PageLayout>
  )
}
