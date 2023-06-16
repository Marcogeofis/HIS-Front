const ENDPOINT = "http://localhost:3001/api/v1/";


export default function updateKey({number, role}){
    return fetch(`${ENDPOINT}user/${number}`, { 
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ role })
    }).then(res => {
        if(!res.ok) throw new Error('Response is not ok')
        return res.json();
    }).then(res => {
        console.log('done');
    })
}