import React, { useState, useContext, useEffect } from 'react'
import Link from 'next/link';
import upDateProfile from '@/services/userServices/upDateProfileUser';
import getUserId from '@/services/userServices/getUserId';
import useHisUser from '@/hook/useHIS';
import editProfileStyles from '@/styles/EditProfile.module.css';
import { Button } from '@/components/Button/Button';

export default function EditProfile () {
    const { jwt } = useContext(Context);
    const { userHis} = useHisUser()
    const [ countid, setCountId ] = useState('');
    const [ myAge, setMyage ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ goal, setGoal ] = useState('');
    const userId = countid.numList;
    const age = Number(myAge)
    
    useEffect(()=>{
        getUserId(userHis)
        .then(res => {
            const { id, name, age, phone, goal } = res;
            const data = {
                numList: id,
                userName: name,
                age: age,
                phone: phone,
                goal: goal
            }
            setCountId(data);
        })
    },[userHis]);

    const handleUpdatePorfile = (e) =>{
        e.preventDefault();
        upDateProfile({ age, phone, goal, userId, jwt })
    }

    return (
        <div className={editProfileStyles.containerEditPU}>
            <div className={editProfileStyles.titleEditPU}>
                <h3>Mi Perfil</h3>
                <Link className={editProfileStyles.linkBack} href="/UserUI/userUI">Back</Link>
            </div>
            <div className={editProfileStyles.instructionsEditPU}>
                <p className={editProfileStyles.textEditPU}>Por favor completa tu perfil.</p>
            </div>
            <form className={editProfileStyles.formEditPU} onSubmit={handleUpdatePorfile}>
                <div className={editProfileStyles.containerInputLabel__EditPU}>
                    <label className={editProfileStyles.labelEditPU} htmlFor="age">Edad</label>
                    <input className={editProfileStyles.inputEditPU} type="text" onChange={(e) =>setMyage(e.target.value)} id="age" value={myAge} />
                </div>
                <div className={editProfileStyles.containerInputLabel__EditPU}>
                    <label className={editProfileStyles.labelEditPU} htmlFor="phone">Teléfono</label>
                    <input className={editProfileStyles.inputEditPU} type="text" onChange={(e) =>setPhone(e.target.value)} id="phone" value={phone} />
                </div>
                <div className={editProfileStyles.containerInputLabel__EditPU}>
                    <label className={editProfileStyles.labelEditPU} htmlFor="goal">Tú objetivo</label>
                    <input className={editProfileStyles.inputEditPU} type="text" onChange={(e) =>setGoal(e.target.value)} id="goal" value={goal} />
                </div>
                <Button nameButton="Enter" />
            </form>
            <div className={editProfileStyles.userdata}>
                <h4>Datos actualizados</h4>
                <p className={editProfileStyles.textUserData}>Nombre:{countid.userName}</p>
                <p className={editProfileStyles.textUserData}>No. Lista: {countid.numList}</p>
                <p className={editProfileStyles.textUserData}>Edad: {countid.age}</p>
                <p className={editProfileStyles.textUserData}>Teléfono: {countid.phone}</p>
                <p className={editProfileStyles.textUserData}>Mi objetivo: {countid.goal}</p>
            </div>
        </div>
    );
}

