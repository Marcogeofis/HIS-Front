import React, { useState, useContext } from "react";
import Context from "@/context/userContext";
import { Button } from "@/components/Button/Button";
import { useRouter } from "next/router";
import Link from "next/link";
import paidCourseStyles from '@/styles/PaidCourse.module.css'
import upAccesStudentCourse from "@/services/teacherServices/upAccesStudentCourse";

export default function PaidCourse (){
    const router = useRouter();
    const { jwt } = useContext(Context);
    const [errorMessage, setErrorMessage] = useState('');
    const [ name, setNameUser ] = useState('');
    const [ lastName, setLastName ] = useState('')
    const [ modalidad, setModality ] = useState('')
    const [ status, setUserStatus ] = useState('')
    const [ curso, setCourse ] = useState('')
    const [ blocke, setBlocke ] = useState('')
    const [ costo, setCost ] = useState('')
    const [ descuento, setDescount ] = useState('')
    const [ claveDescuento, setkeyDescount ] = useState('')
    const [ totalCosto, setTotalCost ] = useState('')
    const [ fechaDePago, setPaymentDay ] = useState('')
    const [ inicioPeriodo, setBeginPeriod ] = useState('')
    const [ finPeriodo, setEndPeriod ] = useState('')
    const [ studentId, setStudentId] = useState('')

    const costoInteger = parseInt(costo)
    const studentIdInteger = parseInt(studentId)
    const totalCostoInteger = parseInt(totalCosto)

    const handleEnterCourse = (e) => {
        e.preventDefault()
        upAccesStudentCourse({
            name,
            lastName,
            modalidad,
            status,
            curso,
            blocke,
            costo: costoInteger,
            descuento,
            claveDescuento,
            totalCosto: totalCostoInteger,
            fechaDePago,
            inicioPeriodo,
            finPeriodo,
            studentId: studentIdInteger,
            jwt
        })
        .then(res => {
            if(res.statusCode === 400) {
                setErrorMessage(res.message)
            } else {
                router.push('/DoneWell/doneWellLoadData')
            }
        })
    }


    return (
        <section className={paidCourseStyles.containerPC}>
        <div className={paidCourseStyles.titlePC}>
            <h3>Pay course</h3>
            <Link className={paidCourseStyles.linkBack} href="/TeacherUI/teacherUI/">Back</Link>
        </div>
        <div className={paidCourseStyles.instructionsPC}>
            <p className={paidCourseStyles.textPC}>Register user who pay course.</p>
        </div>
        <form className={paidCourseStyles.formPC} onSubmit={handleEnterCourse}>
            <div className={paidCourseStyles.containerInputLabel__PC}>
                <label className={paidCourseStyles.labelPC} htmlFor="userID">User Id</label>
                <input className={paidCourseStyles.inputPC} onChange={(e)=>setStudentId(e.target.value)} id="userID" text="type" value={studentId} />
            </div>
            <div className={paidCourseStyles.containerInputLabel__PC}>
                <label className={paidCourseStyles.labelPC} htmlFor="Name">Name</label>
                <input className={paidCourseStyles.inputPC} onChange={(e)=>setNameUser(e.target.value)} id="Name" text="type" value={name.toLowerCase()} />
            </div>
            <div className={paidCourseStyles.containerInputLabel__PC}>
                <label className={paidCourseStyles.labelPC} htmlFor="LastName">LastName</label>
                <input className={paidCourseStyles.inputPC} onChange={(e)=>setLastName(e.target.value)} id="LastName" text="type" value={lastName.toLowerCase()} />
            </div>
            <div className={paidCourseStyles.containerInputLabel__PC}>
                <label className={paidCourseStyles.labelPC} htmlFor="Modalidad">Modality</label>
                <input className={paidCourseStyles.inputPC} onChange={(e)=>setModality(e.target.value)} id="Modalidad" text="type" value={modalidad.toLowerCase()} />
            </div>
            <div className={paidCourseStyles.containerInputLabel__PC}>
                <label className={paidCourseStyles.labelPC} htmlFor="Status">Status</label>
                <input className={paidCourseStyles.inputPC} onChange={(e)=>setUserStatus(e.target.value)} id="Status" text="type" value={status.toLowerCase()} />
            </div>
            <div className={paidCourseStyles.containerInputLabel__PC}>
                <label className={paidCourseStyles.labelPC} htmlFor="curso">Course</label>
                <input className={paidCourseStyles.inputPC} onChange={(e)=>setCourse(e.target.value)} id="curso" text="type" value={curso} />
            </div>
            <div className={paidCourseStyles.containerInputLabel__PC}>
                <label className={paidCourseStyles.labelPC} htmlFor="Blocke">Block</label>
                <input className={paidCourseStyles.inputPC} onChange={(e)=>setBlocke(e.target.value)} id="Blocke" text="type" value={blocke} />
            </div>
            <div className={paidCourseStyles.containerInputLabel__PC}>
                <label className={paidCourseStyles.labelPC} htmlFor="Costo">Cost</label>
                <input className={paidCourseStyles.inputPC} onChange={(e)=>setCost(e.target.value)} id="Costo" text="type" value={costo} />
            </div>
            <div className={paidCourseStyles.containerInputLabel__PC}>
                <label className={paidCourseStyles.labelPC} htmlFor="Discount">Discount</label>
                <input className={paidCourseStyles.inputPC} onChange={(e)=>setDescount(e.target.value)} id="Discount" text="type" value={descuento} />
            </div>
            <div className={paidCourseStyles.containerInputLabel__PC}>
                <label className={paidCourseStyles.labelPC} htmlFor="key_Discount">Key Discount</label>
                <input className={paidCourseStyles.inputPC} onChange={(e)=>setkeyDescount(e.target.value)} id="key_Discount" text="type" value={claveDescuento.toLowerCase()} />
            </div>
            <div className={paidCourseStyles.containerInputLabel__PC}>
                <label className={paidCourseStyles.labelPC} htmlFor="Total_cost">Total cost</label>
                <input className={paidCourseStyles.inputPC} onChange={(e)=>setTotalCost(e.target.value)} id="Total_cost" text="type" value={totalCosto} />
            </div>
            <div className={paidCourseStyles.containerInputLabel__PC}>
                <label className={paidCourseStyles.labelPC} htmlFor="Payment_date">Payment date</label>
                <input className={paidCourseStyles.inputPC} onChange={(e)=>setPaymentDay(e.target.value)} id="Payment_date" text="type" value={fechaDePago.toLowerCase()} />
            </div>
            <div className={paidCourseStyles.containerInputLabel__PC}>
                <label className={paidCourseStyles.labelPC} htmlFor="StartPeriod">Start of period</label>
                <input className={paidCourseStyles.inputPC} onChange={(e)=>setBeginPeriod(e.target.value)} id="StartPeriod" text="type" value={inicioPeriodo.toLowerCase()} />
            </div>
            <div className={paidCourseStyles.containerInputLabel__PC}>
                <label className={paidCourseStyles.labelPC} htmlFor="finPeriod">End of period</label>
                <input className={paidCourseStyles.inputPC} onChange={(e)=>setEndPeriod(e.target.value)} id="finPeriod" text="type" value={finPeriodo.toLowerCase()} />
            </div>
            <Button nameButton="Enter"/>
        </form>
        <div>
            {errorMessage}
        </div>
    </section>
    );
}
