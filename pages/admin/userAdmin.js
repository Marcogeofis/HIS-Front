import React, { useState } from 'react'
import AddUserAdminStyles from '@/styles/AddUserAdmin.module.css'
import { Button } from '@/components/Button/Button';
import searchAddmin from '@/services/addAdmin';
import updateKey from '@/services/changeAdmin';

export default function AddUserAdmin(){
    const [ number, setNumber ] = useState('')
    const [ role, setRole ] = useState('')
    const [keyword, setKeyword] =useState('');
    const [id, setId] = useState();

    function handleKeyword(e){
        e.preventDefault();
        searchAddmin(keyword)
        .then(res => {
            const id = res;
            setId(id)
        })
    }
    function handlelocksmith(e){
        e.preventDefault();
        updateKey({number, role})
    }
    return (
        <section className={AddUserAdminStyles.containerAUAdmin}>
            <div className={AddUserAdminStyles.titleAUAdmin}>
                <p>Fill all the fields.</p>
            </div>
            <section className={AddUserAdminStyles.containerAUAdmin}>
                <form className={AddUserAdminStyles.formAUAdmin} onSubmit={handleKeyword}>
                    <div className={AddUserAdminStyles.containerInputLabel__ADAdmin}>
                        <label className={AddUserAdminStyles.labelADAdmin} htmlFor="">What do you want?</label>
                        <input className={AddUserAdminStyles.inputADAdmin} onChange={(e) => setKeyword(e.target.value)} value={keyword} />
                    </div>
                    <Button 
                        nameButton="Asking for"
                    />
                </form>
                <div className={AddUserAdminStyles.textAnswer}>
                    {<p>{id}</p>}
                </div>
            </section>
            <form onSubmit={handlelocksmith} className={AddUserAdminStyles.formAUAdmin}>
                <div className={AddUserAdminStyles.containerInputLabel__ADAdmin}>
                    <label className={AddUserAdminStyles.labelADAdmin} htmlFor="numberkey">Introduce data</label>
                    <input className={AddUserAdminStyles.inputADAdmin} onChange={(e)=> setNumber(e.target.value)} value={number} />
                </div>
                <div className={AddUserAdminStyles.containerInputLabel__ADAdmin}>
                    <label className={AddUserAdminStyles.labelADAdmin} htmlFor="key">Introduce your data</label>
                    <input className={AddUserAdminStyles.inputADAdmin} onChange={(e)=> setRole(e.target.value)} value={role} />
                </div>
                <Button 
                    nameButton="Send Data"
                />
            </form>
        </section>
    )
}