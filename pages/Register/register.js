import React, {useState} from 'react'
import { CiRead, CiUnread } from 'react-icons/ci' 
import { PageLayout } from '@/components/Pagelayout/PageLayout'
import { LogoHIS } from '@/components/LogoHIS/LogoHIS'
import { Button } from '@/components/Button/Button'
import { useRouter } from 'next/router'
import signupUserService from '@/services/signUpUser'
import RegisterUsersApp from '@/styles/RegisterUser.module.css'
import Link from 'next/link'


export default function RegisterUSer() {

    const router = useRouter();
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ type, setType ] = useState('password')
    const [ icon, setIcon ] = useState(true)

    function handleLogin(e){
        e.preventDefault()
        signupUserService({
                name,
                lastName,
                user:{
                    email,
                    password
                }
            });
        router.push('/Login/login')
    }

    function toShowPassword(){
        if(type === 'password'){
            setType('text')
            setIcon(false)
        } else {
            setType('password')
            setIcon(true)
        }
    }

  return (
    <PageLayout title='HIS - Register'>
            <section className={RegisterUsersApp.container__registerUser}>
                <LogoHIS />
                <p className={RegisterUsersApp.textToRegister}>Bienvenido, si ya tienes una cuenta porfavor <Link className={RegisterUsersApp.linkSingUp} href="/Login/login">inicia sesión.</Link></p>
                <form className={RegisterUsersApp.formRegister__user} onSubmit={handleLogin}>
                    <div className={RegisterUsersApp.containerInputBox__user}>
                        <label className={RegisterUsersApp.labelRegister__user} htmlFor="name-user">Nombre(s)</label>
                        <input className={RegisterUsersApp.inputRegister__user} onChange={e => setName(e.target.value)} id="name-user" text="type" value={name.toLowerCase()} />
                    </div>
                    <div className={RegisterUsersApp.containerInputBox__user}>
                        <label className={RegisterUsersApp.labelRegister__user} htmlFor="last-name">Apellidos</label>
                        <input className={RegisterUsersApp.inputRegister__user} onChange={e => setLastName(e.target.value)} id="last-name" text="type" value={lastName.toLowerCase()} />
                    </div>
                    <div className={RegisterUsersApp.containerInputBox__user}>
                        <label className={RegisterUsersApp.labelRegister__user} htmlFor="email">Email</label>
                        <input className={RegisterUsersApp.inputRegister__user} onChange={e => setEmail(e.target.value)} id="email" text="type" value={email} />
                    </div>
                    <div className={RegisterUsersApp.containerInputBox__user}>
                        <label className={RegisterUsersApp.labelRegister__user} htmlFor="password">Password</label>
                        <input className={RegisterUsersApp.inputRegister__user} onChange={e => setPassword(e.target.value)} id="password" type={type} value={password} />
                        <span className={RegisterUsersApp.containerIcon__password} onClick={toShowPassword}>
                            {icon ? <CiUnread className={RegisterUsersApp.iconEye__password} /> : <CiRead className={RegisterUsersApp.iconEye__password} /> }
                        </span>
                    </div>
                    <Button 
                        nameButton="Sing up"
                    />
                </form>
            </section>
    </PageLayout>
  )
}

