import React from "react"
import ReactDOM from 'react-dom';
import { useRouter } from "next/router";
import { LogoHIS } from "../LogoHIS/LogoHIS";
import ModalStyle from "@/styles/Modal.module.css"

function OpenModalMenu ({onClose}) {
    const router = useRouter();

    function handleInicio(){
        router.push('/')
        onClose()
    }
    function handleAboutUs(){
        router.push("/About/about")
        onClose()
    }
    function handleCourses(){
        router.push("/Course/course")
        onClose()
    }
    function handleContact(){
        router.push("/Contact/contact")
        onClose()
    }
    function handleLogin(){
        router.push("/Login/login")
        onClose()
    }
    function handleRegister(){
        router.push("/Register/register")
        onClose()
    }

    return (
        <div className={ModalStyle.container__modal}>
            <section className={ModalStyle.sectionMenu}>
                <div className={ModalStyle.containerButton__close}>
                    <button className={ModalStyle.buttonClose} onClick={onClose}>❌</button>
                </div>
                <LogoHIS />
                <ul className={ModalStyle.containerList__menu}>
                    <li className={ModalStyle.menuLinks} onClick={handleInicio}>
                        <span className={ModalStyle.styleLink}>
                            Inicio
                        </span>
                    </li>
                    <li className={ModalStyle.menuLinks} onClick={handleAboutUs}>
                        <span className={ModalStyle.styleLink}>
                            Nosotros
                        </span>
                    </li>
                    <li className={ModalStyle.menuLinks} onClick={handleContact}>
                        <span className={ModalStyle.styleLink}>
                            Contacto
                        </span>
                    </li>
                    <li className={ModalStyle.menuLinks} onClick={handleCourses}>
                        <span className={ModalStyle.styleLink}>
                            Cursos
                        </span>
                    </li>
                    <li className={ModalStyle.menuLinks} onClick={handleLogin}>
                        <span className={ModalStyle.styleLink}>
                            Iniciar sesión
                        </span>
                    </li>
                    <li className={ModalStyle.menuLinks} onClick={handleRegister}>
                        <span className={ModalStyle.styleLink}>
                            Registro
                        </span>
                    </li>
                </ul>
                <div className={ModalStyle.containerButton2__close}>
                    <button className={ModalStyle.buttonClose2} onClick={onClose}>Cerrar</button>
                </div>
            </section>
        </div>
    )
}

export {OpenModalMenu}

export default function ModalPortal({onClose}){
    return ReactDOM.createPortal(
        <OpenModalMenu onClose={onClose} />,
        document.getElementById('modal-root')
    )
}