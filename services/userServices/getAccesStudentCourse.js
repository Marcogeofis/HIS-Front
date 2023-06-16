const ENDPOINT = "http://localhost:3001/api/v1/"

export default function getAccesStudentCourse (studentId, section){
    return fetch(`${ENDPOINT}/active-students?studentId=${studentId}&blocke=${section}`, {method: 'Get'}
    ).then(res => {
        const data = res.json();
        return data;
    }).catch(err => console.error(err))
}