const ENDPOINT = "http://localhost:3001/api/v1/"

export default function upAccesStudentCourse ({
    name,
    lastName,
    modalidad,
    status,
    curso,
    blocke,
    costo,
    descuento,
    claveDescuento,
    totalCosto,
    fechaDePago,
    inicioPeriodo,
    finPeriodo,
    studentId,
    jwt
}){
    const Bearer = `Bearer ${jwt}`;
    return fetch(`${ENDPOINT}/active-students`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": Bearer,
        },
        body: JSON.stringify({
            name,
            lastName,
            modalidad,
            status,
            curso,
            blocke,
            costo,
            descuento,
            claveDescuento,
            totalCosto,
            fechaDePago,
            inicioPeriodo,
            finPeriodo,
            studentId,
        })
    }).then(res => {
        const data = res.json();
        return data;
    }).catch(err => console.error(err))
}