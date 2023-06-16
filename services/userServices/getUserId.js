const ENDPOINT = "http://localhost:3001/api/v1";


export default function getUserId(id){

    return fetch(`${ENDPOINT}/student/${id}`, {
        method: 'GET',
    }).then(res =>{
        if(!res.ok) throw new Error('Response is not ok')
        return res.json();
    }).then(res => {
        const user = res
        return user;
    })
}