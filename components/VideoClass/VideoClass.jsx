import React from "react";
import VideoClassStyles from '@/styles/VideoClass.module.css'


function VideoClass ( props ) {
    return (
        <section className={VideoClassStyles.sectionVideo}>
            <div className={VideoClassStyles.containerVideo}>
                <h3>{props.title}</h3>
                <div>
                    <video className={VideoClassStyles.classVideo} controls>
                        <source src="https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4" type="video/webm" />
                        <source src="https://ia800201.us.archive.org/12/items/BigBuckBunny_328/BigBuckBunny_512kb.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className={VideoClassStyles.contextOfClass}>
                <p className={VideoClassStyles.textOfClass}>{props.context}</p>
            </div>
        </section>
    )
}

export {VideoClass}