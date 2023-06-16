import React, { useState } from 'react'
import Link from 'next/link'
import { CiRead, CiUnread } from 'react-icons/ci';
import { PageLayout } from '@/components/Pagelayout/PageLayout';
import { Button } from '@/components/Button/Button'
import { LogoHIS } from '@/components/LogoHIS/LogoHIS';
import useHisUser from '@/hook/useHIS';
import { useRouter } from 'next/router';
import LoginStyles from '@/styles/Login.module.css'

export default function LoginTeacher() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ icon, setIcon ] = useState(true);
  const [ type, setType ] = useState('password');
  const { login, isLoginLoading, hasLoginError, isLogged } = useHisUser();
  const router = useRouter()

  function handleLogin(e){
    e.preventDefault();
    login({email, password})
    if(isLogged){
        router.push('/TeacherUI/teacherUI')
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
    <PageLayout title='HIS - Login teacher'>
        <div className={LoginStyles.containerLogin}>
            <LogoHIS />
            <p className={LoginStyles.textSesion}>Work together to change our present. Remember your knowledge is the food for our students<Link className={LoginStyles.linkSignin} href="/Register/register"></Link></p>
            <form className={LoginStyles.formLogin} onSubmit={handleLogin}>
                <div className={LoginStyles.containerLogin__user}>
                    <label className={LoginStyles.labelLogin__user} htmlFor="email">Email</label>
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
                    <Link className={LoginStyles.reqRecovery_password} href="/recovery-password">Forgot Password</Link>
                </div>
                <Button 
                  nameButton="Login"
                />
            </form>
        </div>
    </PageLayout>
  )
}
