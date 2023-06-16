const ENDPOINT = "http://localhost:3001/api/v1";

export default function scheduleClass({
    nivel,
    seccion,
    teacherId,
    teacherName,
    periodo,
    clasesEnVivo,
    horario,
    dayExam,
    hourExam,
    jwt
}){
    const Bearer = `Bearer ${jwt}`
    return fetch(`${ENDPOINT}/class-of-course`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": Bearer
        },
        body: JSON.stringify({
            nivel,
            seccion,
            teacherId,
            teacherName,
            periodo,
            clasesEnVivo,
            horario,
            dayExam,
            hourExam
        }),
    }).then(res =>{
        if(!res.ok) throw new Error('Response is not ok')
        return res.json();
    })
}
