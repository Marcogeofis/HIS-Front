const ENDPOINT = 'http://localhost:3001/api/v1'

export default function upLoadTeacherData({
    age,
    phone,
    goal,
    userId,
    jwt
}){
    const Bearer = `Bearer ${jwt}`;
    const id = String(userId)
    return fetch(`${ENDPOINT}/student/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            "Authorization": Bearer,
        },
        body: JSON.stringify({
            age,
            phone,
            goal,
            userId,
        })
    }).then(res=>{
        if(!res.ok) throw new Error('Response is not ok')
        return res.json();
    })
}