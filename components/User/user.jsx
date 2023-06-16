import React, { useEffect, useState } from "react";
import Image from "next/image";
import { LoginSession } from "../LoginSession/loginSession";
import useHisUser from "@/hook/useHIS";
import getUserHIS from "@/services/userServices/getUserCountHis";
import Link from "next/link";
import userInfoStyle from '@/styles/UserInfo.module.css'


function User (){

    const {userHis} = useHisUser()
    const [ countUser, setCountUser ] = useState('');


    useEffect(() => {
        getUserHIS({userHis})
        .then(res => {
            const { id, name, goal } = res;
            const data = {
                numList: id,
                userName: name,
                goal: goal,
            }
            setCountUser(data);
        }) 
    },[userHis])

    return(
        <section className={userInfoStyle.containerUserInfo}>
            <section className={userInfoStyle.userApp__HIS}>
                <figure className={userInfoStyle.backgroundUser__app}>
                    <img className={userInfoStyle.backgroundImage__HIS} src="https://i.imgur.com/dLu2W5x.png" alt="background" />
                </figure>
                <div className={userInfoStyle.containerUserPhoto}>
                    <img
                        className={userInfoStyle.userPhoto}
                        src={"https://i.imgur.com/iKAywhE.png"}
                        alt="user photo"
                    />
                </div>
            </section>
            <section className={userInfoStyle.containerUserData}>
                <p className={userInfoStyle.userData}>{countUser.userName}</p>
                <p className={userInfoStyle.userData}> <span>Id: </span>{countUser.numList}</p>
                <p className={userInfoStyle.userData}> <span>Mi objetivo: </span>{countUser.goal}</p>
            </section>
            <div className={userInfoStyle.containerLogin__session}>
                <LoginSession />
            </div>
            <div className={userInfoStyle.goalUser}>
                <Link className={userInfoStyle.linkEditGoal} href="/UserUI/user-activities/editProfile">Editar Perfil</Link>
            </div>
        </section>
    )
}

export { User }

