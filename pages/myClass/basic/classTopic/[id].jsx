import React from "react"
import { VideoClass } from "@/components/VideoClass/VideoClass";
import { useRouter } from "next/router";
import classTopicStyles from '@/styles/ClassTopic.module.css'
import getBasicLevel from "@/services/userServices/getBasicLevel";
import getBasicLevelPaths from "@/services/userServices/getBasicLevelPaths";

export default function ClassTopic ({resBL}) {
    const router = useRouter();
    const { id } = router.query; 
    
    console.log(resBL)
    return (
        <section className={classTopicStyles.containerClassTopic}>
            {resBL.map(resbl => {
                return <VideoClass
                    key={resbl.id}
                    title={id}
                    context={resbl.context}
            />
            })}
        </section>
    )
}

export async function getStaticPaths() {
    const data = await getBasicLevelPaths()
    
    const paths = data.map(res => ({
        params: {
            id: res.chapter,
        }
    }))
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps ({ params }) {
    const chapter = params.id;
    try {
        const resBL = await getBasicLevel(chapter)
        return {
            props: {resBL: resBL}
        }
    } catch (error) {
        return {
            props: {}
        }
    }
}