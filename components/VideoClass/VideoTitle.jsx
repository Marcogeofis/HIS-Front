import React from "react";
import Link from "next/link";
import TitleVideoStyles from '@/styles/TitleVideo.module.css'

function TitleVideo ( props ) {
    return (
        <ul className={TitleVideoStyles.navclasses}>
            <Link className={TitleVideoStyles.directioOfClass} href={`/myClass/basic/classTopic/${props.title}`}>
                <li className={TitleVideoStyles.listName}>{props.title}</li>
            </Link>
        </ul>
    )
}

export {TitleVideo}