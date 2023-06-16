import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { CiRead, CiUnread } from 'react-icons/ci';
import { PageLayout } from '@/components/Pagelayout/PageLayout';
import { Button } from '@/components/Button/Button';
import { LogoHIS } from '@/components/LogoHIS/LogoHIS';
import { useRouter } from 'next/router';
import useHisUser from '@/hook/useHIS';
import LoginStyles from '@/styles/Login.module.css';



export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ icon, setIcon ] = useState(true);
  const [ type, setType ] = useState('password');
  const [ errorCredentials, setErrorCredentials ] = useState(true)
  const { login, isLoginLoading, hasLoginError, isLogged } = useHisUser();
  const router = useRouter()

  function handleLogin(e){
    e.preventDefault();
    login({email, password})
    if(!isLogged){
      console.log('error')
    }else {
      router.push('/UserUI/userUI')
    }
   
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
    <PageLayout title='HIS - Login'>
        <div className={LoginStyles.containerLogin}>
            <LogoHIS />
            <p className={LoginStyles.textSesion}>Bienvenido, inicia sesión si ya tienes cuenta. Si aun no tienes cuenta registrate<Link className={LoginStyles.linkSignin} href="/Register/register"> aquí.</Link></p>
            {isLoginLoading && <strong className={LoginStyles.chekingCredential}>Checking credentials..</strong>}
            {!isLoginLoading && <form className={LoginStyles.formLogin} onSubmit={handleLogin}>
                <div className={LoginStyles.containerLogin__user}>
                    <label className={LoginStyles.labelLogin__user} htmlFor="email">Correo</label>
                    <input
                        className={LoginStyles.inputLogin__user}
                        id="email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className={LoginStyles.containerLogin__user}>
                    <label className={LoginStyles.labelLogin__user} htmlFor="password-user">Password</label>
                    <input
                        className={LoginStyles.inputLogin__user}
                        id="password-user"
                        onChange={e => setPassword(e.target.value)}
                        type={type}
                        value={password}
                    />
                    <span className={LoginStyles.containerIcon__password} onClick={toShowPassword}>
                        {icon ? <CiUnread className={LoginStyles.iconEye__password} /> : <CiRead className={LoginStyles.iconEye__password} /> }
                    </span>
                </div>
                <div className={LoginStyles.recoveryPassword}>
                    <Link className={LoginStyles.reqRecovery_password} href="/recovery-password">Olvidaste tu contraseña</Link>
                </div>
                <Button
                  nameButton="Iniciar Sesión"
                />
            </form>
            }
        {hasLoginError && <strong className={LoginStyles.invalidCredential}>Error, verify your password and mail.</strong>}
        </div>
    </PageLayout>
  )
}