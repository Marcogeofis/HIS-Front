const ENDPOINT = "http://localhost:3001/api/v1/user";


export default function searchAddmin(email){
    return fetch(`${ENDPOINT}?email=${email}`, {
        method: 'GET',
    }).then(res =>{
        if(!res.ok) throw new Error('Response is not ok')
        return res.json();
    }).then(res => {
        const data = res;
        const id = data[0].id;
        return id;
    })
}