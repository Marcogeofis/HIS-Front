import React from 'react';
import startMyClaseStyles from '@/styles/StartMyClase.module.css';

function StartMyClase (props) {

    // const router = useRouter();

    // const handleAcces =() => {
    //     router.push(`/myClass/basic/${props.section}`)
    // }

    return (
        <section className={startMyClaseStyles.containerLevelCourse}>
            <button className={startMyClaseStyles.levelName} onClick={props.handleAcces}>
                <div className={startMyClaseStyles.level}>
                    {props.section}
                </div>
            </button>
        </section>
    )
}

export { StartMyClase };