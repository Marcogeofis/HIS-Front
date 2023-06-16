import Link from "next/link";
import teacherListStyles from '@/styles/TeacherList.module.css'
import { MyTeacherSchedule } from "@/components/User/myTeacherSchedule";
import getAllTeachers from "@/services/userServices/getListOfMyTeachers";

export default function TeacherList ({data}) {
    console.log(data)
    return (
        <div className={teacherListStyles.containerTeachersList}>
            <div className={teacherListStyles.containerTitle__TL}>
                <h3 className={teacherListStyles.titleTL}>Teachers</h3>
                <Link className={teacherListStyles.linkBack__user} href="/UserUI/userUI">Back</Link>
            </div>
            <div className={teacherListStyles.teachersList__description}>
                <p className={teacherListStyles.tListInfo}>Puedes escojer con que profesor tomaras tus clases en vivo para practicar lo que has aprendido.</p>
                <p className={teacherListStyles.tListInfo}>Revisa en que turno está disponible el profesor e inscibete. Recuerda que el cupo es limitado, así podemos darte una mejor atención</p>
            </div>
            <div className={teacherListStyles.listOfTeachers}>
                {data.map(res => {
                return <MyTeacherSchedule
                    key={res.id}
                    id={res.id}
                    name={res.name}
                    lastName={res.lastName}
                    email={res.email}
                    start={res.start}
                    end={res.end}
                />
                })}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    try {
        const data = await getAllTeachers();
        console.log(data)
        return {
            props: { data: data, }
        }
    } catch (error) {
        console.log(error)
        return {
            props: {}
        }
    }
}

