import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import header from '../../styles/Header.module.css'
import ModalPortal from '../Modal/modal'


function Header () {

    const [openModal, setOpenModal ] = useState(false)

    function handleMenu(){
        setOpenModal(true);
    }

    const handleModal = () =>{
        setOpenModal(false)
    }

    return (
        <nav className={header.container_barnav}>
            <picture>
                <source srcSet='https://imgur.com' type="imge/avif" />
                <source srcSet='https://imgur.com' type="imge/web" />
                <img className={header.imgHis_barnav}
                    src="https://i.imgur.com/EJfjLi5.png"
                    alt="Imágen del logo"
                />
            </picture>
            {openModal && 
                <ModalPortal onClose={handleModal}></ModalPortal>
            }
            <div className={header.container_menu}>
                <button className={header.menuButton} onClick={handleMenu}>
                    <img 
                        src="https://i.imgur.com/BA0nvre.png" 
                        alt="menu amburguesa"
                        width={25}
                        height={25}
                    />
                </button>
                <ul className={header.menuList}>
                    <li className={header.container_li}>
                        <Link className={header.liLink} href="/">
                           Inicio
                        </Link>
                    </li>
                    <li className={header.container_li}>
                        <Link className={header.liLink} href="/About/about">
                            Sobre
                        </Link>
                    </li>
                    <li className={header.container_li}>
                        <Link className={header.liLink} href="/Course/course">
                            Cursos
                        </Link>
                    </li>
                    <li className={header.container_li}>
                        <Link className={header.liLink} href="/Contact/contact">
                            Contacto
                        </Link>
                    </li>
                    <li className={header.container_li}>
                        <Link className={header.liLink} href="/Login/login">
                            Iniciar sección
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export { Header };