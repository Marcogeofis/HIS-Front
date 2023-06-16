import React from 'react';
import Image from 'next/image';
import LogoStyles from '@/styles/LogoHIS.module.css';

function LogoHIS(){
    return (
        <section className={LogoStyles.sectionTo_login}>
            <figure className={LogoStyles.containerLogo}>
                <img className={LogoStyles.logoHis} src="https://i.imgur.com/EJfjLi5.png" alt="Logo_HIS" />
            </figure>
        </section>
    );
}

export { LogoHIS };