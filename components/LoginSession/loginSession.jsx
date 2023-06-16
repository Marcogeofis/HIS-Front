import React from 'react'
import { useRouter } from 'next/router'
import useHisUser from '@/hook/useHIS'
import loginSessionStyles from '@/styles/LoginSession.module.css'

function LoginSession () {
    const {isLogged, logout} = useHisUser()
    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault()
        logout()
        router.push("/Login/login")
    }

    return(
        <div className={loginSessionStyles.containerSession}>
            {
                isLogged ?
                    <span className={loginSessionStyles.linkSession} onClick={handleClick}>
                        Logout
                    </span> :
                    ''
            }
        </div>
    );
}

export { LoginSession };