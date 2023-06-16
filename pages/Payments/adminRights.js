import React, {useState, useContext} from 'react'
import { useRouter } from "next/router"
import askForRoleTeacher from '@/services/teacherServices/askForRoleTeacher'
import Context from '@/context/userContext'
import config from '@/config/config'
import AdminProcessesStyles from '@/styles/AdminProcesses.module.css'

export default function AdminProcesses (){
    const router = useRouter()
    const [ permission, setPermission ] = useState(true);
    const {jwt, userHis} = useContext(Context)

    const handleAuth = async () => {
        const data = await askForRoleTeacher({userHis, jwt});
        const auth = data.role
        if (auth === config.keyRole){
            console.log('tienes acceso')
            router.push("/Payments/adminProcesses/paidCourseUser/paidCourse")
        } else {
            setPermission(false)
            console.log("no tienes acceso")
        }
    }

    return (
        <section className={AdminProcessesStyles.containerAdminP}>
            <div className={AdminProcessesStyles.containerTitle}>
                <h3>Habla Seguro Inglés</h3>
            </div>
            <div className={AdminProcessesStyles.containerButton}>
                <p className={AdminProcessesStyles.textAdminP}>Authorized personal only</p>
                <button className={AdminProcessesStyles.buttonActive} onClick={handleAuth}> 
                    Enter
                </button>
            </div>
            <div className={AdminProcessesStyles.containerAdminP}>
                {!permission && <p>You don´t have permission</p>}
            </div>
        </section>
    )
}