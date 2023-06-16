import React from "react"
import Link from "next/link"
import classSelectedStyles from '@/styles/ClassSelected.module.css';
import { TitleVideo } from "@/components/VideoClass/VideoTitle";
import { useRouter } from "next/router";
import getBasicLevelSection from "@/services/userServices/getBasicLevelSection";
import getBasicLevelPaths from "@/services/userServices/getBasicLevelPaths";

export default function ClassSelected ({ resBL }) {
    const router = useRouter();
   
    const { id } = router.query; // desta forma obtengo el id de mi url en lugar de usar params

    const handleTAP = () => {
        router.push('/UserUI/user-activities/tap')
    }
    const handleVocabulary = () => {
        router.push('/UserUI/user-activities/vocabulary')
    }

    return (
        <section className={classSelectedStyles.containerClassSelected}>
            <div className={classSelectedStyles.titleClassSelected}>
                <h3>{id}</h3>
                <Link className={classSelectedStyles.linkBack} href="/UserUI/user-activities/load_my_clase">Back</Link>
            </div>
            <div className={classSelectedStyles.titleOfCLass}>
                {resBL.map(res => {
                    return <TitleVideo 
                                key={res.id}
                                title={res.chapter}
                            />
                })}
            </div>
            <div onSubmit={handleTAP} className={classSelectedStyles.helperOfClass}>
                <button onClick={handleTAP} className={classSelectedStyles.buttonToHelp}>TAP</button>
                <button onClick={handleVocabulary} className={classSelectedStyles.buttonToHelp}>Vocabulary</button>
            </div>
            <div className={classSelectedStyles.helperComponents}>
                <div className={classSelectedStyles.containerVocabulary}>
                    <h3>Vocabulary</h3>
                    <div className={classSelectedStyles.vocabularyComponent}>
                        <div className={classSelectedStyles.imageWithAudio}>
                            imagen
                        </div>
                        <div className={classSelectedStyles.imageWithAudio}>
                            imagen
                        </div>
                        <div className={classSelectedStyles.imageWithAudio}>
                            imagen
                        </div>
                        <div className={classSelectedStyles.imageWithAudio}>
                            imagen
                        </div>
                        <div className={classSelectedStyles.imageWithAudio}>
                            imagen
                        </div>
                        <div className={classSelectedStyles.imageWithAudio}>
                            imagen
                        </div>
                    </div>
                </div>
                <div className={classSelectedStyles.tapComponent}>
                    sección tap
                </div>
            </div>
        </section>
    )
}
export async function getStaticPaths() {
    const data = await getBasicLevelPaths()
    const paths = data.map(res => ({
        params: {
            id: res.section
        }
    }))
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps ({ params }) {
    const section = params.id;
    try {
        const resBL = await getBasicLevelSection(section)
        return {
            props: {resBL: resBL}
        }
    } catch (error) {
        return {
            props: {}
        }
    }
}